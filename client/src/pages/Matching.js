import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { FilterList } from "../components/room/FilterList";
import FirstInfo from "../components/room/FirstInfo";
import RoomCard from "../components/room/RoomCard";
import SelectMap from "../components/room/SelectMap";

export const Matching = () => {
	const [info, setinfo] = useState();
	const [locationInfo, setlocationInfo] = useState([]);
	return (
		<>
			<Header />
			<SelectMap
				locationInfo={locationInfo}
				setlocationInfo={setlocationInfo}
			/>
			<FirstInfo />
			<FilterList info={info} setinfo={setinfo} locationInfo={locationInfo} />
			<RoomCard info={info} setinfo={setinfo} />
			<Footer />
		</>
	);
};
