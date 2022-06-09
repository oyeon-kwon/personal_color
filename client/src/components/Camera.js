import React, { useState, useRef, useCallback } from 'react';
import './camera.css';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelfCameraImg } from '../reducer/cameraReducer';

function Camera () {
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

export default Camera;
