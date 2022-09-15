import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from "./NavBar";
import User from "./User";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Home from "./Home";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({
    id: "",
    username: "",
    image_url: "",
  });

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((error) => console.log(error));
      }
    });
  }, []);

  const history = useHistory();

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    });
    setUser({
      id: "",
      username: "",
      image_url: "",
    });
    history.push("/");
  }

  return (
    <div className="App">
      <NavBar
        handleLogin={handleLogin}
        user={user}
        handleLogout={handleLogout}
      />
      <Switch>
        <Route path="/user">
          <User user={user} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
