import React from 'react';
import './chat-container.scss';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestore} from '../../../../firebase/firebase.js';

//Importing components//
import EachMessage from './each-message/each-message.js';

const ChatContainer = () => {


  const messagesRef = firestore.collection('messages');           //getting reference to 'messages' collection
  const query = messagesRef.orderBy('createdAt').limit(100);       //
  const [messages] = useCollectionData(query, {idField: 'id'});
  console.log(messages)


  return (
    <div className='chat-container-inner'>
      {messages && messages.map(msg => <EachMessage message={msg}/>)}
    </div>
  )
}

export default ChatContainer;
