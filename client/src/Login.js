import React, { useState } from 'react';
import './login.css';
import { loginEmail } from './firebase';

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
      // TODO: 로그인 유지 구현
    }
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
              <span className='google social-login-button'>구글</span>
              <span className='kakao social-login-button'>카카오</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
