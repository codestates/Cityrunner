import React from "react";
import styled from "styled-components";
import useScrollCount from "../../hooks/useScrollCount";
import { theme } from "../../themes/theme";
import { useHistory } from "react-router-dom";
import { flexCenter, flexColum } from "../../themes/flex";

const FIGURE_ITEMS = [
  {
    title: "Total Crew",
    number: 4924,
    unit: "",
    desc: "총 만들어진 크루",
  },
  {
    title: "Running Member",
    number: 100000,
    unit: "+",
    desc: "총 함께달린 크루멤버",
  },
  {
    title: "Mathcing Success",
    number: 98,
    unit: "%",
    desc: "매칭 성공률",
  },
];

export const MainCount = () => {
  const history = useHistory();
  const countItem = {
    0: useScrollCount(4294, 0, 3000, 0, 10),
    1: useScrollCount(100000, 0, 3000, 0, 500),
    2: useScrollCount(98),
  };
  return (
    <>
      
    <Contanier>
      <Wrapper>
        <List>
          {FIGURE_ITEMS.map((item, index) => (
            <ListItem key={item.title}>
              <Number {...countItem[index]}>0</Number>
              <Unit>{item.unit}</Unit>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    <TitleDesc>
        <li>지금바로 &nbsp;</li>
        <li>시작해보세요!</li>
      </TitleDesc>
      <StartBtn>
        <button className="btn" onClick={() => history.push("/Matching")}>
          시작하기
        </button>
      </StartBtn>
    </Contanier>
    </>
  );
};

const Contanier = styled.div`
  width: 100%;
  background-color: ${theme.color.apricot};
  @media ${theme.mobileS} {
    width: 100vw;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 100px 0;
  padding-left: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.mobileS} {
    width: 100vw;
    flex-direction: column;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
  padding-left: 0;
  @media ${theme.mobileS} {
    flex-direction: column;
  }
`;

const ListItem = styled.li`
  width: 100%;
  min-width: 220px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  &:nth-child(2) {
    border: 2px solid ${theme.color.gray};
    border-top: none;
    border-bottom: none;
    @media ${theme.mobileS} {
      border: 0px solid ${theme.color.gray};
    }
  }
`;
const Number = styled.span`
  color: black;
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Unit = styled.span`
  color: #0298d6;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  margin: 1rem 0;
`;

const Description = styled.p`
  color: ${theme.color.gray};
`;
const StartBtn = styled.div`
  ${flexCenter}
  padding-bottom: 25vh;
  /* background-color: ${theme.color.apricot}; */

  .btn {
    color: #f5f5f3;
    font-weight: bold;
    font-size: 1rem;
    &:hover {
      background-color: white;
      transition: 0.4s;
      color: ${theme.color.black};
      border: solid 1px;
    }
    background-color: ${theme.color.black};
    color: #f5f5f3;
    height: 2.4rem;
    width: 50vh;
    margin: 0.5rem;
    border-radius: none;
    border: none;
  }
  @media ${theme.mobileS} {
    padding-bottom: 17vh;
  }
`;
const TitleDesc = styled.h1`
  ${flexCenter}
  margin-top: -4rem;
  margin-bottom: 3rem;
  color: ${theme.color.gray};

  @media ${theme.mobileS} {
    ${flexColum};
    margin-top: -4rem;
    margin-bottom: 5rem;
  }
`;