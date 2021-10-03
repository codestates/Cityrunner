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
  height: 550px;
  padding: 1rem;
  background: white;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
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

const Medal = styled.div`
  max-width: 350px;
  display: flex;
  flex-flow: wrap;
  margin-bottom: 1.5rem;
  align-items: center;
  justify-content: center;
`;
const TooltipText = styled.span`
  visibility: hidden;
  width: auto;
  height: 15px;
  white-space: nowrap;
  background-color: #474c50;
  color: #f3f4f6;
  text-align: center;
  border-radius: 5px;
  padding: 10px 5px;
  position: absolute;
  z-index: 1;
  top: 120%;
  font-size: 13px;
  font-weight: bold;
  :after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #474c50 transparent;
  }
`;
const ImgContainer = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover ${TooltipText} {
    visibility: visible;
  }
`;
const MedalImg = styled.img`
  width: 70px;
  height: 70px;
`;
const MedalName = styled.div`
  text-align: center;
`;

export const ShowMedal = (UserInfo) => {
  const medalInfo = UserInfo.UserInfo.medal;
  console.log(medalInfo);

  return (
    <>
      <ModalContainer>
        <Modal onClick={(e) => e.stopPropagation()}>
          <Title>획득한 메달</Title>
          <Medal>
            {medalInfo.map((data) => {
              const ImgsrcId = data.id;
              const Imgsrc = "img/medal" + ImgsrcId + ".jpeg";
              return (
                <ImgContainer>
                  <MedalImg src={Imgsrc} />
                  <MedalName>{data.medalName}</MedalName>
                  <TooltipText>{data.medalDesc}</TooltipText>
                </ImgContainer>
              );
            })}
          </Medal>
        </Modal>
      </ModalContainer>
    </>
  );
};
