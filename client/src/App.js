import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import CameraSelf from './components/CameraSelf';
import ColorList from './components/ColorList';
import Commumity from './Community';
import Mypage from './Mypage';
import PostView from './components/PostView';
import PostInput from './components/PostInput';
import CameraAI from './components/CameraAI';
import ColorResult from './components/ColorResult';
import PostEdit from './components/PostEdit';
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
  const authCurrentUser = useSelector((state) => state.authReducer.auth);
  // 리덕스에 저장된 authCurrentUser의 정보: email, username

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

  const loginStatusHandler = async () => {
    const currentUserInfo = await getCurrentLoggedInUser();

    if (currentUserInfo) {
      dispatch(setAuth(currentUserInfo));
    }
  };

  const logoutHandler = () => {
    signout();
    dispatch(setAuth(''));
    // TODO: window.location.href = 'http://localhost:3000'
  };

  useEffect(() => {
    loginStatusHandler();
  }, []);

  const navLinksRef = useRef();

  const showMenuForResponsive = () => {
    if (navLinksRef.current.classList.value.indexOf('active') === -1) {
      navLinksRef.current.classList.add('active');
    } else {
      navLinksRef.current.classList.remove('active');
    }
  };

  return (
    <>
      <div className='body'>
        <Router>
          <div id='nav'>
            <img className='home-logo' src={logo} />
            <FontAwesomeIcon icon={faBars} className='menu-hamburger' onClick={showMenuForResponsive} />

            <div ref={navLinksRef} className='nav-link-list'>
              <span className='nav-link'>
                <Link to='/'>HOME</Link>
              </span>
              <span className='nav-link'>
                <Link to='/color'>COLOR</Link>
              </span>
              <span className='nav-link'>
                <Link to='/community'>COMMUNITY</Link>
              </span>
              <span className='nav-link'>
                {
                  authCurrentUser
                    ? <Link to='/mypage'>MYPAGE</Link>
                    : <Link to='/signup'>회원가입</Link>
                }
              </span>
              <span className='nav-link'>
                {
                  authCurrentUser
                    ? <span onClick={logoutHandler} className='logout'>로그아웃</span>
                    : <Link to='/signin'>로그인</Link>
                }
              </span>
            </div>
          </div>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/camera-self' element={<CameraSelf />} />
            <Route path='/camera-ai' element={<CameraAI />} />
            <Route path='/camera-self/colors' element={<ColorList />} />
            <Route path='/community' element={<Commumity />} />
            <Route path='/community/:id' element={<PostView />} />
            <Route path='/community/post' element={<PostInput />} />
            <Route path='/community/:id/edit' element={<PostEdit />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/color' element={<ColorResult />} />
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;
