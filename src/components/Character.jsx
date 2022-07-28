import React from "react";
import styled from "styled-components";

const Character = () => {
  const Contenedor = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    height: 100vh;
  `;

  const Mensaje = styled.span`
    font-size: 24px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 10px;
    border-radius: 1rem;
    background-color: white;
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
      </Contenedor>
    </>
  );
};

export default Character;
