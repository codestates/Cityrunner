import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import { flexCenter } from "../themes/flex";

const Contanier = styled.div`
	${flexCenter}
	padding-top: 4rem;
`;

export const Matching = () => {
	return (
		<>
			<Header />
			<Contanier>
				<h1>어서오세요 매칭페이지 입니다!</h1>
			</Contanier>
		</>
	);
};
