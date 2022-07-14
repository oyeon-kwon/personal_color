import React, { useState, useRef, useEffect } from 'react';
import './warmcoolselfcheck.css';

function WarmCoolSelfCheck () {

    const warmCheckList = [
        '햇볕에 장시간 있으면 쉽게 탄다.', 
        '골드 액세서리가 잘 어울린다.', 
        '손목에 초록색 혈관이 많다.',
        '아이보리나 베이지색 티셔츠가 잘 어울린다.',
        '머리카락 색이 브라운에 가깝다.',
        '브라운, 오렌지, 그린 컬러의 매니큐어를 바르면 손이 예뻐 보인다.',
        '피부에 노란기가 많다.',
        '평소 친구들로부터 섹시하다 라는 평가를 많이 받는다.'
    ]

    const coolCheckList = [
        '햇볕에 장시간 있으면 빨갛게 익는다.', 
        '실버 액세서리가 잘 어울린다.', 
        '손목에 파란색 혈관이 많다.',
        '순백색 티셔츠가 잘 어울린다.',
        '머리카락 색이 블랙에 가깝다.',
        '레드, 핑크, 블루 컬러의 매니큐어를 바르면 손이 예뻐 보인다.',
        '피부에 붉은기가 많다.',
        '평소 친구들로부터 시크하다 라는 평가를 많이 받는다.'
    ]

  return (
    <>
      <div className='warm-cool-self-check-box'>
        <div className='check-list'>
            <div className='check-list-title'>WARM (봄 / 가을) 자가진단 체크리스트</div>
            {
                warmCheckList.map((checkBullet) => {
                    return (
                        <label className="check-container">
                            <div className='check-desc'>{checkBullet}</div>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    )
                })
            }
        </div>

        <div className='check-list'>
            <div className='check-list-title'>COOL (여름 / 겨울) 자가진단 체크리스트</div>
            {
                coolCheckList.map((checkBullet) => {
                    return (
                        <label className="check-container">
                            <div className='check-desc'>{checkBullet}</div>
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    )
                })
            }
        </div>
      </div>
    </>
  );
}

export default WarmCoolSelfCheck;
