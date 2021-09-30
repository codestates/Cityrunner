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
  return (
    <>
      <Test>
        <input
          type="text"
          name="chat"
          placeholder=""
          onChange={(event) => {
            onChange(event);
          }}
          value={curChat}
        />
      </Test>
      <button onClick={Click}>채팅</button>
    </>
  );
};

const Test = styled.div`
  width: 100px;
  border: solid 2px black;
`;

// 마이페이지 --> 반응형
// 마이페이지 --> css 이대로 인지? 통일감 있게
// 마이페이지 --> 컴포넌트로 나누기
