import React from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";

const Contanier = styled.div`
	width: 100%;
	padding-top: 10rem;
	margin-bottom: 70vh;
	img {
		float: right;
		width: 65%;
	}
	h1 {
		margin-top: 20vh;
		margin-left: 2.5rem;
		margin-right: 2rem;
	}
	h3 {
		margin-left: 3rem;
		margin-right: 2rem;
		color: ${theme.color.gray};
	}
`;

const Title = styled.div``;

export const MainSecond = () => {
	return (
		<Contanier>
			<img src="img/crews.jpeg"></img>
			<h1>한강을 중심으로 크루를 만들어요</h1>
			<br />
			<h3>규칙적으로 크루활동을 하면서 런닝을 하기 힘들때</h3>
			<h3>런닝을 시작한지 얼마 안되는 사람들과 같이 뛰고 싶을때</h3>
			<h3>런닝크루를 만들어 운영해보고 런닝을 통해 소통하고 싶을때</h3>
			<h3>쉽게 크루장이되어 함께 달릴 크루원들을 모집할수 있습니다.</h3>
			<Title />
		</Contanier>
	);
};