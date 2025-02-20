import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../utils/gptSetup";
import { API_OPTIONS } from "../../utils/constants";
import { gptMovies } from "../../utils/gptSlice";
import { HiSearch } from "react-icons/hi";

const fetchMovies = async (movie) => {
  let searchMovie = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" + movie,
    API_OPTIONS
  );
  let searchData = await searchMovie.json();
  return searchData.results;
};

const SearchBar = () => {
  const langSelected = useSelector((store) => store.config?.language);
  const dispatch = useDispatch();
  const pmtTxt = useRef("");

  const handleSearch = async () => {
    const prompt = pmtTxt.current.value;
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      prompt +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const movies = gptResults.choices?.[0]?.message?.content;
    // const movieArr = movies.split(',')
    const movieArr = movies.includes(":")
      ? movies
          .split("\n")
          .slice(1)
          .map((line) => line.replace(/^\d+\.\s*/, ""))
      : movies.split(",");

    const fetchData = await Promise.all(
      movieArr.map((movie) => fetchMovies(movie))
    );
    dispatch(gptMovies({ gptMoviesNames: movieArr, tmdbMovieRes: fetchData }));
  };
  return (
    <div className="pt-[20%] sm:pt-[25%] flex justify-center">
      <form
        className="w-[90%] sm:w-3/4 md:w-1/2 bg-black flex items-center p-2 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="flex-grow p-2 sm:p-4 rounded-md text-sm sm:text-base"
          type="text"
          placeholder={lang[langSelected].gptSearchPlaceHolder}
          ref={pmtTxt}
        />

        {/* Search Button (Icon for Mobile, Text for Larger Screens) */}
        <button
          className="ml-2 bg-red-700 text-white p-2 sm:px-4 sm:py-2 rounded-lg flex items-center justify-center"
          onClick={handleSearch}
        >
          <HiSearch className="text-xl sm:hidden" />{" "}
          {/* Search Icon for Mobile */}
          <span className="hidden sm:inline">
            {lang[langSelected].search}
          </span>{" "}
          {/* Text for Larger Screens */}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
