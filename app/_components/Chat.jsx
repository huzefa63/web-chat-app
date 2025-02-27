import {ArrowRightCircleIcon} from '@heroicons/react/24/solid'
import Image from 'next/image';
function Chat({chat,session}) {
  console.log(session.user.image)
    return (
      <div className='ml-5 mt-2'>
        <div className="">
          <div className="flex items-center gap-3">
            <Image
            width={20}
            height={20}
              className="bg-white h-[40px] w-[40px] rounded-full"
              src={session.user.image}
              alt="User profile"
            />
            <h1 className="font-semibold tracking-widest text-white">
              {chat?.name}
            </h1>
          </div>
          <div className="mt-2 items-center flex gap-3">
            <ArrowRightCircleIcon className="size-11" />
            <h1 className="font-semibold tracking-widest text-white">
              {chat?.image}
            </h1>
          </div>
        </div>
      </div>
    );
}

export default Chat
