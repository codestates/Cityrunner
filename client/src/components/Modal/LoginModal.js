import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../../redux/modules/user";
import { flexCenter, flexColum } from "../../themes/flex";
import { theme } from "../../themes/theme";

export const LoginModal = () => {
	const history = useHistory();
	//const dispatch = useDispatch();

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
			console.log(values);
		},
	});

	return (
		<>
			<MakeModal>
				<DialogBlock
					onSubmit={formik.handleSubmit}
					onClick={(e) => e.stopPropagation()}
				>
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
					</LoginInput>
					<LoginBtn>
						<button type="submit">로그인</button>
						<button>Google</button>
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
	background: rgba(0, 0, 0, 0.6);
`;

const DialogBlock = styled.form`
	width: 320px;
	height: 400px;
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

const Errorblock = styled.div`
	color: red;
	padding-top: 1rem;
	font-weight: bold;
`;
