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
  z-index: 10;
  ${flexCenter}
  background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  width: 430px;
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
  h5 {
    ${flexCenter}
    margin-bottom:1.5rem;
  }
`;

const Title = styled.h2`
  ${flexCenter}
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const Btn = styled.div`
  ${flexColum}
  margin-top: 1.5rem;
  button {
    width: 200px;
    height: 2rem;
    margin: 0.5rem;
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

export const Fix = ({ handleFixModal }) => {
  const [FixInfo, setFixInfo] = useState({
    password: "",
    newPassword: "",
    username: "",
  });
  const [PasswordCheck, setPasswordCheck] = useState("");
  const CloseFix = () => {
    handleFixModal();
  };
  const OnClick = (key) => (e) => {
    setFixInfo({ ...FixInfo, [key]: e.target.value });
  };
  const OnClickCheck = (e) => {
    setPasswordCheck(e.target.value);
  };
  const FixButton = () => {
    if (!FixInfo.password) {
      alert("현재 비밀번호를 입력해주세요.");
    } else {
      if (FixInfo.newPassword !== PasswordCheck) {
        alert("새 비밀번호를 확인해주세요.");
      } else {
        axios
          .patch(`http://api.cityrunner.site/mypage`, FixInfo, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.status === 200) {
              CloseFix();
              alert("변경되었습니다.");
            }
          })
          .catch((err) => {
            if (err.response.status === 400) {
              alert("비밀번호가 일치하지 않습니다.");
              return;
            }
            if (err.response.status === 401) {
              alert("권한이 없는 유저입니다.@@@@@@@@@@@@@@@");
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
          <Title>회원 정보 수정</Title>
          <Input>
            <h5>현재 비밀번호</h5>
            <input
              name="password"
              type="password"
              placeholder="현재 비밀번호"
              onChange={OnClick("password")}
            />
            <h5>새 비밀번호</h5>
            <input
              name="newPassword"
              type="password"
              placeholder="6자리 이상 입력해주세요."
              onChange={OnClick("newPassword")}
            />
            <h5>새 비밀번호 확인</h5>
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
          <Btn>
            <button onClick={FixButton}>수정하기</button>
          </Btn>
        </Modal>
      </ModalContainer>
    </>
  );
};
