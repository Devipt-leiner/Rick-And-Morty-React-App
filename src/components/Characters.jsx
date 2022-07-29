import React, { useState } from "react";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import Cards from "./Cards";

const Characters = () => {
  const [paginator, setPage] = useState(0);

  const GET_CHARACTERS = gql`
  query {
    characters(page: ${paginator}) {
      info {
        count
      }
      results {
        name
        species
        image
      }
    }
    location(id: 1) {
      id
    }
  }
  `;
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <CharactersList>
        {data.characters.results.map((dato) => {
          return <Cards url={dato.image} />;
        })}
      </CharactersList>
      <button onClick={() => setPage(paginator + 1)}>Aumentar</button>
    </>
  );
};

export default Characters;

const CharactersList = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #333333;
  min-height: 100%;
  width: 100%;
`;
