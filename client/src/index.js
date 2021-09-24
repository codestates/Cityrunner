import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
=======
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux/combine";
import reduxThunk from "redux-thunk";
import promiseMiddlerware from "redux-promise";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

const store = applyMiddleware(promiseMiddlerware, reduxThunk)(createStore);

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store(rootReducer)}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
>>>>>>> cf9a4e47aa33dc75d6807ac9d5b1f229844c811a
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
