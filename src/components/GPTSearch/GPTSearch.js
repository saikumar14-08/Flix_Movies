import React, { lazy, Suspense } from "react";
import { LOGIN_BG } from "../../utils/constants";

const SearchBar = lazy(() => import("./SearchBar"));
const GptMovieSuggestions = lazy(() => import("./GptMovieSuggestions"));

export const GPTSearch = () => {
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
        <Suspense fallback="GPT Page">
          <SearchBar />
          <GptMovieSuggestions />
        </Suspense>
      </div>
    </>
  );
};
