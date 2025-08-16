import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/Contact.css';
import '../styles/shared.css';
import '../styles/techIcons.css';

const Contact = () => (
    <>
      <Helmet>
        <title>Contact InfiNoraTec | IT & Software Company in Ahmedabad</title>
        <meta name="description" content="Contact InfiNoraTec, a leading software and IT company in Ahmedabad, Gujarat. Reach out for web development, mobile apps, and custom software solutions. Let's start your project today." />
      </Helmet>
      {/* Hero Section */}
      <section className="contact-hero">
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
          <i className="fas fa-rocket tech-icon"></i>
          <i className="fas fa-heart tech-icon small"></i>
          <i className="fas fa-star tech-icon"></i>
          <i className="fas fa-thumbs-up tech-icon"></i>
          <i className="fas fa-coffee tech-icon small"></i>
          <i className="fas fa-globe tech-icon"></i>
        </div>
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
      </section>
      {/* Contact Methods Cards */}
      <section className="contact-methods-section section-padding">
        <div className="container">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-5 mb-4 slide-in-bottom">
                Multiple Ways to <span className="gradient-text">Reach Us</span>
              </h2>
              <p className="lead text-muted slide-in-bottom stagger-2">
                Choose the method that works best for you. We're here to help!
              </p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="contact-method-card h-100 enhanced-hover slide-in-bottom">
                <div className="text-center p-4">
                  <div className="contact-icon mb-3 floating">📧</div>
                  <h5 className="card-title mb-3">Email Us</h5>
                  <p className="text-muted mb-3">Send us an email anytime</p>
                  <div className="contact-info">
                    <a href="mailto:info@infinoratec.com" className="contact-link">info@infinoratec.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact-method-card h-100 enhanced-hover slide-in-bottom">
                <div className="text-center p-4">
                  <div className="contact-icon mb-3 floating">📱</div>
                  <h5 className="card-title mb-3">Call Us</h5>
                  <p className="text-muted mb-3">Mon-Fri from 9am to 6pm</p>
                  <div className="contact-info">
                    <a href="tel:+917573072308" className="contact-link">+91 7573072308</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="contact-method-card h-100 enhanced-hover slide-in-bottom">
                <div className="text-center p-4">
                  <div className="contact-icon mb-3 floating"></div>
                  <h5 className="card-title mb-3">Visit Us</h5>
                  <p className="text-muted mb-3">Come say hello</p>
                  <div className="contact-info">
                    <span className="contact-link">Ahmedabad, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Contact Form Section */}
      <section className="contact-form-section section-padding bg-secondary-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div className="contact-form-card shadow-lg slide-in-left">
                <div className="p-5">
                  <div className="form-header mb-4 text-center">
                    <h3 className="h2 fw-bold mb-3">
                      Tell Us About Your <span className="gradient-text">Project</span>
                    </h3>
                    <p className="text-muted">
                      Fill out the form below and we'll get back to you within 24 hours with a detailed response.
                    </p>
                  </div>
                  <form action="https://formspree.io/f/mvgqngkd" method="POST">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="fw-semibold">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Doe"
                          className="form-control form-control-enhanced"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="fw-semibold">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="john@company.com"
                          className="form-control form-control-enhanced"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="fw-semibold">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 1234567890"
                        className="form-control form-control-enhanced"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="fw-semibold">Message *</label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        placeholder="Please tell us about your project, requirements, and how we can help you..."
                        className="form-control form-control-enhanced"
                      />
                    </div>
                    <div className="form-footer text-center">
                      <button type="submit" className="btn btn-primary-custom btn-lg px-5">
                        <span className="me-2">🚀</span>
                        Send Message
                      </button>
                      <p className="text-muted mt-3 mb-0">
                        <small>We'll respond within 24 hours with a detailed response</small>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 mt-5 mt-lg-0">
              <div className="contact-sidebar slide-in-right">
                <div className="info-card shadow-sm mb-4">
                  <div className="p-4">
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
                  </div>
                </div>
                <div className="info-card shadow-sm">
                  <div className="p-4">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

export default Contact;
