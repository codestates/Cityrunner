import axios from "axios";
import React, { useState, useEffect } from "react";
import { theme } from "../../themes/theme";
import styled from "styled-components";
import { IsLoading } from "./IsLoading";

export const PreviousChat = () => {
  const [preChat, setPreChat] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [userid, setUserid] = useState("");

  useEffect(async () => {
    const axiosGet = await axios.get(`http://api.cityrunner.site/chat/`, {
      withCredentials: true,
    });

    const getChattingLog = axiosGet.data.data;
    // console.log(getChattingLog);
    setUserid(axiosGet.data.userid);
    setPreChat(getChattingLog);
    setLoading(false);

    handleScroll();
  }, []);

  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {Loading ? (
        <IsLoading></IsLoading>
      ) : (
        <ChatRoom>
          {preChat.map((el, idx) =>
            el.memberId !== userid ? (
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
      )}
    </>
  );
};
const ChatRoom = styled.div`
  width: 100%;
  margin-top: 6px;
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
  &:nth-child(1) {
    margin-top: 20px;
  }
`;

const RightBalloon = styled.div`
  background: ${theme.color.apricot};
  text-align: left;
  margin-bottom: 20px;
  margin-right: 10px;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  &:nth-child(1) {
    margin-top: 20px;
  }
`;
