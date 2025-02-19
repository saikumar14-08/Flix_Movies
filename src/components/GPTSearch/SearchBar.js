import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../utils/gptSetup";
import { API_OPTIONS } from "../../utils/constants";
import { gptMovies } from "../../utils/gptSlice";

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
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="col-span-9 p-4 m-4 rounded-md"
          type="text"
          placeholder={lang[langSelected].gptSearchPlaceHolder}
          ref={pmtTxt}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleSearch}
        >
          {lang[langSelected].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
