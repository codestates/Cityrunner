import React from "react";
import { InputChat } from "./InputChat";
import { PreviousChat } from "./PreviousChat";
import { Inmsg } from "./Inmsg";

let socket = new WebSocket(`ws://localhost:4000/chat`);

export const Socketio = () => {
  /* 리덕스로 관리해야 변수 명
    roomId,userId
  */
  const makeMessage = (roomId, userId, chat, option) => {
    const msg = { roomId, userId, chat, option };
    return JSON.stringify(msg);
  };

  const onClick = (data) => {
    return socket.send(makeMessage(1, 2, data));
    //return socket.send(makeMessage(리덕스변수(roomId), 리덕스변수(userId), data));
  };

  // 이쪽은 좀 더 꾸며야 함
  const test1 = () => {
    return socket.send(makeMessage(1, 1, "test1", "Join"));
  };
  const test2 = () => {
    return socket.send(makeMessage(1, 2, "test1", "Join"));
  };
  const test3 = () => {
    return socket.send(makeMessage(2, 1, "test2", "Join"));
  };

  return (
    <>
      <PreviousChat></PreviousChat>
      <Inmsg socket={socket}></Inmsg>
      <InputChat onClick={onClick}></InputChat>
      <button onClick={test1}> 1번째 방 들어가기 유저 1</button>
      <button onClick={test2}> 1번째 방 들어가기 유저 2</button>
      <button onClick={test3}> 2번째 방 들어가기</button>
    </>
  );
};
