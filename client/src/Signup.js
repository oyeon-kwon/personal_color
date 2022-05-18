import React, { useState } from 'react';
import './signup.css';
import signupImg from './img/signup-img.png';
import { signupEmail } from './firebase';

function Signup () {

  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const nameInputHandler = (e) => {
    let name = e.target.value
    setNameInput(name)
  }

  const emailInputHandler = (e) => {
    let email = e.target.value
    setEmailInput(email)
  }

  const passwordInputHandler = (e) => {
    let password = e.target.value
    setPasswordInput(password)
  }

  const submitSignupHandler = () => {
    signupEmail(emailInput, passwordInput)
  }

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
              <input className='form-box' onChange={nameInputHandler}/>
            </div>
            <div className='email'>
              <div className='desc'>email</div>
              <input className='form-box' onChange={emailInputHandler} />
            </div>
            <div className='password'>
              <div className='desc'>비밀번호</div>
              <input className='form-box' type="password" onChange={passwordInputHandler} />
            </div>
            <div className='password-check'>
              <div className='desc'>비밀번호 확인</div>
              <input className='form-box' />
            </div>
            <div className='signup-button' onClick={submitSignupHandler}>회원가입</div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Signup;
