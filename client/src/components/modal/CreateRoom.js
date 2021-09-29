import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const CreateRoom = () => {
	const [roomInfo, setroomInfo] = useState({
		level: "",
		time: "",
		location: "",
		title: "",
		comment: "",
		member: 0,
		max: 0,
		distance: 0,
	});

	const dispatch = useDispatch();

	const url = "http://localhost:4000";

	const onRoompost = async () => {
		await axios
			.post(`${url}/posts`, roomInfo, {
				withCredentials: true,
			})
			.then((data) => {
				console.log(data);
			});
	};

	const onChange = (key) => (e) => {
		setroomInfo({ ...roomInfo, [key]: e.target.value });
	};

	return (
		<MakeModal>
			<DialogBlock onClick={(e) => e.stopPropagation()}>
				<Title>크루원 모집하기</Title>
				<SelectContainer>
					<h5>난이도</h5>
					<h5>시간</h5>
				</SelectContainer>
				<SelectContainer>
					<select onChange={onChange("level")}>
						<option value="0">상</option>
						<option value="1">중</option>
						<option value="2">하</option>
					</select>
					<select onChange={onChange("time")}>
						<option value="0">19:00</option>
						<option value="1">20:00</option>
						<option value="2">21:00</option>
					</select>
				</SelectContainer>
				<SelectContainer>
					<h5>모집인원</h5>
					<h5>목표거리</h5>
				</SelectContainer>
				<SelectContainer>
					<select onChange={onChange("member")}>
						<option value="0">1</option>
						<option value="1">2</option>
						<option value="2">3</option>
						<option value="3">4</option>
					</select>
					<select onChange={onChange("location")}>
						<option value="0">거리</option>
						<option value="0">3km</option>
						<option value="1">5km</option>
						<option value="2">8km</option>
					</select>
				</SelectContainer>
				<CreateInput>
					<h5>크루설명</h5>
					<input onChange={onChange("comment")}></input>
					<h5>세부설명</h5>
					<input onChange={onChange("title")}></input>
				</CreateInput>
				<CommentBtn>
					<button onClick={onRoompost}>생성하기</button>
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
	justify-content: space-evenly;
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
