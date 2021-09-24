import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainFirst } from "../feature/main/MainFirst";
import { MainFourth } from "../feature/main/MainFourth";
import { MainSecond } from "../feature/main/MainSecond";
import { MainThird } from "../feature/main/MainThird";

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
