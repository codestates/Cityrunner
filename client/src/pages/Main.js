import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainFirst } from "../feature/main/MainFirst";
import { MainFourth } from "../feature/main/Mainfourth";
import { MainSecond } from "../feature/main/MainSecond";
import { MainThird } from "../feature/main/Mainthird";

export const Main = () => {
  return (
    <>
      <Header />
      <MainFirst />
      <MainSecond />
      <MainThird />
      <MainFourth />
      <Footer />
    </>
  );
};
