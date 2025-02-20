import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { HiMenu, HiX } from "react-icons/hi";

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
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGPTClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const gptFlag = useSelector((store) => store.gpt?.gptSearch);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="relative">
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
          {menuOpen && (
            <div className="absolute z-10 right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg p-4">
              <span className="text-white block font-bold text-center mb-2">
                Hi, {user.displayName} 🙋‍♂️
              </span>
              <button
                className="w-full bg-red-600 text-white my-4 py-2 rounded-md"
                onClick={handleGPTClick}
              >
                {!gptFlag ? "GPT Search" : "Home Page"}
              </button>
              <button
                onClick={handleSignOut}
                className="w-full bg-red-600 text-white py-2 rounded-md"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}

      {/* Desktop View - Full Navigation */}
      {user && (
        <div className="hidden md:flex items-center space-x-6">
          {gptFlag && (
            <select
              className="p-2 rounded-lg bg-gray-900 text-white"
              onChange={handleChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={handleGPTClick}
          >
            {!gptFlag ? "GPT Search" : "Home Page"}
          </button>

          {/* User Info */}
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-lg"
              src={USER_AVATAR}
              alt="usericon"
            />
            <span className="text-white p-4 font-bold">
              Hi, {user ? user.displayName : "User"} 🙋‍♂️
            </span>
          </div>

          {/* Sign Out Button */}
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
