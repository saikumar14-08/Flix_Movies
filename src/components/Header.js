import React, { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else if (user == null) {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return (() => unsubscribe())
  }, []);

  
  return (
    <div className="absolute z-10 h-10 w-60 bg-gradient-to-b to-black-100">
      <img
        src={NETFLIX_LOGO}
        alt="logo"
      />
    </div>
  );
};

export default Header;
