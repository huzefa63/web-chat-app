import { login } from "@/actions/chatActions";

function Button() {
    return (
      <form action={login}>
        <button className="bg-black rounded-lg px-4 py-2 text-white hover:cursor-pointer hover:text-gray-100 -translate-x-[10px]">
          Login
        </button>
      </form>
    );
}

export default Button
