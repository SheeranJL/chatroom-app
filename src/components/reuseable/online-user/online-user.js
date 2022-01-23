import React, {useState} from 'react';
import './online-user.scss';

const OnlineUser = ({onlineUser}) => {

  // const [hover, setHover] = useState(false); //Used only if we're including the modal, which we're not.

  console.log(onlineUser);

  return (
    <div className='online-user-container'>
      <img src={onlineUser.photoURL || 'https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png'} />
      <div className='online-dot'/>
    </div>
  )
}

export default OnlineUser;


//Code for modal over scroll. Deliberately left out as I decided not to include it but//

// <div className={hover ? 'hover-modal' : 'hover-hidden'}>
//   <img src={onlineUser.photoURL || 'https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png'} />
//   <span>{onlineUser.displayName}</span>
// </div>
