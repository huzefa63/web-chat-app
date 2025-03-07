 import { login } from "@/actions/chatActions";

function Button() {
    return (
      <form action={login}>
        <button className="bg-black rounded-lg px-4 py-2 text-white hover:cursor-pointer hover:text-gray-100 hover:-translate-y-[10px] transition-all duration-[0.3s]">
          Login
        </button>
      </form>
    );
}

export default Button
