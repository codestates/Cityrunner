import { useState, useEffect } from "react";
import styled from "styled-components";
import { flexColum, flexCenter } from "../../themes/flex";
import PostImage from "./PostImage";
import axios from "axios";
import { Signout } from "../modal/Signout";
import { Fix } from "../modal/Fix";
import { theme } from "../../themes/theme";

export const Profiles = () => {
	const mockData = {
		data: {
			email: "hello@gmail.com",
			username: "nickname",
			image: "default",
			oauth: false,
			medal: [
				{
					id: 3,
					medalName: "Rain",
					medalDesc: "빗속에서 달린 당신!",
				},
				{
					id: 7,
					medalName: "10km",
					medalDesc: "10km를 뛰었군요!",
				},
				{
					id: 8,
					medalName: "make5",
					medalDesc: "5개의 크루를 만들었습니다",
				},
			],
			runningDays: [
				{ createdAt: "09-09", distance: 4 },
				{ createdAt: "09-10", distance: 3 },
			],
			participation: [
				{
					level: "pro",
					distance: 5,
					location: "여의도",
				},
				{
					level: "pro",
					distance: 5,
					location: "여의도",
				},
			],
		},
		message: "성공적으로 유저정보를 가져왔습니다",
	};
	const [Info, setInfo] = useState(mockData);

	useEffect(() => {
		axios
			.get("http://localhost:4000/mypage", {
				withCredentials: true,
			})
			.then((data) => {
				console.log(data);
				setInfo(data.data);
			});
	}, []);
	const [showSignoutModal, setShowSignoutModal] = useState(false);
	const handleSignoutModal = () => {
		setShowSignoutModal(!showSignoutModal);
	};
	const [showFixModal, setShowFixModal] = useState(false);
	const handleFixModal = () => {
		setShowFixModal(!showFixModal);
	};

	const [file, setFile] = useState();
	const [description, setDescription] = useState("");
	const [images, setImages] = useState("img/depic.png");

	// const submit = async (event) => {
	//   event.preventDefault();
	//   const result = await PostImage({ image: file, description });
	//   const newImg = `http://localhost:4000/${result.imagePath}`;
	//   setImages(newImg);
	// };

	const fileSelected = async (event) => {
		const file = event.target.files[0];
		setFile(file);
		event.preventDefault();
		const result = await PostImage({ image: file, description });
		const newImg = `http://localhost:4000/${result.imagePath}`;
		setImages(newImg);
	};

	const UserInfo = Info.data;

	let MyRunDistance = 0;
	for (let i = 0; i < UserInfo.runningDays.length; i++) {
		MyRunDistance = MyRunDistance + UserInfo.runningDays[i].distance;
	}

	return (
		<>
			<Container>
				<MyInfo>
					<InfoFirst>
						<MyInfoLeft>
							<UserBox>
								<UserPic src={images} alt=""></UserPic>
							</UserBox>
							<SubmitContainer class="file">
								<label for="file">프로필 바꾸기</label>
								<input
									onChange={fileSelected}
									type="file"
									id="file"
									accept="image/*"
								></input>
								<input
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									type="text"
								></input>
							</SubmitContainer>
						</MyInfoLeft>
						<MyInfoRight>
							<Nick>{UserInfo.username}</Nick>
						</MyInfoRight>
					</InfoFirst>
					<InfoSecond>
						<h2>총 달린 거리</h2>
						<Meter>{MyRunDistance}km</Meter>
					</InfoSecond>
					<InfoSecond>
						<h2>획득한 메달</h2>
						<Medal>
							{UserInfo.medal.map((data) => {
								return (
									<ImgContainer>
										<MedalImg src="img/medal3.jpeg" />
										<MedalName>{data.medalName}</MedalName>
										<TooltipText>{data.medalDesc}</TooltipText>
									</ImgContainer>
								);
							})}
						</Medal>
						<button>더 보기</button>
					</InfoSecond>
					<Btn>
						<button onClick={handleFixModal}>회원 정보 수정</button>
						<button onClick={handleSignoutModal}>회원 탈퇴</button>
					</Btn>
				</MyInfo>
			</Container>
			<div onClick={handleSignoutModal}>
				{showSignoutModal ? (
					<Signout MyRunDistance={MyRunDistance}></Signout>
				) : null}
			</div>
			<div onClick={handleFixModal}>{showFixModal ? <Fix></Fix> : null}</div>
		</>
	);
};

const Container = styled.div`
	padding-top: 6rem;
	padding-bottom: 3rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: white;
	height: 100%;
`;
const MyInfo = styled.div`
	max-width: 900px;
	max-height: 1200px;
	justify-content: left;
	align-items: left;
	background-color: white;
	display: flex;
	flex-direction: column;
	@media ${theme.mobileS} {
		display: flex;
	}
`;
const InfoFirst = styled.div`
	display: flex;
	margin-bottom: 5rem;
	@media ${theme.mobileS} {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 1rem;
	}
`;
const MyInfoLeft = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	border-right: 3px solid #f3f4f6;
	@media ${theme.mobileS} {
		border-right: 0px solid #f3f4f6;
	}
`;

const UserBox = styled.div`
	width: 160px;
	height: 160px;
	border-radius: 70%;
	overflow: hidden;
	margin-right: 30px;
	margin-top: 20px;
	margin-bottom: 30px;
	justify-content: center;
	align-items: center;
	display: flex;
`;
const UserPic = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const SubmitContainer = styled.form`
	max-width: 200px;
	margin: auto;
	justify-content: center;
	align-items: center;
	label {
		margin-left: 1px;
		display: flex;
		width: 120px;
		height: 30px;
		background-color: #4a4a4a;
		color: #fff;
		cursor: pointer; /* 마우스 호버시 a링크 기능 추가 */
		line-height: 45px;
		border-radius: 5px;
		text-align: center;
		justify-content: center;
		align-items: center;
	}
	input[type="file"] {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		clip: rect(0, 0, 0, 0); /* 클립에 범위만큼만 노출시킴 */
		overflow: hidden;
		padding: 0;
	}
`;
const MyInfoRight = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Nick = styled.div`
	float: left;
	margin-top: 2.5rem;
	margin-left: 10px;
	margin-right: 20px;
	width: 180px;
	height: 50px;
	font-size: 35px;
	font-weight: bold;
	text-align: center;
	@media ${theme.mobileS} {
		margin-top: 0.5rem;
	}
`;

const InfoSecond = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 5rem;
	border-bottom: 2px solid #f3f4f6;
	@media ${theme.mobileS} {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	button {
		height: 15px;
		width: 100px;
		height: 2rem;
		margin: 0.5rem;
		margin-top: 1.5rem;
		background-color: #474c50;
		border-radius: 5px;
		color: #f3f4f6;
		font-weight: bold;
		font-size: 13px;
	}
`;
const Meter = styled.div`
	float: left;
	margin-left: 13rem;
	margin-bottom: 2rem;
	height: 50px;
	font-size: 50px;
	font-family: Impact;
	color: #ff742e;
	text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
		1px 1px 0 #000, 4px 2px 0px #3b3c45;
	padding: 1vh;
	align-content: center;
	@media ${theme.mobileS} {
		margin-left: 0rem;
	}
`;
const Medal = styled.div`
	width: 400px;
	height: 95px;
	display: flex;
	flex-direction: row;
	margin-left: 6rem;
	margin-bottom: 1.5rem;
`;
const TooltipText = styled.span`
	visibility: hidden;
	width: auto;
	height: 15px;
	white-space: nowrap;
	background-color: #474c50;
	color: #f3f4f6;
	text-align: center;
	border-radius: 5px;
	padding: 10px 5px;
	position: absolute;
	z-index: 1;
	top: 120%;
	font-size: 13px;
	font-weight: bold;
	:after {
		content: "";
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-left: -10px;
		border-width: 10px;
		border-style: solid;
		border-color: transparent transparent #474c50 transparent;
	}
`;
const ImgContainer = styled.div`
	position: relative;
	display: inline-block;
	display: flex;
	flex-direction: column;
	align-items: center;
	&:hover ${TooltipText} {
		visibility: visible;
	}
`;
const MedalImg = styled.img`
	width: 70px;
	height: 70px;
`;
const MedalName = styled.div`
	text-align: center;
`;

const Btn = styled.div`
	${flexCenter}
	margin-top: 1.5rem;
	margin-bottom: 0.5rem;
	button {
		height: 1.5rem;
		width: 160px;
		height: 2rem;
		margin: 0.5rem;
		margin-top: 0.5rem;
		background-color: ${theme.color.black};
		color: white;
		font-weight: bold;
	}
`;
