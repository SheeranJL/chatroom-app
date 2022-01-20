import React, {useContext} from 'react';
import {appContext} from '../../../context/context.js';
import './left-side.scss';
import {auth, setOfflineUser} from '../../../firebase/firebase.js';


const LeftSide = () => {

  const {data, actions} = useContext(appContext);

  const handleSignOut = async() => {
    //await auth.signOut();
    setOfflineUser(data.currentUser.user.uid)

  }

  return (
    <div className='left-side-container'>
      <h1>Left side container</h1>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default LeftSide;
