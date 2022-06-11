import React, { useState, useRef, useEffect } from 'react';
import './community.css';
import { getAllPostsData, getFilteredByCategoryPostsData } from './firebase/firebase';
import { useNavigate } from 'react-router-dom';

function Coummunity () {
  const [postsData, setPostData] = useState([]);
  const navigate = useNavigate();

  // TODO: 게시물 검색 기능
  // TODO: 글쓰기 버튼 (로그인한 사용자만 가능) => PostInput 컴포넌트로 연결

  const [currentTab, setCurrentTab] = useState(0);

  const categories = ['전체', 'WARM', 'COOL', '모르겠어요'];

  const selectCategoryHandler = async (index) => {
    setCurrentTab(index);

    if(index === 0) {
      return getAllPosts();
    }
    let filteredByCategoryData = await getFilteredByCategoryPostsData(categories[index])
    setPostData(filteredByCategoryData)
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
      <div className='search-box'>
        <input placeholder='검색어를 입력하세요' />
        {/* TODO: 아이콘 */}
        <button>검색</button>
      </div>
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
    </>
  );
}

export default Coummunity;
