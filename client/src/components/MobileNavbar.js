import styled from "styled-components";
import { flexCenter, flexColum } from "../themes/flex";
import { theme } from "../themes/theme";

export const MobileNavbar = () => {
	return (
		<>
			<Container>
				<li>매칭페이지</li>
				<li>마이페이지</li>
				<li>로그인</li>
			</Container>
		</>
	);
};

const Container = styled.div`
	display: none;
	@media ${theme.mobileS} {
		${flexColum};
		background-color: ${theme.color.black};
		color: white;
		width: 100vw;

		border: solid 2px white;
	}
`;
