import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { deleteRoom, exitRoom } from "../../redux/modules/room";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";
import { IsLoading } from "../Socketio/IsLoading";

export const Chat = () => {
	const dispatch = useDispatch();
	const roomsinfo = useSelector((state) => state.room.post);
	const history = useHistory();
	const [status, setStatus] = useState(false);

	const url = "http://api.cityrunner.site";

	const [myroomdata, setMyroomdata] = useState();

	useEffect(async () => {
		await axios.get(`${url}/mycrew`, { withCredentials: true }).then((data) => {
			setMyroomdata(data.data.data);
		});
	}, []);

	const onExitRoom = (id) => {
		dispatch(exitRoom(id));
		history.push("/Matching");
	};
	const onDeleteRoom = (id) => {
		dispatch(deleteRoom(id));
		history.push("/Matching");
	};

	useEffect(() => {}, [onDeleteRoom]);

	const onBack = () => {
		return history.push("/Matching");
	};

	return (
		<>
			{myroomdata ? (
				<Contanier>
					<Controller>
						<Title>
							<li>방제목</li>
							<li>장소</li>
							<li>시간</li>
							<li>참여인원</li>
							<li>상세정보</li>
						</Title>
						<Categoryinfo>
							<li>{myroomdata.title}</li>
							<li>{myroomdata.location}</li>
							<li>{myroomdata.time}</li>
							<li>{myroomdata.max}</li>
							<li>{myroomdata.comment}</li>
						</Categoryinfo>
					</Controller>
					<CommentBtn>
						<button onClick={() => onExitRoom(myroomdata.id)}>나가기</button>
						<button onClick={() => onDeleteRoom(myroomdata.id)}>
							크루장 나가기
						</button>
					</CommentBtn>
				</Contanier>
			) : (
				<MakeModal>
					<DialogBlock>
						<h2>참여중인 방이 없습니다</h2>
						<Backenter>
							<h3 onClick={onBack}>확인</h3>
						</Backenter>
					</DialogBlock>
				</MakeModal>
			)}
		</>
	);
};

const Contanier = styled.div`
	background-color: ${theme.color.black};
	height: 100vh;
	color: black;
	${flexColum}
`;

const Controller = styled.div`
	display: flex;
	margin-top: 20vh;
`;

const Title = styled.ul`
	li {
		margin-bottom: 3rem;
		font-size: 1.5rem;
		color: white;
		font-weight: bold;
	}
`;

const Categoryinfo = styled.ul`
	li {
		margin-bottom: 3rem;
		font-size: 1.5rem;
		color: white;
		font-weight: bold;
	}
`;

const CommentBtn = styled.div`
	${flexCenter}
	margin-top: 0.8rem;
	button {
		height: 1.5rem;
		width: 223px;
		height: 2rem;
		margin: 0.5rem;
		margin-top: 0.5rem;
		background-color: white;
		color: ${theme.color.black};
		font-weight: bold;
		:hover {
			background-color: ${theme.color.black};
			color: white;
			border: solid 1px;
			transition: 0.4s;
		}
	}
`;

const MakeModal = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	${flexCenter}
	background: rgba(0, 0, 0, 0.6);
	z-index: 1;
`;

const DialogBlock = styled.div`
	width: 320px;
	height: 180px;
	padding: 1rem;
	padding-top: 3rem;
	background: white;
	border-radius: 15px;
	${flexColum}
`;

const Backenter = styled.div`
	${flexCenter}
	cursor: pointer;
`;
