import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../themes/theme";
import { CreateRoom } from "../modal/CreateRoom";

export const FilterList = () => {
  //리듀서 써야함
  // RoomCard 컴포넌트에 값을 전달하기 위해서
  const [isModal, setIsModal] = useState(false);
  const history = useHistory();
  const [queryData, setQueryData] = useState({
    level: "",
    time: "",
    distance: "",
    location: [],
  });
  const [curHours, setCurHours] = useState(new Date().getHours());

  const handleModal = () => {
    setIsModal(!false);
  };
  const handleCloseModal = () => {
    setIsModal(false);
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseModal();
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
      `http://localhost:4000/posts?page=1&level=${queryData.level}&time=${queryData.time}&distance=${queryData.distance}&location=${queryData.location}`
    );
    console.log(data);
  };

  return (
    <>
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
            <option value="10">10</option>
          </select>

          <button onClick={onClick}>조회</button>
        </ListNames>
        <RightSide>
          <button onClick={handleModal}> + 방만들기</button>
          <button onClick={() => history.push("/MyRoom")}> 참여중인방</button>
        </RightSide>
      </Contanier>
      <div onClick={handleCloseModal}>
        {isModal ? <CreateRoom></CreateRoom> : null}
      </div>
    </>
  );
};

const Contanier = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

const ListNames = styled.ul`
  display: flex;
  margin-top: 2rem;
  li {
    margin-right: 2rem;
    :hover {
      background-color: ${theme.color.hovergray};
      cursor: pointer;
    }
  }
`;

const RightSide = styled.div`
  margin-top: 0.8rem;
  margin-right: 4rem;
  button {
    color: #f5f5f3;
    font-weight: bold;
    font-size: 1rem;
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
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  select {
    background-color: ${theme.color.hovergray};
    border-radius: 0.3rem;
    width: 5rem;
    height: 2rem;
    padding-left: 1rem;
  }
`;
