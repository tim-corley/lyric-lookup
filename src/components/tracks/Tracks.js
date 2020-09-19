import React, { useContext } from "react";
import { Context } from "../../context";

const Tracks = () => {
  const [state] = useContext(Context);
  //   console.log([state]);
  return (
    <div className="text-center font-playfair text-indigo-800 text-xl">
      <h1>Tracks</h1>
    </div>
  );
};

export default Tracks;
