import React, { useState, useRef, useCallback } from 'react';
import './colorresult.css';
import colorResultsData from './colorresult.json';
import Statistics from './Statistics';

function ColorResult () {
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div className='tab-box'>
        {
            colorResultsData.map((season, index) => {
              return (
                <>
                  <li
                    key={index}
                    className={currentTab === index ? 'submenu focused' : 'submenu'}
                    onClick={() => selectMenuHandler(index)}
                  >
                    {season.name}
                  </li>
                </>
              );
            })
        }
      </div>
      <div className='color-container'>
        <div className='color-type'>{colorResultsData[currentTab].type}</div>
        <pre className='color-desc'>{colorResultsData[currentTab].desc}</pre>
        <div className='color-recommend-box'>
      </div>

        <div className='color-recommend-title'>어울리는 색상</div>
        <div className='color-recommend-colorchip-box'>
          {
            colorResultsData[currentTab]['recommend-color'].map((color, index) => {
              return (
                <>
                  <div
                    key={index}
                    style={{ backgroundColor: `${color}` }}
                    className='recommend-color-chip'
                  />
                </>
              );
            })
        }
        </div>
      </div>
      <div className='color-overall-box'>
        <div className='color-overall-title'>우리나라 퍼스널컬러 분포</div>
        <Statistics />
      </div>
    </>
  );
}

export default ColorResult;
