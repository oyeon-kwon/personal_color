/* eslint-disable no-restricted-globals */

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

// 빌드 프로세스에서 생성된 모든 자산을 사전 캐시
// 해당 URL은 아래 manifest 변수에 삽입
// 이 변수는 서비스 워커 파일 어딘가에 있어야 한다.
precacheAndRoute(self.__WB_MANIFEST);

// 모든 탐색 요청이 완료되도록 App Shell 스타일 라우팅을 설정
// index.html 쉘로 충족
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(
  // index.html에 의해 이행되는 요청을 제외하려면 false를 반환
  ({ request, url }) => {
    // 네비게이션 모드가 아니면, 스킵
    if (request.mode !== "navigate") {
      return false;
    } // url이 /_ 으로 시작하지 않으면, 스킵

    if (url.pathname.startsWith("/_")) {
      return false;
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      // 파일 확장자가 포함되어 있어 리소스의 URL처럼 보이는 경우, 스킵
      return false;
    }
    // 나머지의 경우에 있어서 true 리턴
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html")
);

// 처리되지 않는 요청에 대한 런타임 캐싱 경로의 예
// precache, 사전 캐시(이 경우 public/의 요청과 같은 동일 출처 .png 요청)
registerRoute(
  // 필요에 따라 다른 파일 확장자 또는 라우팅 기준을 추가
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".png"), // 필요에 따라 변경 (예: CacheFirst로 변경).
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // 이 런타임 캐시가 최대 크기에 도달하면 가장 최근에 사용한 이미지 제거
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
