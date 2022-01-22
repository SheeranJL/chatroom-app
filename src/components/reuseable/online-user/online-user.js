import React from 'react';
import './online-user.scss';

const OnlineUser = ({onlineUser}) => {

  console.log(onlineUser)

  return (
    <div className='online-user-container'>
      <img src={onlineUser.photoURL || 'https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png'} />
      <span style={{fontSize: '12px', display: 'none'}}>{onlineUser.displayName}</span>
    </div>
  )
}

export default OnlineUser;
