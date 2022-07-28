import React from "react";
import styled from "styled-components";

const Header = () => {
  const Header = styled.div`
    display: grid;
    grid-template-colums: 1fr 1fr;
    height: 70px;
    background-color: blue;
  `;

  const Start = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
  `;

  const End = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px
  `;

  return (
    <>
      <Header>
        <Start>
            <span>Start</span>
        </Start>

        <End>
            <span>End</span>
        </End>
      </Header>
    </>
  );
};

export default Header;
