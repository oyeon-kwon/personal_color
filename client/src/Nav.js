import React from 'react';
import './nav.css';
import Signup from './Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Nav () {
  
    return (
        <>
        <Router>
          <div className='nav'>
            <span className='nav-link'>
              <Link to='/'>HOME</Link>
            </span>
            <span className='nav-link'>
              <Link to='/color'>COLOR</Link>
            </span>
            <span className='nav-link'>
              <Link to='/community'>COMMUNITY</Link>
            </span>
            <span className='nav-link'>
              <Link to='/mypage'>MYPAGE</Link>
            </span>
          </div>
          <Routes>
            {/* <Route path='/signup' element={<Signup />} /> */}
            {/* <Route path='/' element={} /> */}
          </Routes>
        </Router>
        </>
    )
}

export default Nav;