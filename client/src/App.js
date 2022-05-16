import React from 'react';
import './App.css';
import { firestore } from './firebase';
import Landing from './Landing';
import Nav from './Nav';
import Signup from './Signup';
import Login from './Login';

function App() {

  return (
    <div className='body'>
      {/* <Nav /> */}
      {/* <Landing /> */}
      <Signup />
      {/* <Login /> */}
    </div>
  );
}

export default App;
