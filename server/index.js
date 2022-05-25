// firebase
const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key.json');
const firebaseAdminApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://personal-color-62f62-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'personal-color-62f62'
});
const { getAuth } = require('firebase-admin/auth');

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

app.listen(port, () => {
  console.log(`personal color app listening on port ${port}`);
});
