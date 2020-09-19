import React, { useState, useEffect } from "react";

export const Context = React.createContext({});

export const ContextController = ({ children }) => {
  let initialState = {
    track_list: [],
    heading: "",
  };
  const [trackData, setTrackData] = useState(initialState);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=931597e7c31a38c265d59803ea7726f5`
    )
      .then((response) => response.json())
      .then((data) => {
        setTrackData({
          track_list: data.message.body.track_list,
          heading: "Top 10 Tracks",
        });
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Context.Provider value={[trackData, setTrackData]}>
      {children}
    </Context.Provider>
  );
};
