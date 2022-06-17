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
import { getCurrentLoggedInUser, signout } from './firebase/firebase'

  // TODO: 새로고침해도 로그인 유지 되게
  // Redux-persist 활용
  // App 이 불러와졌을 때 로컬스토리지에 있던 유저 정보 사용
  // 서버에 현재 로그인 상태 재검증
  // 서버가 응답한 로그인 정보로 업데이트
  // 만약에 토큰이 만료되었을 시에는, 재로그인 요청

function App () {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUserInfo, setCurrentUserInfo] = useState()

  const loginStatusHandler = () => {
    let currenUserInfo = getCurrentLoggedInUser()

    if(currenUserInfo) {
      setIsLoggedIn(true)
      setCurrentUserInfo(currenUserInfo)
    } else {
      setIsLoggedIn(false)
    }
  }

  useEffect(() => {
    loginStatusHandler()

    console.log('로그인 되었나요?' + isLoggedIn)
    console.log(currentUserInfo)
  })

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
              <Link to='/mypage'>MYPAGE</Link>
            </span>
            <span className='nav-link'>
              <Link to='/signup'>회원가입</Link>
            </span>
            <span className='nav-link'>
              {
                isLoggedIn ?
                <span onClick={signout}>로그아웃</span>
                :
                <Link to='/signin'>로그인</Link>
              }
            </span>
          </div>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/camera-self' element={<CameraSelf />} />
            <Route path='/camera-ai' element={<CameraAI currentUserInfo={currentUserInfo} />} />
            <Route path='/camera-self/colors' element={<ColorList currentUserInfo={currentUserInfo} />} />
            <Route path='/community' element={<Commumity currentUserInfo={currentUserInfo} />} />
            <Route path='/community/:id' element={<PostView currentUserInfo={currentUserInfo} />} />
            <Route path='/community/post' element={<PostInput currentUserInfo={currentUserInfo} />} />
            <Route path='/mypage' element={<Mypage currentUserInfo={currentUserInfo} />} />
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
