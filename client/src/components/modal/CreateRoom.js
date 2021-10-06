import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { flexCenter, flexColum } from "../../themes/flex";
import { Locations } from "../../themes/Locations";
import { theme } from "../../themes/theme";
import { Times } from "../../themes/Times";

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
				window.location.reload();
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
						<option value="프로">프로</option>
						<option value="아마추어">아마추어</option>
						<option value="비기너">비기너</option>
					</select>
					<select onChange={onChange("time")}>
						{Times.map((item) => (
							<option value={item} key={item}>
								{item}
							</option>
						))}
					</select>
				</SelectContainer>
				<SelectContainer>
					<h5>모집인원</h5>
					<h5>목표거리</h5>
				</SelectContainer>
				<SelectContainer>
					<select onChange={onChange("max")}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>

					<select onChange={onChange("distance")}>
						<option value="0">미정</option>
						<option value="3km">3km</option>
						<option value="5km">5km</option>
						<option value="10km 이상">10km 이상</option>
					</select>
				</SelectContainer>
				<LocationDiv>
					<h5>장소</h5>
					<select onChange={onChange("location")}>
						{Locations.map((item) => (
							<option value={item} key={item}>
								{item}
							</option>
						))}
					</select>
				</LocationDiv>
				<CreateInput>
					<h5>글제목</h5>
					<input onChange={onChange("title")}></input>
					<h5>세부사항</h5>
					<input onChange={onChange("comment")}></input>
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
	height: 600px;
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
		height: 1.8rem;
		padding-left: 1rem;
	}
`;
const LocationDiv = styled.div`
	display: ${flexCenter};
	margin-top: 1rem;
	margin-left: 8rem;
	select {
		background-color: ${theme.color.hovergray};
		border-radius: 0.3rem;
		width: 5rem;
		height: 1.8rem;
		margin-left: 0.5rem;
	}
	h5 {
		margin-left: 2rem;
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
