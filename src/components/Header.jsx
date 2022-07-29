import React from "react";
import styled from "styled-components";

const Header = () => {
  const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: auto;
    padding: 7px;
    background-color: gray;
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    z-index: 100;
  `;

  const Start = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    color: white;
    font-weight: 900;
    font-size: 24px;
  `;

  const End = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
  `;

  const Button = styled.button`
    border: none;
    border-radius: 7px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 5px 10px;
    background-color: white;
    color: gray;
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
      <Header>
        <Start>
          <span>Rick & Morty</span>
        </Start>

        <End>
          <Button>Historial</Button>
        </End>
      </Header>
    </>
  );
};

export default Header;
