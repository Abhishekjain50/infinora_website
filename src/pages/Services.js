import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../styles/Services.css';
import '../styles/shared.css';
import '../styles/techIcons.css';

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Transform your digital presence with cutting-edge web applications. We're passionate about crafting responsive, scalable, and lightning-fast websites using React, Node.js, and modern frameworks.",
      icon: "🌐",
      features: ["React & Next.js", "Progressive Web Apps", "SEO Optimization", "Performance-First"],
      delay: "0s",
      color: "primary"
    },
    {
      title: "Mobile App Development",
      description: "Reach your customers wherever they are with stunning native and cross-platform mobile applications. We're ready to deliver seamless user experiences that engage and convert.",
      icon: "📱",
      features: ["Native iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      delay: "0.1s",
      color: "success"
    },
    {
      title: "UI/UX Design",
      description: "Create unforgettable digital experiences with our innovative design approach. We blend beautiful aesthetics with data-driven insights to craft interfaces that users love and businesses profit from.",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      delay: "0.2s",
      color: "warning"
    },
    {
      title: "E-commerce Solutions",
      description: "Boost your online sales with powerful e-commerce platforms. We're excited to build stores that scale with your business, from Shopify to custom solutions.",
      icon: "🛒",
      features: ["Shopify Expert", "WooCommerce", "Payment Integration", "Inventory Management"],
      delay: "0.3s",
      color: "info"
    },
    {
      title: "API Development & Integration",
      description: "Connect your systems seamlessly with robust, secure, and scalable API solutions. We're ready to design RESTful and GraphQL APIs that power modern applications.",
      icon: "🔗",
      features: ["RESTful APIs", "GraphQL", "Third-party Integration", "Microservices"],
      delay: "0.4s",
      color: "secondary"
    },
    {
      title: "Technical Consulting",
      description: "Navigate the complex world of technology with confidence. Our team provides strategic guidance, architecture design, and technical leadership to accelerate your digital transformation.",
      icon: "💡",
      features: ["Technology Strategy", "Code Reviews", "Performance Optimization", "Team Training"],
      delay: "0.5s",
      color: "danger"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Web &amp; Mobile App Development | InfiNoraTec Ahmedabad</title>
        <meta name="description" content="Discover the expert IT services offered by InfiNoraTec, a leading software company in Ahmedabad. We specialize in web development, mobile apps, UI/UX design, and e-commerce solutions." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="services-hero">
        {/* Technology Background Icons */}
        <div className="tech-icons-background">
          <i className="fas fa-cogs tech-icon large"></i>
          <i className="fas fa-laptop-code tech-icon"></i>
          <i className="fas fa-mobile-alt tech-icon small"></i>
          <i className="fas fa-palette tech-icon"></i>
          <i className="fas fa-shopping-cart tech-icon large"></i>
          <i className="fas fa-link tech-icon small"></i>
          <i className="fas fa-tools tech-icon"></i>
          <i className="fas fa-code-branch tech-icon"></i>
          <i className="fas fa-database tech-icon small"></i>
          <i className="fas fa-cloud-upload-alt tech-icon large"></i>
          <i className="fas fa-shield-alt tech-icon"></i>
          <i className="fas fa-rocket tech-icon small"></i>
          <i className="fas fa-chart-bar tech-icon"></i>
          <i className="fas fa-search tech-icon"></i>
          <i className="fas fa-bolt tech-icon small"></i>
          <i className="fas fa-magic tech-icon"></i>
        </div>
        
        <Container>
          <div className="services-hero-content">
            <div className="services-hero-badge fade-in-up">
              <i className="fas fa-cogs me-2"></i>
              Our Services
            </div>
            <h1 className="services-hero-title fade-in-up stagger-2">
              Innovative <span className="gradient-text">Digital Solutions</span> for Modern Businesses
            </h1>
            <p className="services-hero-description fade-in-up stagger-3">
              As a dynamic <strong>IT company in Ahmedabad</strong>, we're passionate about delivering cutting-edge digital solutions. 
              From modern web applications to mobile apps, our <strong>software company</strong> is here to transform your ideas into reality.
            </p>
            <div className="services-stats fade-in-up stagger-4">
              <div className="stat-item">
                <div className="stat-number">6+</div>
                <div className="stat-label">Expert Services</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">Latest</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Dedication</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section-padding">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 mb-4 slide-in-bottom">
                What We <span className="gradient-text">Offer</span>
              </h2>
              <p className="lead text-muted slide-in-bottom stagger-2">
                Our expert team in <strong>Gujarat</strong> is ready to deliver exceptional results across multiple domains for our clients.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {services.map((service, index) => (
              <Col md={6} lg={4} key={index}>
                <Card 
                  className="service-card h-100 enhanced-hover slide-in-bottom"
                  style={{animationDelay: service.delay}}
                >
                  <Card.Body className="p-4">
                    <div className="service-header mb-4">
                      <div 
                        className="service-icon mb-3 floating"
                        style={{animationDelay: service.delay}}
                      >
                        {service.icon}
                      </div>
                      <Card.Title className="h4 mb-3">
                        {service.title}
                      </Card.Title>
                    </div>
                    
                    <Card.Text className="text-muted mb-4">
                      {service.description}
                    </Card.Text>
                    
                    <div className="service-features">
                      <h6 className="mb-3 text-primary">Key Features:</h6>
                      <ul className="feature-list">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="feature-item">
                            <span className="feature-check">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="service-footer mt-4">
                      <button className={`btn btn-outline-${service.color} btn-sm service-btn`}>
                        Learn More
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process-section section-padding bg-secondary-custom">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 mb-4 slide-in-bottom">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="lead text-muted slide-in-bottom stagger-2">
                As a leading <strong>software company in Ahmedabad</strong>, our expertise meets your business goals with a structured and transparent approach.
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {[
              { 
                step: "01", 
                title: "Consultation", 
                description: "We start with understanding your vision, goals, and requirements through detailed consultation", 
                icon: "�",
                color: "primary"
              },
              { 
                step: "02", 
                title: "Strategy & Design", 
                description: "Creating strategic roadmap and innovative designs tailored to your business needs", 
                icon: "🎯",
                color: "success"
              },
              { 
                step: "03", 
                title: "Development", 
                description: "Building your solution with modern technologies and agile development practices", 
                icon: "⚡",
                color: "warning"
              },
              { 
                step: "04", 
                title: "Launch & Support", 
                description: "Deploying your solution and providing ongoing support to ensure success", 
                icon: "🚀",
                color: "info"
              }
            ].map((process, index) => (
              <Col lg={3} md={6} key={index}>
                <div 
                  className="process-step-modern slide-in-bottom"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  <div className="process-step-header">
                    <div className={`process-step-number bg-${process.color}`}>
                      {process.step}
                    </div>
                    <div 
                      className="process-step-icon floating"
                      style={{animationDelay: `${0.3 + index * 0.1}s`}}
                    >
                      {process.icon}
                    </div>
                  </div>
                  <div className="process-step-content">
                    <h4 className="process-step-title">{process.title}</h4>
                    <p className="process-step-description">{process.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="process-connector">
                      <div className="connector-line"></div>
                      <div className="connector-arrow">→</div>
                    </div>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section section-padding">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="cta-content slide-in-bottom">
                <h2 className="display-5 fw-bold mb-4">
                  Ready to Start Your <span className="gradient-text">Journey</span>?
                </h2>
                <p className="lead text-muted mb-5">
                  Let's discuss your ideas and explore how we can bring your vision to life with our innovative solutions.
                </p>
                <div className="cta-buttons slide-in-bottom stagger-2">
                  <a 
                    href="mailto:info@infinoratec.com?subject=Free Consultation Request - InfiNoraTec&body=Hello InfiNoraTec Team,%0D%0A%0D%0AI'm interested in discussing my project requirements and would like to schedule a free consultation.%0D%0A%0D%0AProject Details:%0D%0A- Project Type: [Please specify]%0D%0A- Timeline: [Please specify]%0D%0A- Budget Range: [Please specify]%0D%0A%0D%0APlease let me know your availability for a consultation.%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards"
                    className="btn btn-primary-custom btn-lg me-3 mb-3"
                  >
                    <span className="me-2">✉️</span>
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
