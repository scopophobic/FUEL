import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>

      <nav className="navbar">
        <div className="navbar-center">
          <ul className="navbar-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
