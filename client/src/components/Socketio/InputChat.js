import React, { useState, useEffect } from "react";
import { theme } from "../../themes/theme";
import styled from "styled-components";

export const InputChat = ({ onClick }) => {
  const [curChat, setCurChat] = useState("");

  const onChange = (event) => {
    setCurChat(event.target.value);
  };
  const Click = () => {
    onClick(curChat);
    setCurChat("");
  };

  useEffect(() => {
    const sendMsg = (event) => {
      if (event.keyCode === 13) {
        Click(curChat);
      }
    };
    window.addEventListener("keydown", sendMsg);
    return () => window.removeEventListener("keydown", sendMsg);
  });

  return (
    <>
      <InputMsg
        value={curChat}
        onChange={(event) => {
          onChange(event);
        }}
      ></InputMsg>
      <SendButton onClick={Click}>채팅</SendButton>
    </>
  );
};

const InputMsg = styled.input.attrs({
  required: true,
  type: "text",
  name: "chat",
})`
  width: calc(100% - 86px);
  height: 50px;
  margin-left: 5px;
`;

const SendButton = styled.button`
  background-color: ${theme.color.apricot};
  display: inline;
  border-radius: 10px;
  border: solid 1px ${theme.color.gray};
  padding: 7px 20px 7px 20px;
`;
