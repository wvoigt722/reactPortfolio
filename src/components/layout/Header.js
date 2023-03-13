import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NaviBar() {
  return (
    <div>
      {" "}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">William Voigt</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NaviBar;
