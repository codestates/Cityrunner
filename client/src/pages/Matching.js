import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { FilterList } from "../components/room/FilterList";
import FirstInfo from "../components/room/FirstInfo";
import RoomCard from "../components/room/RoomCard";

export const Matching = () => {
	return (
		<>
			<Header />
			<FirstInfo />
			<FilterList />
			<RoomCard />
			<Footer />
		</>
	);

};
