import React, { useState, useRef, useCallback } from 'react';
import './camera.css';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setSelfCameraImg } from '../reducer/index'

function Camera () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // TODO: CSS 수정
  // TODO: 여기서 찍은 사진 정보를 로그인 한 사용자라면 DB에 저장해서 마이페이지에서 보여줘야 함

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
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={210}
        height={210}
        videoConstraints={videoConstraints}
        mirrored
      />
      <button onClick={capture} className='camera-button'>Capture photo</button>
    </>
  );
}

export default Camera;
