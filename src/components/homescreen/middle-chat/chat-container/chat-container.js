import React from 'react';
import './chat-container.scss';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestore} from '../../../../firebase/firebase.js';


const ChatContainer = () => {


  const messagesRef = firestore.collection('messages');           //getting reference to 'messages' collection
  const query = messagesRef.orderBy('createdAt').limit(25);       //
  const [messages] = useCollectionData(query, {idField: 'id'});
  console.log(messages)


  return (
    <div>
      <h1>{messages && messages.map(msg => <h1 key={msg.id}>{msg.text}</h1>)}</h1>
    </div>
  )
}

export default ChatContainer;
