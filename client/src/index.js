import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./redux";
import promiseMiddlerware from "redux-promise";
import reduxThunk from "redux-thunk";

const createStoreWidthMiddleware = applyMiddleware(
	promiseMiddlerware,
	reduxThunk
)(createStore);

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store(rootReducer)}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
=======
	<React.StrictMode>
		<Provider store={createStoreWidthMiddleware(rootReducer)}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
>>>>>>> 92e9197cb7d7ee9d4f2f3d219f11214765ad062e
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
