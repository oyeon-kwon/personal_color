import { get } from 'firebase/database';
import React, { useState, useRef, useEffect } from 'react';
import './community.css';
import { getPostData } from './firebase/firebase';

function Coummunity () {

  const [postsData, setPostData] = useState([]);
  // TODO: 파이어베이스 CRUD 연결
  // TODO: 클릭하면 상세 게시판 페이지 연결
  // TODO: 게시물 검색 기능
  // TODO: 카테고리별 필터링
  // TODO: 리스트에 카테고리 표시

  const [currentTab, setCurrentTab] = useState(0);

  const categories = ['전체', 'WARM', 'COOL'];

  const selectCategoryHandler = (index) => {
    setCurrentTab(index);
  };

  const getAllPosts = async () => {
    const response = await getPostData()
    const allPostArray = [];

    for(let key in response) {
      const postObject = {
        id: key,
        ...response[key]
      }
      allPostArray.push(postObject)
    }
    setPostData(allPostArray)
  }

  useEffect(() => {
    getAllPosts()
  }, [])

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
      </div>
      <div className='community-content-box'>
        <table>
          {/* TODO: 페이지네이션으로 최대 게시물 10개 */}
          <tbody>
            {
              postsData.map((post) => {
                return (
                  <tr className='community-content' key={post.key}>
                  <td className='community-content-title'>{post.title}</td>
                  <td className='community-content-date'>{post.createdAt}</td>
                </tr>
                )
              })
            }

          </tbody>
        </table>
        {/* TODO: 페이지네이션 네비게이터 */}
      </div>
    </>
  );
}

export default Coummunity;
