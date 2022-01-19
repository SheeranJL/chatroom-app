import React from 'react';
import {auth} from '../../firebase/firebase.js';
import './homescreen.scss';

const HomeScreen = () => {

  const handleLogout = () => {
    auth.signOut();
  }

  return (
      <div>
        <span>this is a test</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
  )
}

export default HomeScreen;
