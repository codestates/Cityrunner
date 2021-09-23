import React from "react";
import styled from "styled-components";
import { flexCenter } from "../themes/flex";
import { theme } from "../themes/theme";

const Contanier = styled.div`
	width: 100vw;
	height: 300px;
	background-color: ${theme.color.gray};
	color: white;
	font-size: 1rem;
	font-weight: bold;
	display: flex;
	justify-content: space-evenly;
	padding-top: 0.5rem;
`;

const Title = styled.ul`
	margin-top: 3rem;
	padding-right: 23rem;
	li {
		margin-top: 1rem;
		font-weight: 450;
	}
`;

const About = styled.ul`
	margin-top: 3rem;
	padding-left: 23rem;
	li {
		margin-top: 1rem;
		font-weight: 450;
	}
`;
const Since = styled.div`
	${flexCenter}
	margin-top: 17rem;
	font-size: 0.7rem;
`;
export const Footer = () => {
	return (
		<Contanier>
			<About>
				<h3>About Us</h3>
				<li>
					<a
						href="https://github.com/codestates/Cityrunner/wiki"
						target="_blank"
					>
						CityRuner Wiki
					</a>
				</li>
				<li>Repository</li>
			</About>
			<Since>2021 © CityRunner</Since>
			<Title>
				<h3>Contact</h3>
				<li>
					<a href="https://github.com/wjswls456" target="_blank">
						Jaewon@Github
					</a>
				</li>
				<li>
					<a href="https://github.com/seyoonkim48" target="_blank">
						Seyun@Github
					</a>
				</li>
				<li>
					<a href="https://github.com/jmean12" target="_blank">
						Jaemin@Github
					</a>
				</li>
				<li>
					<a href="https://github.com/Alamarama" target="_blank">
						Hojin@Github
					</a>
				</li>
			</Title>
		</Contanier>
	);
};
