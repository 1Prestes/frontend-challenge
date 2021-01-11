import React from "react";
import styled from "styled-components";

import MyLogo from "../../img/Lugares 1.png";

const Logo = styled.div`
  background-image: url(${MyLogo});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin-left: 53px;
`;

const Header = styled.header`
  background: #000;
  height: 85px;
`;

export function Home() {
  return (
    <>
      <Header>
        <Logo></Logo>
      </Header>
      <h1>Find place</h1>
      <h1>Cards</h1>
    </>
  );
}

export default Home;
