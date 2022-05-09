import React from "react";
import AlbumItem from "./AlbumItem";
import Album from "../routes/Album";

import { AlbumGrid, Container } from "./styled/Albums.styled";

import { Link } from "react-router-dom";

const Albums = (props) => {
  return (
    <Container>
      <AlbumGrid>
        {props.albums.map((albums) => {
          return (
            <Link
              to={`/album/${albums.name}`}
              element={<Album />}
              key={albums.name}
            >
              <AlbumItem albums={albums} />
            </Link>
          );
        })}
      </AlbumGrid>
    </Container>
  );
};

export default Albums;
