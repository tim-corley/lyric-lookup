import React, { useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";

const Lyrics = (props) => {
  let initialLyricState = {
    lyrics_body: "",
    copyright: "",
  };

  let initialTrackState = {
    track_name: "",
    artist_name: "",
  };

  const [tracker, setTracker] = useState("");
  const [lyrics, setLyrics] = useState(initialLyricState);
  const [trackInfo, setTrackInfo] = useState(initialTrackState);

  const getTracking = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${props.match.params.id}&apikey=${process.env.MUSIXMATCH_TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTracker(data.message.body.snippet.script_tracking_url);
      })
      .catch((err) => console.error(err));
  };

  const getLyrics = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${process.env.MUSIXMATCH_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        setLyrics({
          lyrics_body: data.message.body.lyrics.lyrics_body,
          copyright: data.message.body.lyrics.lyrics_copyright,
        });
        return fetch(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${props.match.params.id}&apikey=${process.env.MUSIXMATCH_TOKEN}`
        );
      })
      .then((res) => res.json())
      .then((data) => {
        setTrackInfo({
          track_name: data.message.body.track.track_name,
          artist_name: data.message.body.track.artist_name,
        });
      })
      .catch((err) => console.error(err));
  };
  // https://developer.musixmatch.com/documentation
  useEffect(() => {
    getTracking();
    getLyrics();
  }, []);

  if (
    trackInfo.track_name === "" ||
    trackInfo.artist_name === "" ||
    lyrics.lyrics_body === ""
  ) {
    return <Spinner />;
  } else {
    return (
      <>
        <div>
          <h1>Lyrics Page</h1>
          <hr />
          <h2>{trackInfo.track_name}</h2>
          <h3>By: {trackInfo.artist_name}</h3>
          <hr />
          <p>{lyrics.lyrics_body}</p>
        </div>
        <script type="text/javascript" src={tracker}></script>
      </>
    );
  }
};

export default Lyrics;
