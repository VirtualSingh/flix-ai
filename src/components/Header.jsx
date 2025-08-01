import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { switchToAi } from "../utils/aiRecommendationSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user?.uid,
            email: user?.email,
            displayName: user?.displayName,
            photoURL: user?.photoURL,
          })
        );
        // console.log(user);
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = function () {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleSwitchToAi = () => {
    dispatch(switchToAi());
  };

  return (
    <header className="fixed z-30 top-0  w-full flex justify-between items-center h-16  px-4 bg-gradient-to-b from-black  ">
      {/* <span className="logo-wrapper inline-block h-full"> */}
      {/* <img src={logo} alt="logo" className="h-full" /> */}
      <h1 className="text-3xl font-bold text-white">flix.ai</h1>
      {/* </span> */}
      {user && (
        <>
          <img
            src={user?.photoURL}
            alt="user profile image"
            className="rounded-1/2 h-8 w-8 ml-auto mr-2"
          />

          <button
            className=" bg-black font-bold  border-none rounded-lg px-4 py-2 mr-4 text-white hover:bg-gray-800 cursor-pointer text-sm"
            onClick={handleSwitchToAi}
          >
            Ask AI
          </button>
          <button
            className="bg-black font-bold border-none rounded-lg px-4 py-2 text-white hover:bg-gray-800 cursor-pointer text-sm"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </>
      )}
    </header>
  );
}
