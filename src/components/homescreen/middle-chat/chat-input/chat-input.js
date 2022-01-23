import React from 'react';
import './chat-input.scss';
import {ReactComponent as SendSVG} from '../../../../send-4008.svg';

const ChatInput = ({handleChange, message, handleSubmit}) => {



  return (
    <div className='input-and-submit-container'>

      <div className='input-container'>
        <input
         type='text'
         className='chat-field'
         placeholder="Write something to send here..."
         onChange={handleChange}
         value={message}
         onSubmit={handleSubmit}
         />
       </div>

       <div className='submit-chat-container'>
        <button className='submit-chat' onClick={handleSubmit}> <SendSVG /> </button>
      </div>

     </div>
  )
}

export default ChatInput;
