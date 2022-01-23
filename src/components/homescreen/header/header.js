import './header.scss';
import React, {useContext, useEffect, useState} from 'react';
import {appContext} from '../../../context/context.js';
import {useNavigate} from 'react-router-dom';
import {auth, setOfflineUser, firestore} from '../../../firebase/firebase.js';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import OnlineUser from '../../reuseable/online-user/online-user.js'

const Header = () => {

  const {data, actions} = useContext(appContext);
  const onlineUsersRef = firestore.collection('online');
  const [onlineUsers] = useCollectionData(onlineUsersRef, {idField: 'id'});
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    if (onlineUsers) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [onlineUsers])

  const handleLogout = async() => {
    await auth.signOut();
    actions.setCurrentUser(null);
    setOfflineUser(data.currentUser.user.uid);
    navigate('/login');
  }

  return (
    <div className='app-header'>

      <div className='header-name'>
        <h2>Open chatroom</h2>
      </div>

      <div className='online-now-container'>
      
        <div className='online-now-users'>

        {
          loading
          ? <h1>loading</h1>
          : onlineUsers.map((user, index) => <OnlineUser key={index} onlineUser={user} />)
        }

        </div>

      </div>

      <div className='buttons'>
        <button onClick={handleLogout}>Logout</button>
      </div>


    </div>
  )
}

export default Header;
