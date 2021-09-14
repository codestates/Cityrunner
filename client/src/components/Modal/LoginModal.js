import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";

const MakeModal = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.6);
`;

const DialogBlock = styled.div`
	width: 320px;
	height: 400px;
	padding: 1rem;
	background: white;
	border-radius: 2px;
	h3 {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const LoginInput = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	input {
		height: 1.8rem;
		width: 200px;
		margin-top: -1rem;
		border: solid 1px;
		padding-left: 1rem;
	}
	h5 {
		padding-right: 11rem;
	}
`;

const Title = styled.h2`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
`;

const LoginBtn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 1.5rem;
	button {
		height: 1.5rem;
		width: 200px;
		height: 2rem;
		margin: 0.5rem;
		margin-top: 1rem;
		background-color: ${theme.color.black};
		color: white;
		font-weight: bold;
		:hover {
			background-color: white;
			color: ${theme.color.black};
			border: solid 1px;
			transition: 0.4s;
		}
	}
`;

export const LoginModal = () => {
	return (
		<>
			<MakeModal>
				<DialogBlock onClick={(e) => e.stopPropagation()}>
					<Title>로그인</Title>
					<LoginInput>
						<h5>E-mail</h5>
						<input type="email" placeholder="email"></input>
						<h5>비밀번호</h5>
						<input type="password" placeholder="password"></input>
					</LoginInput>
					<LoginBtn>
						<button>로그인</button>
						<button>Google</button>
					</LoginBtn>
				</DialogBlock>
			</MakeModal>
		</>
	);
};
