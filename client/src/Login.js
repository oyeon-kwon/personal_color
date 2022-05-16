import React from 'react';
import './signup.css';
// import './login.css';

function Login() {

  return (
    <div className='form-body'>
        <div className='form-title'>로그인</div>
        <div className='form'>
          <div className='email'>
            <div className='desc'>email</div>
            <div className='form-box'></div>
          </div>
          <div className='password'>
            <div className='desc'>비밀번호</div>
            <div className='form-box'></div>
          </div>
        </div>
    </div>
  );
}

export default Login;
