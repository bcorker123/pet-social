import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function NavBar() {
  return (
    <Navbar id="navbar" bg="light">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Username">
        <NavDropdown.Item href="user">Profile</NavDropdown.Item>
        <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Sign Up">
        <SignupForm />
      </NavDropdown>
      <NavDropdown title="Login">
        <LoginForm />
      </NavDropdown>
    </Navbar>
  );
}

export default NavBar;
