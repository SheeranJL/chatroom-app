import React, {useContext} from 'react';
import {appContext} from '../../../../../context/context.js';
import './each-message.scss';

const EachMessage = ({message}) => {

  const {data:{currentUser}} = useContext(appContext);

  return (
    <div className='each-message-container'>

      <div className={message.uid === currentUser.user.uid ? 'chat-me' : 'chat-them'}>

        <div className='chat-photo' style={{display: message.uid === currentUser.user.uid ? 'none' : ''}}>
          <img src={message.photoURL || 'https://www.seekpng.com/png/detail/143-1435868_headshot-silhouette-person-placeholder.png'}/>
        </div>

        <div>
          <div className='sender-name' style={{display: message.uid === currentUser.user.uid ? 'none' : ''}}>
            <span>{message.userName}</span>
          </div>

          <div className='chat-message'>

            <div className='message-text'>
              <span>{message.text}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default EachMessage;
