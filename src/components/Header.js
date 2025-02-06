import React, { useState } from "react";

const Header = () => {
  const [signIn, setSignIn] = useState(true)

  const handleSignIn = () => {
    setSignIn(!signIn)
  }
  return (
    <div className="absolute">
      <div className="relative z-10 h-10 w-60 bg-gradient-to-b to-black-100">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      <form className="w-96 items-center bg-black bg-opacity-80 p-12 my-36 ml-96 rounded-lg text-white">
        <div className=" text-3xl font-bold text-white p-3">{signIn ? "Sign in" : "Sign up"}</div>
        <input
          className="p-2 m-2 w-full block bg-gray-800 border border-gray-600 rounded"
          type="text"
          placeholder="Email or Mobile Number"
        />
        <input
          className="p-2 m-2 w-full block bg-gray-800 border border-gray-600 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-2 ml-2 mt-4 w-full bg-red-600 text-white rounded">
          Sign In
        </button>
        <div className="pl-2 py-4">
          <span>{!signIn ? "Already existing user? " : "New to Netflix? "}</span>
          <span className="font-bold cursor-pointer" onClick={handleSignIn}>{!signIn ? "Sign in now" : "Sign up now"}.</span>
        </div>
      </form>
    </div>
  );
};

export default Header;
