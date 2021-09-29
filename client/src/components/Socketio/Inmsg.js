import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Left = styled.div`
  color: red;
  text-align: left;
  width: 40%;
`;
const Right = styled.div`
  color: blue;
  text-align: left;
  margin-left: 60%;
  width: 40%;
`;
const Balloon = styled.div`
  border: 4px solid #c2e1f5;
`;

export const Inmsg = ({ socket }) => {
  const [socketMsg, setSocketMsg] = useState({
    roomId: "",
    userId: "",
    chat: "",
  });
  const [chats, setChats] = useState([
    {
      roomId: "",
      userId: "",
      chat: "",
    },
  ]);

  useEffect(async () => {
    socket.addEventListener("message", (msg) => {
      let { roomId, userId, chat } = JSON.parse(msg.data);
      setSocketMsg({
        roomId: roomId,
        userId: userId,
        chat: chat,
      });
    });
  }, []);

  useEffect(async () => {
    setChats([...chats, socketMsg]);
  }, [socketMsg]);

  return (
    <>
      {chats.map((el, idx) =>
        el.userId !== "" ? (
          el.userId !== 1 ? (
            <Left key={idx}>
              <Balloon>{el.chat}</Balloon>
            </Left>
          ) : (
            <Right key={idx}>
              <Balloon>{el.chat}</Balloon>
            </Right>
          )
        ) : null
      )}
    </>
  );
};
