import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Navbar>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="user">User</Nav.Link>
      <Nav.Link href="signup">Sign Up</Nav.Link>
      <Nav.Link href="login">Login</Nav.Link>
    </Navbar>
  );
}

export default NavBar;
