import React from 'react';
import {auth} from '../../firebase/firebase.js';
import './homescreen.scss';

import Header from './header/header.js';
import MiddleChat from './middle-chat/middle-chat.js'

const HomeScreen = () => {

  const handleLogout = () => {
    auth.signOut();
  }

  return (
      <div className='main-page-container'>
        <MiddleChat />
      </div>
  )
}

export default HomeScreen;
