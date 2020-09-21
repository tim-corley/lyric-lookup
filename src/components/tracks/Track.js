import React from "react";

const Track = ({ track }) => {
  console.log(track);
  return (
    <div className="rounded shadow-lg border-solid border-2 border-gray-600 m-2 p-2">
      <h2>{track.artist_name}</h2>
      <div className="border-b-2 border-gray-300 w-1/2 m-auto my-2"></div>
      <p>
        <span className="font-bold">Track:</span> {track.track_name}
      </p>
      <p>
        <span className="font-bold">Album:</span> {track.album_name}
      </p>
      <div className="flex justify-center">
        <button className="font-bold w-full mt-4 mb-2 py-2 px-6 bg-yellow-400 hover:bg-yellow-500">
          View Lyrics
        </button>
      </div>
    </div>
  );
};

export default Track;
