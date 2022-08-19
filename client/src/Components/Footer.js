import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <Container id="footer-container">
      <Card id="footer-card">
        <Nav.Link id="footer-link" href="/about">
          Footer
        </Nav.Link>
      </Card>
    </Container>
  );
}

export default Footer;
