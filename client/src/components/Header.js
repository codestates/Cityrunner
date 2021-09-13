import React from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";

const Container = styled.header`
	position: fixed;
	width: 100%;
	color: white;
	background-color: ${theme.color.black};
	border-bottom: 1px solid ${theme.line.gray};
	display: flex;
	justify-content: space-between;
`;

const RightSide = styled.div`
	display: flex;
	margin-right: 4rem;
	.login-btn {
		margin-right: 2rem;
	}
`;

const LeftSide = styled.div`
	margin-left: 3rem;
`;

export const Header = () => {
	return (
		<Container>
			<LeftSide>
				<h3>CityRunner</h3>
			</LeftSide>
			<RightSide>
				<h4 className="login-btn">로그인</h4>
				<h4 className="logout-btn">회원가입</h4>
			</RightSide>
		</Container>
	);
};
