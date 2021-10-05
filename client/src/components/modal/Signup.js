import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";
import { flexCenter, flexColum } from "../../themes/flex";
import axios from "axios";

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  ${flexCenter}
  background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  width: 320px;
  height: 500px;
  padding: 1rem;
  background: white;
  border-radius: 2px;
  h3 {
    ${flexCenter}
  }
`;

const Input = styled.div`
  ${flexColum}
  input {
    height: 1.8rem;
    width: 200px;
    margin-top: -1rem;
    border: solid 1px;
    padding-left: 1rem;
  }
`;

const Title = styled.h2`
  ${flexCenter}
  margin-top: 2rem;
`;

const LoginBtn = styled.div`
  ${flexColum}
  margin-top: 1.5rem;
  button {
    height: 1.5rem;
    width: 200px;
    height: 2rem;
    margin: 0.5rem;
    margin-top: 0.5rem;
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

export const Signup = (props) => {
  const [SignupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [PasswordCheck, setPasswordCheck] = useState("");

  const CloseSignup = () => {
    props.setShowSignupModal(false);
  };

  const OnClick = (key) => (e) => {
    setSignupInfo({ ...SignupInfo, [key]: e.target.value });
  };
  const OnClickCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const SignupButton = async () => {
    if (!SignupInfo.email && !SignupInfo.password && !SignupInfo.username) {
      alert("모든 값을 입력해주세요.");
    } else {
      if (SignupInfo.password !== PasswordCheck) {
        alert("새 비밀번호를 확인해주세요.");
      } else {
        await axios
          .post(`http://localhost:4000/user/signup`, SignupInfo, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              CloseSignup();
              alert("회원가입에 성공하였습니다.");
            }
          })
          .catch((err) => {
            console.log(err.response.status);
            if (err.response.status === 409) {
              alert("이미 존재하는 이메일,닉네임 입니다");
              return;
            }
          });
      }
    }
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
              onChange={OnClick("email")}
            />
            <h5>비밀번호</h5>
            <input
              name="password"
              type="password"
              placeholder="6자리 이상 입력해주세요."
              onChange={OnClick("password")}
            />
            <h5>비밀번호 확인</h5>
            <input
              name="newPasswordCheck"
              type="password"
              placeholder="6자리 이상 입력해주세요."
              onChange={OnClickCheck}
            />
            <h5>닉네임</h5>
            <input
              name="nickname"
              type="text"
              placeholder="닉네임"
              onChange={OnClick("username")}
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
