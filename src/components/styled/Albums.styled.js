import styled from "styled-components";

export const AlbumGrid = styled.div`
  padding-top: 50px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const AlbumTitle = styled.h2`
  font-family: "Martel", serif;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Container = styled.div``;

export const List = styled.li`
  font-size: 1.3em;
  padding: 2px 0;
  border-bottom: 1px solid #fff;
`;

export const ReturnButton = styled.h3`
  padding-top: 3em;
  font-family: "Martel", serif;
  color: #e9e9e9;
  font-size: 1em;
  font-weight: bold;
`;

export const AlbumCover = styled.div``;

export const AlbumImage = styled.img`
  width: 100%;
`;

export const Tracklist = styled.ol`
  padding: 10px 20px;
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
  grid-gap: 3em;
  @media only screen and (max-width: 600px) {
    columns: 1;
    padding: 15px 30px;
  }
`;
