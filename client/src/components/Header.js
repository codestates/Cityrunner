import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../themes/theme";
import { Link, useHistory, Redirect } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoginModal } from "./modal/LoginModal";
import { Signup } from "./modal/Signup";
import { HamburgerModal } from "./modal/HamburgerModal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setIsLogin, setUserinfo } from "../redux/modules/user";
import { MobileNavbar } from "./MobileNavbar";

export const Header = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isModal, setisModal] = useState(false);
  const [showHamburgerModal, setShowHamburgerModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleModal = () => {
    setisModal(!false);
  };
  const handleCloseModal = () => {
    setisModal(false);
  };
  const handleSignupModal = () => {
    setShowSignupModal(!showSignupModal);
  };
  const handleHamburgerModal = () => {
    setShowHamburgerModal(!showHamburgerModal);
  };
  const onLogout = () => {
    dispatch(logoutUser);
    dispatch(setIsLogin(false));
    localStorage.removeItem("userinfo");
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

  const userinfo = useSelector((state) => state.user);
  let token = localStorage.getItem("userinfo");

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
          {!token ? (
            <>
              <h4 className="login-pages" onClick={handleModal}>
                로그인
              </h4>
              <h4 className="login-pages" onClick={handleSignupModal}>
                회원가입
              </h4>
            </>
          ) : (
            <>
              <h4
                className="login-pages"
                onClick={() => {
                  history.push("/Mypage");
                }}
              >
                마이페이지
              </h4>
              <h4 className="login-pages" onClick={onLogout}>
                로그아웃
              </h4>
            </>
          )}
          <Burgerbar onClick={handleHamburgerModal}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </Burgerbar>
        </RightSide>
      </Container>
      <div onClick={handleCloseModal}>
        {isModal ? (
          <LoginModal handleCloseModal={handleCloseModal}></LoginModal>
        ) : null}
      </div>
      <div onClick={handleSignupModal}>
        {showSignupModal ? <Signup></Signup> : null}
      </div>
      <div onClick={handleHamburgerModal}>
        {showHamburgerModal ? (
          <HamburgerModal
            token={token}
            history={history}
            onLogout={onLogout}
            handleModal={handleModal}
            handleSignupModal={handleSignupModal}
            handleHamburgerModal={handleHamburgerModal}
          ></HamburgerModal>
        ) : null}
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
