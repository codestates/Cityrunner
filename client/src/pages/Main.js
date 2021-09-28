import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainFirst } from "../components/main/MainFirst";
import { MainFourth } from "../components/main/MainFourth";
import { MainSecond } from "../components/main/MainSecond";
import { MainThird } from "../components/main/MainThird";
import { loginUser } from "../redux/modules/user";

export const Main = () => {
	const dispatch = useDispatch();

	useEffect(async () => {
    const url = new URL(window.location.href);
    if(url.hash) {
      const authorizationCode = url.hash.split('=')[1].split('&')[0];
      
			await axios
				.post('http://localhost:4000/user/oauth', { authorizationCode })
				.then(async (res) => {
					const {email, password} = res.data.data;
					dispatch(loginUser({email, password}));
				});
		}
	}, []);
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
