import { useState, useEffect } from "react";
import styled from "styled-components";
import { flexColum, flexCenter } from "../../themes/flex";
import PostImage from "./PostImage";
import axios from "axios";
import { Signout } from "../modal/Signout";
import { Fix } from "../modal/Fix";
import { ShowMedal } from "../modal/ShowMedal";
import { theme } from "../../themes/theme";
import { mockData } from "./UserInfo";
import { MedalBox } from "./MedalBox";
import { IsLoading } from "../Socketio/IsLoading";

export const Profiles = () => {
  const [Info, setInfo] = useState(mockData);
  const [IsOauth, setIsOauth] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/mypage", {
        withCredentials: true,
      })
      .then((data) => {
        setInfo(data.data);
        if (data.data.data.oauth) {
          setIsOauth(true);
          const UserImg = data.data.data.image;
          setImages(UserImg);
          setLoading(false);
        } else {
          if (data.data.data.image) {
            const UserImg = `http://localhost:4000/images/${data.data.data.image}`;
            setImages(UserImg);
            setLoading(false);
          }
        }
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
  const [showMedalModal, setShowMedalModal] = useState(false);
  const handleMedalModal = () => {
    setShowMedalModal(!showMedalModal);
  };
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("img/depic.png");

  const fileSelected = async (event) => {
    const file = event.target.files[0];
    setFile(file);
    event.preventDefault();
    const name = UserInfo.username;
    const result = await PostImage({
      image: file,
      description: name,
    });
    const newImg = `http://localhost:4000/${result.imagePath}`;
    setImages(newImg);
  };

  const UserInfo = Info.data;

  let MyRunDistance = 0;
  if (UserInfo.runningDays.length !== 0) {
    for (let i = 0; i < UserInfo.runningDays.length; i++) {
      MyRunDistance = MyRunDistance + UserInfo.runningDays[i].distance;
    }
  }
  return (
    <>
      <Container>
        {Loading ? (
          <IsLoading></IsLoading>
        ) : (
          <MyInfo>
            <InfoFirst>
              <MyInfoLeft>
                <UserBox>
                  <UserPic src={images} alt=""></UserPic>
                </UserBox>
                {!IsOauth ? (
                  <SubmitContainer className="file">
                    <label htmlFor="file">프로필 바꾸기</label>
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
                ) : null}
              </MyInfoLeft>
              <MyInfoRight>
                <Nick>{UserInfo.username}</Nick>
              </MyInfoRight>
            </InfoFirst>
            <InfoSecond>
              <h2>총 달린 거리</h2>
              <Sss></Sss>
              {!MyRunDistance ? (
                <h2>함께 시작해보아요!</h2>
              ) : (
                <Meter>{MyRunDistance}km</Meter>
              )}
            </InfoSecond>
            <InfoSecond>
              <h2>획득한 메달</h2>
              <Sss></Sss>
              {UserInfo.medal.length !== 0 ? (
                <MedalBox UserInfo={UserInfo} />
              ) : (
                <h2>획득한 메달이 여기 표시됩니다.</h2>
              )}
              {UserInfo.medal.length !== 0 ? (
                <button onClick={handleMedalModal}>더 보기</button>
              ) : null}
            </InfoSecond>
            <Btn>
              {!IsOauth ? (
                <button onClick={handleFixModal}>회원 정보 수정</button>
              ) : null}
              <button onClick={handleSignoutModal}>회원 탈퇴</button>
            </Btn>
          </MyInfo>
        )}
      </Container>
      <div onClick={handleSignoutModal}>
        {showSignoutModal ? (
          <Signout
            MyRunDistance={MyRunDistance}
            handleSignoutModal={handleSignoutModal}
          ></Signout>
        ) : null}
      </div>
      <div onClick={handleFixModal}>{showFixModal ? <Fix></Fix> : null}</div>
      <div onClick={handleMedalModal}>
        {showMedalModal ? <ShowMedal UserInfo={UserInfo}></ShowMedal> : null}
      </div>
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
    justify-content: center;
    align-items: center;
  }
`;
const InfoFirst = styled.div`
  display: flex;
  margin-bottom: 5rem;
  @media ${theme.mobileS} {
    display: flex;
    justify-content: center;
    align-items: center;

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
  margin-left: 30px;
  label {
    display: flex;
    width: 120px;
    height: 30px;
    background-color: #4a4a4a;
    color: #fff;
    cursor: pointer;
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
    clip: rect(0, 0, 0, 0);
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
  width: 80vw;
  max-width: 700px;
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

const Sss = styled.div`
  width: 15vw;
  max-width: 150px;
  @media ${theme.mobileS} {
    width: 0px;
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
