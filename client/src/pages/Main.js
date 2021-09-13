import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainFirst } from "../feature/main/MainFirst";
import { MainSecond } from "../feature/main/MainSecond";

export const Main = () => {
	return (
		<>
			<Header />
			<MainFirst />
			<MainSecond />
			<Footer />
		</>
	);
};
