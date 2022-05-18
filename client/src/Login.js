import React, { useState } from 'react';
import './login.css';

function Login () {

  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const emailInputHandler = (e) => {
    let email = e.target.value
    setEmailInput(email)
  }

  const passwordInputHandler = (e) => {
    let password = e.target.value
    setPasswordInput(password)
  }

  const submitLoginHandler = () => {
      // TODO: 서버로 emailInput, passwordInput 보내주기
      console.log(emailInput)
      console.log(passwordInput)
  }

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
              <input className='form-box' onChange={passwordInputHandler}/>
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
