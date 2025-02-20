import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../MoviesList";
import lang from "../../utils/languageConstants";

const GptMovieSuggestions = () => {
  const langSelected = useSelector((store) => store.config?.language);
  const { gptMoviesNames, tmdbMovieRes } = useSelector((store) => store?.gpt);
  if (!gptMoviesNames) return null;
  return (
    <div className="bg-black bg-opacity-90 overflow-hidden text-white max-w-[95%] mx-auto my-4 text-center rounded-md">
      <h2>{lang[langSelected].topMovieSuggestions}</h2>
      {gptMoviesNames?.map((gptmovie, index) => (
        <MoviesList key={index} title={gptmovie} movies={tmdbMovieRes[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
