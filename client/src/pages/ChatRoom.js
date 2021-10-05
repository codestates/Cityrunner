import React, { useState } from "react";
import { Chat } from "../components/myroom/Chat";
import { Header } from "../components/Header";
import { Socketio } from "../components/Socketio/Socketio";
import { theme } from "../themes/theme";
import styled from "styled-components";
import { IsLoading } from "../components/Socketio/IsLoading";

const ChatRoom = () => {
  return (
    <>
      <Header />
      <Contanier>
        <ChatContanier>
          <Chat />
        </ChatContanier>
        <SocketioContanier>
          <Socketio />
        </SocketioContanier>
      </Contanier>
    </>
  );
};

const Contanier = styled.div`
  padding-top: 60px;
  height: 100%;
  display: flex;
  @media ${theme.mobileS} {
    flex-direction: column;
  }
`;
const SocketioContanier = styled.div`
  background: ${theme.color.hovergray};
  margin-left: 50%;
  /* margin-left: 5px; */
  margin-top: 4px;
  width: 62%;
  @media ${theme.mobileS} {
    width: 100%;
    margin-left: 0;
  }
`;

const ChatContanier = styled.div`
  width: 50%;
  position: fixed;
  @media ${theme.mobileS} {
    width: 100%;
    position: relative;
  }
`;

export default ChatRoom;
