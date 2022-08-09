import React, { useEffect, useState, useRef } from 'react';
import './App.css';
// import Landing from './Landing';
// import Signup from './Signup';
// import Login from './Login';
// import CameraSelf from './components/CameraSelf';
// import ColorList from './components/ColorList';
// import Commumity from './Community';
// import Mypage from './Mypage';
// import PostView from './components/PostView';
// import PostInput from './components/PostInput';
// import CameraAI from './components/CameraAI';
// import ColorResult from './components/ColorResult';
// import PostEdit from './components/PostEdit';
import Nav from './components/Nav';
// import Modal from './components/Modal';
// import Loading from './components/Loading';
import axios from 'axios';
import logo from './img/logowhite.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { getCurrentLoggedInUser, signout, writeUserData, writeUserImageData, getUserData } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './reducer/authReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* global Kakao */

function App () {

  const dispatch = useDispatch();

  // 카카오 로그인
  useEffect(() => {
    // Kakao.isInitialized()
    const authorizeCodeFromKakao = window.location.search.split('=')[1];

    axios.post('http://localhost:4000/kakao', {
      authorizeCodeFromKakao: authorizeCodeFromKakao
    }).then(kakaoUserData => {
      if (kakaoUserData.data.kakao_account.email) {
        writeUserData(kakaoUserData.data.id, kakaoUserData.data.properties.nickname, kakaoUserData.data.kakao_account.email);
        writeUserImageData(kakaoUserData.data.id, kakaoUserData.data.properties.profile_image);
      } else {
        writeUserData(kakaoUserData.data.id, kakaoUserData.data.properties.nickname);
        writeUserImageData(kakaoUserData.data.id, kakaoUserData.data.properties.profile_image);
      }

      getUserData(kakaoUserData.data.id)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const currentUserInfo = snapshot.val();
            dispatch(setAuth(currentUserInfo));
          } else {
            console.log('No data available');
          }
        });
    });
  }, []);

  return (
    <>
      <div className='body'>
        <Router>
          <Nav />
        </Router>
      </div>
    </>

  );
}

export default App;
