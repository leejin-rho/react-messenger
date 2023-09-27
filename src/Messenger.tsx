import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "./style/colors";
import { Chatting } from "./components/Chatting";

const Messenger = () => {
  return (
    <Container>
      <Chatting/>
    </Container>
  );
}

export default Messenger;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey_50};
  align-items: center;
  width: 375px;
  height: 812px;
  /* @media (max-width: 390px) {
    width: auto;
    height: 70vh;
  } */
`;
