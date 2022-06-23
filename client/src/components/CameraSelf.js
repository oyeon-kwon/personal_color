import React, { useState, useRef, useCallback } from 'react';
import './cameraself.css';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelfCameraImg } from '../reducer/cameraReducer';

function CameraSelf () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // TODO: CSS 수정
  // TODO: 주의사항 안내

  const webcamRef = useRef(null);
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(setSelfCameraImg(imageSrc));
      navigate('/camera-self/colors');
    },
    [webcamRef]
  );
  const videoConstraints = {
    width: 210,
    height: 210,
    facingMode: 'user'
  };

  return (
    <>
      <div className='camera-desc'>보다 정확한 테스트를 위해 <br /> 메이크업을 하지 않은 상태로  <br /> 화면에 얼굴이 꽉 채워질 수 있게 <br /> 테스트하실 것을 권장합니다.</div>
      <div className='camera-box'>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          width={210}
          height={210}
          videoConstraints={videoConstraints}
          mirrored
          className='camera'
        />
        <button onClick={capture} className='camera-button'>Capture photo</button>
      </div>
    </>
  );
}

export default CameraSelf;
