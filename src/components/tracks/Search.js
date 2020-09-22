import React, { useContext, useState } from "react";
import { Context } from "../../context";

const Search = () => {
  const [trackTitle, setTrackTitle] = useState("");

  const changeHandler = (event) => {
    setTrackTitle(event.target.value);
  };
  return (
    <div className="lg:w-3/4 w-11/12 m-auto mt-10 mb-4 sticky top-0 bg-white shadow-lg font-playfair">
      <div className="lg:flex w-full justify-center">
        <div className="flex lg:justify-start justify-center lg:mt-2 text-indigo-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-music mt-6"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
          <div className="mt-4 p-2">Search Songs:</div>
        </div>
        <form className="lg:w-1/2 w-full p-4">
          <div className="flex items-center border-b border-yellow-400 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Rusty Cage"
              name="trackTitle"
              value={trackTitle}
              onChange={changeHandler}
            />
            <button
              className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Search
            </button>
            <button
              className="flex-shrink-0 border-transparent border-4 text-yellow-500 hover:text-yellow-600 text-sm py-1 px-2 rounded"
              type="button"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
