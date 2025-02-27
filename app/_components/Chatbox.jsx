"use client"
import Chat from "@/app/_components/Chat"
import Chatinput from "@/app/_components/Chatinput"
import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client";

function Chatbox({session}) {
    const [chats,setChats] = useState([]);
    const socket = useRef(null);
    useEffect(function(){
        socket.current = io('http://localhost:4000');
        socket.current.on('message',(message)=>{
            setChats(mes=>[...mes,message]);
            
        })
    },[])
    return (
        <div className="pt-5 relative bg-gray-400 h-[70vh] w-3/4">
            {chats.map((chat,i)=>{
                return <Chat session={session} chat={chat} key={i}/>
            })}
            <Chatinput session={session}/>
        </div>
    )
}

export default Chatbox
