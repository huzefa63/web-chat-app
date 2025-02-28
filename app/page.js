import Image from "next/image";
import Chatbox from "@/app/_components/Chatbox";
import { auth } from "@/lib/googleAuth";

export default async function Home() {
  const session = await auth();
  return (
    <div className="flex h-screen lg:items-center justify-center">
      <Chatbox session={session} />
    </div>
  );
}
