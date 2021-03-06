import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Socketio } from "./components/Socketio/Socketio";
import { Matching } from "./pages/Matching";
import Mypage from "./pages/Mypage";
import { MyRoom } from "./components/modal/MyRoom";
import ScrollToTop from "./components/ScrollToTop";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route exact path="/MyRoom">
          <ChatRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
