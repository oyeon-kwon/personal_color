import React, { useState, useRef, useEffect } from 'react';
import Color from './Color';
import colorData from './color.json';
import './colorlist.css';
import { useSelector } from 'react-redux';


function ColorList () {
  const authCurrentUser = useSelector((state) => state.authReducer.auth);
  // 리덕스에 저장된 authCurrentUser의 정보

  // TODO: color.json 데이터 가공 필요 (봄 여름 가을 겨울 카테고리로 나누기)
  // TODO: 여기서 내 퍼스널 컬러 선택하기 기능 추가, 저장하기 누르면 서버로 컬러 전송 (authCurrentUser가 있을 경우에만!)
  const [currentTab, setCurrentTab] = useState(0);

  const seasons = [
    { name: '전체', colorThemes: Object.keys(colorData) },
    { name: '봄', colorThemes: ['봄 라이트 페일', '봄 라이트', '봄 브라이트'] },
    { name: '여름', colorThemes: ['여름 라이트 페일', '여름 라이트 브라이트', '여름 브라이트', '여름 뮤트 라이트그레이시', '여름 뮤트 소프트', '여름 뮤트 그레이시', '여름 뮤트 덜'] },
    { name: '가을', colorThemes: ['가을 뮤트 라이트그레이시', '가을 뮤트 소프트', '가을 뮤트 그레이시', '가을 뮤트 덜', '가을 스트롱', '가을 딥 다크그레이시', '가을 딥 다크', '가을 딥'] },
    { name: '겨울', colorThemes: ['겨울 브라이트 스트롱', '겨울 브라이트 비비드', '겨울 브라이트 다크그레이시', '겨울 브라이트 다크', '겨울 브라이트 딥'] }
  ];

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
              );
            })
        }
      </div>
      <div className='colors-list'>
        {
            seasons[currentTab].colorThemes.map((colorTheme, index) => {
              return (
                <div className='color-card' key={index}>
                  <div className='color-theme-title'>{colorTheme}</div>
                  <Color colorTheme={colorTheme} key={index} />
                </div>
              );
            })
        }
      </div>
    </>
  );
}

export default ColorList;
