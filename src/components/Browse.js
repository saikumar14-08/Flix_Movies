import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Browse = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  console.log("User: ",user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out successfully ")
        dispatch(removeUser());
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        navigate('/error')
      });
  };
  return (
    <>
      <Header />
      <div className="flex items-center justify-end pt-8 pr-4">
        {console.log("User in Browse.js: ", user)}
        <img
          className="w-12 h-12 rounded-lg "
          src="https://avatars.githubusercontent.com/u/52173530?v=4"
          alt="user-icon"
        ></img>
        <div className='p-4'>Hi, {user?.displayName} 🙋‍♂️</div>
        <button className="font-bold" onClick={handleSignOut}>
          (Sign out)
        </button>
      </div>
    </>
    // <div className='flex justify-between items-center pt-12'>    </div>
  );
};

export default Browse;
