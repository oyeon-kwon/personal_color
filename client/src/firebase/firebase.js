import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification } from 'firebase/auth';
import { getDatabase, ref, set, child, get, push, update, onValue, query, equalTo, orderByChild, orderByValue } from 'firebase/database';
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
  // TODO: displayName, tone 정보 넣기
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    userId: userId,
    username: name,
    email: email
  });
};

export const writeUserColorData = async (userId, color) => {
  const db = getDatabase();

  const userRef = ref(db, 'users/');

  await onValue(userRef, (snapshot) => {
    const users = snapshot.val();
    const user = users[userId];

    const updateUserData = {
      ...user,
      color: color
    };
    set(ref(db, 'users/' + userId), updateUserData);

  }, {
    onlyOnce: true
  });
};

export const getUserData = (userId) => {
  return get(child(dbRef, `users/${userId}`));
};

export const getCurrentLoggedInUser = async () => {

  let userInfo;

  if (auth.currentUser) {
    await get(child(dbRef, `users/${auth.currentUser.uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
        userInfo = snapshot.val();
      } else {
        console.log('No data available');
      }
    }).catch((error) => {
      console.log(error);
    });
  
  } else {
    return null;
  }
  return userInfo;
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

export const signout = () => {
  signOut(auth).then(() => {
    console.log('로그아웃 성공');
  }).catch((error) => {
    console.log(error);
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

export const getAllPostsData = async () => {
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

export const getFilteredByCategoryPostsData = async (category) => {
  let allPostData;
  const filteredByCategoryPost = [];

  await get(child(dbRef, 'posts/')).then((snapshot) => {
    if (snapshot.exists()) {
      allPostData = snapshot.val();
    } else {
      console.log('No data available');
    }
  }).catch((error) => {
    console.log(error);
  });

  for (const key in allPostData) {
    if (allPostData[key].category === category) {
      filteredByCategoryPost.push(allPostData[key]);
    }
  }

  return filteredByCategoryPost;
};

export const getPostData = async (id) => {
  let postData;

  await get(child(dbRef, 'posts/')).then((snapshot) => {
    if (snapshot.exists()) {
      postData = snapshot.val();
    } else {
      console.log('No data available');
    }
  }).catch((error) => {
    console.error(error);
  });
  // console.log(postData[id])
  return postData[id];
};

export const writeCommentData = async (postId, commentUser, commentInput) => {
  const db = getDatabase();

  const postRef = ref(db, 'posts/');

  await onValue(postRef, (snapshot) => {
    const posts = snapshot.val();
    const post = posts[postId];

    if (post.comment === undefined) {
      const newPost = {
        ...post,
        comment: [{
          commentUser: commentUser,
          commentInput: commentInput
        }]
      };
      set(ref(db, 'posts/' + postId), newPost);
    } else {
      post.comment.unshift({
        commentUser: commentUser,
        commentInput: commentInput
      });

      const newPost = {
        ...post,
        comment: post.comment
      };
      set(ref(db, 'posts/' + postId), newPost);
    }
  }, {
    onlyOnce: true
  });
};
