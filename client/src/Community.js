import React, { useState, useRef, useEffect } from 'react';
import Pagination from './components/Pagination';
import './community.css';
import { getAllPostsData, getFilteredByCategoryPostsData } from './firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Community () {
  const navigate = useNavigate();
  const authCurrentUser = useSelector((state) => state.authReducer.auth);
  // 리덕스에 저장된 authCurrentUser의 정보

  const [postsData, setPostData] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const categories = ['전체', 'WARM', 'COOL', '모르겠어요'];

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

    let orderedByRecentPost = allPostArray.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

    setPostData(orderedByRecentPost)
  };



  useEffect(() => {
    getAllPosts();
  }, []);

  const selectCategoryHandler = async (index) => {
    setCurrentTab(index);

    if (index === 0) {
      return getAllPosts();
    }
    const filteredByCategoryData = await getFilteredByCategoryPostsData(categories[index]);
    setPostData(filteredByCategoryData);
  };

  const viewPostHandler = (e) => {
    const id = e.target.dataset.key;

    for (let i = 0; i < postsData.length; i++) {
      if (postsData[i].id === id) {
        navigate(`/community/${id}`);
      }
    }
  };

  const postDataRenderer = (post) => {
    return (
      <tr className='community-content' data-id={post.id} data-key={post.id} onClick={viewPostHandler}>
        <td className='community-content-category' data-key={post.id}>{post.category}</td>
        <td className='community-content-title' data-key={post.id}>{post.title}</td>
        <td className='community-content-date' data-key={post.id}>{post.createdAt}</td>
      </tr>
    );
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

  // 페이지네이션
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
                <tbody>
                  {
                    postsData.slice(offset, offset + limit).map(postDataRenderer)
                  }
                </tbody>
              </table>
          }
          <footer>
            <Pagination
              total={postsData.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </footer>
        </div>
      </div>
    </>
  );
}

export default Community;
