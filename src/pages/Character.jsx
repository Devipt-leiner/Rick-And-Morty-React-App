import React from "react";
import styled from "styled-components";

const Character = (props) => {
  return (
    <div>
      <Personaje>
        <Imagen src={props.url} />
        <Datos>
          <h1>{props.name}</h1>
          <span>{props.gender}</span>
          <span>{props.species}</span>
          <span>{props.created}</span>
        </Datos>
      </Personaje>
    </div>
  );
};

export default Character;

const Personaje = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 40px;
  justify-content: center;
`;
const Imagen = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border-radius: 15px;
  width: 300px;
`;
const Datos = styled.div`
  text-align: left;
  display: flex;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background-color: white;
  border-radius: 10px;
  flex-direction: column;
  padding: 40px 10px;
  width: 320px;
`;
