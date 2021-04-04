import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItemsData } from "../Data/data";
function Sidebar() {
  return (
    <Container>
      <SidebarHeader>
        <h3>DigvijayGhosh</h3>
        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </SidebarHeader>
      <MainChannels>
        {sidebarItemsData.map((item, index) => {
          return (
            <MainChannelItem key={index}>
              {item.icon}
              {item.text}
            </MainChannelItem>
          );
        })}
      </MainChannels>
      <ChannelContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon />
        </NewChannelContainer>
      </ChannelContainer>
      <Channels>
        <ChannelList>#Channel 1</ChannelList>
        <ChannelList>#Channel 2</ChannelList>
      </Channels>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: ${(props) => props.theme.secondary};
`;

const SidebarHeader = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  color: white;
  border-bottom: 1px solid #532753;
  justify-content: space-between;
  padding-left: 24px;
`;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 24px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 24px;
`;

const MainChannelItem = styled.div`
  color: ${(props) => props.theme.text};
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 24px;
  cursor: pointer;
  transition: 0.4s all linear;
  &:hover {
    background: ${(props) => props.theme.hover};
  }
`;

const ChannelContainer = styled.div`
  color: ${(props) => props.theme.text};
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  padding-left: 24px;
  padding-right: 16px;

  svg {
    cursor: pointer;
  }
`;

const Channels = styled.div`
  color: ${(props) => props.theme.text};
  margin-top: 10px;
  display: grid;
  padding-left: 24px;
  align-items: center;
`;

const ChannelList = styled.div`
  height: 28px;
  display: grid;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all linear;

  &:hover {
    background: ${(props) => props.theme.hover};
  }
`;
