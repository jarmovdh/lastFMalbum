import React from "react";
import { Link } from "react-router-dom";
import {
  AlbumTitle,
  Container,
  List,
  ReturnButton,
  Tracklist,
} from "../components/styled/Albums.styled";

const AlbumInfo = (props) => {
  return (
    <Container>
      <AlbumTitle>{props.album.name}</AlbumTitle>
      <Tracklist>
        {props.trackName.map((tracks, id) => {
          return <List key={id}>{tracks}</List>;
        })}
      </Tracklist>
      <Link to="/">
        <ReturnButton>Return to albums</ReturnButton>
      </Link>
    </Container>
  );
};

export default AlbumInfo;
