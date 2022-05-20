import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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

const auth = getAuth();

export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
