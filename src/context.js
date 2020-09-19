import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext({});

export const ContextController = ({ children }) => {
  let initialState = {
    track_list: [],
    heading: "",
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=931597e7c31a38c265d59803ea7726f5`
      )
      .then((res) => {
        console.log(res.data);
        setState({
          track_list: res.data.message.body.track_list,
          heading: "Top 10 Tracks",
        });
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};
