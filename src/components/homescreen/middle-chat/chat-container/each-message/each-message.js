import React, {useContext} from 'react';
import {appContext} from '../../../../../context/context.js';
import './each-message.scss';

const EachMessage = ({message}) => {

  const {data:{currentUser}} = useContext(appContext);
  console.log(message);
  console.log(currentUser.user.uid)

  return (
    <div className='chat-message-container'>

      <div className={message.uid === currentUser.user.uid ? 'chat-me' : 'chat-them'}>

        <div className='chat-photo' style={{display: message.uid === currentUser.user.uid ? 'none' : ''}}>
          <img src={message.photoURL}/>
        </div>

        <div className='chat-message'>
          <span>{message.text}</span>
        </div>

      </div>

    </div>
  )
}

export default EachMessage;
