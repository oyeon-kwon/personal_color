import React, { useState, useEffect } from "react";
import "./login.css";
import {
  auth,
  loginEmail,
  getUserData,
  writeUserData,
  verifyTokenFromFirebase,
  getCurrentLoggedInUser,
} from "./firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setAuth } from "./reducer/authReducer";
import { useDispatch, useSelector } from "react-redux";
/* global Kakao */

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const emailInputHandler = (e) => {
    const email = e.target.value;
    setEmailInput(email);
  };

  const passwordInputHandler = (e) => {
    const password = e.target.value;
    setPasswordInput(password);
  };

  const submitLoginHandler = async () => {
    try {
      const userinfo = await loginEmail(emailInput, passwordInput);
      getUserData(userinfo.user.uid).then((snapshot) => {
        if (snapshot.exists()) {
          alert("로그인에 성공했습니다.");
          navigate("/");
          window.location.reload();
          // verifyTokenFromFirebase();
        } else {
          console.log("No data available");
        }
      });
    } catch (err) {
      if (err.message === "Firebase: Error (auth/user-not-found).") {
        alert("이메일에 해당하는 유저를 찾을 수 없습니다.");
      }
      if (err.message === "Firebase: Error (auth/wrong-password).") {
        alert("비밀번호가 올바르지 않습니다.");
      }
      if (err.message === "Firebase: Error (auth/invalid-email).") {
        alert("이메일 형식이 유효하지 않습니다.");
      }
    }
  };

  const googleLoginHandler = async () => {
    const googleProvider = new GoogleAuthProvider();

    googleProvider.addScope("profile");
    googleProvider.addScope("email");
    const googleLoginResult = await signInWithPopup(auth, googleProvider);

    // 유저 정보
    const user = {
      userId: googleLoginResult.user.uid,
      username: googleLoginResult.user.displayName,
      email: googleLoginResult.user.email,
      image: googleLoginResult.user.photoURL,
    };

    dispatch(setAuth(user));
    navigate("/");

    // 액세스 토큰
    const credential =
      GoogleAuthProvider.credentialFromResult(googleLoginResult);
    const token = credential.accessToken;
  };

  const kakaoLoginHandler = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000",
    });
  };

  return (
    <>
      <div className="modal-background">
        <div className="modal-body">
          <div className="login-title">Login with</div>
          <div className="form">
            <div className="email">
              <div className="desc">email</div>
              <input
                className="login-email-form-box"
                onChange={emailInputHandler}
              />
            </div>
            <div className="password">
              <div className="desc">비밀번호</div>
              <input
                className="login-password-form-box"
                type="password"
                onChange={passwordInputHandler}
              />
            </div>
            <div className="submit-button" onClick={submitLoginHandler}>
              로그인
            </div>
            <div className="hr">
              <span className="login-line" />
              <span>or</span>
              <span className="login-line" />
            </div>
            <div className="social-login-box">
              <span
                className="google social-login-button"
                onClick={googleLoginHandler}
              >
                구글
              </span>
              {/* <span
                className="kakao social-login-button"
                onClick={kakaoLoginHandler}
              >
                카카오
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
