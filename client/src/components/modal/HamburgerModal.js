import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";
import { flexCenter, flexColum } from "../../themes/flex";

export const HamburgerModal = (props) => {
  console.log(props);
  const token = props.token;
  const history = props.history;
  const onLogout = props.onLogout;
  const handleModal = props.handleModal;
  const handleSignupModal = props.handleSignupModal;
  const handleHamburgerModal = props.handleHamburgerModal;
  return (
    <>
      <ModalContainer>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Menu
            onClick={() => {
              history.push("/Matching");
            }}
          >
            매칭페이지
          </Menu>
          {!token ? (
            <div>
              <Menu
                onClick={() => {
                  handleModal();
                  handleHamburgerModal();
                }}
              >
                로그인
              </Menu>
              <Menu
                onClick={() => {
                  handleSignupModal();
                  handleHamburgerModal();
                }}
              >
                회원가입
              </Menu>
            </div>
          ) : (
            <div>
              <Menu
                onClick={() => {
                  history.push("/Mypage");
                }}
              >
                마이페이지
              </Menu>
              <Menu
                onClick={() => {
                  onLogout();
                  handleHamburgerModal();
                }}
              >
                로그아웃
              </Menu>
            </div>
          )}
          <Menu onClick={handleHamburgerModal}>메뉴닫기</Menu>
        </Modal>
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
`;

const Modal = styled.div`
  width: 100vw;
  height: 40vh;
  min-height: 500px;
  background-color: ${theme.color.black};
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  ${flexCenter}
  margin-top: 30px;
  color: white;
  font-family: Impact;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

// 받을거 token
//  history.push("/Matching");
//  history.push("/Mypage"); ,  onLogout
//  handleModal , handleSignupModal
