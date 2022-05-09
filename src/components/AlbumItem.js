import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  AlbumCover,
  AlbumImage,
  AlbumTitle,
  Container,
} from "./styled/Albums.styled";

const AlbumItem = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container data-aos="fade-up">
      <AlbumTitle>{props.albums.name}</AlbumTitle>

      <AlbumCover className="album-cover">
        <AlbumImage src={props.albums.image[3]["#text"]} alt="" />
      </AlbumCover>
    </Container>
  );
};

export default AlbumItem;
