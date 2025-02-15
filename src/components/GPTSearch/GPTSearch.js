import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import SearchBar from "./SearchBar";
import SearchPage from "./SearchPage";
import { LOGIN_BG } from "../../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={LOGIN_BG} alt="gpt-page bg" />
      </div>
      <SearchBar />
      <GptMovieSuggestions />
      <SearchPage />
    </div>
  );
};

export default GPTSearch;
