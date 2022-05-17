import React from 'react';
import './login.css';

// TODO: 소셜 로그인 추가

function Login () {
  return (
    <>
      <div className='modal-background'>
        <div className='modal-body'>
          <div className='login-title'>Login with</div>
          <div className='form'>
            <div className='email'>
              <div className='desc'>email</div>
              <div className='form-box' />
            </div>
            <div className='password'>
              <div className='desc'>비밀번호</div>
              <div className='form-box' />
            </div>
            <div className='submit-button'>로그인</div>
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
