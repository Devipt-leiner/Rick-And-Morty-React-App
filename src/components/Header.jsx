import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const [clickedP, setClickedP] = useState(true);
  let navigate = useNavigate();
  const irInicio = () => {
    navigate("/");
    setClicked(false);
    setClickedP(true);
  };
  const irPersonajes = () => {
    navigate("/characters");
    setClickedP(false);
    setClicked(true);
  };

  return (
    <>
      <Barra>
        <Imagen>
          <Logo src="https://www.pngmart.com/files/3/Rick-And-Morty-PNG-Pic.png" />
          Rick Y Morty
        </Imagen>
      </Barra>

      <BarraDireccion>
        {clicked ? (
          <BotonPersonaje onClick={irInicio}>
            Personaje Aleatorio
          </BotonPersonaje>
        ) : (
          <BotonPersonajeC onClick={irInicio}>
            Personaje Aleatorio
          </BotonPersonajeC>
        )}
        {clickedP ? (
          <BotonPersonaje onClick={irPersonajes}>Personajes</BotonPersonaje>
        ) : (
          <BotonPersonajeC onClick={irPersonajes}>Personajes</BotonPersonajeC>
        )}
      </BarraDireccion>
    </>
  );
};

export default Header;

const Barra = styled.div`
  display: flex;
  width: 100%;
  position: fix;
  background-color: #2d6dff;
  height: 60px;
  justify-content: space-between;
`;
const Imagen = styled.div`
  font-weight: bold;
  display: flex;
  height: auto;
  width: 250px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;
`;
const BarraDireccion = styled.div`
  display: flex;
  width: 100%;
  position: fix;
  background-color: #ffffff;
  height: 70px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 30px;
`;
const BotonPersonaje = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  border-bottom: 3px solid transparent;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #888888;
  }
`;
const BotonPersonajeC = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  padding: 0px 20px;
  transition: 300ms;
  border-bottom: 3px solid #2d6dff;
  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #888888;
  }
`;
const Logo = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: auto;
`;
