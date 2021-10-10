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
        <h1 {...text}>지금까지 달린 거리를 볼 수 있어요!</h1>
        <br />
        <li>지금까지 참여한 크루를 기준으로 달린 거리를 확인할 수 있어요!</li>
        <li>열심히 달리면 메달도 얻을 수 있답니다.</li>
      </InfoText>
      <ImgContainer src="img/medal.gif" {...fadeIn}></ImgContainer>
    </Contanier>
  );
};

const Contanier = styled.div`
  width: 100vw;
  padding-top: 10rem;
  padding-bottom: 10rem;
  border-bottom: solid 1px ${theme.color.hovergray};
  display: flex;
  justify-content: space-evenly;
  background-color: ${theme.color.lightgray};

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
