import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
	* {
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
  }
  button{
    cursor: pointer;
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
`;
