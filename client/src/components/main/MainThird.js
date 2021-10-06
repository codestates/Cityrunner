import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { theme } from "../../themes/theme";

const Contaniner = styled.div`
  width: 100vw;
  padding-top: 10rem;
  padding-bottom: 10rem;
  border-bottom: solid 1px ${theme.color.hovergray};
  img {
    width: 60%;
  }
  /* background-color: ${theme.color.apricot}; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20vh;
  @media ${theme.mobileS} {
    width: 100vw;
    flex-direction: column;
    img {
      width: 100vw;
    }
  }
`;
const ImgContainer = styled.img`
  width: 50%;
  height: auto;
`;
const InfoText = styled.ul`
  margin-top: 1rem;

  padding-right: 2rem;
  li {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 20px;
    color: ${theme.color.gray};
  }
  @media ${theme.mobileS} {
    li {
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
  }
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 18px;
`;
export const MainThird = () => {
  const fadeIn = useScrollFadeIn("up", 1);
  const text = useScrollFadeIn("up", 1);

  return (
    <Contaniner>
      <ImgContainer src="img/crews3.png" {...fadeIn}></ImgContainer>
      <InfoText>
        <h1 {...text}>크루원을 모집해 보아요!</h1>
        <br />
        <li>원하는 조건의 크루가 없으면 직접 모집해보세요!</li>
        <li>시간, 난이도, 거리 등 다양한 조건으로 크루를 만들수 있어요.</li>
        <li>크루장이 되어 방을 관리할 수 있습니다.</li>
      </InfoText>
    </Contaniner>
  );
};
