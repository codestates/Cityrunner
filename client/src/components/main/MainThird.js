import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { theme } from "../../themes/theme";

const Contaniner = styled.div`
  width: 100vw;
  img {
    width: 60%;
  }
  background-color: ${theme.color.apricot};
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
        <h1 {...text}>함께해서 즐거운 운동생활</h1>
        <br />
        <li>작심삼일도 함께하면 극복가능!</li>
        <li>혼자 나가기 싫다면? 함께 뛰어요!</li>
        <li>한강변을 같이 뛸 크루를 찾아보세요.</li>
        <li>우리 지역에 크루가 없다면 직접 크루를 만들 수도 있습니다.</li>
      </InfoText>
    </Contaniner>
  );
};
