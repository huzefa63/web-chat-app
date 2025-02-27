import { logout } from "@/actions/chatActions";

function Button() {
    return (
      <form action={logout}>
        <button className="bg-black rounded-lg ml-5 px-4 py-2 text-white hover:cursor-pointer hover:text-gray-100 -translate-x-[10px]">
          Logout
        </button>
      </form>
    );
}

export default Button
