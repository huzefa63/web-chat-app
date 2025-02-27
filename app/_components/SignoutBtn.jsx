import { logout } from "@/actions/chatActions";

function Button() {
    return (
      <form action={logout}>
        <button className="bg-black rounded-lg ml-5 px-4 py-2 text-white hover:cursor-pointer hover:text-gray-100 hover:-translate-y-[10px] transition-all duration-[0.3s]">
          Logout
        </button>
      </form>
    );
}

export default Button
