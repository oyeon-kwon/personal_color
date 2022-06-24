import React, { useState, useRef, useEffect } from 'react';
import './mypage.css';
import { useSelector } from 'react-redux';
import colorresult from './components/colorresult.json'

function Mypage () {
  const seasons = ['봄', '여름', '가을', '겨울']
  const authCurrentUser = useSelector((state) => state.authReducer.auth);
  // 리덕스에 저장된 authCurrentUser의 정보: email, username, color, +img

  // TODO: 데이터 동적으로 가져오기, 회원 탈퇴, 이미지 추가 만들기, 비밀번호 재설정

  return (
    <>
      {/* - 나에게 잘 어울리는 결과 분석 (어울리는 컬러 / 베스트 스타일링 (헤어컬러, 메이크업-섀도우, 볼터치, 립, 코디) / 같은 타입 연예인) */}
      <div className='mypage-box'>
        <div className='personal-img'>
          <img src={authCurrentUser.img} alt='img' />
        </div>
        <div className='mypage-personal-desc'>{authCurrentUser.username}님의 퍼스널 컬러는</div>
        <div className='mypage-title'>{authCurrentUser.color}</div>
          {
            seasons.map((season, i) => {
              if(authCurrentUser.color.indexOf(season) !== -1) {
                return (
                  <>
                    <div className='personal-color-desc'>{colorresult[i].desc}</div>
                  </>
                )
              }
            })
          }
        <div className='divider-small' />
        <div className='mypage-title'>어울리는 컬러</div>
        <div className='mypage-colorchip-box'>
          {
            seasons.map((season, i) => {
              if(authCurrentUser.color.indexOf(season) !== -1) {
                let color = colorresult[i]['recommend-color'].map((color) => {
                  return (
                    <div className='mypage-color-chip' style={{backgroundColor: `${color}`}} key={i}></div>
                  )
                })
                return color
              }
            })
          }
        </div>
      </div>
    </>
  );
}

export default Mypage;
