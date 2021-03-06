import React, { useState, useRef, useEffect } from 'react';
import './community.css';
import { getAllPostsData, getFilteredByCategoryPostsData, getSearchedPostsData } from './firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Community () {
  const navigate = useNavigate();
  const authCurrentUser = useSelector((state) => state.authReducer.auth);
  // 리덕스에 저장된 authCurrentUser의 정보

  const [postsData, setPostData] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const categories = ['전체', 'WARM', 'COOL', '모르겠어요'];

  const selectCategoryHandler = async (index) => {
    setCurrentTab(index);

    if (index === 0) {
      return getAllPosts();
    }
    const filteredByCategoryData = await getFilteredByCategoryPostsData(categories[index]);
    setPostData(filteredByCategoryData);
  };

  const getAllPosts = async () => {
    const response = await getAllPostsData();
    const allPostArray = [];

    for (const key in response) {
      const postObject = {
        id: key,
        ...response[key]
      };
      allPostArray.push(postObject);
    }
    setPostData(allPostArray);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  const viewPostHandler = (e) => {
    const id = e.target.parentElement.id;
    for (let i = 0; i < postsData.length; i++) {
      if (postsData[i].id === id) {
        navigate(`/community/${id}`);
      }
    }
  };

  const writePostHandler = () => {
    if (authCurrentUser) {
      // 글쓰기 가능
      navigate('/community/post');
    } else {
      // 글쓰기 불가
      alert('로그인이 필요한 서비스입니다.');
      navigate('/signin');
    }
  };

  return (
    <>
      <div className='category-box'>
        {
            categories.map((category, index) => {
              return (
                <div
                  key={index}
                  className={currentTab === index ? 'category focused' : 'category'}
                  onClick={() => selectCategoryHandler(index)}
                >
                  {category}
                </div>
              );
            })
        }
      </div>
      {/* <div className='search-box'>
        <input placeholder='검색어를 입력하세요' />
        TODO: 아이콘
        <button>검색</button>
      </div> */}
      <div className='community-body'>
        <button className='write-post-button' onClick={writePostHandler}>글쓰기</button>

        <div className='community-content-box'>
          {
            postsData.length === 0
              ? <div>게시물이 없습니다.</div>
              : <table>
                {/* TODO: 페이지네이션으로 최대 게시물 10개 */}
                <tbody>
                  {
                  postsData.map((post) => {
                    return (
                      <tr className='community-content' id={post.id} key={post.id} onClick={viewPostHandler}>
                        <td className='community-content-category'>{post.category}</td>
                        <td className='community-content-title'>{post.title}</td>
                        <td className='community-content-date'>{post.createdAt}</td>
                      </tr>
                    );
                  })
                }
                </tbody>
              </table>
          }
          {/* TODO: 페이지네이션 네비게이터 */}
        </div>
      </div>
    </>
  );
}

export default Community;
