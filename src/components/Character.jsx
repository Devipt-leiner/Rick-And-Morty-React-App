import React from "react";
import styled from "styled-components";

import { useQuery, gql } from "@apollo/client";

const Character = () => {
  const Contenedor = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    margin-top: 3rem;
    height: 100vh;
    padding: 0px 30px;
  `;

  const Mensaje = styled.span`
    font-size: 24px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 10px;
    border-radius: 1rem;
    background-color: white;
    text-align: center;
  `;

  const Generador = styled.button`
    border: none;
    border-radius: 7px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 5px 10px;
    background-color: gray;
    color: white;
    font-weight: bold;
    transition: 200ms;
    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
    &:active {
      transform: scale(1);
    }
  `;
  return (
    <>
      <Contenedor>
        <Mensaje>No se ha generado ningún personaje</Mensaje>
        <Generador>GENERATE</Generador>
        <DisplayCharacters />
      </Contenedor>
    </>
  );
};

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        species
        status
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        created
      }
    }
  }
`;

function DisplayCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map(({ id, name, image }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="400" alt="location-reference" src={`${image}`} />
      <br />
      <b>About this location:</b>
      <p>{name}</p>
      <br />
    </div>
  ));
}

export default Character;
