import React, { useContext } from "react";
import { Context } from "../../context";
import Spinner from "../layouts/Spinner";
import Track from "./Track";

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div className="lg:w-3/4 w-11/12 m-auto my-10 py-6 bg-white bg-opacity-50 rounded shadow-lg">
        <div className="text-center font-playfair text-indigo-800 text-xl mb-4">
          {heading}
        </div>
        <div className="md:grid grid-cols-2 gap-4">
          {track_list.map((item) => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
      </div>
    );
  }
};

export default Tracks;
