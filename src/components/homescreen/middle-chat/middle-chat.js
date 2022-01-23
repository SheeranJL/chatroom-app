import './middle-chat.scss';
import React, {useState, useContext} from 'react';
import {appContext} from '../../../context/context.js';
import {firebase, firestore} from '../../../firebase/firebase.js';
import 'firebase/compat/firestore';



//Import components//
import ChatContainer from './chat-container/chat-container.js';
import ChatInput from './chat-input/chat-input.js';
import Header from '../header/header.js';



const MiddleChat = () => {

  const {data, actions} = useContext(appContext);                     //importing context
  const {displayName, email, photoURL, uid} = data.currentUser.user;  //destructured user properties from context currentUser
  const [message, setMessage] = useState('');                         //Local state for message text

  const messageRef = firestore.collection('messages');                //Reference to the 'messages' collection in firestore

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = async() => {
    if (!message) return

    const date = new Date();

    await messageRef.add({
      text: message,
      createdAt: date,
      userName: data.currentUser.user.displayName,
      uid,
      photoURL
    })

    setMessage('');
  }

  // deletes all messages in firestore should we ever need to start fresh - just uncomment, run the function and wallah//
  //
  // const deleteMessages = async() => {
  //   firestore.collection('messages').get().then(res => {
  //     res.forEach(i => {
  //       i.ref.delete();
  //     })
  //   })
  // }
  // deleteMessages();


  return (
    <div className='middle-chat-container'>

      <div className='chat-container'>

        <div className='chat-header'>
          <Header />
        </div>
        <ChatContainer />


      <div className='chat-message-container'>
        <ChatInput handleChange={handleChange} message={message} handleSubmit={handleSubmit}/>
      </div>
      </div>
    </div>
  )
}

export default MiddleChat;
