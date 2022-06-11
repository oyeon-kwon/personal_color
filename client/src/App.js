import React from 'react';
import './App.css';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
import Camera from './components/Camera';
import ColorList from './components/ColorList';
import Commumity from './Community';
import Mypage from './Mypage';
import PostView from './components/PostView';
import PostInput from './components/PostInput';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App () {
  return (
    <>
      <div className='body'>
        <Router>
          <div className='nav'>
            <span className='nav-link'>
              <Link to='/'>HOME</Link>
            </span>
            <span className='nav-link'>
              <Link to='/camera-self'>COLOR</Link>
            </span>
            <span className='nav-link'>
              <Link to='/community'>COMMUNITY</Link>
            </span>
            <span className='nav-link'>
              <Link to='/mypage'>MYPAGE</Link>
            </span>
            <span className='nav-link'>
              <Link to='/signup'>회원가입</Link>
            </span>
            <span className='nav-link'>
              <Link to='/signin'>로그인</Link>
            </span>
          </div>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/camera-self' element={<Camera />} />
            <Route path='/camera-self/colors' element={<ColorList />} />
            <Route path='/community' element={<Commumity />} />
            <Route path='/community/:id' element={<PostView />} />
            <Route path='/community/post' element={<PostInput />} />
            <Route path='/mypage' element={<Mypage />} />
          </Routes>
        </Router>
        {/* <Landing /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
      </div>
    </>

  );
}

export default App;
