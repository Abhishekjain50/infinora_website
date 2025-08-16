import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import '../styles/shared.css';
import '../styles/techIcons.css';

const Home = () => {
  const navigate = useNavigate();

  const technologies = [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'fas fa-code', color: '#3178C6' },
    { name: 'Express.js', icon: 'fas fa-server', color: '#000000' },
    { name: 'Next.js', icon: 'fas fa-code', color: '#000000' },
    { name: 'NestJS', icon: 'fas fa-server', color: '#E0234E' },
    { name: 'PHP', icon: 'fab fa-php', color: '#777BB4' },
    { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
    { name: 'Android', icon: 'fab fa-android', color: '#3DDC84' },
    { name: 'iOS', icon: 'fab fa-apple', color: '#000000' },
    { name: 'Swift', icon: 'fab fa-swift', color: '#FA7343' },
    { name: 'Kotlin', icon: 'fas fa-mobile-alt', color: '#7F52FF' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt', color: '#02569B' },
    { name: 'React Native', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
    { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' }
  ];

  return (
    <>
      <Helmet>
        <title>InfiNoraTec | IT &amp; Software Development Company in Ahmedabad</title>
        <meta name="description" content="InfiNoraTec is a leading IT and software development company in Ahmedabad, Gujarat, specializing in custom web development, mobile apps, and innovative tech solutions for startups and businesses." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="hero-section">
        {/* Technology Background Icons */}
        <div className="tech-icons-background">
          <i className="fab fa-react tech-icon large"></i>
          <i className="fab fa-node-js tech-icon"></i>
          <i className="fab fa-js-square tech-icon"></i>
          <i className="fab fa-python tech-icon small"></i>
          <i className="fab fa-html5 tech-icon"></i>
          <i className="fab fa-css3-alt tech-icon large"></i>
          <i className="fab fa-aws tech-icon small"></i>
          <i className="fab fa-docker tech-icon"></i>
          <i className="fas fa-database tech-icon"></i>
          <i className="fab fa-git-alt tech-icon small"></i>
          <i className="fas fa-mobile-alt tech-icon large"></i>
          <i className="fas fa-cloud tech-icon"></i>
          <i className="fas fa-code tech-icon small"></i>
          <i className="fab fa-bootstrap tech-icon"></i>
          <i className="fas fa-server tech-icon"></i>
          <i className="fab fa-github tech-icon small"></i>
        </div>
        
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6} className="order-2 order-lg-1">
              <div className="hero-content">
                <div className="hero-badge slide-in-left">
                  <i className="fas fa-star me-2"></i>
                  New Startup | Ready to Innovate
                </div>
                <h1 className="hero-title slide-in-left stagger-2">
                  IT Solutions from a Modern <span className="gradient-text">Software Company</span>
                </h1>
                <p className="hero-description slide-in-left stagger-3">
                  We are <strong>InfiNoraTec</strong>, a passionate <strong>IT company in Ahmedabad</strong> ready to bring your digital vision to life. 
                  With cutting-edge technology, our <strong>software company</strong> creates innovative solutions that make a real difference for businesses in <strong>Gujarat</strong> and beyond.
                </p>
                <div className="hero-buttons slide-in-left stagger-4">
                  <Button 
                    className="btn-hero-primary"
                    onClick={() => navigate('/contact')}
                  >
                    <i className="fas fa-rocket me-2"></i>
                    Let's Start Building
                  </Button>
                  <Button 
                    className="btn-hero-secondary"
                    onClick={() => navigate('/services')}
                  >
                    <i className="fas fa-code me-2"></i>
                    Explore Services
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-1 order-lg-2 mb-4 mb-lg-0">
              <div className="hero-visual slide-in-right">
                <div className="hero-image-container">
                  <div className="hero-shape shape-1"></div>
                  <div className="hero-shape shape-2"></div>
                  <div className="hero-shape shape-3"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <div className="section-header fade-in-up">
                <h2 className="section-title">Why Choose Our Startup?</h2>
                <p className="section-description lead text-muted">
                  Fresh energy, modern approaches, and unlimited passion to bring your ideas to life.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="feature-card hover-lift">
                <div className="feature-icon feature-icon-1">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="feature-title">Fresh Innovation</h3>
                <p className="feature-description">
                  Latest technologies and modern development practices to ensure your project stands out.
                </p>
                <div className="feature-benefits">
                  <span className="benefit-tag">React</span>
                  <span className="benefit-tag">Node.js</span>
                  <span className="benefit-tag">Cloud Ready</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="feature-card hover-lift">
                <div className="feature-icon feature-icon-2">
                  <i className="fas fa-heart"></i>
                </div>
                <h3 className="feature-title">Passionate Team</h3>
                <p className="feature-description">
                  Dedicated developers ready to turn your vision into reality with enthusiasm and expertise.
                </p>
                <div className="feature-benefits">
                  <span className="benefit-tag">Dedicated</span>
                  <span className="benefit-tag">Eager</span>
                  <span className="benefit-tag">Skilled</span>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="feature-card hover-lift">
                <div className="feature-icon feature-icon-3">
                  <i className="fas fa-rocket"></i>
                </div>
                <h3 className="feature-title">Agile & Fast</h3>
                <p className="feature-description">
                  Quick iterations and modern development workflow to bring your product to market faster.
                </p>
                <div className="feature-benefits">
                  <span className="benefit-tag">Agile</span>
                  <span className="benefit-tag">Modern</span>
                  <span className="benefit-tag">Efficient</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding stats-section">
        <Container>
          <Row className="g-4">
            <Col lg={3} md={6}>
              <div className="stat-item text-center">
                <div className="stat-number">6+</div>
                <div className="stat-label">Services Ready</div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="stat-item text-center">
                <div className="stat-number">100%</div>
                <div className="stat-label">Passion & Energy</div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="stat-item text-center">
                <div className="stat-number">Latest</div>
                <div className="stat-label">Technologies</div>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="stat-item text-center">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Ready to Start</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <div className="section-header fade-in-up">
                <h2 className="section-title">Our Services</h2>
                <p className="section-description lead text-muted">
                  We're ready to help you build amazing digital solutions with the latest technologies and fresh ideas.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-4 mb-4">
            <Col lg={4} md={6}>
              <div className="service-preview-card h-100">
                <div className="service-icon">
                  <i className="fas fa-laptop-code"></i>
                </div>
                <h3>Web Development</h3>
                <p>Modern, responsive web applications built with React, Next.js, and Node.js. Ready to create stunning websites that work perfectly on all devices.</p>
                <p className="service-sub-text">From simple landing pages to complex web applications, we've got you covered with the latest technologies.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service-preview-card h-100">
                <div className="service-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3>Mobile Apps</h3>
                <p>Native iOS & Android apps, plus cross-platform solutions with React Native and Flutter. Ready to bring your app idea to life.</p>
                <p className="service-sub-text">Whether you need a simple app or a complex mobile solution, we're excited to help you reach your mobile audience.</p>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className="service-preview-card h-100">
                <div className="service-icon">
                  <i className="fas fa-palette"></i>
                </div>
                <h3>UI/UX Design</h3>
                <p>Beautiful, user-friendly designs that make your users love your product. We focus on creating intuitive experiences.</p>
                <p className="service-sub-text">From wireframes to stunning interfaces, we design with your users in mind to ensure maximum engagement.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6} className="text-center">
              <Button 
                variant="primary" 
                size="lg" 
                className="px-4 py-3"
                onClick={() => navigate('/services')}
              >
                <i className="fas fa-arrow-right me-2"></i>
                Learn More About Our Services
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="section-padding tech-section">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <div className="section-header fade-in-up">
                <h2 className="section-title">Technologies We Work With</h2>
                <p className="section-description lead text-muted">
                  From frontend frameworks to backend technologies, mobile development to databases - we master the full stack to deliver comprehensive solutions.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="g-3">
            {technologies.map((tech, index) => (
              <Col xxl={2} xl={2} lg={3} md={4} sm={4} xs={6} key={index}>
                <div className="tech-item hover-lift">
                  <div className="tech-item-icon" style={{ color: tech.color }}>
                    <i className={tech.icon}></i>
                  </div>
                  <div className="tech-item-name">{tech.name}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="cta-content">
                <h2 className="cta-title">Ready to Start Your Project?</h2>
                <p className="cta-description">
                  We're excited to hear about your ideas and help turn them into reality. Let's build something amazing together!
                </p>
                <div className="cta-buttons">
                  <Button 
                    className="btn-cta-primary me-3"
                    onClick={() => window.location.href = 'tel:+917573072308'}
                  >
                    <i className="fas fa-phone me-2"></i>
                    Get In Touch
                  </Button>
                  <Button 
                    className="btn-cta-secondary"
                    onClick={() => window.location.href = 'mailto:info@infinoratec.com?subject=Project Inquiry - InfiNoraTec&body=Hello InfiNoraTec Team,%0D%0A%0D%0AI am interested in discussing a project with you.%0D%0A%0D%0APlease contact me at your earliest convenience.%0D%0A%0D%0AThank you!'}
                  >
                    <i className="fas fa-envelope me-2"></i>
                    Send Message
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

export default Home;
