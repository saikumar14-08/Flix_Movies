import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import SearchBar from "./SearchBar";
import { LOGIN_BG } from "../../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed w-full -z-10">
        <img
          src={LOGIN_BG}
          className="h-screen w-full object-cover"
          alt="gpt-page bg"
        />
      </div>
      <div>
        <SearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
