import React, { useState, useRef } from 'react';
import './landing.css';
import selfImg from './img/self.svg';
import aiImg from './img/ai.svg';
import { useNavigate } from 'react-router-dom';
import { Controller, Scene } from 'react-scrollmagic';
import { Controls, PlayState, Reveal, Timeline, Tween, SplitWords } from 'react-gsap';
import arrow from './img/arrow.png';
import landingFirst1 from './img/landing1.png';
import landingFirst2 from './img/landing2.png';
import landingFirst3 from './img/landing3.png';
import browser from './img/browser.png';
import landingSecondGIF from './img/landingSecondGIF.gif';
import landingThirdGIF from './img/landingThirdGIF.gif';
import landingFourthGIF from './img/landingFourthGIF.gif';
import logo from './img/logo.png';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function Landing () {
  // TODO: 호버 이미지 크기 조정
  const ref = useRef();
  const navigate = useNavigate();
  const [buttonStatus, setButtonStatus] = useState('self');

  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const selfTestHandler = () => {
    navigate('/camera-self');
  };

  const aiTestHandler = () => {
    navigate('/camera-ai');
  };

  const termsModalHandler = () => {
    setIsTermsOpen(!isTermsOpen);
  };

  const privacyModalHandler = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  return (
    <>
      <div className='content-box-1'>
        <div className='desc'>
          <div className='desc-lg'>컬러덴티티로 간단하게 퍼스널 컬러를 테스트 해 보세요!</div>
          <div className='desc-sm'>스스로 맞는 컬러가 무엇인지 측정해 보거나<br />빅데이터를 기반으로 학습한 AI를 통해 측정할 수 있습니다.</div>
        </div>
        <div className='test-button-container'>
          <div className='test-button self' onMouseOver={() => setButtonStatus('self')} onClick={selfTestHandler}>스스로<br />진단하기</div>
          <div className='test-button ai' onMouseOver={() => setButtonStatus('ai')} onClick={aiTestHandler}>AI로<br />진단하기</div>
        </div>
      </div>
      <div className='img-container'>
        {
          buttonStatus === 'self'
            ? <img src={selfImg} className='button-img-self' alt='img' />
            : buttonStatus === 'ai' ? <img src={aiImg} className='button-img-ai' alt='img' />
              : <></>
        }
      </div>

      <div className='landing-section'>
        <div className='arrow-container'>
          <div className='arrow-container-desc'>퍼스널 컬러를 알면 뭐가 좋나요?</div>
          <img src={arrow} alt='' className='arrow-img' />
        </div>
        <div className='landing-section-1'>
          <Controller>
            <Scene
              pin={false}
              reverse
              duration={300}
              offset={-300}
            >
              <Timeline target={<div className='person-thinking desc1'>내 얼굴 톤에 맞는 화장품이 뭔지 모르겠어요.<img src={landingFirst1} className='landing-section1-img1' /></div>}>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
                <Tween to={{ x: '0px', y: '150px' }} duration={1} />
              </Timeline>
            </Scene>
          </Controller>

          <Controller>
            <Scene
              pin={false}
              reverse
              duration={300}
              offset={-300}
            >
              <Timeline target={<div className='person-thinking desc2'>톤그로라고 놀림 받았어요ㅠㅠ<img src={landingFirst2} className='landing-section1-img2' /></div>}>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
                <Tween to={{ x: '30px', y: '0px' }} duration={1} />
              </Timeline>
            </Scene>
          </Controller>

          <Controller>
            <Scene
              pin={false}
              reverse
              duration={300}
              offset={-300}
            >
              <Timeline target={<div className='person-thinking desc3'>핑크립을 바르면 왜 이렇게 입술만 둥둥 떠보일까요?<img src={landingFirst3} className='landing-section1-img3' /></div>}>
                <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={1} />
                <Tween to={{ x: '30px', y: '150px' }} duration={1} />
              </Timeline>
            </Scene>
          </Controller>
        </div>

        <div className='landing-section-2'>
          <Controller>
            <Scene
              duration='70%'
              triggerHook='onEnter'
            >
              <Tween
                position='0'
                from={{
                  top: '0%',
                  scale: 0.5
                }}
                to={{
                  top: '10%',
                  scale: 1
                }}
              >
                <div className='section-container'>
                  <div className='landing-section-text'>스스로 여러가지 색상표를 바꿔보며 <br /> 내 얼굴이 환하고 생기있어 보이는 색이 <br /> 무엇인지 골라보세요.</div>
                  <img src={browser} className='landing-section-browser-img' alt='' />
                  <img src={landingSecondGIF} className='gif' alt='' />
                </div>
              </Tween>
            </Scene>
          </Controller>
        </div>
        <div className='landing-section-2'>
          <Controller>
            <Scene
              duration='70%'
              triggerHook='onEnter'
            >
              <Tween
                position='0'
                from={{
                  top: '0%',
                  scale: 0.5
                }}
                to={{
                  top: '10%',
                  scale: 1
                }}
              >
                <div className='section-container'>
                  <div className='landing-section-text'>빅데이터 기반으로 학습한 AI를 토대로 <br /> 내 퍼스널 컬러 자동 진단을 받아보세요.</div>
                  <img src={browser} className='landing-section-browser-img' alt='' />
                  <img src={landingThirdGIF} className='gif' alt='' />
                </div>
              </Tween>
            </Scene>
          </Controller>
        </div>

        <div className='landing-section-2'>
          <Controller>
            <Scene
              duration='70%'
              triggerHook='onEnter'
            >
              <Tween
                position='0'
                from={{
                  top: '0%',
                  scale: 0.5
                }}
                to={{
                  top: '10%',
                  scale: 1
                }}
              >
                <div className='section-container'>
                  <div className='landing-section-text'>나와 같은 톤인 사람들과 함께 <br /> 메이크업, 의상 등 다양한 정보를 공유하세요.</div>
                  <img src={browser} className='landing-section-browser-img' alt='' />
                  <img src={landingFourthGIF} className='gif' alt='' />
                </div>
              </Tween>
            </Scene>
          </Controller>
        </div>
        <div className='landing-section-3'>
          <div className='landing-final-desc'>
            컬러덴티티와 함께<br />내 퍼스널컬러 진단을 시작해 볼까요?
          </div>
          <div className='final-test-button-container'>
            <div className='final-test-button' onClick={selfTestHandler}>스스로 진단하기</div>
            <div className='final-test-button' onClick={aiTestHandler}>AI로 진단하기</div>
          </div>
        </div>
        <div className='landing-footer'>
          <img src={logo} className='logo-footer-img' />
          <div className='info'>
            <p>컬러덴티티</p>
            <p>
              권오연
              <span className='info-divider'>|</span>
              <a className='info-link' href='https://github.com/oyeon-kwon'>Github</a>
              <span className='info-divider'>|</span>
              <a className='info-link' href='https://o-yeon.tistory.com/'>Blog</a>
            </p>
          </div>
          <div className='terms-container'><span className='terms' onClick={termsModalHandler}>이용약관</span><span className='terms-divider'>|</span><span className='terms' onClick={privacyModalHandler}>개인정보처리방침</span></div>
        </div>
      </div>
      {
        isTermsOpen ? <Terms termsModalHandler={termsModalHandler} /> : null
      }
      {
        isPrivacyOpen ? <Privacy privacyModalHandler={privacyModalHandler} /> : null
      }
    </>
  );
}

export default Landing;
