import React, { useState, useRef, useEffect } from 'react';
import './color.css';
import colorData from './color.json';
import { useSelector } from 'react-redux'

function Color ( { colorTheme } ) {

  const selfCameraImg = useSelector((state) => state.selfCameraImg.selfCameraImg)

  const color_0 = useRef();
  const color_1 = useRef();
  const color_2 = useRef();
  const color_3 = useRef();
  const color_4 = useRef();
  const color_5 = useRef();
  const color_6 = useRef();
  const color_7 = useRef();
  const color_8 = useRef();
  const color_9 = useRef();
  const color_10 = useRef();
  const color_11 = useRef();

  useEffect(() => {
    color_0.current.style = `background-color:${colorData[colorTheme][0]}`
    color_1.current.style = `background-color:${colorData[colorTheme][1]}`
    color_2.current.style = `background-color:${colorData[colorTheme][2]}`
    color_3.current.style = `background-color:${colorData[colorTheme][3]}`
    color_4.current.style = `background-color:${colorData[colorTheme][4]}`
    color_5.current.style = `background-color:${colorData[colorTheme][5]}`
    color_6.current.style = `background-color:${colorData[colorTheme][6]}`
    color_7.current.style = `background-color:${colorData[colorTheme][7]}`
    color_8.current.style = `background-color:${colorData[colorTheme][8]}`
    color_9.current.style = `background-color:${colorData[colorTheme][9]}`
    color_10.current.style = `background-color:${colorData[colorTheme][10]}`
    color_11.current.style = `background-color:${colorData[colorTheme][11]}`
  })

  return (
    <>
    <div className='self-photo-box'>
        <div className='self-photo'>
          <img src={selfCameraImg} />
        </div>
        <div className='left'>
            <div className='color' ref={color_0} />
            <div className='color' ref={color_1} />
            <div className='color' ref={color_2} />
        </div>
        <div className='top'>
            <div className='color' ref={color_3} />
            <div className='color' ref={color_4} />
            <div className='color' ref={color_5} />
        </div>
        <div className='right'>
            <div className='color' ref={color_6} />
            <div className='color' ref={color_7} />
            <div className='color' ref={color_8} />
        </div>
        <div className='bottom'>
            <div className='color' ref={color_9} />
            <div className='color' ref={color_10} />
            <div className='color' ref={color_11} />
        </div>
    </div>
    </>
  );
}

export default Color;
