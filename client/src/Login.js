import React, { useState } from 'react';
import './login.css';
import { auth, loginEmail, database } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// TODO: 비밀번호 확인
// TODO: 로그인 유지

console.log(database)

function Login () {

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const emailInputHandler = (e) => {
    const email = e.target.value;
    setEmailInput(email);
  };

  const passwordInputHandler = (e) => {
    const password = e.target.value;
    setPasswordInput(password);
  };

  const submitLoginHandler = async () => {
    const userinfo = await loginEmail(emailInput, passwordInput);
    if (userinfo.user.uid) {
        alert('로그인에 성공했습니다.');
        let token = userinfo.user.accessToken
        localStorage.setItem('accessToken', token);
    }
  };

  const googleLoginHandler = async () => {
        const googleProvider = new GoogleAuthProvider();

        googleProvider.addScope('profile');
        googleProvider.addScope('email');
        const googleLoginResult = await signInWithPopup(auth, googleProvider);
        console.log(googleLoginResult.user.auth.persistenceManager)
        // 유저 정보
        const user = googleLoginResult.user;
        // 액세스 토큰
        const credential = GoogleAuthProvider.credentialFromResult(googleLoginResult);
        const token = credential.accessToken;
        localStorage.setItem('accessToken', token);
  };

  return (
    <>
      <div className='modal-background'>
        <div className='modal-body'>
          <div className='login-title'>Login with</div>
          <div className='form'>
            <div className='email'>
              <div className='desc'>email</div>
              <input className='form-box' onChange={emailInputHandler} />
            </div>
            <div className='password'>
              <div className='desc'>비밀번호</div>
              <input className='form-box' type='password' onChange={passwordInputHandler} />
            </div>
            <div className='submit-button' onClick={submitLoginHandler}>로그인</div>
            <div className='hr'>
              <span className='line' />
              <span>or</span>
              <span className='line' />
            </div>
            <div className='social-login-box'>
              <span className='naver social-login-button'>네이버</span>
              <span className='google social-login-button' onClick={googleLoginHandler}>구글</span>
              <span className='kakao social-login-button'>카카오</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
