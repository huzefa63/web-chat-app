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
    return (
        // <div className="pt-5 relative bg-gray-400 h-[70vh] w-3/4">
        //     {chats.map((chat,i)=>{
        //         return <Chat session={session} chat={chat} key={i}/>
        //     })}
        //     <Chatinput session={session}/>
        // </div>
         <div className="relative h-[80vh] w-3/4 bg-gray-400">
        <div className="pt-5 overflow-auto  h-[65vh] w-full">
          {chats.map((chat, i) => {
            return <Chat session={session} chat={chat} key={i} />;
          })}
        </div>
        <Chatinput session={session} />
      </div>
    )
}

export default Chatbox
