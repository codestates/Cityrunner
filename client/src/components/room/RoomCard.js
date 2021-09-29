import styled from "styled-components";
import { flexColum } from "../../themes/flex";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRooms } from "../../redux/modules/room";

// 쿼리 빈스트링으로 보내야함.

const RoomCard = () => {
	const dispatch = useDispatch();
	const [savedata, setsavedata] = useState([]);

	useEffect(() => {
		dispatch(getRooms).then((data) => {
			console.log(data.payload.data.data);
			const Rooms = data.payload.data.data;

			setsavedata(Rooms);
		});
	}, [dispatch]);

	return (
		<Container>
			{savedata.map((data) => {
				return (
					<CardContainer key={data.id}>
						<ImageContainer>
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

export default RoomCard;
