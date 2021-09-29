import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Socketio } from "./components/Socketio/Socketio";
import { Mypage } from "./components/Mypage/Mypage";
import { Matching } from "./pages/Matching";
import { MyRoom } from "./components/modal/MyRoom";

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
        <Route exact path="/MyRoom">
          <MyRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
