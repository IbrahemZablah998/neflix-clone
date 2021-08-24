import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeScreen from "../homeScreen/HomeScreen";
import Login from "../login/Login";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route exact path="/profile">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
