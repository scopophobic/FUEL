import { Navbar, Nav } from "react-bootstrap";

function MYnavbar() {
    return (
      <Navbar>

        <Navbar.Brand href="#home">FUEL</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
       
      </Navbar>
    );
  }

export default MYnavbar;