import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignInText = () => {
    setSignIn(!signIn);
  };

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSignIn = () => {
    let message = validate(email.current.value, password.current.value);
    if (email.current.value === "" || password.current.value === "")
      setError("Fields cannot be empty!");
    else setError(message);
    if (message) return;
    if (signIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
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
      setError("Fields cannot be empty!");
    else setError(message);
    if (message) return;
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/52173530?v=4"
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log("Profile updated:", auth.currentUser);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setError(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setError(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/US-en-20250203-TRIFECTA-perspective_27777f6b-02df-44af-bd1d-0bd4efdf3345_large.jpg"
          alt="login form bg"
        />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className="absolute w-96 z-10 items-center bg-black bg-opacity-80 p-12 my-36 ml-96 rounded-lg text-white"
      >
        <div className=" text-3xl font-bold text-white p-3">
          {signIn ? "Sign in" : "Sign up"}
        </div>
        {!signIn && (
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
        <p className="text-red-700 font-bold px-2">{error}</p>
        <button
          onClick={signIn ? handleSignIn : handleSignUp}
          className="p-2 ml-2 mt-4 w-full bg-red-600 text-white rounded"
        >
          {signIn ? "Sign In" : "Sign up"}
        </button>
        <div className="pl-2 py-4">
          <span className="font-bold cursor-pointer" onClick={handleSignInText}>
            {!signIn
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
