import React, { useState, useEffect } from "react";

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
    <div>
      <input
        name="chat"
        placeholder="글적어"
        onChange={(event) => {
          onChange(event);
        }}
        value={curChat}
      />
      <button onClick={Click}>채팅</button>
    </div>
  );
};
