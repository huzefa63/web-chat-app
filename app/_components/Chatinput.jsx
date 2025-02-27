"use state";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useState } from "react";

function Chatinput({session}) {
  const [message,setMessage] = useState('');
  async function handler(e){
    e.preventDefault();
    const data = await axios.post('https://web-chat-api-53.onrender.com/api/chat',{message,image:session.user.image,name:session.user.name});
    setMessage('');
  }
    return (
      <div className="absolute bottom-0 w-full">
        <div className="relative">
          <form onSubmit={handler}>
            <input
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            required
            disabled={!session}
              placeholder='Type a message'
              type="text"
              className="bg-white w-full p-3 tracking-widest outline-none  pr-20"
            />
            <button className="absolute hover:cursor-pointer right-0 top-1/2 -translate-y-1/2">
              <ArrowUpCircleIcon className="size-10 " />
            </button>
          </form>
        </div>
      </div>
    );
}

export default Chatinput
