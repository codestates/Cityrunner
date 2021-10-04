import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { deleteRoom } from "../../redux/modules/room";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";
import { IsLoading } from "../Socketio/IsLoading";

export const Chat = () => {
	const dispatch = useDispatch();
	const roomsinfo = useSelector((state) => state.room.post);
	const history = useHistory();
	const [status, setStatus] = useState(false);

	const url = "http://localhost:4000";

	const [myroomdata, setMyroomdata] = useState();

	useEffect(async () => {
		await axios.get(`${url}/mycrew`).then((data) => {
			console.log(data.data);
			setMyroomdata(data.data.data);
		});
	}, []);

	const onDeleteRoom = (id) => {
		dispatch(deleteRoom(id));
		console.log(id);
		history.push("/Matching");
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
							<li>{myroomdata.id}</li>
							<li>{myroomdata.time}</li>
							<li>{myroomdata.max}</li>
							<li>{myroomdata.comment}</li>
						</Categoryinfo>
					</Controller>
					<CommentBtn>
						<button onClick={() => onDeleteRoom(roomsinfo.id)}>나가기</button>
					</CommentBtn>
				</Contanier>
			) : (
				<IsLoading />
			)}
		</>
	);
};

const Contanier = styled.div`
	width: 50vw;
	height: 100vh;
	background-color: ${theme.color.black};
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
	}
`;

const Categoryinfo = styled.ul`
	li {
		margin-bottom: 3rem;
		font-size: 1.5rem;
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

const EmptyRoom = styled.div`
	${flexCenter}
	color: black;
	margin-top: 40vh;
`;
