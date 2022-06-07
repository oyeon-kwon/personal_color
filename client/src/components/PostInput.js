import React, { useState, useEffect } from 'react';
import './postInput.css';

function PostInput () {

    // TODO : 임시저장
    // 넘겨야 할 데이터
      // createdAt
      // title
      // image
      // content
      // userid
      // todo: category

  return (
    <>
    <div className='post-view-box'>
    <div className='post-box'>
            <select name="categories" id="category-select">
                <option value="">카테고리를 지정해 주세요.</option>
                <option value="warm">WARM</option>
                <option value="cool">COOL</option>
                <option value="none">모름</option>
            </select>
            <input className='post-title-input' placeholder='제목을 입력해 주세요.'></input>


            <div className='post-content'>
                <div className='post-img-content-input'>
                  +
                </div>
                <input className='post-text-content-input' placeholder='내용을 입력해 주세요.'>
                
                </input>
            </div>


            <div className='regist-button'>등록</div>
        </div>

    </div>

    </>
  );
}

export default PostInput;
