import React from 'react';
import './chat-input.scss';

const ChatInput = ({handleChange, message, handleSubmit}) => {



  return (
    <div className='input-and-submit-container'>
      <input
       type='text'
       className='chat-field'
       placeholder="type here..."
       onChange={handleChange}
       value={message}
       onSubmit={handleSubmit}
       />

      <span
        className='submit-chat'
        onClick={handleSubmit}>Submit</span>
     </div>
  )
}

export default ChatInput;
