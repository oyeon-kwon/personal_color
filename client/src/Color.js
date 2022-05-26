import React, { useState, useRef } from 'react';
import './color.css';
import Webcam from "react-webcam";

function Color () {
    const [img, setImg] = useState("")
    const webcamRef = React.useRef(null);
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImg(imageSrc)
      },
      [webcamRef]
    );
    const videoConstraints = {
        width: 500,
        height: 500,
        facingMode: "user"
      };

    return (
      <>
        <Webcam
          audio={false}
          height={500}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={500}
          videoConstraints={videoConstraints}
          mirrored={true}
        />
        <button onClick={capture}>Capture photo</button>
        <img src={img} />
      </>
    );
}

export default Color;
