import React, { useEffect } from "react";
import styled from "styled-components";
import { InputChat } from "./InputChat";
import { PreviousChat } from "./PreviousChat";
import { Inmsg } from "./Inmsg";
import axios from "axios";
import { theme } from "../../themes/theme";
import { useState } from "react";
import { flexCenter } from "../../themes/flex";

let socket = new WebSocket(`ws://api.cityrunner.site/chat`);

export const Socketio = () => {
	const [userid, setUserid] = useState("");
	const [roomid, setRoomid] = useState("");
	const [isChat, setIsChat] = useState(false);

	/* 리덕스로 관리해야 변수 명
    roomId,userId
  */
	//userid, roomid가 필요함

	useEffect(async () => {
		const axiosGet = await axios.get(`http://api.cityrunner.site/chat/`, {
			withCredentials: true,
		});
		console.log(axiosGet);
		setUserid(axiosGet.data.userid);
		setRoomid(axiosGet.data.postId);
	}, []);

	const makeMessage = (roomId, userId, chat, option) => {
		const msg = { roomId, userId, chat, option };
		return JSON.stringify(msg);
	};

	const onClick = (data) => {
		return socket.send(makeMessage(roomid, userid, data));
	};

	const enterChatRoom = () => {
		setIsChat(true);
		return socket.send(makeMessage(roomid, userid, "", "Join"));
	};

	const leaveChatRoom = () => {
		setIsChat(false);
		socket.send(makeMessage(roomid, userid, "", "leave"));
		window.location.replace("/MyRoom");
	};

	return (
		<>
			<ChatRoom>
				{isChat ? <PreviousChat></PreviousChat> : null}
				{isChat ? <Inmsg socket={socket} userid={userid}></Inmsg> : null}
				{isChat ? <InputChat onClick={onClick}></InputChat> : null}
				{isChat ? (
					<LeaveChatRoom onClick={leaveChatRoom}>채팅방 나가기</LeaveChatRoom>
				) : null}
				{isChat ? null : (
					<EnterContanier>
						<EnterChatRoom onClick={enterChatRoom}> 채팅하기</EnterChatRoom>
					</EnterContanier>
				)}
			</ChatRoom>
		</>
	);
};

const EnterContanier = styled.div`
	height: 100vw;
`;

const LeaveChatRoom = styled.div`
	position: absolute;
	background-color: ${theme.color.apricot};
	border-radius: 10px;
	border: solid 1px ${theme.color.gray};
	padding: 7px 20px 7px 20px;
	left: calc(21% - 20px);
	top: 20%;
	:hover {
		background-color: ${theme.color.hovergray};
		transition: 0.1s;
	}
	@media ${theme.mobileS} {
		top: calc(17% - 10px);
		left: calc(38% - 10px);
	}
`;

const EnterChatRoom = styled.div`
	${flexCenter}
	top: 50%;
	background-color: ${theme.color.apricot};
	border-radius: 10px;
	border: solid 1px ${theme.color.gray};
	padding: 7px 20px 7px 20px;
	left: calc(70% - 10px);

	:hover {
		background-color: ${theme.color.hovergray};
		transition: 0.1s;
	}
	@media ${theme.mobileS} {
		top: calc(17% - 10px);
		left: calc(40% - 10px);
	}
`;

const ChatRoom = styled.div`
	width: 100%;

	margin-top: 6px;
	background: ${theme.color.hovergray};
`;
