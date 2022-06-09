import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, child, get, push } from 'firebase/database';
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

export const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = firebase.storage();

export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//! Realtime DB 설정
// 회원가입
// TODO: 회원 탈퇴 기능 만들기
export const database = getDatabase(app);
const dbRef = ref(getDatabase());

export const writeUserData = (userId, name, email) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email
  });
};

export const getUserData = (userId) => {
  return get(child(dbRef, `users/${userId}`));
};

// TODO: verifyTokenFromFirebase 함수가 유효하면 로그인 유지 되게 설정

export const verifyTokenFromFirebase = () => {
  getAuth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
    // Send token to your backend via HTTPS
    // TODO: https 설정
    if (idToken) {
      axios({
        method: 'post',
        url: 'http://localhost:4000/auth-token',
        data: {
          idToken: idToken
        }
      })
        .then(result => {
          if (result.status === 200) {
            const tokenUid = result.data;
            return tokenUid;
          }
        });
    }
  }).catch(function (error) {
    // Handle error
    console.log(error);
    console.log('토큰이 올바르지 않습니다.');
  });
};

// ! Real time Database 설정
// 커뮤니티 게시판

export const writePostData = (userId, title, content, image, category) => {
  const db = getDatabase();

  const now = new Date();

  const postListRef = ref(db, 'posts');
  const newPostRef = push(postListRef);
  set(newPostRef, {
    userId: userId,
    title: title,
    content: content,
    image: image,
    category: category,
    createdAt: now.toLocaleDateString(),
    comment: []
  });
};

export const getPostData = async () => {
  let postsData;

  await get(child(dbRef, 'posts/')).then((snapshot) => {
    if (snapshot.exists()) {
      postsData = snapshot.val();
    } else {
      console.log('No data available');
    }
  }).catch((error) => {
    console.error(error);
  });

  return postsData;
};
