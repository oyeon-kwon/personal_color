import React, { useState, useEffect, useRef } from "react";
import Landing from "../Landing";
import Signup from "../Signup";
import Login from "../Login";
import CameraSelf from "../components/CameraSelf";
import ColorList from "../components/ColorList";
import Commumity from "../Community";
import Mypage from "../Mypage";
import PostView from "../components/PostView";
import PostInput from "../components/PostInput";
import CameraAI from "../components/CameraAI";
import ColorResult from "../components/ColorResult";
import PostEdit from "../components/PostEdit";

import { useNavigate } from "react-router-dom";
import { setAuth } from "../reducer/authReducer";
import logo from "../img/logowhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getCurrentLoggedInUser, signout } from "../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authCurrentUser = useSelector((state) => state.authReducer.auth);

  const loginStatusHandler = async () => {
    const currentUserInfo = await getCurrentLoggedInUser();

    if (currentUserInfo) {
      dispatch(setAuth(currentUserInfo));
    }
  };

  useEffect(() => {
    loginStatusHandler();
  }, []);

  const logoutHandler = () => {
    signout();
    dispatch(setAuth(""));
    navigate("/");
  };

  const navLinksRef = useRef();

  const showMenuForResponsive = () => {
    if (navLinksRef.current.classList.value.indexOf("active") === -1) {
      navLinksRef.current.classList.add("active");
    } else {
      navLinksRef.current.classList.remove("active");
    }
  };

  return (
    <>
      <div id="nav">
        <img className="home-logo" src={logo} />
        <FontAwesomeIcon
          icon={faBars}
          className="menu-hamburger"
          onClick={showMenuForResponsive}
        />

        <div ref={navLinksRef} className="nav-link-list">
          <span className="nav-link">
            <Link to="/">HOME</Link>
          </span>
          <span className="nav-link">
            <Link to="/camera-self">스스로 진단하기</Link>
          </span>
          <span className="nav-link">
            <Link to="/camera-ai">AI로 진단하기</Link>
          </span>
          <span className="nav-link">
            <Link to="/color">COLOR</Link>
          </span>
          <span className="nav-link">
            <Link to="/community">COMMUNITY</Link>
          </span>
          <span className="nav-link">
            {authCurrentUser ? (
              <Link to="/mypage">MYPAGE</Link>
            ) : (
              <Link to="/signup">회원가입</Link>
            )}
          </span>
          <span className="nav-link">
            {authCurrentUser ? (
              <span onClick={logoutHandler} className="logout">
                로그아웃
              </span>
            ) : (
              <Link to="/signin">로그인</Link>
            )}
          </span>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/camera-self" element={<CameraSelf />} />
        <Route path="/camera-ai" element={<CameraAI />} />
        <Route path="/camera-self/colors" element={<ColorList />} />
        <Route path="/community" element={<Commumity />} />
        <Route path="/community/:id" element={<PostView />} />
        <Route path="/community/post" element={<PostInput />} />
        <Route path="/community/:id/edit" element={<PostEdit />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/color" element={<ColorResult />} />
      </Routes>
    </>
  );
}

export default Nav;
