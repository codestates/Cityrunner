import React from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";

const Contanier = styled.div`
	width: 100%;
	height: 300px;
	background-color: ${theme.color.black};
`;

export const Footer = () => {
	return <Contanier></Contanier>;
};
