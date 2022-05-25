import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import axios from 'axios';

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

const app = firebase.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();

export const auth = getAuth();

export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// DB 설정
export const database = getDatabase(app);

export const writeUserData = (userId, name, email) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email
  });
};

const dbRef = ref(getDatabase());
export const getUserData = (userId) => {
  return get(child(dbRef, `users/${userId}`))
};


// TODO: 로그인 유지

export const verifyTokenFromFirebase = () => {
  
  getAuth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
    // Send token to your backend via HTTPS
    // TODO: https 설정
    if(idToken) {
      axios({
        method: 'post',
        url: 'http://localhost:4000/auth-token',
        data: {
          "idToken": idToken
        }
      })
      .then(result => {
        if(result.status === 200) {
          let tokenUid = result.data
          return tokenUid
        }
      })
    }
  }).catch(function(error) {
    // Handle error
    console.log(error)
    console.log("토큰이 올바르지 않습니다.")
  });
}