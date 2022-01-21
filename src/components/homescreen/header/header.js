import './header.scss';
import React, {useContext} from 'react';
import {appContext} from '../../../context/context.js';
import {useNavigate} from 'react-router-dom';
import {auth, setOfflineUser, firestore} from '../../../firebase/firebase.js';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import OnlineUser from '../../reuseable/online-user/online-user.js'
const Header = () => {

  return (
    <div className='app-header'>

      <h2 className='header-name'>Chatroom lobby</h2>

      <div className='online-now'>
        <span>Online now</span>
        <OnlineUser />
      </div>

      <div className='buttons'>
        <button>Logout</button>
      </div>


    </div>
  )
}

export default Header;
