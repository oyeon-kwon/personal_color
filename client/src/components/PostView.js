import React, { useState, useEffect } from 'react';
import './postview.css';

function PostView () {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // TODO: 카테고리 보여주기
  // TODO: 글쓰기 버튼 (로그인한 사용자만 가능)
  // TODO: 댓글 firebase로 보내주기

  // useEffect(() => {
  //   setComments(post.comment);
  // }, [post.comment]);

  // const inputComment = (e) => {
  //   const comment = e.target.value;
  //   setComment(comment);
  // };

  // const createComment = () => {
  //   if (comment === '') {

  //   } else {
  //     post.comment.unshift(comment);
  //     setComments(post.comment);
  //     setComment('');
  //   }
  // };

  // const enterKey = () => {
  //   if (window.event.keyCode === 13) {
  //     if (comment === '') {

  //     } else {
  //       post.comment.unshift(comment);
  //       setComments(post.comment);
  //       setComment('');
  //     }
  //   }
  // };

  return (
    <>
      <div className='post-view-box'>
        <div className='post-box'>
          <div className='post-title'>제목입니당</div>
          <div className='edit-button'>수정</div>
          <div className='post-desc-box'>
            <span className='post-user'>oana</span>

            <span className='comment-count'>댓글 9</span>
          </div>

          <div className='divider-large' />

          <div className='post-content'>
            <div className='post-img-content'>
              포스트 이미지입니다
            </div>
            <div className='post-text-content'>
              포스트 내용입니다.
            </div>
          </div>
          <div className='divider-large' />

          <div className='comment-box'>
            <div className='comment-input-box'>
              <input className='comment-input' type='text' placeholder='댓글을 입력하세요' value={comment} />
              <span className='comment-button'>댓글 등록</span>
            </div>
            <div className='comments'>
              <div className='comment-user'>oanana</div>
              <div className='comment-text'>댓글입니당.</div>
            </div>
            <div className='divider-medium' />
            <div className='comments'>
              <div className='comment-user'>oanana</div>
              <div className='comment-text'>댓글입니당.</div>
            </div>
            <div className='divider-medium' />
            <div className='comments'>
              <div className='comment-user'>oanana</div>
              <div className='comment-text'>댓글입니당.</div>
            </div>

          </div>
        </div>

      </div>

    </>
  );
}

export default PostView;
