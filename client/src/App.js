import React from 'react';
import './App.css';
import { firestore } from './firebase';
import Landing from './Landing';
import Nav from './Nav';


function App() {

  return (
    <div className='body'>
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
