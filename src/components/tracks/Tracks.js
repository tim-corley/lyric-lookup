import React, { useContext } from "react";
import { Context } from "../../context";
import Spinner from "../Spinner";

const Tracks = () => {
  const [state] = useContext(Context);
  const { track_list, heading } = state;

  if (track_list === undefined || track_list.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div className="text-center font-playfair text-indigo-800 text-xl">
        <h1>Tracks</h1>
      </div>
    );
  }
};

export default Tracks;
