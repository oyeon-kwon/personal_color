import React from 'react';
import './App.css';
import { firestore } from './firebase';
import Landing from './Landing';
import Nav from './Nav';
import Signup from './Signup';

function App() {

  return (
    <div className='body'>
      {/* <Nav />
      <Landing /> */}
      <Signup />
    </div>
  );
}

export default App;
