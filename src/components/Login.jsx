import { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [newUser, setNewUser] = useState(false);
  return (
    <div className="bg-[url('/backgroundImage1.jpg')] bg-cover bg-center h-screen">
      <Header />
      <form
        className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex
      flex-col w-3/12  items-center p-4 text-white bg-[rgba(0,0,0,0.8)]  rounded-md "
      >
        <h1 className="text-3xl font-bold py-4">
          {newUser ? "Sign Up" : "Sign In"}
        </h1>

        {newUser && (
          <input
            type="text"
            placeholder="Username"
            className="p-2 m-2 bg-gray-700 rounded-md w-full"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="p-2 m-2 bg-gray-700 rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-700 rounded-md w-full"
        />
        <button className="px-4 py-2 m-4 mt-8 bg-red-500 rounded-md w-full">
          {newUser ? "Sign Up" : "Sign In"}
        </button>
        <p
          className="m-2 text-sm cursor-pointer hover:underline hover:underline-offset-2"
          onClick={() => setNewUser((prev) => !prev)}
        >
          {newUser ? "Already Registered! Sign In" : "New to Flix! Sign Up"}
        </p>
      </form>
    </div>
  );
}
