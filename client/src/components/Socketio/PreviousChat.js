import axios from "axios";
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

export const PreviousChat = ({ changeRoomId, changeUserId }) => {
  const [preChat, setPreChat] = useState([]);

  useEffect(async () => {
    //axios.get이 부분에서 Socketio가 props로 postId(매칭 페이지에서 선택된 익덴스)을 전달해야함

    const axiosGet = await axios.get(`http://localhost:4000/chat/1`);
    const getChattingLog = axiosGet.data.data;
    setPreChat(getChattingLog);
  }, []);

  return (
    <>
      {preChat.map((el, idx) =>
        el.memberId !== 1 ? (
          <Left key={idx}>
            <Balloon>{el.comment === "" ? "ㅤ" : el.comment}</Balloon>
          </Left>
        ) : (
          <Right key={idx}>
            <Balloon>{el.comment === "" ? "ㅤ" : el.comment}</Balloon>
          </Right>
        )
      )}
    </>
  );
};
