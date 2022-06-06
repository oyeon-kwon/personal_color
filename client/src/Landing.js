import React, { useState } from 'react';
import './landing.css';
import selfImg from './img/self.svg';
import aiImg from './img/ai.svg';
import { useNavigate } from 'react-router-dom';

function Landing () {
  // TODO: 호버 이미지 크기 조정
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState('self');

  const selfTestHandler = () => {
    navigate('/camera-self');
  };

  return (
    <>
      <div className='content-box-1'>
        <div className='desc'>
          <div className='desc-lg'>간단하게 퍼스널 컬러를 테스트 해 보세요!</div>
          <div className='desc-sm'>스스로 맞는 컬러가 무엇인지 측정해 보거나<br />빅데이터를 기반으로 학습한 AI를 통해 측정할 수 있습니다.</div>
        </div>
        <div className='test-button-container'>
          <div className='test-button self' onMouseOver={() => setButtonStatus('self')} onClick={selfTestHandler}>스스로 진단하기</div>
          <div className='test-button ai' onMouseOver={() => setButtonStatus('ai')}>AI로 진단하기</div>
        </div>
      </div>
      <div className='img-container'>
        {
                buttonStatus === 'self'
                  ? <img src={selfImg} className='button-img' alt='img' />
                  : buttonStatus === 'ai' ? <img src={aiImg} className='button-img' alt='img' />
                    : <></>
            }
      </div>
    </>

  );
}

export default Landing;
