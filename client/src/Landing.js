import React, { useState, useRef } from 'react';
import './landing.css';
import selfImg from './img/self.svg';
import aiImg from './img/ai.svg';
import { useNavigate } from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic';
// import ScrollMagic from 'scrollmagic';
import { Controls, PlayState, Reveal, Timeline, Tween, SplitWords } from 'react-gsap';
import arrow from './img/arrow.png'

function Landing () {
  // TODO: 호버 이미지 크기 조정
  const ref = useRef();
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState('self');

  const selfTestHandler = () => {
    navigate('/camera-self');
  };

  const aiTestHandler = () => {
    navigate('/camera-ai');
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
          <div className='test-button ai' onMouseOver={() => setButtonStatus('ai')} onClick={aiTestHandler}>AI로 진단하기</div>
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
      
      <div className='landing-section'>
        <div className='arrow-container'>
          <div className='arrow-container-desc'>퍼스널 컬러가 ?</div>
          <img src={arrow} alt='' className='arrow-img'/>
        </div>
        <div className='landing-section-1'>
        <Controller>
          <Scene
            pin={false}
            reverse={true}
            duration={500}
            offset={-300}        
          >
            <Timeline target={<div className='person-thinking'>내 얼굴 톤에 맞는 화장품이 뭔지 모르겠어요.<img src='https://mblogthumb-phinf.pstatic.net/20151005_163/yaho_17_1444057061878SKfrr_PNG/%C0%CC%C0%C0.png?type=w2' className='landing-section1-img'/></div>}>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
              <Tween to={{ x: "50px", y: "200px" }} duration={1} />
            </Timeline>
          </Scene>
        </Controller>

        <Controller>
          <Scene
            pin={false}
            reverse={true}
            duration={500}
            offset={-300}        
          >
            <Timeline target={<div className='person-thinking'>톤그로라고 놀림 받았어요ㅠㅠ</div>}>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
              <Tween to={{ x: "400px", y: "50px" }} duration={1} />
            </Timeline>
          </Scene>
        </Controller>

        <Controller>
          <Scene
            pin={false}
            reverse={true}
            duration={500}
            offset={-300}        
          >
            <Timeline target={<div className='person-thinking'>핑크립을 바르면 왜 이렇게 입술만 둥둥 떠보일까요?</div>}>
              <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
              <Tween to={{ x: "600px", y: "180px" }} duration={1} />
            </Timeline>
          </Scene>
        </Controller>
        </div>

        <div className='landing-section-2'>
          <Controller>
            <Scene
              duration="70%"
              triggerHook="onEnter"
            >
                {/* <Tween
                  position="0"
                  from={{
                    yPercent: -50,
                  }}
                  to={{
                      yPercent: 0,
                  }}
                >
                  <img src="https://placeimg.com/1000/1000/nature" alt="" />
                </Tween> */}
                <Tween
                position="0"
                  from={{
                    top: '0%',
                    scale: 0.5,
                  }}
                  to={{
                    top: '10%',
                    scale: 1,
                  }}
                >
                  <div className='section-container'>
                    <div className='landing-section-2-text'>스스로 여러가지 색상표를 바꿔보며 <br /> 내 얼굴이 환하고 생기있어 보이는 색이 <br /> 무엇인지 골라보세요.</div>
                    <img src="https://placeimg.com/1000/1000/nature" className='landing-section-2-img' alt="" />
                  </div>
                </Tween>
            </Scene>
          </Controller>
        </div>
        <div className='landing-section-3'>
          빅데이터 기반으로 학습한 AI를 토대로 내 퍼스널 컬러 자동 진단을 받아보세요.
        </div>
        <div className='landing-section-4'>
          나에게 어울리는 색상이 무엇인지, 내 착붙템은 무엇일지 한 눈에 살펴보세요.
        </div>
        <div className='landing-section-5'>
          나와 같은 톤인 사람들과 함께 메이크업, 의상 등 다양한 정보를 공유하세요.
        </div>
      </div>

    </>
  );
}

export default Landing;
