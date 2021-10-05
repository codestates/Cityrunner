import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainFirst } from "../components/main/MainFirst";
import { MainFourth } from "../components/main/MainFourth";
import { MainSecond } from "../components/main/MainSecond";
import { MainThird } from "../components/main/MainThird";
import { MainCount } from "../components/main/MainCount";
import qs from "querystring";
import { useHistory } from "react-router";
import { loginUser } from "../redux/modules/user";

export const Main = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [state, setState] = useState(false);

	useEffect(async () => {
		const url = new URL(window.location.href);
		const params = url.searchParams.get("code");
		if (url.hash) {
			// Google Login
			const authorizationCode = url.hash.split("=")[1].split("&")[0];
			await axios
				.post("http://localhost:4000/user/oauth", {
					authorizationCode,
					category: "google",
				})
				.then(async (res) => {
					const { email, password } = res.data.data;
					dispatch(loginUser({ email, password }));
					localStorage.setItem("userinfo", JSON.stringify(res));
					setState(true);
					history.push("/");
				})
				.catch((err) => console.log(err));
		} else if (params) {
			// Kakao Login
			await axios
				.post(
					"https://kauth.kakao.com/oauth/token",
					qs.stringify({
						grant_type: "authorization_code",
						client_id: "63d21bbf51229a38085d23a58ecf2b9e",
						redirect_uri: "http://localhost:3000",
						code: params,
					}),
					{
						"Content-Type": "application/x-www-form-urlencoded",
					}
				)
				.then(async (res) => {
					const access_token = res.data.access_token;
					await axios
						.post("http://localhost:4000/user/oauth", {
							authorizationCode: access_token,
							category: "kakao",
						})
						.then((res) => {
							const { email, password } = res.data.data;
							dispatch(loginUser({ email, password }));
							history.push("/");
						})
						.catch((err) => console.log(err));
				});
		}
	}, [state]);

	return (
		<>
			<Header />
			<MainFirst />
			<MainSecond />
			<MainThird />
			<MainFourth />
			<MainCount />
			<Footer />
		</>
	);
};
