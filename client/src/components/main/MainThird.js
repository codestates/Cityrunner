import React from "react";
import styled from "styled-components";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";
import { theme } from "../../themes/theme";

const Contaniner = styled.div`
	width: 100vw;
	img {
		width: 60%;
	}
	@media ${theme.mobileS} {
		width: 100vw;
		img {
			width: 100vw;
		}
	}
`;

export const MainThird = () => {
	const fadeIn = useScrollFadeIn();
	return (
		<Contaniner>
			<img src="img/Running2.jpg" {...fadeIn}></img>
			<h3>세번째 내용이 들어갈 곳 입니다.</h3>
		</Contaniner>
	);
};
