import React, {useState} from 'react';
import './middle-chat.scss';

//Import components//
import ChatInput from './chat-input/chat-input.js';

const MiddleChat = () => {

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log('test')
  }

  return (
    <div className='middle-chat-container'>
      <h1>Middle chat container</h1>

      <div className='chat-message-container'>
        <ChatInput handleChange={handleChange} message={message} handleSubmit={handleSubmit}/>
      </div>

    </div>
  )
}

export default MiddleChat;
