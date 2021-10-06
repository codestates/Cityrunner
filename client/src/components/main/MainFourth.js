import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const MainFourth = () => {
  const fadeIn = useScrollFadeIn("up", 1);
  const text = useScrollFadeIn("up", 1);
  return (
    <Contanier>
      <InfoText>
        <h1 {...text}>한강 스팟을 중심으로 찾아보세요!</h1>
        <br />
        <li>가까운 한강 스팟으로!</li>
        <li>달리기가 좋아서, 사람이 좋아서</li>
        <li>도심 속을 달리자!</li>
        <li>CityRunner가 도와드립니다!</li>
      </InfoText>
      <ImgContainer src="img/hanRiver_map.png" {...fadeIn}></ImgContainer>
    </Contanier>
  );
};

const Contanier = styled.div`
  width: 100vw;
  padding-top: 7rem;
  padding-bottom: 20vh;
  display: flex;
  justify-content: space-evenly;
  background-color: ${theme.color.apricot};

  @media ${theme.mobileS} {
    ${flexColum}
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
