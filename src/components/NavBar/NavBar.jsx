import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.jpg';
import '../NavBar/NavBar.css';

function NavBar() {
  return (
    <Navbar expand="lg" className="navparent">
      <Navbar.Brand>
        <img src={logo} alt="logo" className="logo" />
        <Link to="/" className="navbar-brand">SpendSense</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/income">Income</Nav.Link>
          <Nav.Link as={Link} to="/expenditure">Expenditure</Nav.Link>
          <Nav.Link as={Link} to="/history">History</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
