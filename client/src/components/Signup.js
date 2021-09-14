import React, { Component } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  background: #fff;
  border: 1px solid #000;
  padding: 20px;
  height: 60vh;
  width: 50vw;
`;

const Span = styled.span`
  color: black;
  font-size: 20px;
`;

const Signup = (props) => {
  const isOpen = props.isOpen;
  const closeModal = () => {
    props.setShowSignupModal(false);
  };
  return (
    <>
      {isOpen ? (
        <ModalContainer onClick={closeModal}>
          <Modal>
            <div>
              <Span>Email</Span>
              <input name="email" type="text" placeholder="Email Adress" />
            </div>
            <div>
              <Span>Password</Span>
              <input
                name="password"
                type="password"
                placeholder="6자리 이상 입력해주세요."
              />
            </div>
            <div>
              <Span>Password확인</Span>
              <input name="checkpassword" type="password" placeholder="확인" />
            </div>
          </Modal>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Signup;
