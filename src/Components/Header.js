import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Wrapper>
        <AccessTimeIcon />
        <SearchContainer>
          <input type="text" placeholder="Search..." />
        </SearchContainer>
        <HelpOutlineIcon />
      </Wrapper>
      <UserContainer>
        <Name>Anonymous</Name>
        <UserImage>
          <img src="https://i.imgur.com/6VBx3io.png" alt="avatar" />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  display: grid;
  align-items: center;
  margin: 0 16px;

  input {
    width: 100%;
    border: none;
    background-color: transparent;
    padding-left: 8px;
    padding-right: 8px;
    color: ${(props) => props.theme.color};
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.h3`
  margin-right: 16px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid ${(props) => props.theme.color};
  border-radius: 3px;

  img {
    width: 100%;
  }
`;
