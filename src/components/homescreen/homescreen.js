import React from 'react';
import {auth} from '../../firebase/firebase.js';
import './homescreen.scss';

import LeftSide from './left-side/left-side.js';
import MiddleChat from './middle-chat/middle-chat.js'
import RightSideInfo from './right-side-info/right-side-info.js'

const HomeScreen = () => {

  const handleLogout = () => {
    auth.signOut();
  }

  return (
      <div className='main-page-container'>
        <LeftSide />
        <MiddleChat />
        <RightSideInfo />
      </div>
  )
}

export default HomeScreen;
