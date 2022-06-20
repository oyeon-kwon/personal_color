import React, { useState, useEffect } from 'react';
import './postInput.css';
import { writePostData, storage } from '../firebase/firebase';
import { useSelector } from 'react-redux';

function PostInput () {
  // TODO: 이미지 업로드 css 변경
  
  // 리덕스에 저장된 authCurrentUser의 정보
  const authCurrentUser = useSelector((state) => state.authReducer.auth);

  // TODO: authCurrentUser 활용해서 유저 정보를 포스트 데베에 같이 저장하기

  const [postInput, setPostInput] = useState({
    userId: 'oana',
    title: '',
    content: '',
    category: '',
    image: ''
  });

  const handleChangeCategory = (e) => {
    setPostInput({ ...postInput, category: e.target.value });
  };

  const imageHandler = (e) => {
    const imgFile = e.target.files;
    // 이미지 storage로 전송
    const file = imgFile[0];
    const storageRef = storage.ref();
    const saveRoute = storageRef.child(`${postInput.userId + '-' + imgFile[0].name}`);
    const upload = saveRoute.put(file);

    const imgUrl = `https://firebasestorage.googleapis.com/v0/b/personal-color-62f62.appspot.com/o/${postInput.userId + '-' + e.target.files[0].name}?alt=media`;

    setPostInput({ ...postInput, image: imgUrl });
  };

  const registPost = () => {
    // TODO: firebase에서 userId 받아오기!!!

    // 텍스트 정보 DB로 전송
    const { userId, title, content, category, image } = postInput;

    if (!postInput.title) {
      alert('제목을 입력하세요.');
    } else if (!postInput.content) {
      alert('내용을 입력하세요.');
    } else if (!postInput.category) {
      alert('카테고리를 지정하세요.');
    } else {
      writePostData(userId, title, content, image, category);
    }
    // TODO: 전송 후 PostView로 라우팅 처리 필요
  };

  return (
    <>
      <div className='post-view-box'>
        <div className='post-box'>
          <select name='categories' id='category-select' onChange={handleChangeCategory} value={postInput.value}>
            <option value=''>카테고리를 지정해 주세요.</option>
            <option value='WARM'>WARM</option>
            <option value='COOL'>COOL</option>
            <option value='모르겠어요'>모르겠어요</option>
          </select>
          <input className='post-title-input' placeholder='제목을 입력해 주세요.' onChange={(e) => { setPostInput({ ...postInput, title: e.target.value }); }} />

          <div className='post-content'>
            <input className='post-image-input' type='file' multiple='multiple' onChange={imageHandler} />
            <input className='post-text-content-input' placeholder='내용을 입력해 주세요.' onChange={(e) => { setPostInput({ ...postInput, content: e.target.value }); }} />
          </div>

          <div className='regist-button' onClick={registPost}>등록</div>
        </div>

      </div>

    </>
  );
}

export default PostInput;
