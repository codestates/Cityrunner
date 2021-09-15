import React from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";

const Contanier = styled.div`
	width: 100vw;
	padding-top: 4rem;
	img {
		width: 100%;
	}
`;

const Title = styled.h1`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
	margin-bottom: 3rem;
`;

const StartBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 25vh;
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
`;

export const MainFirst = () => {
	return (
		<Contanier>
			<img src="img/Runner.png"></img>
			<Title>오늘하루 같이 함께할 런닝크루를 만들어보세요!</Title>
			<StartBtn>
				<button className="btn">시작하기</button>
			</StartBtn>
		</Contanier>
	);
};
