import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const LoginModal = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
	});

	const onClickLogin = (key) => (e) => {
		setLoginInfo({ ...loginInfo, [key]: e.target.value });
	};

	const onSignIn = () => {
		axios.post(`http://localhost:3000/user/login`, loginInfo, {
			withCredentials: true,
		});
	};

	return (
		<>
			<MakeModal>
				<DialogBlock onClick={(e) => e.stopPropagation()}>
					<Title>로그인</Title>
					<LoginInput>
						<h5>E-mail</h5>
						<input
							type="email"
							placeholder="email"
							onChange={onClickLogin("email")}
						></input>
						<h5>비밀번호</h5>
						<input
							type="password"
							placeholder="password"
							onChange={onClickLogin("password")}
						></input>
					</LoginInput>
					<LoginBtn>
						<button onClick={onSignIn}>로그인</button>
						<button>Google</button>
					</LoginBtn>
				</DialogBlock>
			</MakeModal>
		</>
	);
};

const MakeModal = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	${flexCenter}
	background: rgba(0, 0, 0, 0.6);
`;

const DialogBlock = styled.div`
	width: 320px;
	height: 400px;
	padding: 1rem;
	background: white;
	border-radius: 2px;
	h3 {
		${flexCenter}
	}
`;

const LoginInput = styled.div`
	${flexColum}
	input {
		height: 1.8rem;
		width: 200px;
		margin-top: -1rem;
		border: solid 1px;
		padding-left: 1rem;
		//border-color: red;
	}
	h5 {
		padding-right: 11rem;
	}
`;

const Title = styled.h2`
	${flexCenter}
	margin-top: 2rem;
`;

const LoginBtn = styled.div`
	${flexColum}
	margin-top: 1.5rem;
	button {
		height: 1.5rem;
		width: 200px;
		height: 2rem;
		margin: 0.5rem;
		margin-top: 0.5rem;
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

const Errorblock = styled.div`
	color: red;
	padding-top: 1rem;
	font-weight: bold;
`;