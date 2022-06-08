import React, { useState, useRef, useEffect } from 'react';
import './community.css';

function Coummunity () {
  // TODO: 파이어베이스 CRUD 연결
  // TODO: 클릭하면 상세 게시판 페이지 연결
  // TODO: 게시물 검색 기능
  // TODO: 카테고리별 필터링
  // TODO: 리스트에 카테고리 표시

  const [currentTab, setCurrentTab] = useState(0);

  const categories = ['전체', 'WARM', 'COOL'];

  const selectCategoryHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div className='category-box'>
        {
            categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={currentTab === index ? 'category focused' : 'category'}
                  onClick={() => selectCategoryHandler(index)}
                >
                  {category}
                </div>
              );
            })
        }
      </div>
      <div className='search-box'>
        <input placeholder='검색어를 입력하세요' />
        {/* TODO: 아이콘 */}
      </div>
      <div className='community-content-box'>
        <table>
          {/* TODO: 페이지네이션으로 최대 게시물 10개 */}
          <tbody>
            {/* TODO: map으로 내려주기 */}
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
            <tr className='community-content'>
              <td className='community-content-title'>나 웜톤인데 이 색깔 어때?</td>
              <td className='community-content-date'>2020.01.20</td>
            </tr>
          </tbody>
        </table>
        {/* TODO: 페이지네이션 네비게이터 */}
      </div>
    </>
  );
}

export default Coummunity;
