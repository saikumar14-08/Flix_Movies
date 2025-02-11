import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { AVATAR_URL, MOVIE_CARD_URL } from "../utils/constants";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // navigate('/error')
      });
  };

  useNowPlayingMovies();

  return (
    <>
      <Header />
      <div className="flex items-center justify-end pt-8 pr-4">
        <img
          className="w-12 h-12 rounded-lg "
          src={AVATAR_URL}
          alt="user-icon"
        ></img>
        <div className="p-4">Hi, {user?.displayName} 🙋‍♂️</div>
        <button className="font-bold" onClick={handleSignOut}>
          (Sign out)
        </button>
      </div>
      {/**
       * Main container
       *  -> Video
       *  -> Title
       * secondary list
       *  -> movieslist*n
       *  -> cards*n
       */}
      <div className="">
        <MainContainer />
        <SecondaryContainer />
      </div>

      {/* <div className="flex flex-wrap justify-center gap-6 m-12">
        {movies?.map((el) => (
          <div
            key={el.id}
            className="w-48 bg-slate-700 p-4 rounded-lg shadow-lg hover:bg-slate-600 transition duration-300"
          >
            <div className="w-full h-60 overflow-hidden rounded-md bg-black flex items-center justify-center">
              <img
                className="w-full h-full object-contain"
                src={MOVIE_CARD_URL + el.poster_path}
                alt={el.title}
              />
            </div>
            <div className="mt-3 text-white text-center">
              <h3 className="text-sm font-semibold truncate">{el.title}</h3>
              <p className="text-xs text-gray-300 mt-1">{el.release_date}</p>
            </div>
          </div>
        ))}
      </div> */}
    </>
    // <div className='flex justify-between items-center pt-12'>    </div>
  );
};

export default Browse;
