import { logout } from "@/actions/chatActions";

function Button() {
    return (
      <form action={logout}>
        <button className="bg-black rounded-lg px-4 py-2 text-white">
          Logout
        </button>
      </form>
    );
}

export default Button
