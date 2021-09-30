import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { theme } from "../../themes/theme";
import { CreateRoom } from "../modal/CreateRoom";

export const FilterList = () => {
	const dispatch = useDispatch();
	const [isModal, setIsModal] = useState(false);

	const handleModal = () => {
		setIsModal(!false);
	};
	const handleCloseModal = () => {
		setIsModal(false);
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
			<Contanier>
				<ListNames>
					<li>시간</li>
					<li>난이도</li>
					<li>거리</li>
				</ListNames>
				<RightSide>
					<button onClick={handleModal}> + 방만들기</button>
					<button> 참여중인방</button>
				</RightSide>
			</Contanier>
			<div onClick={handleCloseModal}>
				{isModal ? <CreateRoom></CreateRoom> : null}
			</div>
		</>
	);
};

const Contanier = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-between;
`;

const ListNames = styled.ul`
	display: flex;
	margin-top: 2rem;
	li {
		margin-right: 2rem;
		:hover {
			background-color: ${theme.color.hovergray};
			cursor: pointer;
		}
	}
`;

const RightSide = styled.div`
	margin-top: 0.8rem;
	margin-right: 4rem;
	button {
		color: #f5f5f3;
		font-weight: bold;
		font-size: 1rem;
		&:hover {
			background-color: white;
			transition: 0.4s;
			color: ${theme.color.black};
			border: solid 1px;
		}
		background-color: ${theme.color.black};
		color: #f5f5f3;
		height: 2.4rem;
		width: 15vh;
		margin: 0.5rem;
		border-radius: none;
		border: none;
	}
`;