import axios from "axios";
import React, { useState, useEffect } from "react";
import { theme } from "../../themes/theme";
import styled from "styled-components";
import { IsLoading } from "./IsLoading";

export const PreviousChat = () => {
  const [preChat, setPreChat] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(async () => {
    //axios.get이 부분에서 Socketio가 props로 postId(매칭 페이지에서 선택된 익덴스)을 전달해야함
    const axiosGet = await axios.get(`http://localhost:4000/chat/1`);
    const getChattingLog = axiosGet.data.data;

    setPreChat(getChattingLog);
    setLoading(false);
  }, []);

  return (
    <>
      {Loading ? <IsLoading></IsLoading> : null}
      <ChatRoom>
        {preChat.map((el, idx) =>
          el.memberId !== 1 ? (
            <Left key={idx}>
              <LeftBalloon>
                {el.comment === ""
                  ? "ㅤ"
                  : `${el.user.username}: ${el.comment}`}
              </LeftBalloon>
            </Left>
          ) : (
            <Right key={idx}>
              <RightBalloon>
                {el.comment === ""
                  ? "ㅤ"
                  : `${el.user.username}: ${el.comment}`}
              </RightBalloon>
            </Right>
          )
        )}
      </ChatRoom>
    </>
  );
};
const ChatRoom = styled.div`
  background: ${theme.color.hovergray};
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
  background: ${theme.color.apricot};
  margin-bottom: 20px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
`;
