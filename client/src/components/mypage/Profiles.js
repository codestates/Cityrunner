import { useState } from "react";
import styled from "styled-components";
import { flexColum } from "../../themes/flex";
import PostImage from "./PostImage";
import axios from "axios";

export const Profiles = () => {
  const mockData = {
    data: {
      email: "hello@gmail.com",
      username: "홍길동",
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
        { createdAt: "09-10", distance: 2 },
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
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [Info, setInfo] = useState(mockData);

  const getInfo = async () => {
    const result = await axios.get("http://localhost:4000/mypage", {
      headers: {},
    });
    setInfo(result);
  };

  const submit = async (event) => {
    event.preventDefault();
    const result = await PostImage({ image: file, description });

    setImages([result.image, ...images]);
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const UserInfo = Info.data;

  return (
    <>
      <Container>
        <MyInfo>
          <InfoFirst>
            <MyInfoLeft>
              <UserPic src="img/depic.png" alt=""></UserPic>
            </MyInfoLeft>
            <MyInfoRight>
              <h2>닉네임</h2>
              <Nick>{UserInfo.username}</Nick>
              <h2>달린 거리</h2>
              <Meter>6km</Meter>
            </MyInfoRight>
          </InfoFirst>
          <SubmitContainer onSubmit={submit}>
            <h3>프로필 사진 바꾸기</h3>
            <input onChange={fileSelected} type="file" accept="image/*"></input>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            ></input>
            <button type="submit">Submit</button>
            <h2>획득한 메달</h2>
            <Medal>
              <oneMedal>
                <ImgContainer>
                  <MedalImg src="img/medal1.jpeg" />
                  <MedalName>Rain</MedalName>
                  <TooltipText>빗속에서 달린 당신!</TooltipText>
                </ImgContainer>
              </oneMedal>
              <oneMedal>
                <ImgContainer>
                  <MedalImg src="img/medal2.png" />
                  <MedalName>10km</MedalName>
                  <TooltipText>10km를 뛰었군요!</TooltipText>
                </ImgContainer>
              </oneMedal>
              <oneMedal>
                <ImgContainer>
                  <MedalImg src="img/medal3.jpeg" />
                  <MedalName>make5</MedalName>
                  <TooltipText>5개의 크루를 만들었습니다</TooltipText>
                </ImgContainer>
              </oneMedal>
            </Medal>
            <h2>이렇게 자주 뛰었어요!</h2>
            <Green></Green>
          </SubmitContainer>
        </MyInfo>
        {/* { images.map( image => (
        <div key={image}>
        <img src={image}></img>
        </div>
    ))} */}
        <img src="http://localhost:4000/images/38f550d87d82bbd67f3a236aabf31e9a"></img>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding-top: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #21c897;
`;

const SubmitContainer = styled.form`
  max-width: 400px;
  margin: auto;
`;

const MyInfo = styled.div`
  min-width: 310px;
  max-width: 500px;
  min-height: 600px;
  max-height: 900px;
  border: solid 2px;
  justify-content: center;
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const InfoFirst = styled.div`
  display: flex;
`;

const MyInfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const MyInfoRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPic = styled.img`
  float: left;
  width: 160px;
  margin: 33px;
`;

const Nick = styled.div`
  float: left;
  margin-left: 10px;
  margin-right: 20px;
  border: solid 2px;
  width: 180px;
  height: 50px;
  font-size: 40px;
  text-align: center;
`;

const Meter = styled.div`
  float: left;
  margin-left: 10px;
  border: solid 2px;
  width: 180px;
  height: 50px;
  font-size: 40px;
  text-align: center;
`;

const Medal = styled.div`
  border: solid 2px;
  width: 400px;
  height: 95px;
  display: flex;
  flex-direction: row;
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: auto;
  height: 15px;
  white-space: nowrap;
  background-color: #67aef8;
  color: black;
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
    border-color: transparent transparent #67aef8 transparent;
  }
`;

const oneMedal = styled.div`
  display: flex;
  flex-direction: column;
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

const Green = styled.div`
  border: solid 2px;
  width: 400px;
  height: 140px;
  margin-bottom: 1rem;
`;

const Images = styled.div`
  position: relative;
  width: 200px;
  img {
    width: 100vw;
  }
  button {
    position: absolute;
    right: 0;
    top: 0;
  }
  form > * {
    margin: 10px 0;
  }
`;
