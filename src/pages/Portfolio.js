import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../styles/Portfolio.css';
import '../styles/shared.css';
import '../styles/techIcons.css';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features and seamless user experience.",
      category: "Web Development",
      image: "🛒"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking application with biometric authentication.",
      category: "Mobile App",
      image: "🏦"
    },
    {
      title: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard for data-driven business decisions.",
      category: "UI/UX Design",
      image: "📊"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with telemedicine capabilities.",
      category: "Web Development",
      image: "🏥"
    },
    {
      title: "Learning Management System",
      description: "Interactive online learning platform with video streaming and assessments.",
      category: "EdTech",
      image: "📚"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management platform with virtual tours.",
      category: "Web Development",
      image: "🏠"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Infinora</title>
        <meta name="description" content="View our portfolio of successful projects and case studies" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="portfolio-hero">
        {/* Technology Background Icons */}
        <div className="tech-icons-background">
          <i className="fas fa-briefcase tech-icon large"></i>
          <i className="fas fa-laptop-code tech-icon"></i>
          <i className="fas fa-mobile-alt tech-icon small"></i>
          <i className="fas fa-paint-brush tech-icon"></i>
          <i className="fas fa-trophy tech-icon large"></i>
          <i className="fas fa-code tech-icon small"></i>
          <i className="fas fa-camera tech-icon"></i>
          <i className="fas fa-chart-line tech-icon"></i>
          <i className="fas fa-puzzle-piece tech-icon small"></i>
          <i className="fas fa-eye tech-icon large"></i>
          <i className="fas fa-magic tech-icon"></i>
          <i className="fas fa-gem tech-icon small"></i>
          <i className="fas fa-star tech-icon"></i>
          <i className="fas fa-thumbs-up tech-icon"></i>
          <i className="fas fa-heart tech-icon small"></i>
          <i className="fas fa-crown tech-icon"></i>
        </div>
        
        <Container>
          <div className="portfolio-hero-content">
            <div className="portfolio-hero-badge fade-in-up">
              <i className="fas fa-briefcase me-2"></i>
              Our Portfolio
            </div>
            <h1 className="portfolio-hero-title fade-in-up stagger-2">
              Showcase of Our <span className="gradient-text">Best Work</span>
            </h1>
            <p className="portfolio-hero-description fade-in-up stagger-3">
              Explore our portfolio of successful projects and discover how we've helped businesses transform their digital presence.
            </p>
            <div className="portfolio-stats fade-in-up stagger-4">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Industries</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Portfolio Grid Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <div className="section-header fade-in-up">
                <h2 className="section-title">Our Featured Projects</h2>
                <p className="section-description">
                  Discover our successful projects and the impact we've made for our clients across various industries.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-4">
            {projects.map((project, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className={`portfolio-card hover-lift scale-in stagger-${(index % 3) + 1}`}>
                  <Card.Body className="p-4">
                    <div className="text-center mb-3" style={{fontSize: '3rem'}}>
                      {project.image}
                    </div>
                    <div className="text-center mb-3">
                      <span className="portfolio-badge">
                        {project.category}
                      </span>
                    </div>
                    <Card.Title className="h5 mb-3 text-center">
                      {project.title}
                    </Card.Title>
                    <Card.Text className="text-muted text-center">
                      {project.description}
                    </Card.Text>
                    <div className="text-center mt-3">
                      <Button variant="outline-primary" size="sm">
                        <i className="fas fa-external-link-alt me-2"></i>
                        View Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="cta-content">
                <h2 className="cta-title">Ready to Start Your Project?</h2>
                <p className="cta-description">
                  Let's discuss how we can help bring your vision to life with our expertise and proven track record.
                </p>
                <div className="cta-buttons">
                  <Button className="btn-cta-primary me-3">
                    <i className="fas fa-phone me-2"></i>
                    Get Started
                  </Button>
                  <Button className="btn-cta-secondary">
                    <i className="fas fa-envelope me-2"></i>
                    Contact Us
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Portfolio;
