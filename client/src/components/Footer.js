import React from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";

const Contanier = styled.div`
	width: 100%;
	height: 300px;
	background-color: ${theme.color.black};
	color: white;
	font-size: 1rem;
	font-weight: bold;
	display: flex;
	justify-content: space-evenly;
	padding-top: 2.5rem;
`;

const Title = styled.ul`
	padding-right: 23rem;
	li {
		margin-top: 1rem;
		font-weight: 450;
	}
`;

const About = styled.ul`
	padding-left: 23rem;
	li {
		margin-top: 1rem;
		font-weight: 450;
	}
`;
const Since = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 17rem;
	font-size: 0.7rem;
`;
export const Footer = () => {
	return (
		<Contanier>
			<About>
				<h3>About Us</h3>
				<li>CityRuner Wiki</li>
				<li>Repository</li>
			</About>
			<Since>2021 © CityRunner</Since>
			<Title>
				<h3>Contact</h3>
				<li>Jaewon@Github</li>
				<li>Seyun@Github</li>
				<li>Jaemin@Github</li>
				<li>Hojin@Github</li>
			</Title>
		</Contanier>
	);
};
