import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";

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

export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// DB 설정
export const database = getDatabase(app);

export const writeUserData = (userId, name, email, accessToken) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    accessToken: accessToken
  });
}
