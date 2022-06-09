import React, { useState, useEffect } from 'react';
import './postview.css';
import { getPostData } from '../firebase/firebase';
import { useParams } from 'react-router-dom';

function PostView () {

  const [postData, setPostData] = useState()

  // TODO: 카테고리 보여주기
  // TODO: 댓글 firebase로 보내주기
  // TODO: 해당하는 포스트의 ref를 받아와서 코멘트 데이터 post DB로 보내기

  let { id } = useParams()

  const getPostDataHandler = async () => {
    const response = await getPostData(id);
    setPostData(response)
  };

  useEffect(() => {
    getPostDataHandler()
  }, [])

  // ! 여기부터는 코멘트
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

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
    {
      postData ? 
      <div className='post-view-box'>
      <div className='post-box'>
        <div className='post-title'>{postData.title}</div>
        <div className='edit-button'>수정</div>
        <div className='post-desc-box'>
          <span className='post-user'>{postData.userId}</span>
          <span className='post-created-at'>{postData.createdAt}</span>
           {/* 댓글 동적 데이터로 변경 */}
          <span className='comment-count'>댓글 9</span>
        </div>

        <div className='divider-large' />

        <div className='post-content'>
          <div className='post-img-content'>
            <img src={postData.image} />
          </div>
          <div className='post-text-content'>{postData.content}</div>
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
        </div>
      </div>

    </div>
    : <div>404</div>
    }


    </>
  );
}

export default PostView;
