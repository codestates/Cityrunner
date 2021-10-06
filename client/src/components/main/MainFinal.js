import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const MainFinal = () => {
  const fadeIn = useScrollFadeIn("up", 1);
  const text = useScrollFadeIn("up", 1);
  return (
    <Contanier>
      <InfoText>
        <h1 {...text}>모바일에서도 이용할 수 있습니다.</h1>
        <br />
        <li>PC와 모바일환경을 모두 지원합니다.</li>
        <li>어디서나 쉽게 참여할 수 있습니다.</li>
      </InfoText>
      <ImgContainer src="img/hanRiver_map.png" {...fadeIn}></ImgContainer>
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
  /* background-color: ${theme.color.apricot}; */

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
