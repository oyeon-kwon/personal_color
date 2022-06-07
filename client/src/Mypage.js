import React, { useState, useRef, useEffect } from 'react';
import './mypage.css';

function Mypage () {
  return (
    <>
      {/* - 나에게 잘 어울리는 결과 분석 (어울리는 컬러 / 베스트 스타일링 (헤어컬러, 메이크업-섀도우, 볼터치, 립, 코디) / 같은 타입 연예인) */}
      <div className='mypage-box'>
        <div className='personal-img'></div>
        <div className='mypage-title'>가을 웜톤</div>
        <div className='personal-color-desc'>가을 웜톤은 어쩌구 저쩌구 한 사람입니다. 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구 어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 저쩌구어쩌구 </div>
        <div className='divider-small'></div>
        <div className='mypage-title'>어울리는 컬러</div>
        <div className='mypage-color-chip'>
          {/* 컬러들 map으로 뿌려주기 */}
        </div>
      </div>
    </>
  );
}

export default Mypage;
