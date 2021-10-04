import React from "react";
import { Chat } from "../components/myroom/Chat";
import { Socketio } from "../components/Socketio/Socketio";

const ChatRoom = () => {
  return (
    <>
      <Chat />
      {/* <Socketio socket={socket} /> */}
      <Socketio />
    </>
  );
};

export default ChatRoom;
