# 나의 퍼스널 컬러를 Colordentity 에서 손쉽게 진단하세요!

## Project 소개
퍼스널 컬러란 사람의 피부톤과 가장 잘 어울리는 색상을 찾는 색채학 이론입니다.
피부톤에 어울리는 색을 웜톤, 쿨톤 혹은 봄, 여름, 가을, 겨울로 나누어 부르며 어떤 색조 화장품이나 어떤 색상의 옷이 잘 어울리는지 찾기 위해 주로 사용하는 방법입니다.

Colordentity는 간편하게 본인의 퍼스널 컬러를 진단할 수 있는 웹 앱입니다.

## 배포 링크
[Colordentity 바로가기](https://personal-color-62f62.web.app/)

## 주요 기능 미리보기
### 수동으로 내 컬러 진단하기
![landingSecondGIF](https://user-images.githubusercontent.com/61301574/184644968-7632483c-304e-4734-8130-ecb1e27051d6.gif)
촬영한 사진으로 여러가지 컬러칩들을 스스로 대조해 본인의 퍼스널 컬러를 찾을 수 있는 기능입니다.


### 자동으로 내 컬러 진단하기
![landingThirdGIF](https://user-images.githubusercontent.com/61301574/184644986-e6b1fcb3-6fbd-49df-b65f-38e6bad04a95.gif)
Google Teachable Machine을 통해 학습한 AI 모델을 토대로 본인의 퍼스널 컬러를 찾을 수 있는 기능입니다.


### 커뮤니티 게시판
![landingFourthGIF](https://user-images.githubusercontent.com/61301574/184644994-6bfdc690-1247-455a-957b-6394aca8abb3.gif)
퍼스널 컬러 관련 질문이나 정보를 유저들과 함께 공유할 수 있는 커뮤니티 게시판입니다.


## 세부 기능 기술
* Google Teachable Machine
* 파이어베이스 실시간 데이터 베이스 활용
* 리액트 라우터
* 카카오 로그인을 위한 AWS EC2 서버 활용
* 기타 기능 추가
* 기능과 함께 작성한 코드를 링크로 첨부하기

## STACK
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
 
## Prerequisite
### 클라이언트
```
cd client
npm install
npm start
```
### 서버
```
cd server
npm install
npm start
```

## 프로젝트를 진행하며 작성한 블로그 포스트
* [firebase에 이미지 저장하기](https://o-yeon.tistory.com/199)