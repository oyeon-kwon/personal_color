import React from 'react';
import './signup.css';

function Signup() {

  return (
    <div className='form-body'>
        <div className='form-title'>회원가입</div>
        <div className='form'>
          <div className='name'>
            <div className='desc'>이름</div>
            <div className='form-box'></div>
          </div>
          <div className='email'>
            <div className='desc'>email</div>
            <div className='form-box'></div>
          </div>
          <div className='password'>
            <div className='desc'>비밀번호</div>
            <div className='form-box'></div>
          </div>
          <div className='password-check'>
            <div className='desc'>비밀번호 확인</div>
            <div className='form-box'></div>
          </div>
        </div>
    </div>
  );
}

export default Signup;
