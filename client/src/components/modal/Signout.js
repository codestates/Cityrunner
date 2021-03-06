import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";
import { flexCenter, flexColum } from "../../themes/flex";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutUser, setIsLogin } from "../../redux/modules/user";

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
  height: 550px;
  padding: 1rem;
  background: white;
  border-radius: 2px;
  h3 {
    ${flexCenter}
  }
`;

const Title = styled.h1`
  ${flexCenter}
  margin-top: 2rem;
  margin-bottom: 5rem;
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
    background-color: ${theme.color.white};
    color: white;
    font-weight: bold;
  }
  .exitCan {
    height: 1.5rem;
    width: 200px;
    height: 2rem;
    margin: 0.5rem;
    margin-top: 0.5rem;
    background-color: ${theme.color.black};
    color: white;
    font-weight: bold;
  }
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 1rem;
  text-align: center;
`;
const Num = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2.5rem;
`;
const NumText = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 4rem;
  text-align: center;
`;
const Input = styled.div`
  ${flexCenter}
  margin-top:2rem;
  input {
    height: 1.8rem;
    width: 65px;
    margin-top: -1rem;
    border: solid 1px;
    padding-left: 1rem;
    margin-right: 0.5rem;
  }
  display: flex;
  flex-direction: row;
`;

export const Signout = ({ MyRunDistance, handleSignoutModal }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser);
    dispatch(setIsLogin(false));
    localStorage.removeItem("userinfo");
  };
  const [exit, setExit] = useState(false);
  let runDis = 0;
  const OnChange = (key) => (e) => {
    runDis = Number(e.target.value);
    if (runDis === MyRunDistance) {
      setExit(true);
    } else {
      setExit(false);
    }
  };

  const SignoutButton = () => {
    axios
      .delete("https://api.cityrunner.site:4000/user/signout", {
        withCredentials: true,
      })
      .then(() => {
        handleSignoutModal();
        onLogout();
        window.location.href = "https://cityrunner.site/";
      });
  };
  return (
    <>
      <ModalContainer>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Title>?????? ??????</Title>
          <Text>????????? ?????? ???????????????????</Text>
          <Text>??????????????? ???????????? ????????? ????????? ?????????.</Text>
          <Text>?????? ???????????? ???????????? ?????? ????????? ??????????????????.</Text>
          <NumText>CityRunner??? ??????</NumText>
          <Num>{MyRunDistance} km ???????????????!</Num>
          <Input>
            <input
              name="distance"
              type="text"
              placeholder="?????? ??????"
              onChange={OnChange()}
            />
            km
          </Input>
          <LoginBtn>
            {exit ? (
              <button className="exitCan" onClick={SignoutButton}>
                ????????????
              </button>
            ) : (
              <button>????????????</button>
            )}
          </LoginBtn>
        </Modal>
      </ModalContainer>
    </>
  );
};
