import React, { Component, useState } from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";
import axios from "axios";

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  width: 320px;
  height: 400px;
  padding: 1rem;
  background: white;
  border-radius: 15px;
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  input {
    height: 1.8rem;
    width: 200px;
    margin-top: -1rem;
    border: solid 1px;
    padding-left: 1rem;
  }
  h5 {
    padding-right: 11rem;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1.5rem;
  button {
    height: 1.5rem;
    width: 200px;
    height: 2rem;
    margin: 0.5rem;
    margin-top: 1rem;
    background-color: ${theme.color.black};
    color: white;
    font-weight: bold;
    :hover {
      background-color: white;
      color: ${theme.color.black};
      border: solid 1px;
      transition: 0.4s;
    }
  }
`;

export const Signup = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (e) => {
    setEmail(e.target.value);
  };
  const [pass, setPass] = useState("");
  const handleSetPass = (e) => {
    setPass(e.target.value);
  };
  const [nick, setNick] = useState("");
  const handleSetNick = (e) => {
    setNick(e.target.value);
  };
  const SignupButton = () => {
    let SendValue = {
      email: email,
      password: pass,
      username: nick,
    };
    console.log(SendValue);
    axios
      .get("http://ec2-3-36-89-86.ap-northeast-2.compute.amazonaws.com")
      .then((res) => console.log(res));
  };
  return (
    <>
      <ModalContainer>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Title>회원가입</Title>
          <Input>
            <h5>E-mail</h5>
            <input
              name="email"
              type="text"
              placeholder="Email Adress"
              onChange={handleSetEmail}
            />
            <h5>비밀번호</h5>
            <input
              name="password"
              type="password"
              placeholder="6자리 이상 입력해주세요."
              onChange={handleSetPass}
            />
            <h5>닉네임</h5>
            <input
              name="nickname"
              type="text"
              placeholder="닉네임"
              onChange={handleSetNick}
            />
          </Input>
          <LoginBtn>
            <button onClick={SignupButton}>회원가입</button>
          </LoginBtn>
        </Modal>
      </ModalContainer>
    </>
  );
};
