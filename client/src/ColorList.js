import React, { useState, useRef, useEffect } from 'react';
import Color from './Color';
import colorData from './color.json';
import './colorlist.css';

function ColorList () {
  // TODO: color.json 데이터 가공 필요 (봄 여름 가을 겨울 카테고리로 나누기)
  const [currentTab, setCurrentTab] = useState(0);

  const seasons = [
      { name: "전체", colorThemes: Object.keys(colorData)},
      { name: "봄", colorThemes: ['spring-light-1', 'spring-light-2', 'spring-bright']},
      { name: "여름", colorThemes: ['summer-light', 'summer-light-bright', 'summer-bright', 'summer-mute-1', 'summer-mute-2', 'summer-mute-3', 'summer-mute-4']}
  ]

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
    <div className='tab-box'>
        {
            seasons.map((season, index) => {
                return (
                    <li
                        key={index}
                        className={currentTab === index ? 'submenu focused' : 'submenu'}
                        onClick={() => selectMenuHandler(index)}
                    >
                    {season.name}
                    </li>
                )
            })
        }
    </div>
    <div className='color-list'>
        {
            seasons[currentTab].colorThemes.map((colorTheme, index) => {
                return <Color colorTheme={colorTheme} key={index} />
            })
        }
    </div>
    </>
  );
}

export default ColorList;
