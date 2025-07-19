import logo from "/logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          })
        );
        console.log(user);
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = function () {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <header className="header flex justify-between items-center h-14  px-4 bg-gradient-to-r from-black  via-transparent via-50% to-black to-90% ">
      <span className="logo-wrapper inline-block h-full">
        <img src={logo} alt="logo" className="h-full" />
      </span>
      {user && (
        <>
          <img
            src={user?.photoURL}
            alt="user profile image"
            className="rounded-1/2 h-8 w-8 ml-auto mr-2"
          />
          <button
            className="bg-gray-700 border-none rounded-lg p-2 text-white hover:bg-gray-800 cursor-pointer text-sm"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </>
      )}
    </header>
  );
}
