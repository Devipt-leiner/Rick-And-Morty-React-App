import React from "react";
import styled from "styled-components";
import { Button } from "primereact/button";
import { useState } from "react";

const Home = () => {
  const Sidebar = styled.div`
  background-color: black
  }
`;

  const [visibleLeft, setVisibleLeft] = useState(false);
  const customIcons = (
    <React.Fragment>
      <button className="p-sidebar-icon p-link mr-1">
        <span className="pi pi-print" />
      </button>
      <button className="p-sidebar-icon p-link mr-1">
        <span className="pi pi-arrow-right" />
      </button>
    </React.Fragment>
  );
  return (
    <div>
      <div className="card">
        <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
          <h3>Left Sidebar</h3>
        </Sidebar>

        <Button
          icon="pi pi-arrow-right"
          onClick={() => setVisibleLeft(true)}
          className="mr-2"
        />
      </div>
    </div>
  );
};

export default Home;
