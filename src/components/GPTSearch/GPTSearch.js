import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import SearchBar from "./SearchBar";
import SearchPage from "./SearchPage";
import { LOGIN_BG } from "../../utils/constants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={LOGIN_BG}
          className="h-[100%] object-cover"
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
