import './middle-chat.scss';
import React, {useState, useContext} from 'react';
import {appContext} from '../../../context/context.js';



//Import components//
import ChatContainer from './chat-container/chat-container.js';
import ChatInput from './chat-input/chat-input.js';




const MiddleChat = () => {

  const {data, actions} = useContext(appContext);   //importing context
  const [message, setMessage] = useState('');

  const {displayName, email, photoURL, uid} = data.currentUser;

  console.log(email)

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async() => {

  }



  return (
    <div className='middle-chat-container'>

      <div className='chat-container'>
        <ChatContainer />
      </div>

      <div className='chat-message-container'>
        <ChatInput handleChange={handleChange} message={message} handleSubmit={handleSubmit}/>
      </div>

    </div>
  )
}

export default MiddleChat;
