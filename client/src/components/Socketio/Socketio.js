import React, { useEffect } from "react";
import styled from "styled-components";
import { InputChat } from "./InputChat";
import { PreviousChat } from "./PreviousChat";
import { Inmsg } from "./Inmsg";
import axios from "axios";
import { theme } from "../../themes/theme";
import { useState } from "react";

let socket = new WebSocket(`ws://localhost:4000/chat`);

export const Socketio = () => {
  const [userid, setUserid] = useState("");
  const [roomid, setRoomid] = useState("");
  const [isChat, setIsChat] = useState(true);
  /* 리덕스로 관리해야 변수 명
    roomId,userId
  */
  //userid, roomid가 필요함

  useEffect(async () => {
    const axiosGet = await axios.get(`http://localhost:4000/chat/`, {
      withCredentials: true,
    });
    console.log(axiosGet);
    setUserid(axiosGet.data.userid);
    setRoomid(axiosGet.data.postId);
  }, []);

  const makeMessage = (roomId, userId, chat, option) => {
    const msg = { roomId, userId, chat, option };
    return JSON.stringify(msg);
  };

  const onClick = (data) => {
    return socket.send(makeMessage(roomid, userid, data));
    //return socket.send(makeMessage(리덕스변수(roomId), 리덕스변수(userId), data));
  };

  // 이쪽은 좀 더 꾸며야 함
  const enterChatRoom = () => {
    setIsChat(true);
    return socket.send(makeMessage(roomid, userid, "", "Join"));
  };

  return (
    <>
      {isChat ? (
        <ChatRoom>
          <PreviousChat></PreviousChat>
          <Inmsg socket={socket} userid={userid}></Inmsg>
          <InputChat onClick={onClick}></InputChat>
        </ChatRoom>
      ) : null}

      {isChat ? null : (
        <EnterChatRoom onClick={enterChatRoom}> 채팅하기</EnterChatRoom>
      )}
    </>
  );
};

const EnterChatRoom = styled.button`
  position: absolute;
  top: 50%;
  background-color: ${theme.color.apricot};
  border-radius: 10px;
  border: solid 1px ${theme.color.gray};
  padding: 7px 20px 7px 20px;

  left: calc(70% - 10px);
`;

const ChatRoom = styled.div`
  width: 100%;
  margin-top: 6px;
  background: ${theme.color.hovergray};
`;
