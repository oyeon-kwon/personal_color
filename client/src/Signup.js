import React, { useEffect, useState, useRef } from 'react';
import './signup.css';
import signupImg from './img/signup-img.png';
import { signupEmail, writeUserData, writeUserImageData } from './firebase/firebase';
import { useNavigate } from 'react-router-dom';
import male_profile from './img/male_profile.png';
import female_profile from './img/female_profile.png';

function Signup () {
  const navigate = useNavigate();

  // TODO: result.user.emailVerified

  const [nameInput, setNameInput] = useState('');
  const [gender, setGender] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordCheckInput, setPasswordCheckInput] = useState('');
  const [isSamePassword, setIsSamePassword] = useState(false);

  const nameInputHandler = (e) => {
    const name = e.target.value;
    setNameInput(name);
  };

  const maleRef = useRef();
  const femaleRef = useRef();

  const genderSelectHandler = (e) => {
    setGender(e.target.textContent);

    if (e.target.textContent === '남성') {
      maleRef.current.classList.add('gender-select-button-active');
      femaleRef.current.classList.remove('gender-select-button-active');
    } else if (e.target.textContent === '여성') {
      femaleRef.current.classList.add('gender-select-button-active');
      maleRef.current.classList.remove('gender-select-button-active');
    }
  };

  const emailInputHandler = (e) => {
    const email = e.target.value;
    setEmailInput(email);
  };

  const passwordInputHandler = (e) => {
    const password = e.target.value;
    setPasswordInput(password);
    if (password !== passwordCheckInput) {
      setIsSamePassword(false);
    } else {
      setIsSamePassword(true);
    }
  };

  const passwordInputCheckHandler = (e) => {
    const passwordCheck = e.target.value;
    setPasswordCheckInput(passwordCheck);
    if (passwordInput !== passwordCheck) {
      setIsSamePassword(false);
    } else {
      setIsSamePassword(true);
    }
  };

  const submitSignupHandler = async () => {
    if (isSamePassword) {
      await signupEmail(emailInput, passwordInput)
        .then(result => {
          console.log(result);
          const email = result.user.email;
          const uid = result.user.uid;
          writeUserData(uid, nameInput, gender, email);

          if (gender === '남성') {
            writeUserImageData(uid, male_profile);
          } else if (gender === '여성') {
            writeUserImageData(uid, female_profile);
          }

          navigate('/signin');
        })
        .catch(err => {
          // 에러메시지 공식문서 : https://firebase.google.com/docs/auth/admin/errors
          console.log(err);
          if (err.message === 'Firebase: Error (auth/invalid-email).') {
            alert('이메일이 유효하지 않습니다.');
          }
          if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
            alert('이미 사용 중인 이메일입니다.');
          }
          if (err.message === 'Firebase: Error (auth/internal-error).') {
            alert('인증 서버에서 요청을 처리하려고 시도하는 중에 예기치 않은 오류가 발생했습니다. 오류 메시지에는 추가 정보가 들어 있는 인증 서버의 응답이 포함되어야 합니다. 오류가 계속되면 버그 신고 지원 채널에 문제를 신고하시기 바랍니다.');
          }
          if (err.message === 'Firebase: Error (auth/invalid-email-verified).') {
            alert('emailVerified 사용자 속성에 제공된 값이 잘못되었습니다.');
          }
          if (err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            alert('패스워드는 6자 이상의 문자열이어야 합니다.');
          }
        });
    } else {
      alert('비밀번호가 일치해야 합니다.');
    }
  };

  return (
    <>
      <div className='signup-box'>
        <div className='left-nav'>
          <img src={signupImg} alt='회원가입이미지' className='signup-img' />
        </div>
        <div className='form-body'>
          <div className='form-title'>Welcome to Colordentity!</div>
          <div className='form'>
            <div className='name'>
              <div className='desc'>이름</div>
              <input className='name-form-box' onChange={nameInputHandler} placeholder='김컬러' />
            </div>
            <div className='gender'>
              <div className='gender-button-container'>
                <div className='gender-select-button' ref={maleRef} onClick={genderSelectHandler}>남성</div>
                <div className='gender-select-button' ref={femaleRef} onClick={genderSelectHandler}>여성</div>
              </div>
            </div>
            <div className='email'>
              <div className='desc'>email</div>
              <input className='email-form-box' onChange={emailInputHandler} placeholder='email@address.com' />
            </div>
            <div className='password'>
              <div className='desc'>비밀번호</div>
              <input className='password-form-box' type='password' onChange={passwordInputHandler} />
            </div>
            <div className='password-check'>
              <div className='desc'>비밀번호 확인</div>
              <input className='password-check-form-box' type='password' onChange={passwordInputCheckHandler} />
              {
                isSamePassword
                  ? <div className='password-check-desc true'>비밀번호가 일치합니다.</div>
                  : <div className='password-check-desc false'>비밀번호가 일치하지 않습니다.</div>
              }
            </div>
            <div className='signup-button' onClick={submitSignupHandler}>회원가입</div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Signup;
