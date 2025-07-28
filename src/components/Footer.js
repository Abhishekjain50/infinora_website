import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Main Footer Content */}
      <div className="footer-main-professional">
        <Container>
          <Row className="g-5">
            {/* Company Information */}
            <Col lg={3} md={6}>
              <div className="footer-brand-professional">
                <div className="footer-logo-container">
                  <img src="/logo192.png" alt="Infinora Logo" className="footer-logo-image" />
                  <h4 className="footer-logo-professional mb-3">Infinora</h4>
                </div>
                <p className="footer-description-professional mb-4">
                  Leading technology solutions provider specializing in web development, 
                  mobile applications, and digital transformation services.
                </p>
                <div className="footer-cta-section mb-3">
                  <a 
                    href="mailto:infinoratec@gmail.com?subject=Quick Inquiry - Infinora&body=Hello Infinora Team,%0D%0A%0D%0AI'm interested in your services and would like to get more information.%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0AThank you!"
                    className="footer-cta-btn"
                  >
                    <i className="fas fa-paper-plane me-2"></i>
                    Quick Contact
                  </a>
                </div>
                <div className="social-links-professional">
                  <a href="https://www.linkedin.com/company/infinora-tec/" className="social-link-professional" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/infinoratec?igsh=c2kyYTY4NDRwNDds" className="social-link-professional" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="mailto:infinoratec@gmail.com" className="social-link-professional" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </Col>
            
            {/* Quick Links */}
            <Col lg={2} md={6}>
              <div className="footer-links-professional">
                <h5 className="footer-title-professional">Quick Links</h5>
                <ul className="footer-nav-professional">
                  <li>
                    <LinkContainer to="/">
                      <a href="/">Home</a>
                    </LinkContainer>
                  </li>
                  <li>
                    <LinkContainer to="/about">
                      <a href="/about">About</a>
                    </LinkContainer>
                  </li>
                  <li>
                    <LinkContainer to="/services">
                      <a href="/services">Services</a>
                    </LinkContainer>
                  </li>
                  <li>
                    <LinkContainer to="/contact">
                      <a href="/contact">Contact</a>
                    </LinkContainer>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Services */}
            <Col lg={3} md={6}>
              <div className="footer-services-professional">
                <h5 className="footer-title-professional">Services</h5>
                <ul className="services-list-professional">
                  <li>Web Development</li>
                  <li>Mobile Applications</li>
                  <li>UI/UX Design</li>
                  <li>E-commerce Solutions</li>
                  <li>API Development</li>
                  <li>Technical Consulting</li>
                </ul>
              </div>
            </Col>
            
            {/* Contact Information */}
            <Col lg={4} md={6}>
              <div className="footer-contact-professional">
                <h5 className="footer-title-professional">Get In Touch</h5>
                
                <div className="simple-contact-info">
                  <div className="simple-contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Ahmedabad, Gujarat</span>
                  </div>

                  <div className="simple-contact-item">
                    <i className="fas fa-phone"></i>
                    <a href="tel:+919510068148">+91 9510068148</a>
                  </div>

                  <div className="simple-contact-item">
                    <i className="fas fa-envelope"></i>
                    <a href="mailto:infinoratec@gmail.com">infinoratec@gmail.com</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom-professional">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="footer-copyright-professional mb-0">
                © 2025 Infinora Technologies. All rights reserved.
              </p>
            </Col>
            <Col md={6}>
              <div className="footer-bottom-links-professional">
                <a href="#privacy">Privacy Policy</a>
                <span className="separator">|</span>
                <a href="#terms">Terms of Service</a>
                <span className="separator">|</span>
                <a href="#cookies">Cookie Policy</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
