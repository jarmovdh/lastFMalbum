import React, { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import { Link } from "react-router-dom";
import { Container, StyledSub, StyledTitle, Text } from "./styled/Title.styled";

const Title = () => {
  const [artist, setArtist] = useState([]);
  const [bio, setBio] = useState([]);
  const url =
    "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Kendrick+Lamar&api_key=cd76f5136476a50cc4e13060b79d3337&format=json";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setArtist(response.data.artist);
        setBio(response.data.artist.bio.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Link to="/">
        <StyledTitle>{artist.name}</StyledTitle>
      </Link>
      <StyledSub>
        {" "}
        <Text
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(bio),
          }}
        ></Text>
      </StyledSub>
    </Container>
  );
};

export default Title;
