import './header.scss';
import React, {useContext, useEffect, useState} from 'react';
import {appContext} from '../../../context/context.js';
import {useNavigate} from 'react-router-dom';
import {auth, setOfflineUser, firestore} from '../../../firebase/firebase.js';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import OnlineUser from '../../reuseable/online-user/online-user.js'

const Header = () => {

  const onlineUsersRef = firestore.collection('online');
  const [onlineUsers] = useCollectionData(onlineUsersRef, {idField: 'id'});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (onlineUsers) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [onlineUsers])

  return (
    <div className='app-header'>

      <h2 className='header-name'>Chatroom lobby</h2>

      <div className='online-now-container'>
        <span>Online now</span>
        <div className='online-now-users'>
        {
          loading
          ? <h1>loading</h1>
          : onlineUsers.map((user, index) => <OnlineUser key={index} onlineUser={user} />)
        }
        </div>
      </div>

      <div className='buttons'>
        <button>Logout</button>
      </div>


    </div>
  )
}

export default Header;
