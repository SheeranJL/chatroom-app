import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {appContext} from '../../../context/context.js';
import './left-side.scss';
import {auth, setOfflineUser} from '../../../firebase/firebase.js';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestore} from '../../../firebase/firebase.js';

import OnlineUser from '../../reuseable/online-user/online-user.js';

const LeftSide = () => {

  const {data, actions} = useContext(appContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  const onlineUsersRef = firestore.collection('online');
  const [onlineUsers] = useCollectionData(onlineUsersRef, {idField: 'id'});

  useEffect(() => {
    if (onlineUsers) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [onlineUsers])



  const handleSignOut = async() => {
    await auth.signOut();
    actions.setCurrentUser(null)
    setOfflineUser(data.currentUser.user.uid);
    navigate('/login');
  }



  return (
    <div className='left-side-container'>

    <div className='left-side-banner'>
      <h1>Left side container</h1>
    </div>

      <div className='chat-history'>
        <h1>Chats</h1>
        <h1>Go</h1>
        <h1>Here</h1>
      </div>

      <div className='online-and-friends'>
        <div className='online-status'>
          <h1>Online</h1>
          {
            loading
            ? <h1>loading</h1>
            : onlineUsers.map((user, index) => <OnlineUser key={index} onlineUser={user} />)
          }

        </div>
        <div className='friends-list'>
          <h1>Friends</h1>
        </div>
      </div>

      <div className='left-side-buttons'>
        <button onClick={handleSignOut}>Logout</button>
      </div>

    </div>
  )
}

export default LeftSide;
