import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setPost } from "../../redux/modules/room";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const MyRoom = () => {
	const dispatch = useDispatch();
	const [info, setinfo] = useState([]);
	const Roominfo = () => {
		dispatch(setPost).then((data) => {
			console.log(data.payload.data.data);
			const infos = data.payload.data.data;
			setinfo(infos);
		});
	};

	// 참여하기 버튼을 누르면
	// 채팅창 페이지로 넘어감

	return (
		<MakeModal>
			<DialogBlock onClick={(e) => e.stopPropagation()}>
				<button onClick={Roominfo}>크루불러오기</button>
				<Title>참가중인 크루</Title>
				<SelectContainer>
					<h3>크루장</h3>
					<h4></h4>
				</SelectContainer>
				<SelectContainer>
					<h3>난이도</h3>
					<h4>{info.level}</h4>
				</SelectContainer>
				<SelectContainer>
					<h3>모집인원</h3>
					<h4>{info.max}</h4>
				</SelectContainer>
				<SelectContainer>
					<h3>시간</h3>
					<h4>{info.time}</h4>
				</SelectContainer>
				<SelectContainer>
					<h3>장소</h3>
					<h4>{info.location}</h4>
				</SelectContainer>
				<SelectContainer>
					<h3>Comment</h3>
					<h4>{info.comment}</h4>
				</SelectContainer>
				<CommentBtn>
					<button>크루 나가기</button>
				</CommentBtn>
			</DialogBlock>
		</MakeModal>
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
