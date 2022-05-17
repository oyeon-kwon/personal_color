import React from 'react';
import './signup.css';
import signupImg from './img/signup-img.png';

function Signup () {
  return (
    <>
      <div className='signup-box'>
        <div className='left-nav'>
          <img src={signupImg} alt='회원가입이미지' className='signup-img' />
        </div>
        <div className='form-body'>
          <div className='form-title'>Welcome to Personal Color!</div>
          <div className='form'>
            <div className='name'>
              <div className='desc'>이름</div>
              <input className='form-box' />
            </div>
            <div className='email'>
              <div className='desc'>email</div>
              <input className='form-box' />
            </div>
            <div className='password'>
              <div className='desc'>비밀번호</div>
              <input className='form-box' />
            </div>
            <div className='password-check'>
              <div className='desc'>비밀번호 확인</div>
              <input className='form-box' />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Signup;
