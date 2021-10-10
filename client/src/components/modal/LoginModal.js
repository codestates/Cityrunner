import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { loginUser, setIsLogin, setUserinfo } from "../../redux/modules/user";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";
import { useEffect, useState } from "react";
import { modalclose, modalopen } from "../../redux/modules/filterMap";

export const LoginModal = () => {
	const dispatch = useDispatch();
	const [errors, seterrors] = useState(false);

	const Modals = () => {
		dispatch(modalclose());
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},

		validationSchema: Yup.object({
			email: Yup.string().required("이메일을 입력해주세요."),
			password: Yup.string().required("패스워드를 입력해주세요."),
		}),

		onSubmit: (values) => {
			dispatch(loginUser(values))
				.then((res) => {
					const userinfo = res.payload.data.data;
					const logincheck = true;
					dispatch(setIsLogin(true));
					dispatch(setUserinfo(userinfo));
					localStorage.setItem("userinfo", JSON.stringify({ logincheck }));
				})
				.then(() => {
					window.location.reload();
				})
				.catch((err) => {
					if (err.response.status === 409) {
						seterrors(true);
						return;
					}
				});
		},
	});

	const oauth = {
		google: {
			client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
			uri: "http://cityrunner.site",
			scope:
				"https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
		},
		kakao: {
			client_id: `${process.env.REACT_APP_KAKAO_CLIENT_ID}e`,
			uri: "http://cityrunner.site",
		},
	};

	const oauthHandler = (category) => {
		if (category === "google") {
			window.location
				.assign(`https://accounts.google.com/o/oauth2/v2/auth?client_id=${oauth.google.client_id}&
response_type=token&redirect_uri=${oauth.google.uri}&scope=${oauth.google.scope}`); //! 줄 바꿈 수정하면 에러나요ㅠㅠ 들여쓰기 없이 딱 붙어있어야 정상작동!
		} else if (category === "kakao") {
			window.location
				.assign(`https://kauth.kakao.com/oauth/authorize?client_id=${oauth.kakao.client_id}&
redirect_uri=${oauth.kakao.uri}&response_type=code`);
		}
	};

	return (
		<>
			<MakeModal>
				<DialogBlock
					onClick={(e) => e.stopPropagation()}
					onSubmit={formik.handleSubmit}
				>
					<CloseModal onClick={Modals}>X</CloseModal>
					<Title>로그인</Title>
					<LoginInput>
						<h5>E-mail</h5>
						<input
							name="email"
							type="email"
							placeholder="email"
							onChange={formik.handleChange}
							value={formik.values.email}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className="errorMassge">{formik.errors.email}</div>
						) : null}
						<h5>비밀번호</h5>
						<input
							name="password"
							type="password"
							placeholder="password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div className="errorMassge">{formik.errors.password}</div>
						) : null}
						{errors ? (
							<div className="errorMassge">
								비밀번호 혹은 이메일이 틀렸습니다.
							</div>
						) : null}
					</LoginInput>
					<LoginBtn>
						<button type="submit">로그인</button>
						<button
							onClick={() => {
								oauthHandler("google");
							}}
						>
							Google
						</button>
						<button
							onClick={() => {
								oauthHandler("kakao");
							}}
						>
							Kakao
						</button>
					</LoginBtn>
				</DialogBlock>
			</MakeModal>
		</>
	);
};

const MakeModal = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	${flexCenter}
	background: rgba(0, 0, 0, 0.3);
	z-index: 1;
`;

const DialogBlock = styled.form`
	width: 320px;
	height: 460px;
	padding: 1rem;
	background: white;
	border-radius: 15px;
	h3 {
		${flexCenter}
	}
`;

const LoginInput = styled.div`
	${flexColum}
	input {
		height: 1.8rem;
		width: 200px;
		margin-top: -1rem;
		border: solid 1px;
		padding-left: 1rem;
	}
	h5 {
		padding-right: 11rem;
	}
	.errorMassge {
		color: red;
		padding-top: 0.2rem;
		padding-right: 5.3rem;
		font-size: 13px;
		font-weight: bold;
	}
`;

const Title = styled.h2`
	${flexCenter}
	margin-top: 2rem;
`;

const LoginBtn = styled.div`
	${flexColum}
	margin-top: 0.8rem;
	button {
		height: 1.5rem;
		width: 200px;
		height: 2rem;
		margin: 0.5rem;
		margin-top: 0.5rem;
		background-color: ${theme.color.black};
		color: white;
		font-weight: bold;
		:hover {
			background-color: white;
			color: ${theme.color.black};
			border: solid 1px;
			transition: 0.4s;
		}
	}
`;

const CloseModal = styled.div`
	display: flex;
	justify-content: flex-end;
	cursor: pointer;
`;
