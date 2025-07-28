import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbar-brand-with-logo">
            <img src="/logo192.png" alt="Infinora Logo" className="navbar-logo" />
            Infinora
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className={location.pathname === '/about' ? 'active' : ''}>
                About
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/services">
              <Nav.Link className={location.pathname === '/services' ? 'active' : ''}>
                Services
              </Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/portfolio">
              <Nav.Link className={location.pathname === '/portfolio' ? 'active' : ''}>
                Portfolio
              </Nav.Link>
            </LinkContainer> */}
            <LinkContainer to="/contact">
              <Nav.Link className={location.pathname === '/contact' ? 'active' : ''}>
                Contact
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
