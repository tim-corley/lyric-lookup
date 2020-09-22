import React, { useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Lyrics = (props) => {
  let initialLyricState = {
    lyrics_body: "",
    copyright: "",
  };

  let initialTrackState = {
    track_name: "",
    artist_name: "",
    album_name: "",
    added_on: "01/01/2020",
    genre: "",
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
          album_name: data.message.body.track.album_name,
          added_on: data.message.body.track.updated_time,
          genre:
            data.message.body.track.primary_genres.music_genre_list[0]
              .music_genre.music_genre_name,
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
    (lyrics.lyrics_body === "" && !lyrics.copyright.includes("not authorized"))
  ) {
    return <Spinner />;
  } else if (lyrics.copyright.includes("not authorized")) {
    return (
      <>
        <Link to="/">
          <button className="flex font-thin font-playfair text-background m-4 py-2 px-6 shadow-lg bg-yellow-500 hover:bg-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left pt-1 mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </button>
        </Link>
        <div className="lg:w-3/4 w-11/12 m-auto mt-10 mb-4 bg-gradient-to-b from-white shadow-lg font-playfair">
          <h2 className="text-indigo-800 text-xl m-4 p-4">
            Sorry, not authorized to show these lyrics.
          </h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Link to="/">
          <button className="flex font-thin font-playfair text-background m-4 py-2 px-6 shadow-lg bg-yellow-500 hover:bg-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left pt-1 mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back
          </button>
        </Link>
        <div className="lg:w-3/4 w-11/12 m-auto mt-10 mb-4 bg-gradient-to-b from-white shadow-lg font-playfair">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="text-2xl font-bold flex w-full mt-8 p-4 justify-center">
                {trackInfo.track_name}
              </div>
              <div className="font-semibold flex w-full lg:mb-8 p-4 justify-center">
                By: {trackInfo.artist_name}
              </div>
            </div>
            <div className="m-4 p-2 col-span-2 leading-loose">
              <p>{lyrics.lyrics_body}</p>
            </div>
          </div>
        </div>
        <div className="border-solid border-t-2 border-yellow-500 m-auto w-1/2"></div>
        <div className="lg:w-3/4 w-11/12 m-auto mt-6 mb-4 bg-gradient-to-t from-white shadow-lg font-playfair">
          <ul className="lg:flex w-full m-4 p-4 justify-center">
            <li className="mx-2">
              <strong>Album: </strong>
              {trackInfo.album_name}
            </li>
            <li className="mx-2">
              <strong>Genre: </strong>
              {trackInfo.genre}
            </li>
            <li className="mx-2">
              <strong>Release Date: </strong>
              <Moment format="MM/DD/YYYY">{trackInfo.added_on}</Moment>
            </li>
          </ul>
        </div>
        <script type="text/javascript" src={tracker}></script>
      </>
    );
  }
};

export default Lyrics;
