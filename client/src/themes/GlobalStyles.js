import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
	* {
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
	font-family: 'Pretendard-Regular'; 
	
  }
  button{
    cursor: pointer;
	}
	img{
		width:100vw;
	}
  a {
		:visited {
			text-decoration: none;
		}
		text-decoration: none;
		color: white;
		cursor: pointer;
		:hover {
			color: ${theme.color.hovergray};
		}
	}

	@media ${theme.mobileS}{
		html,
body{
width:100%;

overflow-x:hidden;

}
	}
`;
