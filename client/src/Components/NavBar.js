import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function NavBar({ handleLogin, handleLogout, user }) {
  return (
    <Navbar id="navbar" bg="light">
      <Nav.Link href="/">Home</Nav.Link>
      {user.id ? (
        <>
          <NavDropdown title={user.username.toUpperCase()}>
            <NavDropdown.Item href="user">Profile</NavDropdown.Item>
            <NavDropdown.Item href="logout" onClick={handleLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </>
      ) : (
        <>
          <NavDropdown title="Sign Up">
            <SignupForm handleLogin={handleLogin} />
          </NavDropdown>
          <NavDropdown title="Login">
            <LoginForm handleLogin={handleLogin} />
          </NavDropdown>
        </>
      )}
    </Navbar>
  );
}

export default NavBar;
