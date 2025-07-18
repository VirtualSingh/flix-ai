import { useEffect, useState } from "react";
import Header from "./Header";
import { validateCredentials } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export default function Login() {
  const [newUser, setNewUser] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const [validations, setValidations] = useState({
    email: true,
    password: true,
  });
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setValues((prev) => ({ ...prev, [name]: value }));

    // Optional: live validation as user types
    const validation = validateCredentials(
      name === "email" ? value : values.email,
      name === "password" ? value : values.password
    );
    setValidations(validation);
  };

  //   const handleBlur = (e) => {
  //     const { name } = e.target;
  //     setTouched((prev) => ({ ...prev, [name]: true }));
  //   };
  const handleFormSubmission = () => {
    const validation = validateCredentials(values.email, values.password);
    setValidations(validation);
    setTouched({ email: true, password: true });

    if (newUser && validation.email && validation.password) {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
          // ..
        });
    }
    if (!newUser && validation.email && validation.password) {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + errorMessage);
        });
    }
  };

  useEffect(() => {
    setValues({ email: "", password: "" });
    setValidations({
      email: true,
      password: true,
    });
    setTouched({ email: false, password: false });
  }, [newUser]);
  return (
    <div className="bg-[url('/backgroundImage1.jpg')] bg-cover bg-center h-screen">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex
      flex-col w-3/12  items-center p-6 text-white bg-[rgba(0,0,0,0.8)]  rounded-md "
      >
        <h1 className="text-3xl font-bold py-4 self-start">
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
          name="email"
          value={values.email}
          onChange={handleChange}
          //   onBlur={handleBlur}
          type="text"
          placeholder="Email"
          className="p-2 m-2 bg-gray-700 rounded-md w-full"
        />
        {!validations.email && touched.email && (
          <small className="text-red-500 self-start">Enter a valid email</small>
        )}

        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          //   onBlur={handleBlur}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-700 rounded-md w-full"
        />
        {!validations.password && touched.password && (
          <small className="text-red-500 self-start">
            Password must meet complexity rules
          </small>
        )}
        <button
          className="px-4 py-2 m-4 mt-8 bg-red-500 rounded-md w-full"
          onClick={handleFormSubmission}
        >
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
