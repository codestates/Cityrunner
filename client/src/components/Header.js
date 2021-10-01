import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";
import { Link, useHistory } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginModal } from "./Modal/LoginModal";
import { Signup } from "./Modal/Signup";

export const Header = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  // 임시 로그인성공 해더 상태관리(redux로 구현중)
  const [islogin, setIsLogin] = useState(false);
  const [isModal, setisModal] = useState(false);
  const history = useHistory();

  const handleModal = () => {
    setisModal(!false);
  };
  const handleCloseModal = () => {
    setisModal(false);
  };
  const handleSignupModal = () => {
    setShowSignupModal(!showSignupModal);
  };

  // ESC키로 모달을 close 기능
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <Container>
        <LeftSide>
          <Link to="/">
            <h3>CityRunner</h3>
          </Link>
        </LeftSide>
        <RightSide>
          <h4
            className="login-pages"
            onClick={() => {
              history.push("/Matching");
            }}
          >
            매칭페이지
          </h4>
          <h4
            className="login-pages"
            onClick={() => {
              history.push("/Mypage");
            }}
          >
            마이페이지
          </h4>
          {!islogin ? (
            <>
              <h4 className="login-pages" onClick={handleModal}>
                로그인
              </h4>
              <h4 className="login-pages" onClick={handleSignupModal}>
                회원가입
              </h4>
            </>
          ) : (
            <h4 className="login-pages" onClick={handleModal}>
              로그아웃
            </h4>
          )}
          <Burgerbar>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </Burgerbar>
        </RightSide>
      </Container>
      <div onClick={handleCloseModal}>
        {isModal ? <LoginModal></LoginModal> : null}
      </div>
      <div onClick={handleSignupModal}>
        {showSignupModal ? <Signup></Signup> : null}
      </div>
    </>
  );
};

const Container = styled.header`
  position: fixed;
  width: 100vw;
  color: white;
  background-color: ${theme.color.black};
  border-bottom: 1px solid ${theme.line.gray};
  display: flex;
  justify-content: space-between;
  z-index: 999;
`;

const RightSide = styled.div`
  display: flex;
  margin-right: 4rem;
  .login-pages {
    cursor: pointer;
    margin-right: 2rem;
    :hover {
      color: ${theme.color.hovergray};
      transition: 0.1s;
    }

    @media ${theme.mobileS} {
      display: none;
    }
  }
`;

const Burgerbar = styled.div`
  display: none;
  @media ${theme.mobileS} {
    display: flex;
    margin-top: 1.28rem;
    margin-left: 11.5rem;
    cursor: pointer;
    :hover {
      color: ${theme.color.hovergray};
    }
  }
`;

const LeftSide = styled.div`
  margin-left: 3rem;
`;
