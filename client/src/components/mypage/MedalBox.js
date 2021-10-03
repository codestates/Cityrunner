import styled from "styled-components";

export const MedalBox = (props) => {
  const UserInfo = props.UserInfo;
  return (
    <>
      <Medals>
        <ImgContainer>
          <MedalImg src={"img/medal" + UserInfo.medal[0].id + ".jpeg"} />
          <MedalName>{UserInfo.medal[0].medalName}</MedalName>
          <TooltipText>{UserInfo.medal[0].medalDesc}</TooltipText>
        </ImgContainer>
        <ImgContainer>
          <MedalImg src={"img/medal" + UserInfo.medal[1].id + ".jpeg"} />
          <MedalName>{UserInfo.medal[1].medalName}</MedalName>
          <TooltipText>{UserInfo.medal[1].medalDesc}</TooltipText>
        </ImgContainer>
        <ImgContainer>
          <MedalImg src={"img/medal" + UserInfo.medal[2].id + ".jpeg"} />
          <MedalName>{UserInfo.medal[2].medalName}</MedalName>
          <TooltipText>{UserInfo.medal[2].medalDesc}</TooltipText>
        </ImgContainer>
      </Medals>
    </>
  );
};
const Medals = styled.div`
  width: 210px;
  height: 95px;
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  align-items: center;
  justify-content: center;
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
