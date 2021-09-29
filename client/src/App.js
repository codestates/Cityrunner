import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Socketio } from "./components/Socketio/Socketio";
import { Mypage } from "./components/Mypage/Mypage";
import { Matching } from "./pages/Matching";

function App() {
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
        <Route exact path="/Chating">
          <Socketio />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
