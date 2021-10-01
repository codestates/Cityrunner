import React from "react";
import styled from "styled-components";
import useScrollCount from "../../hooks/useScrollCount";
import { theme } from "../../themes/theme";

const FIGURE_ITEMS = [
  {
    title : 'Total Crew',
    number : 4924,
    unit : '팀',
    desc : '총 만들어진 크루'
  },
  {
    title : 'Running Member',
    number : 100000,
    unit : '명',
    desc : '총 함께달린 크루멤버'
  },
  {
    title : 'Mathcing Success',
    number : 98,
    unit : '%',
    desc : '매칭 성공률'
  },
];

export const MainCount = () => {
  const countItem = {
    0: useScrollCount(4294, 0, 3000, 0, 10),
    1: useScrollCount(100000, 0, 3000, 0, 500),
    2: useScrollCount(98),
  };
	return (
		<Contanier>
			<Wrapper>
        <List>
        {FIGURE_ITEMS.map((item, index) => (
              <ListItem key={item.title}>
                <Number {...countItem[index]}>0</Number>
                <Unit>{item.unit}</Unit>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
              </ListItem>
            ))}
          </List>
			</Wrapper>
		</Contanier>
	);
};

const Contanier = styled.div`
	width: 100%;
  background-color: #FFFBE7;
	@media ${theme.mobileS} {
		width: 100vw;
	}
`;

const  Wrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: auto;
  padding: 100px 0;
  @media ${theme.mobileS} {
		width: 100vw;
	}
`;

const List = styled.ul`
display: flex;
`;

const ListItem = styled.li`
width: 100%;
padding: 0 2rem;
text-align: center;
&:nth-child(2) {
  border: 2px solid white;
  border-top: none;
  border-bottom: none;
}
`;
const Number = styled.span`
color: black;
font-size: 3rem;
margin-bottom: 1rem;
`;
const Unit = styled.span`
    color: blue;
    font-size: 3rem;
    margin-bottom: 1rem;
  `;

const Title = styled.h3`
    margin: 1rem 0;
  `;

  const Description = styled.p`
  `;