import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
  update,
  onValue,
  remove,
} from "firebase/database";
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
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
export const database = getDatabase(app);
const dbRef = ref(getDatabase());

export const writeUserData = (userId, name, gender, email) => {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    userId: userId,
    username: name,
    gender: gender,
    email: email,
  });
};

export const writeUserColorData = async (userId, color) => {
  const db = getDatabase();

  const userRef = ref(db, "users/");

  await onValue(
    userRef,
    (snapshot) => {
      const users = snapshot.val();
      const user = users[userId];

      const updateUserData = {
        ...user,
        color: color,
      };
      set(ref(db, "users/" + userId), updateUserData);
    },
    {
      onlyOnce: true,
    }
  );
};

export const writeUserImageData = async (userId, image) => {
  const db = getDatabase();

  const userRef = ref(db, "users/");

  await onValue(
    userRef,
    (snapshot) => {
      const users = snapshot.val();
      const user = users[userId];

      const updateUserData = {
        ...user,
        image: image,
      };
      set(ref(db, "users/" + userId), updateUserData);
    },
    {
      onlyOnce: true,
    }
  );
};

export const getUserData = (userId) => {
  return get(child(dbRef, `users/${userId}`));
};

export const getCurrentLoggedInUser = async () => {
  let userInfo;

  if (auth.currentUser) {
    await get(child(dbRef, `users/${auth.currentUser.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          userInfo = snapshot.val();
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    return null;
  }
  return userInfo;
};

export const deleteUserHandler = () => {
  const user = auth.currentUser;
  console.log(user);
  deleteUser(user)
    .then(() => {
      alert("탈퇴가 완료되었습니다.");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signout = () => {
  signOut(auth)
    .then(() => {
      console.log("로그아웃 성공");
    })
    .catch((error) => {
      console.log(error);
    });
};

// ! Real time Database 설정
// 커뮤니티 게시판

export const writePostData = (
  userId,
  username,
  title,
  content,
  image,
  category
) => {
  const db = getDatabase();

  const now = new Date();

  const postListRef = ref(db, "posts");
  const newPostRef = push(postListRef);

  set(newPostRef, {
    userId: userId,
    username: username,
    title: title,
    content: content,
    image: image,
    category: category,
    createdAt: now.toLocaleDateString(),
    comment: [],
  });
};

export const getAllPostsData = async () => {
  let postsData;

  await get(child(dbRef, "posts/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        postsData = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return postsData;
};

export const deletePostData = async (postId) => {
  const db = getDatabase();

  remove(ref(db, "posts/" + postId))
    .then(() => {
      alert("삭제되었습니다.");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editPostData = async (
  postId,
  userId,
  username,
  title,
  content,
  image,
  category,
  createdAt
) => {
  const db = getDatabase();

  set(ref(db, "posts/" + postId), {
    userId: userId,
    username: username,
    title: title,
    content: content,
    image: image,
    category: category,
    createdAt: createdAt,
  });
};

export const getFilteredByCategoryPostsData = async (category) => {
  let allPostData;
  const filteredByCategoryPost = [];

  await get(child(dbRef, "posts/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        allPostData = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.log(error);
    });

  for (const key in allPostData) {
    if (allPostData[key].category === category) {
      const filteredPostObject = {
        id: key,
        ...allPostData[key],
      };
      filteredByCategoryPost.push(filteredPostObject);
    }
  }

  return filteredByCategoryPost;
};

export const getPostData = async (id) => {
  let postData;

  await get(child(dbRef, "posts/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        postData = snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  // console.log(postData[id])
  return postData[id];
};

export const writeCommentData = async (
  postId,
  commentUserId,
  commentUser,
  commentInput
) => {
  const db = getDatabase();

  const postRef = ref(db, "posts/");
  const now = new Date();

  await onValue(
    postRef,
    (snapshot) => {
      const posts = snapshot.val();
      const post = posts[postId];

      if (post.comment === undefined) {
        const newPost = {
          ...post,
          comment: [
            {
              commentId: postId + "-commentNumber-0",
              commentUserId: commentUserId,
              commentUser: commentUser,
              commentInput: commentInput,
              createdAt: now.toLocaleDateString(),
            },
          ],
        };
        set(ref(db, "posts/" + postId), newPost);
      } else {
        post.comment.push({
          commentId: postId + "-commentNumber-" + post.comment.length,
          commentUserId: commentUserId,
          commentUser: commentUser,
          commentInput: commentInput,
          createdAt: now.toLocaleDateString(),
        });

        const newPost = {
          ...post,
          comment: post.comment,
        };
        set(ref(db, "posts/" + postId), newPost);
      }
    },
    {
      onlyOnce: true,
    }
  );
};

export const deleteCommentData = async (postId, commentId, commentIndex) => {
  const db = getDatabase();
  const postRef = ref(db, "posts/");

  await onValue(
    postRef,
    (snapshot) => {
      const posts = snapshot.val();
      const post = posts[postId];

      const newComments = post.comment.filter((comment) => {
        return comment.commentId !== post.comment[commentIndex].commentId;
      });

      const updatePostCommentData = {
        ...post,
        comment: newComments,
      };
      set(ref(db, "posts/" + postId), updatePostCommentData);
    },
    {
      onlyOnce: true,
    }
  );
};
