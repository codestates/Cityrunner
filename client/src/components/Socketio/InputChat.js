import React, { useState, useEffect } from "react";
import { theme } from "../../themes/theme";
import styled from "styled-components";

export const InputChat = ({ onClick }) => {
  const [curChat, setCurChat] = useState("");
  const [isText, setisText] = useState(false);

  const onChange = (event) => {
    setCurChat(event.target.value);
  };
  const Click = () => {
    onClick(curChat);
    setCurChat("");
  };

  useEffect(() => {
    const sendMsg = (event) => {
      if (event.keyCode === 13 && curChat.length > 0) {
        Click(curChat);
      }
    };
    window.addEventListener("keydown", sendMsg);
    return () => window.removeEventListener("keydown", sendMsg);
  });

  useEffect(() => {
    setisText(false);
    if (curChat.length === 0) {
      setisText(false);
    } else {
      setisText(true);
    }
  }, [curChat]);

  return (
    <>
      <Contanier>
        <InputMsg
          value={curChat}
          onChange={(event) => {
            onChange(event);
          }}
        ></InputMsg>

        {isText ? (
          <SendButtonIstext onClick={Click}>채팅</SendButtonIstext>
        ) : (
          <SendButton>채팅</SendButton>
        )}
      </Contanier>
    </>
  );
};
const Contanier = styled.div`
  width: auto;
  height: auto;
`;

const InputMsg = styled.input.attrs({
  required: true,
  type: "text",
  name: "chat",
})`
  width: calc(100% - 86px);
  height: 50px;
  margin-left: 5px;
  margin-right: 5px;
`;

const SendButtonIstext = styled.button`
  background-color: ${theme.color.apricot};
  display: inline;
  border-radius: 10px;
  border: solid 1px ${theme.color.gray};
  padding: 7px 20px 7px 20px;
`;

const SendButton = styled.button`
  background-color: ${theme.color.black};
  display: inline;
  border-radius: 10px;
  border: solid 1px ${theme.color.gray};
  padding: 7px 20px 7px 20px;
`;
