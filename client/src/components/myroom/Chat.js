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
	const [status, setStatus] = useState(true);

	const url = "http://api.cityrunner.site";

	const [myroomdata, setMyroomdata] = useState();

	useEffect(async () => {
		await axios.get(`${url}/mycrew`, { withCredentials: true }).then((data) => {
			setMyroomdata(data.data.data);
			console.log(data);
			if (data.status === 204) {
				return setStatus(false);
			}
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
				<IsLoading></IsLoading>
			)}
			{!status ? (
				<MakeModal>
					<DialogBlock>
						<h3>참여중인 방이 없습니다.</h3>
						<Backenter onClick={() => history.push("/Matching")}>
							<h4>확인</h4>
						</Backenter>
					</DialogBlock>
				</MakeModal>
			) : null}
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

	@media ${theme.mobileS} {
		button {
			width: 100px;
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
`;

const DialogBlock = styled.div`
	width: 320px;
	height: 180px;
	padding: 1rem;
	padding-top: 3rem;
	background: white;
	border-radius: 15px;
	${flexColum}
	z-index: 3;
`;

const Backenter = styled.div`
	${flexCenter}
	cursor: pointer;
`;
