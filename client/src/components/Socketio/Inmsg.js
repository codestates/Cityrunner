import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";

export const Inmsg = ({ socket, userid }) => {
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
      let { roomId, userId, chat, username, image } = JSON.parse(msg.data);
      setSocketMsg({
        roomId: roomId,
        userId: userId,
        chat: chat,
        username: username,
        image: image,
      });
    });
  }, []);

  useEffect(async () => {
    setChats([...chats, socketMsg]);
  }, [socketMsg]);

  useEffect(() => {
    const handleScroll = () => {
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    };
    return handleScroll();
  }, [chats]);

  return (
    <>
      <ChatRoom>
        {chats.map((el, idx) =>
          el.userId !== "" ? (
            el.userId !== userid ? (
              <Left key={idx}>
                <LeftBalloon>{`${el.username}: ${el.chat}`}</LeftBalloon>
              </Left>
            ) : (
              <Right key={idx}>
                <RightBalloon>{`${el.username}: ${el.chat}`}</RightBalloon>
              </Right>
            )
          ) : null
        )}
      </ChatRoom>
    </>
  );
};

const ChatRoom = styled.div`
  background: ${theme.color.hovergray};
  width: 100%;
`;

const Left = styled.div`
  text-align: left;
`;
const Right = styled.div`
  text-align: right;
  margin-left: 60%;
`;
const LeftBalloon = styled.div`
  background: ${theme.color.withe};
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  border-radius: 5px;
  display: inline-block;
`;

const RightBalloon = styled.div`
  text-align: left;
  background: ${theme.color.apricot};
  margin-bottom: 20px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
`;
