import React from "react";
import styled from "styled-components";
import { flexCenter } from "../themes/flex";
import { theme } from "../themes/theme";

export const Footer = () => {
	return (
		<Contanier>
			<About>
				<h3>About Us</h3>
				<li>
					<a
						href="https://github.com/codestates/Cityrunner/wiki"
						target="_blank"
						rel="noopener noreferrer"
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
					<a
						href="https://github.com/wjswls456"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jaewon@Github
					</a>
				</li>
				<li>
					<a
						href="https://github.com/seyoonkim48"
						target="_blank"
						rel="noopener noreferrer"
					>
						Seyun@Github
					</a>
				</li>
				<li>
					<a
						href="https://github.com/jmean12"
						target="_blank"
						rel="noopener noreferrer"
					>
						Jaemin@Github
					</a>
				</li>
				<li>
					<a
						href="https://github.com/Alamarama"
						target="_blank"
						rel="noopener noreferrer"
					>
						Hojin@Github
					</a>
				</li>
			</Title>
		</Contanier>
	);
};

const Contanier = styled.div`
	width: 100vw;
	height: 40vh;
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
	@media ${theme.mobileS} {
		margin-left: 1rem;
	}
`;
const Since = styled.li`
	${flexCenter}
	margin-top: 17rem;
	font-size: 0.7rem;
	@media ${theme.mobileS} {
		margin-left: 1rem;
		margin-top: 16rem;
	}
`;
