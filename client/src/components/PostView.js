import React, { useState, useEffect } from 'react';
import './postview.css';
import { getPostData, writeCommentData } from '../firebase/firebase';
import { useParams } from 'react-router-dom';

function PostView () {
  const [postData, setPostData] = useState();
  
  // 포스트 가져오기
  const { id } = useParams();

  const getPostDataHandler = async () => {
    const response = await getPostData(id);
    setPostData(response);
  };

  useEffect(() => {
    getPostDataHandler();
  }, [postData]);

  // 코멘트
  const [comment, setComment] = useState('');

  const inputComment = (e) => {
    const commentInput = e.target.value;
    setComment(commentInput);
  };

  const createComment = async () => {
    if (comment === '') {
      alert('댓글을 입력하세요.')
    } else {
      // TODO: 로그인된 user 정보 받아와서 넣어주기
      writeCommentData(id, 'oana', comment);
      setComment('');
    }
  };

  const enterCommentKey = () => {
    if (window.event.keyCode === 13) {
      if (comment === '') {
        alert('댓글을 입력하세요.')
      } else {
        writeCommentData(id, 'oana', comment);
        setComment('');
      }
    }
  };

  return (
    <>
      {
      postData
        ? <div className='post-view-box'>
          <div className='post-box'>
            <div className='post-title'>{postData.title}</div>
            <div className='edit-button'>수정</div>
            <div className='post-desc-box'>
              <span className='post-category'>{postData.category}</span>
              <span className='post-user'>{postData.userId}</span>
              <span className='post-created-at'>{postData.createdAt}</span>
              {
             postData.comment
               ? <span className='comment-count'>댓글 {postData.comment.length}</span>
               : <span className='comment-count'>댓글 0</span>
           }
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
                <input className='comment-input' type='text' placeholder='댓글을 입력하세요' value={comment} onChange={inputComment} onKeyUp={enterCommentKey} />
                <span className='comment-button' onClick={createComment}>댓글 등록</span>
              </div>
              <div className='comments'>
                {
              postData.comment
                ? postData.comment.map((comment, i) => {
                    return (
                      <div key={i}>
                        <div className='comment-user'>{comment.commentUser}</div>
                        <div className='comment-text'>{comment.commentInput}</div>
                        <div className='divider-medium' />
                      </div>
                    );
                  })
                : <></>
            }
              </div>
            </div>
          </div>
        </div>
        : <div>404</div>
    }

    </>
  );
}

export default PostView;
