import React from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";

export const MainFourth = () => {
	return (
		<Contanier>
			<img src="img/Running1.jpg"></img>
			<h3>네번째 내용이 들어갈 곳 입니다.</h3>
		</Contanier>
	);
};

const Contanier = styled.div`
	width: 100vw;
	@media ${theme.mobileS} {
		width: 100vw;
	}
`;
