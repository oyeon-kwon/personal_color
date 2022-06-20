import React, { useState, useRef, useCallback } from 'react';
import './cameraai.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CameraAI () {
  const authCurrentUser = useSelector((state) => state.authReducer.auth);
  // 리덕스에 저장된 authCurrentUser의 정보

// TODO: DOM 쓰지말고 useRef 로 리팩토링
// TODO: 내 톤 선택하고 자동으로 끝내게 변경 (authCurrentUser 활용해서 데베에 정보 저장)
  const [isAICameraStart, setIsAICameraStart] = useState(false);
  const navigate = useNavigate();
  const labelContainerRef = useRef();

  let model, webcam, labelContainer, maxPredictions;
  const URL = 'https://teachablemachine.withgoogle.com/models/JWq_f7ptd/';

  const init = async () => {
    setIsAICameraStart(!isAICameraStart);
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';

    model = await window.tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new window.tmImage.Webcam(200, 200, flip);

    await webcam.setup();
    await webcam.play();

    window.requestAnimationFrame(loop);

    document.getElementById('ai-webcam-container').appendChild(webcam.canvas);
    labelContainer = document.getElementById('ai-label-container');
    for (let i = 0; i < maxPredictions; i++) {
      labelContainer.appendChild(document.createElement('div'));
    }
  };

  const loop = async () => {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
  };

  const predict = async () => {
    const prediction = await model.predict(webcam.canvas);

    if (Number(prediction[0].probability.toFixed(2)) < Number(prediction[1].probability.toFixed(2))) {
      // COOL
      labelContainer.childNodes[0].innerHTML = prediction[1].className;
      labelContainerRef.current.style = 'color: #0398fc';
    } else if (Number(prediction[0].probability.toFixed(2)) > Number(prediction[1].probability.toFixed(2))) {
      // WARM
      labelContainer.childNodes[0].innerHTML = prediction[0].className;
      labelContainerRef.current.style = 'color: #ffb83d';
    }
  };

  const close = async () => {
    setIsAICameraStart(!isAICameraStart);
    navigate('/color');
    window.location.reload();
  };

  return (
    <>
      {
        !isAICameraStart
          ? <>
            <div className='ai-camera-desc'>보다 정확한 테스트를 위해 <br /> 메이크업을 하지 않은 상태로  <br /> 화면에 얼굴이 꽉 채워질 수 있게 <br /> 테스트하실 것을 권장합니다.</div>
            <button type='button' onClick={init} className='ai-camera-button'>진단 시작하기</button>
          </>
          : <button type='button' onClick={close} className='ai-camera-button'>진단 끝내기</button>
    }
      <div id='ai-webcam-container' />
      <div id='ai-label-container' ref={labelContainerRef} />

    </>
  );
}

export default CameraAI;
