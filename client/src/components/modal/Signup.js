import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";
import { flexCenter, flexColum } from "../../themes/flex";
import axios from "axios";
import { Link, useHistory, Redirect } from "react-router-dom";

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  ${flexCenter}
  z-index:10;
  background: rgba(0, 0, 0, 0.3);
`;

const Modal = styled.div`
  width: 320px;
  height: 500px;
  padding: 1rem;
  background: white;
  z-index: 10;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
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
const Congra = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImgCon = styled.img`
  width: 280px;
  height: auto;
`;
const CloseModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: right;
  cursor: pointer;
`;
export const Signup = ({
  setShowSignupModal,
  handleModal,
  handleSignupModal,
}) => {
  const history = useHistory();

  const [SignupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [PasswordCheck, setPasswordCheck] = useState("");
  const [Success, setSuccess] = useState(false);
  const handleSuccess = () => {
    setSuccess(true);
  };
  const exitButton = () => {
    setShowSignupModal(false);
    handleModal();
  };

  const OnClick = (key) => (e) => {
    setSignupInfo({ ...SignupInfo, [key]: e.target.value });
  };
  const OnClickCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  const SignupButton = async () => {
    if (!SignupInfo.email && !SignupInfo.password && !SignupInfo.username) {
      alert("?????? ?????? ??????????????????.");
    } else {
      if (SignupInfo.password !== PasswordCheck) {
        alert("??? ??????????????? ??????????????????.");
      } else {
        await axios
          .post(`https://api.cityrunner.site:4000/user/signup`, SignupInfo, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.status === 200) {
              handleSuccess();
            }
          })
          .catch((err) => {
            if (err.response.status === 409) {
              alert("?????? ???????????? ?????????,????????? ?????????");
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
          <CloseModal onClick={handleSignupModal}>X</CloseModal>
          {!Success ? (
            <div>
              <Title>????????????</Title>
              <Input>
                <h5>E-mail</h5>
                <input
                  name="email"
                  type="text"
                  placeholder="Email Adress"
                  onChange={OnClick("email")}
                />
                <h5>????????????</h5>
                <input
                  name="password"
                  type="password"
                  placeholder="6?????? ?????? ??????????????????."
                  onChange={OnClick("password")}
                />
                <h5>???????????? ??????</h5>
                <input
                  name="newPasswordCheck"
                  type="password"
                  placeholder="6?????? ?????? ??????????????????."
                  onChange={OnClickCheck}
                />
                <h5>?????????</h5>
                <input
                  name="nickname"
                  type="text"
                  placeholder="?????????"
                  onChange={OnClick("username")}
                />
              </Input>
              <LoginBtn>
                <button onClick={SignupButton}>????????????</button>
              </LoginBtn>
            </div>
          ) : (
            <Congra>
              <ImgCon src="img/firework.jpg"></ImgCon>
              <Title>??????????????? ?????????????????????!</Title>
              <LoginBtn>
                <button
                  onClick={() => {
                    exitButton();
                  }}
                >
                  ???????????????
                </button>
              </LoginBtn>
            </Congra>
          )}
        </Modal>
      </ModalContainer>
    </>
  );
};
