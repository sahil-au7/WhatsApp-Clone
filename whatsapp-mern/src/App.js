import './App.css';
import React, { useEffect,useState } from "react"
import Chat from './components/Chat';
import Sidebar from './components/Sidebar.js';
import Pusher from "pusher-js"
import axios from "./axios"

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/message/sync")
      .then(response => {
        setMessages(response.data)
      })
  },[])

  useEffect(() => {
    const pusher = new Pusher('ead039f2f0f0fade48c0', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  
  console.log(messages)

  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        {/* chat component */}
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
