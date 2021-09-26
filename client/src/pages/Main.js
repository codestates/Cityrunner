import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainFirst } from "../components/main/MainFirst";
import { MainFourth } from "../components/main/MainFourth";

import { MainSecond } from "../components/main/MainSecond";
import { MainThird } from "../components/main/MainThird";

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
