import React, {useState} from 'react';
import './online-user.scss';

const OnlineUser = ({onlineUser}) => {

  const [hover, setHover] = useState(false);

  console.log(onlineUser);

  return (
    <div className='online-user-container' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <img src={onlineUser.photoURL || 'https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png'} />
      <div className='online-dot'/>

      <div className={hover ? 'hover-modal' : 'hover-hidden'}>
        <img src={onlineUser.photoURL || 'https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png'} />
        <span>{onlineUser.displayName}</span>
      </div>

    </div>
  )
}

export default OnlineUser;
