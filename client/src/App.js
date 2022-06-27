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
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { getCurrentLoggedInUser, signout, writeUserData } from './firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from './reducer/authReducer';
/* global Kakao */

// Redux-persist 활용
// App 이 불러와졌을 때 로컬스토리지에 있던 유저 정보 사용
// 서버에 현재 로그인 상태 재검증
// 서버가 응답한 로그인 정보로 업데이트
// 만약에 토큰이 만료되었을 시에는, 재로그인 요청

function App () {

  // TODO: env

  // 카카오 로그인
  useEffect(()=>{
    console.log(Kakao.isInitialized())

    const authorizeCodeFromKakao = window.location.search.split("=")[1]
    // !---- my server start
    axios.post('http://localhost:4000/kakao', {
      authorizeCodeFromKakao: authorizeCodeFromKakao
    }).then( data => console.log(data))


    // !---- my server end
    // if(authorizeCodeFromKakao !== undefined){
    //   console.log(`authorizeCodeFromKakao : ${authorizeCodeFromKakao}`)
      
    //   const body = {
    //     grant_type: "authorization_code",
    //     client_id: "b0366d0691519fea27e846b0248f999f",
    //     redirect_uri: "http://localhost:3000",
    //     code: authorizeCodeFromKakao
    //   }
      
    //   const queryStringBody = Object.keys(body)
    //     .map(string => encodeURIComponent(string) + "=" + encodeURI(body[string]))
    //     .join("&")
      
    //   fetch("https://kauth.kakao.com/oauth/token",{
    //     method: "POST",
    //     headers: {
    //       'content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
    //     },
    //     body : queryStringBody
    //   })
    //     .then(res => res.json())
    //     .then((kakaoAccessToken) => {
    //       // console.log(kakaoAccessToken)
    //       console.log(kakaoAccessToken.access_token)
    //       // {access_token: 'lPXoAWJgL-899s0qa2iQna0CsUAbJbYTBU-uggKxCj11mwAAAYGgmRa5', token_type: 'bearer', refresh_token: '0VHKcaAdpavWotbfHjDk9nkiBDu7sTcrZp3YNjFPCj11mwAAAYGgmRa3', id_token: 'eyJraWQiOiI5ZjI1MmRhZGQ1ZjIzM2Y5M2QyZmE1MjhkMTJmZW…wNovUC0AEwlQ6rqBe2OYDDdmM21ihIlDFjHoMyatkBQz_Mj1w', expires_in: 21599, …}
    //       // TODO: 이제 액세스 토큰을 받아왔으니 뭘해야하지?
          
    //       // TODO: 카카오에서 REST API 사용자 정보 가져오기

    //       axios.get('https://kapi.kakao.com/v2/user/me', {
    //         headers: {
    //           'Authorization': `Bearer ${kakaoAccessToken.access_token}`,
    //           'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    //         }
    //       })
    //       .then((data) => {
    //         console.log(data)
    //       })

    //       // TODO: realtime database 에 저장
    //       // writeUserData(userId, name, email)
    //     })
    // } else {
    //   console.log("No AuthorizeCodeFromKakao")
    // }

  },[])

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
