import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { modalclose, modalopen } from "../../redux/modules/filterMap";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";
import { CreateRoom } from "../modal/CreateRoom";
import { LoginModal } from "../modal/LoginModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRedo, faSync } from "@fortawesome/free-solid-svg-icons";

export const FilterList = ({ setinfo }) => {
	//리듀서 써야함
	// RoomCard 컴포넌트에 값을 전달하기 위해서

	const Mapinfo = useSelector((state) => state.filterMap.state.location) || "";
	const Modalis = useSelector((state) => state.filterMap.modal);
	const dispatch = useDispatch();
	const [isModal, setIsModal] = useState(false);
	const [loginCheck, setLoginCheck] = useState(false);
	const [closeModal, setCloseModal] = useState(false);
	const [queryData, setQueryData] = useState({
		level: "",
		time: "",
		distance: "",
		location: "",
	});

	const [curHours, setCurHours] = useState(new Date().getHours());

	const handleModal = () => {
		return token ? setIsModal(true) : dispatch(modalopen());
	};

	const ChattingRoom = () => {
		!token ? dispatch(modalopen()) : window.location.replace("/MyRoom");
	};
	const LoginCheck = () => {
		setLoginCheck(false);
	};

	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === 27) {
				LoginCheck();
			}
		};
		window.addEventListener("keydown", close);
		return () => window.removeEventListener("keydown", close);
	}, []);

	const onChange = (key) => (e) => {
		setQueryData({ ...queryData, [key]: e.target.value });
	};

	const Hours = () => {
		const reuslt = [];
		if (curHours < 12) {
			for (let i = curHours; i < 12; i++) {
				reuslt.push(<option value={i}> {i}:00</option>);
			}
		} else {
			for (let i = curHours; i < 24; i++) {
				reuslt.push(<option value={i}> {i}:00</option>);
			}
		}

		return reuslt;
	};

	const onClick = async () => {
		let data = await axios.get(
			`http://api.cityrunner.site/posts?page=1&level=${queryData.level}&time=${queryData.time}&distance=${queryData.distance}&location=${Mapinfo}`
		);
		console.log(queryData);
		setinfo(data);
	};

	let token = localStorage.getItem("userinfo");

	const onReset = () => {
		return window.location.reload();
	};

	return (
		<>
			<SearchBox>
				<button onClick={onClick}>검색</button>
			</SearchBox>
			<Contanier>
				<ListNames>
					<select onChange={onChange("level")}>
						<option value="">난이도</option>
						<option value="프로">프로</option>
						<option value="아마추어">아마추어</option>
						<option value="비기너">비기너</option>
					</select>

					<select onChange={onChange("time")}>
						<option value="">시간</option>
						{Hours()}
					</select>
					<select onChange={onChange("distance")}>
						<option value="">거리</option>
						<option value="3">3km</option>
						<option value="5">5km</option>
						<option value="10">10km이상</option>
					</select>

					<ResetButton>
						<FontAwesomeIcon icon={faSync} size="lg" onClick={onReset} />
					</ResetButton>
				</ListNames>
				<RightSide>
					<button onClick={handleModal}> + 방만들기</button>
					<button onClick={ChattingRoom}>참여중인방</button>
				</RightSide>
				{Modalis ? <LoginModal setLoginCheck={setLoginCheck} /> : null}
			</Contanier>
			<div>
				{isModal ? (
					<CreateRoom isModal={isModal} setIsModal={setIsModal}></CreateRoom>
				) : null}
			</div>
		</>
	);
};

const SearchBox = styled.div`
	background-color: ${theme.color.apricot};
	${flexCenter}
	button {
		border: 0.1px solid black;
		border-radius: 0.3rem;
		background-color: ${theme.color.black};
		color: white;
		font-weight: bold;
		width: 12rem;
		height: 3rem;
		font-size: 1rem;
		:hover {
			background-color: white;
			transition: 0.2s;
			color: black;
		}
	}
	@media ${theme.mobileS} {
		padding-bottom: 2.2rem;
		button {
			height: 2.5rem;
		}
	}
`;

const Contanier = styled.div`
	width: 100vw;
	display: flex;
	justify-content: space-between;
	background-color: ${theme.color.apricot};
	@media ${theme.laptopS} {
		${flexColum}
	}
`;

const ListNames = styled.div`
	display: flex;
	margin-top: 0.1rem;
	margin-left: 1.2rem;
	padding: 1rem;
	font-weight: bold;
	select {
		text-align: center;
		height: 2.3rem;
		border-radius: 0.3rem;
		margin-left: 1rem;
		margin-right: 0rem;
		margin-bottom: 0rem;
		background-color: ${theme.color.black};
		color: white;
		font-weight: bold;
		width: 6rem;
		:hover {
			cursor: pointer;
		}
	}
	button {
		margin-left: 1rem;
		background-color: ${theme.color.black};
		color: white;
		font-weight: bold;
		width: 3rem;
		:hover {
			background-color: ${theme.color.hovergray};
			transition: 0.2s;
		}
	}

	@media ${theme.laptopS} {
		select {
			margin-right: 0.5rem;
			width: 4rem;
		}
	}
	@media ${theme.mobileS} {
		margin-right: 1.3rem;
	}
`;

const ResetButton = styled.div`
	${theme.color.black};
	margin-left: 1rem;
	transform: translateY(6px);
	:hover {
		color: ${theme.color.hovergray};
	}
`;

const RightSide = styled.div`
	margin-top: 0.8rem;
	margin-right: 4rem;
	button {
		color: #f5f5f3;
		font-weight: bold;
		font-size: 1rem;
		margin-left: 2rem;
		border-radius: 0.3rem;
		&:hover {
			background-color: white;
			transition: 0.4s;
			color: ${theme.color.black};
			border: solid 1px;
		}
		background-color: ${theme.color.black};
		color: #f5f5f3;
		height: 2.4rem;
		width: 15vh;
		margin: 0.5rem;
		border-radius: none;
		border: none;
	}
	@media ${theme.laptopS} {
		margin-right: 0;
	}
`;
