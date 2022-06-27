// firebase
const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key.json');
const firebaseAdminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://personal-color-62f62-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'personal-color-62f62'
});
const { getAuth } = require('firebase-admin/auth');
const axios = require('axios');

// express
const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.post('/auth-token', function (req, res) {
  const idToken = req.body.idToken;
  // TODO: 공식문서 보고 idToken을 파이어베이스 서버로 보내서 검증
  getAuth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      res.send(uid);
    })
    .catch((error) => {
        res.send(error)
    });
});

// 카카오
app.post('/kakao', (req, res) => {

  try {
    let authorizeCodeFromKakao = req.body.authorizeCodeFromKakao
    console.log(authorizeCodeFromKakao)
  
    const body = {
      grant_type: "authorization_code",
      client_id: "b0366d0691519fea27e846b0248f999f",
      redirect_uri: "http://localhost:3000",
      code: authorizeCodeFromKakao
    }
    
    const queryStringBody = Object.keys(body)
      .map(string => encodeURIComponent(string) + "=" + encodeURI(body[string]))
      .join("&")
    
  
    axios.post("https://kauth.kakao.com/oauth/token",{
      headers: {
        'content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
      },
      body : queryStringBody
    })
      .then((kakaoAccessToken) => {
        // console.log(kakaoAccessToken)
        console.log(kakaoAccessToken.access_token)
        // {access_token: 'lPXoAWJgL-899s0qa2iQna0CsUAbJbYTBU-uggKxCj11mwAAAYGgmRa5', token_type: 'bearer', refresh_token: '0VHKcaAdpavWotbfHjDk9nkiBDu7sTcrZp3YNjFPCj11mwAAAYGgmRa3', id_token: 'eyJraWQiOiI5ZjI1MmRhZGQ1ZjIzM2Y5M2QyZmE1MjhkMTJmZW…wNovUC0AEwlQ6rqBe2OYDDdmM21ihIlDFjHoMyatkBQz_Mj1w', expires_in: 21599, …}
        // TODO: 이제 액세스 토큰을 받아왔으니 뭘해야하지?
        
        // TODO: 카카오에서 REST API 사용자 정보 가져오기
  
        axios.get('https://kapi.kakao.com/v2/user/me', {
          headers: {
            'Authorization': `Bearer ${kakaoAccessToken.access_token}`,
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
        .then((data) => {
          console.log(data)
        })
  
        })
  } catch(err) {
    console.log(err)
  }

})


app.listen(port, () => {
  console.log(`personal color app listening on port ${port}`);
});
