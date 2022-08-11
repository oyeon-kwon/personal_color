import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Nav from './components/Nav';
import axios from 'axios';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { getCurrentLoggedInUser, writeUserData, writeUserImageData, getUserData } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './reducer/authReducer';

/* global Kakao */

function App () {

  const dispatch = useDispatch();

  // 카카오 로그인
  useEffect(() => {
    Kakao.isInitialized()
    const authorizeCodeFromKakao = window.location.search.split('=')[1];

    axios.post('http://ec2-13-209-42-30.ap-northeast-2.compute.amazonaws.com:4000/kakao', {
      authorizeCodeFromKakao: authorizeCodeFromKakao
    }).then(kakaoUserData => {
      if (kakaoUserData.data.kakao_account.email) {
        writeUserData(kakaoUserData.data.id, kakaoUserData.data.properties.nickname, 'unknown', kakaoUserData.data.kakao_account.email);
        writeUserImageData(kakaoUserData.data.id, kakaoUserData.data.properties.profile_image);
      } 
      // else {
      //   writeUserData(kakaoUserData.data.id, kakaoUserData.data.properties.nickname);
      //   writeUserImageData(kakaoUserData.data.id, kakaoUserData.data.properties.profile_image);
      // }

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
