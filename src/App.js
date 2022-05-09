import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Albums from "./components/Albums";
import Album from "./routes/Album";
import Title from "./components/Title";
import GlobalStyles from "./components/styled/Global";

function App() {
  const [albums, setAlbums] = useState([]);

  const url =
    "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=Kendrick+Lamar&api_key=cd76f5136476a50cc4e13060b79d3337&format=json";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setAlbums(response.data.topalbums.album);
        console.log(response.data.topalbums.album);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Title />
      <Routes>
        <Route path="/" element={<Albums albums={albums} />} />
        <Route path="/album" element={<Album />}>
          <Route path=":albumName" element={<Album />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
