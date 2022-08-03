import React, { useState, useEffect } from 'react';
import './postview.css';
import { getPostData, writeCommentData, deletePostData } from '../firebase/firebase';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PostView () {

  const navigate = useNavigate();

  // 리덕스에 저장된 authCurrentUser의 정보
  const authCurrentUser = useSelector((state) => state.authReducer.auth);

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
      alert('댓글을 입력하세요.');
    } else {
      writeCommentData(id, authCurrentUser.username, comment);
      setComment('');
    }
  };

  const enterCommentKey = () => {
    if (window.event.keyCode === 13) {
      if (comment === '') {
        alert('댓글을 입력하세요.');
      } else {
        writeCommentData(id, authCurrentUser.username, comment);
        setComment('');
      }
    }
  };

  const deletePostHandler = async () => {
    let deleteConfirm = window.confirm('삭제하시겠습니까?')

    if(deleteConfirm) {
      const postData = await getPostData(id);
  
      await deletePostData(id)
      // TODO: 이거 navigate then으로 늦게 처리되게
      navigate('/community');
    }
  }

  const editPostHandler = () => {
    navigate(`/community/${id}/edit`)
    
  }

  return (
    <>
      {
      postData
        ? <div className='post-view-box'>
          <div className='post-box'>
            <div className='post-title'>{postData.title}</div>
            {
              authCurrentUser.userId === postData.userId ? 
                <div className='button-container'>
                  <div className='edit-button' onClick={editPostHandler} >수정</div>
                  <div className='delete-button' onClick={deletePostHandler}>삭제</div>
                </div>
              : null
            }
            <div className='post-desc-box'>
              <div className='post-desc-box-left'>
                <span className='post-category'>{postData.category}</span>
                {
                  postData.comment
                  ? <span className='comment-count'>댓글 {postData.comment.length}</span>
                  : <span className='comment-count'>댓글 0</span>
                }
              </div>
              <div className='post-desc-box-right'>
                <span className='post-user'>{postData.username}</span>
                <span className='post-created-at'>{postData.createdAt}</span>
              </div>
            </div>

            <div className='divider-large' />

            <div className='post-content'>
              {
                postData.image ?
                  <div className='post-img-content'>
                    <img src={postData.image} className='post-img'/>
                  </div>
                : null
              }
              <div className='post-text-content' dangerouslySetInnerHTML={{ __html: postData.content }}></div>
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
