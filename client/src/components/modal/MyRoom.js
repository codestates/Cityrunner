import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";
import { LoginModal } from "./LoginModal";

export const MyRoom = () => {
	const roomsinfo = useSelector((state) => state.room.post);
	const [modal, setModal] = useState(false);
	const history = useHistory();

	const onEnterRoom = async () => {
		await axios
			.put(`http://localhost:4000/posts/join/${roomsinfo.id}`, "", {
				withCredentials: true,
			})
			.then(() => {
				history.push("/MyRoom");
			})
			.catch((err) => {
				if (err.response.status === 409) {
					return alert("이미 참가한 크루입니다.");
				} else if (err.response.status === 401) {
					return setModal(true);
				} else if (err.response.status === 400) {
					return history.push("/MyRooms");
				}
			});
		console.log(roomsinfo, "🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟🌟");
	};

	return (
		<>
			<MakeModal>
				{roomsinfo ? (
					<DialogBlock key={roomsinfo.id}>
						<SelectContainer className="title">
							<h1>{roomsinfo.title}</h1>
						</SelectContainer>
						<SelectContainer>
							<h3>난이도</h3>
							<h4>{roomsinfo.level}</h4>
						</SelectContainer>
						<SelectContainer>
							<h3>모집인원</h3>
							<h4>{roomsinfo.max}</h4>
						</SelectContainer>
						<SelectContainer>
							<h3>시간</h3>
							<h4>{roomsinfo.time}</h4>
						</SelectContainer>
						<SelectContainer>
							<h3>장소</h3>
							<h4>{roomsinfo.location}</h4>
						</SelectContainer>
						<SelectContainer>
							<h3>Comment</h3>
							<h4>{roomsinfo.comment}</h4>
						</SelectContainer>
						<CommentBtn>
							<button onClick={() => onEnterRoom()}>크루 참가하기</button>
						</CommentBtn>
					</DialogBlock>
				) : null}
				{modal ? <LoginModal /> : null}
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
	background: rgba(0, 0, 0, 0.1);
`;

const DialogBlock = styled.div`
	width: 350px;
	height: 500px;
	padding: 1rem;
	background: white;
	border-radius: 15px;
	h3 {
		${flexCenter}
	}
`;

const SelectContainer = styled.div`
	display: flex;
	justify-content: space-around;
	select {
		background-color: ${theme.color.hovergray};
		border-radius: 0.3rem;
		width: 5rem;
		height: 2rem;
		padding-left: 1rem;
	}
	.title {
		${flexCenter}
	}
`;

const CreateInput = styled.div`
	${flexColum}
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
	.errorMassge {
		color: red;
		padding-top: 0.2rem;
		padding-right: 5.3rem;
		font-size: 13px;
		font-weight: bold;
	}
`;

const Title = styled.h2`
	${flexCenter}
	margin-top: 2rem;
`;

const CommentBtn = styled.div`
	${flexColum}
	margin-top: 0.8rem;
	button {
		height: 1.5rem;
		width: 223px;
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
