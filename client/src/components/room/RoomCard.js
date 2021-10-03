import styled from "styled-components";
import { flexColum } from "../../themes/flex";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../redux/modules/room";
import { useHistory } from "react-router-dom";
import { setPost } from "../../redux/modules/room";
import Pagination from "react-js-pagination";
import { MyRoom } from "../modal/MyRoom";

// 쿼리 빈스트링으로 보내야함.

const RoomCard = () => {
	const dispatch = useDispatch();
	const [modal, setModal] = useState(false);
	const [savedata, setsavedata] = useState([]);
	const handleCloseModal = () => {
		setModal(false);
	};

	const handleModal = () => {
		setModal(!false);
	};

	useEffect(async () => {
		await dispatch(getRooms).then((data) => {
			const Rooms = data.payload.data.data;
			setsavedata(Rooms);
		});
	}, []);

	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === 27) {
				handleCloseModal();
			}
		};
		window.addEventListener("keydown", close);
		return () => window.removeEventListener("keydown", close);
	}, []);

	const onCardInfo = (data) => {
		dispatch(setPost(data));
		handleModal();
	};

	return (
		<>
			<Container>
				{savedata.map((data) => {
					return (
						<CardContainer key={data.id}>
							{modal ? <MyRoom /> : null}
							<ImageContainer onClick={() => onCardInfo(data)}>
								<img src="img/Runner.png"></img>
							</ImageContainer>
							<Title>{data.title}</Title>
							<Content>{data.comment}</Content>
							<CardFooter>
								<TimeDiv>{data.time}:00 - 21:00</TimeDiv>
								<Level>{data.level}</Level>
							</CardFooter>
							<DaysFooter>
								<Days>{data.updatedAt}</Days>
							</DaysFooter>
						</CardContainer>
					);
				})}
			</Container>
			<PageNav></PageNav>
		</>
	);
};

const Container = styled.div`
	display: flex;
	border-top: 0.8px solid #ced4da;
	margin-bottom: 10rem;
	width: 100vw;
	height: 100vh;
	flex-wrap: wrap;
	flex-direction: row;
`;

const CardContainer = styled.div`
	margin-top: 1rem;
	margin-left: 2rem;
	border: 0.8px solid #ced4da;
	width: 320px;
	height: 380px;
	${flexColum};
`;
const ImageContainer = styled.div`
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const Title = styled.h3``;

const Content = styled.h4`
	font-size: 1rem;
`;

const CardFooter = styled.div`
	${flexColum}
`;

const TimeDiv = styled.div`
	margin-bottom: 1rem;
	font-size: 1.2rem;
`;

const Level = styled.div`
	margin-bottom: 1rem;
`;

const DaysFooter = styled.div`
	display: flex;
`;
const Days = styled.h4`
	padding-top: 1rem;
	//padding-left: 11rem;
	font-size: 0.9rem;
	color: gray;
`;

const PageNav = styled.div`
	.pagination {
		display: flex;
		justify-content: center;
		margin-top: 15px;
	}
	li {
		margin-right: 1.3rem;
	}
	a {
		color: black;
	}
`;
export default RoomCard;
