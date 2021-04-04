import React from "react";
import Chat from "../Components/Chat";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Dark, Light } from "../Theme";

function Room() {
  return (
    <ThemeProvider theme={Dark}>
      <Container>
        <Header />
        <Main>
          <Sidebar />
          <Chat />
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default Room;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: orange;
  display: grid;
  grid-template-rows: 48px auto;
`;

const Main = styled.div`
  background: blue;
  display: grid;
  grid-template-columns: 320px auto;
`;
