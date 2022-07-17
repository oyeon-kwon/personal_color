import React, { useState, useRef, useEffect } from 'react';
import './mypage.css';
import { useSelector, useDispatch } from 'react-redux';
import colorresult from './components/colorresult.json';
import { storage, writeUserImageData, deleteUserHandler, getUserData } from './firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { setAuth } from './reducer/authReducer';

function Mypage () {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const seasons = ['봄', '여름', '가을', '겨울'];
  const authCurrentUser = useSelector((state) => state.authReducer.auth);
  
  const [imgUrl, setImgUrl] = useState('');
  const [editUserinfoModalisOpen, setEditUserinfoModalisOpen] = useState(false);
  const [userImage, setUserImage] = useState(authCurrentUser.image)

  // 유저 데이터 최신 상태로 받아오기
  useEffect(() => {
    getUserData(authCurrentUser.userId)
    .then((snapshot) => {
      if (snapshot.exists()) {
        let currentUserInfo = snapshot.val()
        dispatch(setAuth(currentUserInfo));
      } else {
        console.log('No data available');
      }
    });
  }, [])

  const imageHandler = (e) => {
    const imgFile = e.target.files;
    // 이미지 storage로 전송
    const file = imgFile[0];
    const storageRef = storage.ref();
    const saveRoute = storageRef.child(`${authCurrentUser.userId + '-' + imgFile[0].name}`);
    const upload = saveRoute.put(file);

    const imgUrl = `https://firebasestorage.googleapis.com/v0/b/personal-color-62f62.appspot.com/o/${authCurrentUser.userId + '-' + e.target.files[0].name}?alt=media`;
    
    setImgUrl(imgUrl);
  };

  const editUserinfoPopUpHandler = () => {
    setEditUserinfoModalisOpen(!editUserinfoModalisOpen);
  };

  const editUserHandler = () => {
    writeUserImageData(authCurrentUser.userId, imgUrl);
    setUserImage(imgUrl)
  };

  const deleteUserMypageHandler = () => {
    const result = window.confirm('정말 탈퇴하시겠습니까?');
    if (result === true) {
      deleteUserHandler();
      navigate('/');
    }
  };

  return (
    <>
      {/* - 나에게 잘 어울리는 결과 분석 (어울리는 컬러 / 베스트 스타일링 (헤어컬러, 메이크업-섀도우, 볼터치, 립, 코디) / 같은 타입 연예인) */}
      <div className='mypage-box'>
        <div className='personal-img-box'>
          <img src={userImage} alt='img' className='personal-img' />
        </div>

        <div className='mypage-edit-button' onClick={editUserinfoPopUpHandler}>내 정보 수정</div>
        {
          editUserinfoModalisOpen
            ? <>
              <div className='modal-backdrop'>
                <div className='modal'>
                  <span onClick={editUserinfoPopUpHandler} className='close-button'>&times;</span>
                  <div className='personal-img-box'>
                    <img src={userImage} alt='img' className='personal-img' />
                  </div>

                  {/*  */}

                  <label htmlFor="upload-photo" className='upload-photo'>이미지 추가</label>
                  <input type="file" name="photo" id="upload-photo" onChange={imageHandler} />

                  {/*  */}

                  <div className='mypage-personal-edit-button' onClick={editUserHandler}>수정</div>
                  <div className='delete-user-button' onClick={deleteUserMypageHandler}>회원 탈퇴</div>
                </div>
              </div>
            </>

            : null
        }

        {
          authCurrentUser.color === undefined ?
          <>
            <div className='mypage-personal-desc'>{authCurrentUser.username}님의 등록된 컬러 정보가 없습니다. <br /> 진단을 통해 내 컬러 정보를 등록하러 가 볼까요?</div>
          </>
          :
          <>
            <div className='mypage-personal-desc'>{authCurrentUser.username}님의 퍼스널 컬러는</div>
            <div className='mypage-title'>{authCurrentUser.color}</div>
            {
              seasons.map((season, i) => {
                if (authCurrentUser.color.indexOf(season) !== -1) {
                  return (
                    <>
                      <div className='personal-color-desc'>{colorresult[i].desc}</div>
                    </>
                  );
                }
              })
              }
            <div className='divider-small' />
            <div className='mypage-title'>어울리는 컬러</div>
            <div className='mypage-colorchip-box'>
              {
                seasons.map((season, i) => {
                  if (authCurrentUser.color.indexOf(season) !== -1) {
                    const color = colorresult[i]['recommend-color'].map((color) => {
                      return (
                        <div className='mypage-color-chip' style={{ backgroundColor: `${color}` }} key={color + i} />
                      );
                    });
                    return color;
                  }
                })
              }
            </div>
          </>
        }
      </div>
    </>
  );
}

export default Mypage;
