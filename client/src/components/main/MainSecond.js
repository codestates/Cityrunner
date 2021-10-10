import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const MainSecond = () => {
  const fadeIn = useScrollFadeIn("up", 1);
  const text = useScrollFadeIn("up", 1);
  return (
    <Contanier>
      <InfoText>
        <h1 {...text}>달리고 싶은 장소를 선택하세요!</h1>
        <br />
        <li>시간, 난이도, 거리 등 다양한 조건으로 크루를 찾을 수 있어요.</li>
        <li>원하는 크루에 참가해 크루원들끼리 채팅을 나눠보세요.</li>
      </InfoText>
      <Iamge src="img/filter.gif" {...fadeIn}></Iamge>
    </Contanier>
  );
};

const Contanier = styled.div`
  width: 100vw;
  padding-top: 10rem;
  padding-bottom: 10rem;
  display: flex;
  justify-content: space-evenly;
  border-top: solid 1px ${theme.color.hovergray};
  border-bottom: solid 1px ${theme.color.hovergray};
  background-color: ${theme.color.lightgray};
  @media ${theme.mobileS} {
    ${flexColum}
    img {
      width: 100vw;
    }
  }
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

const Iamge = styled.img`
  width: 57%;
  height: auto;
`;
