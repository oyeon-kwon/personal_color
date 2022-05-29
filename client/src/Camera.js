import React, { useState, useRef, useCallback } from 'react';
import './camera.css';
import Webcam from 'react-webcam';

function Camera () {
  const [img, setImg] = useState('');
  const webcamRef = useRef(null);
  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImg(imageSrc);
    },
    [webcamRef]
  );
  const videoConstraints = {
    width: 500,
    height: 500,
    facingMode: 'user'
  };

  return (
    <>
      <Webcam
        audio={false}
        height={500}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={500}
        videoConstraints={videoConstraints}
        mirrored
      />
      <button onClick={capture} className='camera-button'>Capture photo</button>
      <img src={img} />
    </>
  );
}

export default Camera;
