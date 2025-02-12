import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR, LOGIN_BG } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSignIn = () => {
    let message = validate(email.current.value, password.current.value);
    if (email.current.value === "" || password.current.value === "")
      setErrorMessage("Fields cannot be empty!");
    else setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSignUp = () => {
    let message = validate(
      email.current.value,
      password.current.value,
      fullName.current.value
    );
    if (
      email.current.value === "" ||
      password.current.value === "" ||
      fullName.current.value === ""
    )
    setErrorMessage("Fields cannot be empty!");
    else setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG} alt="login form bg" />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className="absolute w-96 z-10 items-center bg-black bg-opacity-80 p-12 my-36 ml-96 rounded-lg text-white"
      >
        <div className=" text-3xl font-bold text-white p-3">
          {isSignInForm ? "Sign in" : "Sign up"}
        </div>
        {!setErrorMessage && (
          <input
            className="p-2 m-2 w-full block bg-gray-800 border border-gray-600 rounded"
            type="text"
            placeholder="Full Name"
            ref={fullName}
          />
        )}
        <input
          className="p-2 m-2 w-full block bg-gray-800 border border-gray-600 rounded"
          type="text"
          placeholder="Email or Mobile Number"
          ref={email}
        />
        <input
          className="p-2 m-2 w-full block bg-gray-800 border border-gray-600 rounded"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="text-red-700 font-bold px-2">{errorMessage}</p>
        <button
          onClick={isSignInForm ? handleSignIn : handleSignUp}
          className="p-2 ml-2 mt-4 w-full bg-red-600 text-white rounded"
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <div className="pl-2 py-4">
          <span className="font-bold cursor-pointer" onClick={handleSignIn}>
            {!isSignInForm
              ? "Already existing user? Sign in now"
              : "New to Netflix? Sign up now"}
            .
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
