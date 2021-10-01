import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const MainFourth = () => {
	const fadeIn = useScrollFadeIn();
	return (
		<Contanier>
			<Image src="img/hanRiver_map.png" {...fadeIn}></Image>
			<h3>네번째 내용이 들어갈 곳 입니다.</h3>
		</Contanier>
	);
};

const Contanier = styled.div`
	width: 100vw;
	padding-top: 7rem;
	margin-bottom: 60vh;
	display: flex;
	justify-content: space-evenly;

	@media ${theme.mobileS} {
		${flexColum}
		img {
			width: 100vw;
		}
	}
`;

const Image = styled.img`
	width: 57%;
`;
