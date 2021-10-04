import React from "react";
import { Chat } from "../components/myroom/Chat";
import { Socketio } from "../components/Socketio/Socketio";
import styled from "styled-components";

const ChatRoom = () => {
  return (
    <>
      <Chat />
      <Socketio />
    </>
  );
};

export default ChatRoom;
