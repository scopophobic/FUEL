import { Navbar, Nav } from "react-bootstrap";
import{Link } from "react-router-dom"
import "./Navbarme.css"

function Navbarme() {
    return (
      <Navbar className="lol">

        <Navbar.Brand ><Link to ="/" className="navlink">Fuel</Link></Navbar.Brand>
          <Nav>
            
            <Nav.Link ><Link to ="/" className="navlink">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/event" className="navlink">Events</Link></Nav.Link>
            <Nav.Link ><Link to="/about" className="navlink">About</Link></Nav.Link>
            <Nav.Link ><Link to="/contact" className="navlink">Contact</Link></Nav.Link>
            
          </Nav>
       
      </Navbar>
    );
  }

export default Navbarme;