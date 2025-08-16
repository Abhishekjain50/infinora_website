import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../styles/Contact.css';
import '../styles/shared.css';
import '../styles/techIcons.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content for self-sending
    const emailSubject = `New Contact Form Submission - ${formData.name}`;
    const emailBody = `
Contact Form Submission Details:
================================

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
--------
${formData.message}

================================
Submitted on: ${new Date().toLocaleString()}
    `;
    
    // Create mailto link - this will open with your email as sender and recipient
    const mailtoLink = `mailto:info@infinoratec.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    console.log('Form submitted:', formData);
    
    // Optionally clear the form after submission
    // setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'info@infinoratec.com',
      action: 'mailto:info@infinoratec.com',
      delay: '0s'
    },
    {
      icon: '📱',
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      contact: '+91 7573072308',
      action: 'tel:+917573072308',
      delay: '0.2s'
    },
    {
      icon: '',
      title: 'Visit Us',
      description: 'Come say hello',
      contact: 'Ahmedabad, Gujarat, India',
      action: '#',
      delay: '0.4s'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact InfiNoraTec | IT & Software Company in Ahmedabad</title>
        <meta name="description" content="Contact InfiNoraTec, a leading software and IT company in Ahmedabad, Gujarat. Reach out for web development, mobile apps, and custom software solutions. Let's start your project today." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="contact-hero">
        {/* Technology Background Icons */}
        <div className="tech-icons-background">
          <i className="fas fa-envelope tech-icon large"></i>
          <i className="fas fa-phone tech-icon"></i>
          <i className="fas fa-map-marker-alt tech-icon small"></i>
          <i className="fas fa-comments tech-icon"></i>
          <i className="fas fa-handshake tech-icon large"></i>
          <i className="fas fa-paper-plane tech-icon small"></i>
          <i className="fas fa-clock tech-icon"></i>
          <i className="fas fa-calendar tech-icon"></i>
          <i className="fas fa-user-friends tech-icon small"></i>
          <i className="fas fa-lightbulb tech-icon large"></i>
          <i className="fas fa-rocket tech-icon"></i>
          <i className="fas fa-heart tech-icon small"></i>
          <i className="fas fa-star tech-icon"></i>
          <i className="fas fa-thumbs-up tech-icon"></i>
          <i className="fas fa-coffee tech-icon small"></i>
          <i className="fas fa-globe tech-icon"></i>
        </div>
        
        <Container>
          <div className="contact-hero-content">
            <div className="contact-hero-badge fade-in-up">
              <i className="fas fa-envelope me-2"></i>
              Contact Us
            </div>
            <h1 className="contact-hero-title fade-in-up stagger-2">
              Let's Build Something <span className="gradient-text">Amazing</span> Together
            </h1>
            <p className="contact-hero-description fade-in-up stagger-3">
              As a passionate startup, we're ready to transform your ideas into reality. We'd love to hear about your project and discuss how we can help you achieve your goals.
            </p>
            <div className="contact-stats fade-in-up stagger-4">
              <div className="stat-item">
                <div className="stat-number">24h</div>
                <div className="stat-label">Response Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Fresh</div>
                <div className="stat-label">Ideas & Energy</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Methods Cards */}
      <section className="contact-methods-section section-padding">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 mb-4 slide-in-bottom">
                Multiple Ways to <span className="gradient-text">Reach Us</span>
              </h2>
              <p className="lead text-muted slide-in-bottom stagger-2">
                Choose the method that works best for you. We're here to help!
              </p>
            </Col>
          </Row>
          
          <Row className="g-4 justify-content-center">
            {contactMethods.map((method, index) => (
              <Col lg={3} md={6} key={index}>
                <Card 
                  className="contact-method-card h-100 enhanced-hover slide-in-bottom" 
                  style={{animationDelay: method.delay}}
                >
                  <Card.Body className="text-center p-4">
                    <div className="contact-icon mb-3 floating" style={{animationDelay: method.delay}}>
                      {method.icon}
                    </div>
                    <h5 className="card-title mb-3">{method.title}</h5>
                    <p className="text-muted mb-3">{method.description}</p>
                    <div className="contact-info">
                      <a href={method.action} className="contact-link">
                        {method.contact}
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Main Contact Form Section */}
      <section className="contact-form-section section-padding bg-secondary-custom">
        <Container>
          <Row className="justify-content-center">
            {/* Contact Form */}
            <Col lg={8} xl={7}>
              <Card className="contact-form-card shadow-lg slide-in-left">
                <Card.Body className="p-5">
                  <div className="form-header mb-4 text-center">
                    <h3 className="h2 fw-bold mb-3">
                      Tell Us About Your <span className="gradient-text">Project</span>
                    </h3>
                    <p className="text-muted">
                      Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                    </p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3 form-group-enhanced">
                          <Form.Label className="fw-semibold">Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="form-control-enhanced"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3 form-group-enhanced">
                          <Form.Label className="fw-semibold">Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="form-control-enhanced"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3 form-group-enhanced">
                      <Form.Label className="fw-semibold">Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className="form-control-enhanced"
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4 form-group-enhanced">
                      <Form.Label className="fw-semibold">Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please tell us about your project, requirements, and how we can help you..."
                        className="form-control-enhanced"
                      />
                    </Form.Group>
                    
                    <div className="form-footer text-center">
                      <Button type="submit" className="btn-primary-custom btn-lg px-5">
                        <span className="me-2">🚀</span>
                        Send Message
                      </Button>
                      <p className="text-muted mt-3 mb-0">
                        <small>We'll respond within 24 hours with a detailed response</small>
                      </p>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Information Sidebar */}
            <Col lg={4} xl={4} className="mt-5 mt-lg-0">
              <div className="contact-sidebar slide-in-right">
                {/* Quick Response Card */}
                <Card className="info-card shadow-sm mb-4">
                  <Card.Body className="p-4">
                    <h5 className="card-title mb-3">
                      <span className="me-2">⚡</span>Quick Response
                    </h5>
                    <p className="text-muted mb-3">
                      As a startup, we're committed to responding quickly to all inquiries during business hours.
                    </p>
                    <div className="response-stats">
                      <div className="stat-row">
                        <span className="stat-label">Average Response:</span>
                        <span className="stat-value">4 hours</span>
                      </div>
                      <div className="stat-row">
                        <span className="stat-label">Business Hours:</span>
                        <span className="stat-value">Mon-Fri 9AM-6PM</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>

                {/* Office Hours Card */}
                <Card className="info-card shadow-sm">
                  <Card.Body className="p-4">
                    <h5 className="card-title mb-3">
                      <span className="me-2">🕒</span>Office Hours
                    </h5>
                    <div className="office-hours">
                      <div className="hour-row">
                        <span>Monday - Friday</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hour-row">
                        <span>Saturday</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="hour-row">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                    <div className="timezone-info mt-3">
                      <small className="text-muted">All times in IST (UTC+5:30)</small>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
