import styled from "styled-components";
import { flexCenter, flexColum } from "../../themes/flex";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import room, { getRooms } from "../../redux/modules/room";
import Pagination from "react-js-pagination";
import { setPost } from "../../redux/modules/room";
import { MyRoom } from "../modal/MyRoom";
import { theme } from "../../themes/theme";
import { whenTime } from "../../themes/Times";
import { modalclose } from "../../redux/modules/filterMap";

// 쿼리 빈스트링으로 보내야함.

const RoomCard = ({ info }) => {
	const dispatch = useDispatch();

	const [modal, setModal] = useState(false);
	const [savedata, setsavedata] = useState([]);
	const [page, setPage] = useState(1);

	const handlePageChange = (page) => {
		setPage(page);
	};

	const handleCloseModal = () => {
		setModal(false);
		dispatch(modalclose());
	};

	const handleModal = () => {
		setModal(!false);
	};

	useEffect(async () => {
		await dispatch(getRooms(page)).then((data) => {
			const Rooms = data.payload.data.data;
			setsavedata(Rooms);
		});
	}, [page]);

	useEffect(() => {
		info && setsavedata(info.data.data);
	}, [info]);

	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === 27) {
				handleCloseModal();
			}
		};
		window.addEventListener("keydown", close);
		return () => window.removeEventListener("keydown", close);
	}, []);

	const onCardInfo = useCallback(
		(data) => {
			dispatch(setPost(data));
			handleModal();
		},
		[dispatch]
	);

	return (
		<>
			<Container>
				{modal ? <MyRoom handleCloseModal={handleCloseModal} /> : null}
				{savedata.map((data) => {
					return (
						<CardContainer key={data.id}>
							<ImageContainer onClick={() => onCardInfo(data)}>
								<img src="img/Runner.png"></img>
							</ImageContainer>
							<Title>{data.title}</Title>
							<Content>{data.comment}</Content>
							<CardFooter>
								<TimeDiv>{data.time}시</TimeDiv>
								<Level>{data.level}</Level>
							</CardFooter>
							<DaysFooter>
								<Days>{whenTime(data.updatedAt)}</Days>
							</DaysFooter>
						</CardContainer>
					);
				})}
			</Container>
			<PageNav>
				<Pagination
					activePage={page}
					totalItemsCount={30}
					prevPageText={"‹"}
					nextPageText={"›"}
					onChange={handlePageChange}
				/>
			</PageNav>
		</>
	);
};

const Container = styled.div`
	display: flex;
	border-top: 0.8px solid #ced4da;
	margin-bottom: 10rem;
	width: 100vw;
	height: 100%;
	flex-wrap: wrap;

	@media ${theme.laptop} {
		${flexCenter}
	}
`;

const CardContainer = styled.div`
	margin-top: 1rem;
	margin-left: 2rem;
	border: 0.8px solid #ced4da;
	width: 320px;
	height: 380px;
	${flexColum};
	@media ${theme.mobileS} {
		margin-left: 0;
	}
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
	align-items: flex-end;
`;
const Days = styled.h4`
	padding-top: 1rem;
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
		width: 30px;
		height: 30px;
		border: 1px solid #e2e2e2;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;

		:hover {
			background-color: ${theme.color.black};
			transition: 0.25s;
			a {
				color: white;
			}
		}
	}
	a {
		color: black;
	}
`;
export default RoomCard;
