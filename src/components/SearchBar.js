import axios from "axios";
import React, { useState, useEffect } from "react";

const SearchBar = ({ placeholder, data }) => {
  const [topTracks, setTopTracks] = useState([]);
  const url =
    "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Kendrick+Lamar&api_key=cd76f5136476a50cc4e13060b79d3337&format=json";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.toptracks);
        setTopTracks(response.data.toptracks.track);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="search">
        <div className="searchInputs">
          <input type="text" placeholder={placeholder} />
          <div className="searchIcon"></div>
        </div>
        <div className="dataResults">
          {topTracks.map((value, key) => {
            return <div>{topTracks.track}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
