// firebase
// const admin = require('firebase-admin');
// const serviceAccount = require('./service-account-key.json');
// const firebaseAdminApp = admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://personal-color-62f62-default-rtdb.asia-southeast1.firebasedatabase.app',
//   projectId: 'personal-color-62f62'
// });
// const { getAuth } = require('firebase-admin/auth');
const axios = require('axios');
require('dotenv').config();

// express
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');


app.use(express.json());
app.use(cors());
// app.post('/auth-token', function (req, res) {
//   const idToken = req.body.idToken;
//   // TODO: 공식문서 보고 idToken을 파이어베이스 서버로 보내서 검증
//   getAuth()
//     .verifyIdToken(idToken)
//     .then((decodedToken) => {
//       const uid = decodedToken.uid;
//       console.log(uid)
//       res.send(uid);
//     })
//     .catch((error) => {
//         res.send(error)
//     });
// });

// 카카오
app.post('/kakao', (req, res) => {

    let authorizeCodeFromKakao = req.body.authorizeCodeFromKakao

    const body = {
      grant_type: "authorization_code",
      client_id: process.env.kakaoClientId,
      redirect_uri: "http://localhost:3000",
      code: authorizeCodeFromKakao
    }

    const queryStringBody = Object.keys(body)
      .map(string => encodeURIComponent(string) + "=" + encodeURI(body[string]))
      .join("&")
    
      try {
        axios.post('https://kauth.kakao.com/oauth/token', queryStringBody, {
          headers: {
            'content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
        // 액세스 토큰 받아오기
        .then((kakaoAccessToken) => {
          // 카카오에서 REST API 사용자 정보 가져오기
          axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
              'Authorization': `Bearer ${kakaoAccessToken.data.access_token}`,
              'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          })
          .then((kakaoUserData) => {
            res.send(kakaoUserData.data)
          })
        })
      } catch (err) {
        console.log(err)
      }
      
})

app.listen(port, () => {
  console.log(`personal color app listening on port ${port}`);
});
