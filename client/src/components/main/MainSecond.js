import React from "react";
import styled from "styled-components";
import { flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

const Contanier = styled.div`
	width: 100vw;
	padding-top: 7rem;
	margin-bottom: 60vh;
	display: flex;
	justify-content: space-evenly;


	@media ${theme.mobileS} {
		${flexColum}
		img {
			width: 100%;
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
`;

export const MainSecond = () => {
	return (
		<Contanier>
			<InfoText>
				<h1>한강을 중심으로 크루를 만들어요!</h1>
				<br />
				<li>규칙적으로 크루활동을 하면서 런닝을 하기 힘들때</li>
				<li>런닝을 시작한지 얼마 안되는 사람들과 같이 뛰고 싶을때</li>
				<li>런닝크루를 만들어 운영해보고 런닝을 통해 소통하고 싶을때</li>
				<li>쉽게 크루장이되어 함께 달릴 크루원들을 모집할수 있습니다.</li>
			</InfoText>
			<Iamge src="img/crews.jpeg"></Iamge>
		</Contanier>

	);
};
