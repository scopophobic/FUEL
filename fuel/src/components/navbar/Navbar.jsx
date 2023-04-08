import React from 'react';
import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Events from '../events/Events';
import About from '../about/About';
import Home from '../Home'
const Navbar1 = () => {
  return (
    <div>
       <BrowserRouter>
        <Navbar className='navbig'>
        <Container className='Nav-container'>
          <Nav className="nav-main">
          <Nav.Link ><Link to ="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/Events">Events</Link></Nav.Link>
            <Nav.Link ><Link to="/About">About</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/event" component={Events} />
        <Route path="/about" component={About} />
      </Switch>
       */}
      

     
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Navbar1
