import React from "react";
import { Link } from "react-router-dom";

const Track = ({ track }) => {
  console.log(track);
  return (
    <div className="rounded shadow-lg border-solid border-2 border-gray-600 bg-white bg-opacity-50  m-2 p-2">
      <h2>{track.artist_name}</h2>
      <div className="border-b-2 border-gray-300 w-1/2 m-auto my-2"></div>
      <div className="flex justify-start mb-2">
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
          className="feather feather-play mr-2"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <span className="font-bold mr-2">Track: </span>{" "}
        <div className="truncate ...">{track.track_name}</div>
      </div>
      <div className="flex justify-start">
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
          className="feather feather-disc mr-2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span className="font-bold mr-2">Album: </span>{" "}
        <div className="truncate ...">{track.album_name}</div>
      </div>
      <Link to={`lyrics/track/${track.track_id}`}>
        <div className="flex justify-center">
          <button className="font-bold w-full mt-4 mb-2 py-2 px-6 bg-yellow-400 hover:bg-yellow-500">
            View Lyrics
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Track;
