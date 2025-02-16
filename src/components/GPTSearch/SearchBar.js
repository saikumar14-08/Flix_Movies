import React from "react";
import lang from "../../utils/languageConstants";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const langSelected = useSelector((store) => store.config?.language);
  return (
    <div className="grid place-items-start justify-center pt-[15%] h-screen">
      <form className="bg-black rounded-md grid grid-cols-12 p-4 w-[100%] ">
        <input
          className="col-span-9 p-2"
          type="text"
          placeholder={lang[langSelected].gptSearchPlaceHolder}
        />
        <button className="col-span-3 bg-red-600 text-white px-2 mx-4 rounded-md">
          {lang[langSelected].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
