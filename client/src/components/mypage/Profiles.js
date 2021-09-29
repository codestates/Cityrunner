import { useState } from "react";
import styled from "styled-components";
import { flexColum } from "../../themes/flex";
import PostImage from "./PostImage";
import axios from "axios";

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
          <UserPic src="img/depic.png" alt=""></UserPic>

          <Nick>{UserInfo.username}</Nick>
          <Meter>30km</Meter>
          <SubmitContainer onSubmit={submit}>
            <input onChange={fileSelected} type="file" accept="image/*"></input>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            ></input>
            <button type="submit">Submit</button>
            <Medal></Medal>
            <Green></Green>
          </SubmitContainer>
          {/* { images.map( image => (
        <div key={image}>
        <img src={image}></img>
        </div>
    ))} */}
        </MyInfo>
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
`;

const SubmitContainer = styled.form`
  max-width: 400px;
  margin: auto;
`;

const MyInfo = styled.div`
  min-width: 300px;
  max-width: 500px;
  min-height: 600px;
  max-height: 900px;
  border: solid 2px;
  justify-content: center;
  align-items: center;
  background-color: #fdf5e4;
`;

const UserPic = styled.img`
  float: left;
  width: 170px;
  margin: 33px;
`;

const Nick = styled.div`
  margin-top: 3rem;
  float: left;
  margin-left: 10px;
  border: solid 2px;
  width: 200px;
  height: 50px;
  font-size: 40px;
  text-align: center;
`;

const Meter = styled.div`
  margin-top: 2rem;
  float: left;
  margin-left: 10px;
  border: solid 2px;
  width: 200px;
  height: 50px;
  font-size: 40px;
  text-align: center;
`;

const Medal = styled.div`
  margin-top: 2rem;
  border: solid 2px;
  width: 400px;
  height: 80px;
`;

const Green = styled.div`
  margin-top: 2rem;
  border: solid 2px;
  width: 400px;
  height: 140px;
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
