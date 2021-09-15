import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Matching } from "./pages/Matching";

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route exact path="/Matching">
					<Matching />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
