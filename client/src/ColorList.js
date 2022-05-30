import React, { useState, useRef, useEffect } from 'react';
import Color from './Color';
import colorData from './color.json';
import './colorlist.css';

function ColorList () {
    // TODO: 

  const colorThemes = Object.keys(colorData)
  console.log(colorThemes)

  return (
    <>
    <div className="color-list">
        {
            colorThemes.map((colorTheme) => {
                return <Color colorTheme={colorTheme} key={colorTheme} />
            })
        }
    </div>
    </>
  );
}

export default ColorList;
