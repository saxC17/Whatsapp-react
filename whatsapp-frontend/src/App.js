import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js"
import axios from './axios.js';

function App() {

const [messages,setMessages]=useState([]);
useEffect(()=>{
  axios.get("/messages/sync").then(response=>{
    setMessages(response.data);
  });
},[]);

  useEffect(()=>{
    const pusher = new Pusher('ae27e796ae6ab57741fd', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages,data]);
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    };
  },[messages]);
  console.log(messages);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
