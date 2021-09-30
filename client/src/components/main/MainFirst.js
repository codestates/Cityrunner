import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const MainFirst = () => {
	const history = useHistory();
	return (
		<Contanier>
			<img src="img/Runner.png" alt=""></img>
			<Title>
				<li>오늘하루 함께할 &nbsp;</li>
				<li>런닝크루를 만들어보세요!</li>
			</Title>
			<StartBtn>
				<button className="btn" onClick={() => history.push("/Matching")}>
					시작하기
				</button>
			</StartBtn>
		</Contanier>
	);
};

const Contanier = styled.div`
	width: 100vw;
	padding-top: 4rem;
	img {
		width: 100vw;
	}
`;

const Title = styled.h1`
	${flexCenter}
	margin-top: 5rem;
	margin-bottom: 3rem;

	@media ${theme.mobileS} {
		${flexColum};
		margin-top: 7rem;
		margin-bottom: 5rem;
	}
`;

const StartBtn = styled.div`
	${flexCenter}
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
	@media ${theme.mobileS} {
		margin-bottom: 17vh;
	}
`;
