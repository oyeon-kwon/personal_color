import React, { useEffect, useState } from 'react';
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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { getCurrentLoggedInUser, signout } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './reducer/authReducer';

// TODO: 새로고침해야지만 authCurrentUser가 뜬다ㅠㅠ
// Redux-persist 활용
// App 이 불러와졌을 때 로컬스토리지에 있던 유저 정보 사용
// 서버에 현재 로그인 상태 재검증
// 서버가 응답한 로그인 정보로 업데이트
// 만약에 토큰이 만료되었을 시에는, 재로그인 요청

function App () {
  const dispatch = useDispatch();
  const authCurrentUser = useSelector((state) => state.authReducer.auth);
  // 리덕스에 저장된 authCurrentUser의 정보: email, username

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

  return (
    <>
      <div className='body'>
        <Router>
          <div className='nav'>
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
                  ? <span onClick={logoutHandler}>로그아웃</span>
                  : <Link to='/signin'>로그인</Link>
              }
            </span>
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
            <Route path='/mypage' element={<Mypage />} />
            <Route path='/color' element={<ColorResult />} />
          </Routes>
        </Router>
        {/* <Landing /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    </>

  );
}

export default App;
