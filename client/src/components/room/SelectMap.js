import { useState } from "react";
import styled from "styled-components";
import { theme } from "../../themes/theme";

const SelectMap = () => {
  const [currentLoc, setCurrentLoc] = useState('');
  const location = [
    {id: 0, name: '난지', className: 'nanji'}, {id: 1, name: '망원', className: 'mangwon'}, {id: 2, name: '이촌', className: 'echon'},
    {id: 3, name: '뚝섬', className: 'dducksum'}, {id: 4, name: '강서', className: 'kangser'}, {id: 5, name: '양화', className: 'yangwha'},
    {id: 6, name: '여의도', className: 'yeyido'}, {id: 7, name: '반포', className: 'banpo'}, {id: 8, name: '잠원', className: 'gamwon'},
    {id: 9, name: '잠실', className: 'gamsil'}, {id: 10, name: '광나루', className: 'kwangnaroo'},
  ];
  const handleClick = (id) => {
    console.log(location[id]);
    if(currentLoc === id) {
      setCurrentLoc('')
    } else {
      setCurrentLoc(id);
    }
  }
  return (
    <Container>
      <MapContainer>
        <img src='img/hanRiver_map.png'/>
        <ListContainer>
          {location.map((loc) => {return (
            <li key={loc.id}
            className={currentLoc === loc.id? `${loc.className} focused`: loc.className}
            onClick={() => handleClick(loc.id)}>
              {loc.name}
            </li>
          )})}
        </ListContainer>
      </MapContainer>
    </Container>
  )
}
const Container = styled.div`
  width: 100vw;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
const MapContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 55%;
    min-width: 500px;
    height: auto;
    object-fit: cover;
  }
`;
const ListContainer = styled.ul`
  list-style: none;
  li {
    position: absolute;
    text-align: center;
    background-color: ${theme.color.black};
    color: white;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    line-height: 30px;
    border-radius: 39px;
    padding: 0 9px;
    text-align: center;
    &:hover {
      background-color: red;
    }
    @media ${theme.mobileS} {
      font-size: 14px;
      padding: 0 8px;
      line-height: 26px;
    }
  }
  .focused {
    background-color: red;
  }
  .nanji {
    top: 30%;
    left: 30%;
    @media ${theme.mobileS} {
      left: 19vw;
    }
    @media (max-width: 500px) {
      left: 17vw;
    }
  }
  .mangwon {
    left: 36vw;
    top: 40%;
    @media ${theme.mobileS} {
      left: 26vw;
    }
    @media (max-width: 500px) {
      left: 25vw;
    }
  }
  .echon {
    left: 45vw;
    top: 55%;
    @media ${theme.mobileS} {
      left: 43vw;
    }
    @media (max-width: 500px) {
      left: 42vw;
    }
  }
  .dducksum {
    left: 60vw;
    top: 45%;
    @media ${theme.mobileS} {
      left: 65vw;
    }
    @media (max-width: 500px) {
      left: 66vw;
    }
  }
  .kangser {
    left: 23vw;
    top: 45%;
    @media ${theme.mobileS} {
      left: 12vw;
    }
    @media (max-width: 500px) {
      left: 3vw;
    }
  }
  .yangwha {
    top: 50%;
    left: 27vw;
    @media ${theme.mobileS} {
      left: 17vw;
    }
    @media (max-width: 500px) {
      left: 10vw;
    }
  }
  .yeyido {
    top: 58%;
    left: 36vw;
    @media ${theme.mobileS} {
      left: 28vw;
    }
    @media (max-width: 500px) {
      left: 20vw;
    }
  }
  .banpo {
    left: 50vw;
    top: 70%;
  }
  .gamwon {
    top: 65%;
    left: 56vw;
    @media ${theme.mobileS} {
      left: 59vw;
    }
    @media (max-width: 500px) {
      left: 60vw;
    }
  }
  .gamsil {
    top: 65%;
    left: 66vw;
    @media ${theme.mobileS} {
      left: 70vw;
    }
    @media (max-width: 500px) {
      left: 76vw;
    }
  }
  .kwangnaroo {
    left: 69vw;
    top: 45%;
    @media ${theme.mobileS} {
      left: 75vw;
    }
    @media (max-width: 500px) {
      left: 80vw;
    }
  }
`;
export default SelectMap;