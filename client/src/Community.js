import React, { useState, useRef, useEffect, useMemo } from "react";
import Pagination from "./components/Pagination";
import "./community.css";
import {
  getAllPostsData,
  getFilteredByCategoryPostsData,
} from "./firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Community() {
  const navigate = useNavigate();
  // 리덕스에 저장된 authCurrentUser의 정보
  const authCurrentUser = useSelector((state) => state.authReducer.auth);

  const [postsData, setPostData] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const categories = ["전체", "WARM", "COOL", "모르겠어요"];

  // 페이지네이션에 필요한 상태
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const getAllPosts = async () => {
    const response = await getAllPostsData();
    const allPostArray = [];

    for (const key in response) {
      const postObject = {
        id: key,
        ...response[key],
      };
      allPostArray.push(postObject);
    }

    let orderedByRecentPost = allPostArray.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    setPostData(orderedByRecentPost);
  };

  const selectCategoryHandler = async (index) => {
    setCurrentTab(index);

    if (index === 0) {
      return getAllPosts();
    }
    const filteredByCategoryData = await getFilteredByCategoryPostsData(
      categories[index]
    );
    setPage(1);
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
    if (!post) {
      return <div>로딩 중</div>;
    }
    return (
      <tr
        className="community-content"
        data-id={post.id}
        data-key={post.id}
        onClick={viewPostHandler}
      >
        <td className="community-content-category" data-key={post.id}>
          {post.category}
        </td>
        <td className="community-content-title" data-key={post.id}>
          {post.title}
        </td>
        <td className="community-content-date" data-key={post.id}>
          {post.createdAt}
        </td>
      </tr>
    );
  };

  const writePostHandler = () => {
    if (authCurrentUser) {
      // 글쓰기 가능
      navigate("/community/post");
    } else {
      // 글쓰기 불가
      alert("로그인이 필요한 서비스입니다.");
      navigate("/signin");
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div className="category-box">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={currentTab === index ? "category focused" : "category"}
              onClick={() => selectCategoryHandler(index)}
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="community-body">
        <button className="write-post-button" onClick={writePostHandler}>
          글쓰기
        </button>

        <div className="community-content-box">
          {postsData.length === 0 ? (
            <div>게시물이 없습니다.</div>
          ) : (
            <table>
              <tbody>
                {postsData.slice(offset, offset + limit).map(postDataRenderer)}
              </tbody>
            </table>
          )}
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
