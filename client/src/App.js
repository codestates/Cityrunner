import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./pages/Main";
import { GlobalStyles } from "./themes/GlobalStyles";
import { Socketio } from "./components/Socketio/Socketio";
import { Mypage } from "./components/Mypage/Mypage";
import { Matching } from "./pages/Matching";
import Mypage from "./pages/Mypage";
import { MyRoom } from "./components/modal/MyRoom";

function App() {
<<<<<<< HEAD
=======

>>>>>>> 92e9197cb7d7ee9d4f2f3d219f11214765ad062e
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
<<<<<<< HEAD
      </Switch>
    </Router>
  );
=======
        <Route exact path="/Chating">
          <Socketio />
        </Route>
        <Route exact path="/MyRoom">  
					<MyRoom />
				</Route>
      </Switch>
    </Router>
  );

>>>>>>> 92e9197cb7d7ee9d4f2f3d219f11214765ad062e
}

export default App;
