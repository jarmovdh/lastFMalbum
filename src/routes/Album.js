import axios from "axios";
import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import AlbumInfo from "./AlbumInfo";
import { Container } from "../components/styled/Albums.styled";

const Album = () => {
  const params = useParams();

  const [album, setAlbum] = useState({});
  const [tracks, setTracks] = useState([]);

  const url = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=cd76f5136476a50cc4e13060b79d3337&artist=Kendrick+Lamar&album=${params.albumName}&format=json`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setAlbum(response.data.album);
        setTracks(response.data.album.tracks.track);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const trackName = tracks.map((obj) => obj.name);

  return (
    <Container>
      <AlbumInfo album={album} trackName={trackName} />
    </Container>
  );
};

export default Album;
