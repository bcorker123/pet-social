import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import User from "./User";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/signup">
          <SignupForm />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <div>footer</div>
    </div>
  );
}

export default App;
