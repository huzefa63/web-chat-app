"use client"
import Chat from "@/app/_components/Chat"
import Chatinput from "@/app/_components/Chatinput"
import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client";

function Chatbox({session}) {
    const [chats,setChats] = useState([]);
    const socket = useRef(null);
    useEffect(function(){
        socket.current = io('https://web-chat-api-53.onrender.com');
        socket.current.on('message',(message)=>{
            setChats(mes=>[...mes,message]);
            
        })
    },[])
    const container = useRef(null);
    useEffect(function(){
      if(!container.current) return;
      container.current.scrollTop = container.current.scrollHeight;
    },[chats])
    return (
        // <div className="pt-5 relative bg-gray-400 h-[70vh] w-3/4">
        //     {chats.map((chat,i)=>{
        //         return <Chat session={session} chat={chat} key={i}/>
        //     })}
        //     <Chatinput session={session}/>
        // </div>
         <div className="relative lg:h-[80vh] lg:w-3/4 h-[40vh] w-[90%] bg-gray-400 mt-5">
        <div className="pt-5 overflow-auto  h-[65vh] w-full" ref={container}>
          {chats.map((chat, i) => {
            return <Chat session={session} chat={chat} key={i} />;
          })}
        </div>
        <Chatinput session={session} />
      </div>
    )
}

export default Chatbox
