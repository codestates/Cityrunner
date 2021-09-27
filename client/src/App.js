import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Matching } from "./pages/Matching";
import Mypage from "./pages/Mypage";

function App() {
<<<<<<< HEAD
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/Mypage">
          <Mypage />
        </Route>
        <Route exact path="/Matching">
          <Matching />
        </Route>
      </Switch>
    </Router>
  );
=======
	return (
		<Router>
			<GlobalStyles />
			<Switch>
				<Route exact path="/">
					<Main />
				</Route>
				<Route exact path="/Mypage">
					<Mypage />
				</Route>
				<Route exact path="/Matching">
					<Matching />
				</Route>
			</Switch>
		</Router>
	);
>>>>>>> cf9a4e47aa33dc75d6807ac9d5b1f229844c811a
}

export default App;
