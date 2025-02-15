import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGPTClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleChange = (e) => {
    let selected = e.target.value;
    console.log(selected)
    dispatch(changeLanguage())
  }

  const gptFlag = useSelector((store) => store.gpttoggle?.gptSearch);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {gptFlag && (
            <span className="pt-4 mr-4">
              <select className="p-2 bg-gray-900 text-white"
              onChange={handleChange}>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </span>
          )}
          <span>
            <button
              className="bg-red-600 text-white px-4 py-2 m-2 rounded-md"
              onClick={handleGPTClick}
            >
              GPT Search
            </button>
          </span>
          <img
            className="w-12 h-12 rounded-lg"
            alt="usericon"
            src={USER_AVATAR}
          />
          <span className="text-white p-4 font-bold">
            {" "}
            Hi, {user ? user.displayName : "User"}🙋‍♂️
          </span>
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
