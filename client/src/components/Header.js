import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";
import { Signup } from "./Modal/Signup";
import { LoginModal } from "./Modal/LoginModal";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.header`
	position: fixed;
	width: 100vw;
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
		cursor: pointer;
		margin-right: 2rem;
		:hover {
			color: ${theme.color.hovergray};
			transition: 0.1s;
		}

		@media ${theme.mobileS} {
			display: none;
		}
	}
`;

const Burgerbar = styled.div`
	display: none;
	@media ${theme.mobileS} {
		display: flex;
		margin-top: 1.28rem;
		margin-left: 11.5rem;
	}
`;
const LeftSide = styled.div`
	margin-left: 3rem;
`;

export const Header = () => {
	const [showSignupModal, setShowSignupModal] = useState(false);
	const handleSignupModal = () => {
		setShowSignupModal(!showSignupModal);
	};
	const [isModal, setisModal] = useState(false);
	const handleModal = () => {
		setisModal(!false);
	};
	const handleCloseModal = () => {
		setisModal(false);
	};

	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === 27) {
				handleCloseModal();
			}
		};
		window.addEventListener("keydown", close);
		return () => window.removeEventListener("keydown", close);
	}, []);

	return (
		<>
			<Container>
				<LeftSide>
					<Link to="/">
						<h3>CityRunner</h3>
					</Link>
				</LeftSide>
				<RightSide>
					<h4 className="login-btn" onClick={handleModal}>
						로그인
					</h4>
					<h4 className="login-btn" onClick={handleSignupModal}>
						회원가입
					</h4>
					<Burgerbar>
						<FontAwesomeIcon icon={faBars} size="lg" />
					</Burgerbar>
				</RightSide>
			</Container>
			<div onClick={handleCloseModal}>
				{isModal ? <LoginModal></LoginModal> : null}
			</div>
			<div onClick={handleSignupModal}>
				{showSignupModal ? (
					<Signup setShowSignupModal={setShowSignupModal}></Signup>
				) : null}
			</div>
		</>
	);
};
