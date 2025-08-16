import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../styles/About.css';
import '../styles/shared.css';
import '../styles/techIcons.css';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer & Founder",
      description: "Passionate full-stack developer with expertise in modern web technologies and a vision for creating impactful digital solutions.",
      skills: ["React", "Node.js", "MongoDB", "UI/UX Design"],
      icon: "👨‍💻"
    },
    {
      name: "Sarah Chen",
      role: "Frontend Specialist",
      description: "Creative frontend developer focused on building beautiful, responsive interfaces that provide exceptional user experiences.",
      skills: ["React", "Vue.js", "SCSS", "Animation"],
      icon: "👩‍🎨"
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Engineer",
      description: "Backend specialist with deep knowledge in server architecture, databases, and API development for scalable applications.",
      skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
      icon: "👨‍⚙️"
    }
  ];

  const coreValues = [
    {
      title: "Innovation & Creativity",
      description: "We constantly explore new technologies and creative approaches to solve complex problems and deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Quality & Excellence",
      description: "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail and quality.",
      icon: "⭐"
    },
    {
      title: "Client Partnership",
      description: "We believe in building lasting partnerships with our clients, understanding their vision, and working together towards shared success.",
      icon: "🤝"
    },
    {
      title: "Continuous Learning",
      description: "In the rapidly evolving tech landscape, we commit to continuous learning and adaptation to stay ahead of industry trends.",
      icon: "📚"
    },
    {
      title: "Transparency & Communication",
      description: "We maintain open communication throughout every project, providing regular updates and ensuring complete transparency in our processes.",
      icon: "💬"
    },
    {
      title: "Impact & Purpose",
      description: "We're driven by the desire to create digital solutions that make a real difference in businesses and people's lives.",
      icon: "🎯"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About InfiNoraTec | Software & IT Company in Ahmedabad, Gujarat</title>
        <meta name="description" content="Learn about InfiNoraTec, a leading software development and IT company based in Ahmedabad, Gujarat. Discover our mission, values, and our journey as a top tech company in India." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="about-hero">
        {/* Technology Background Icons */}
        <div className="tech-icons-background">
          <i className="fas fa-lightbulb tech-icon large"></i>
          <i className="fas fa-users tech-icon"></i>
          <i className="fas fa-rocket tech-icon small"></i>
          <i className="fas fa-target tech-icon"></i>
          <i className="fas fa-heart tech-icon large"></i>
          <i className="fas fa-star tech-icon small"></i>
          <i className="fas fa-trophy tech-icon"></i>
          <i className="fas fa-handshake tech-icon"></i>
          <i className="fas fa-graduation-cap tech-icon small"></i>
          <i className="fas fa-compass tech-icon large"></i>
          <i className="fas fa-puzzle-piece tech-icon"></i>
          <i className="fas fa-cogs tech-icon small"></i>
          <i className="fas fa-chart-line tech-icon"></i>
          <i className="fas fa-globe tech-icon"></i>
          <i className="fas fa-magic tech-icon small"></i>
          <i className="fas fa-shield-alt tech-icon"></i>
        </div>
        
        <Container>
          <div className="about-hero-content">
            <div className="about-hero-badge fade-in-up">
              <i className="fas fa-users me-2"></i>
              About InfiNoraTec
            </div>
            <h1 className="about-hero-title fade-in-up stagger-2">
              Building Tomorrow's <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="about-hero-description fade-in-up stagger-3">
              We are passionate about creating digital experiences that push the boundaries of what's possible and drive meaningful business growth.
            </p>
            <p className="about-hero-sub-description fade-in-up stagger-4">
              Founded with a vision to bridge the gap between innovative technology and real-world business needs, 
              InfiNoraTec represents the perfect blend of fresh energy, technical expertise, and unwavering commitment to excellence.
            </p>
            <div className="hero-actions fade-in-up stagger-5">
              <a 
                href="mailto:info@infinoratec.com?subject=Partnership Inquiry - About InfiNoraTec&body=Hello InfiNoraTec Team,%0D%0A%0D%0AI'm interested in learning more about your services and would like to discuss potential collaboration opportunities.%0D%0A%0D%0APlease let me know your availability for a consultation.%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards"
                className="btn btn-primary-custom btn-lg me-3"
              >
                <i className="fas fa-envelope me-2"></i>
                Get In Touch
              </a>
              <a href="/services" className="btn btn-outline-light btn-lg">
                <i className="fas fa-arrow-right me-2"></i>
                Our Services
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding mission-vision-section">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 mb-4 slide-in-bottom">
                Our <span className="gradient-text">Mission & Vision</span>
              </h2>
              <p className="lead text-muted slide-in-bottom stagger-2">
                Driving the future of digital innovation with purpose and passion.
              </p>
            </Col>
          </Row>
          
          <Row className="g-5 align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="mission-card modern-card p-4 slide-in-left">
                <div className="d-flex align-items-center mb-4">
                  <div className="feature-icon me-3 floating" style={{width: '4rem', height: '4rem', fontSize: '1.5rem'}}>
                    🎯
                  </div>
                  <h3 className="h4 mb-0 fw-bold">Our Mission</h3>
                </div>
                <p className="mb-4" style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                  To empower businesses of all sizes with innovative digital solutions that drive growth, enhance efficiency, 
                  and create exceptional user experiences. We're committed to delivering technology that doesn't just meet 
                  current needs but anticipates future challenges and opportunities.
                </p>
                <p className="mb-0" style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                  At InfiNoraTec, we believe that every business deserves access to world-class technology solutions. 
                  Whether you're a startup looking to establish your digital presence or an established company 
                  seeking to modernize your technology stack, we bring the same level of dedication, expertise, 
                  and passion to every project we undertake.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="vision-card modern-card p-4 slide-in-right">
                <div className="d-flex align-items-center mb-4">
                  <div className="feature-icon me-3 floating" style={{width: '4rem', height: '4rem', fontSize: '1.5rem', animationDelay: '0.5s'}}>
                    🚀
                  </div>
                  <h3 className="h4 mb-0 fw-bold">Our Vision</h3>
                </div>
                <p className="mb-0" style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                  To become a leading force in digital transformation, known for our innovative solutions, 
                  exceptional quality, and genuine care for our clients' success. We envision a future where 
                  technology seamlessly enhances business operations, creates meaningful user experiences, 
                  and drives sustainable growth for organizations worldwide.
                </p>
                <div className="vision-highlights mt-4">
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Innovation-driven solutions</span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Client-centric approach</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    <span>Sustainable digital growth</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="section-padding">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 mb-4 slide-in-bottom">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="lead text-muted mb-5 slide-in-bottom stagger-2">
                These fundamental principles guide every decision we make and every solution we create.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {coreValues.map((value, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className={`h-100 border-0 shadow-sm enhanced-hover slide-in-bottom stagger-${(index % 3) + 1}`}>
                  <Card.Body className="p-4 text-center">
                    <div className="feature-icon mb-3 floating" style={{animationDelay: `${index * 0.5}s`}}>
                      {value.icon}
                    </div>
                    <Card.Title className="h5 mb-3">{value.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {value.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section - Commented Out */}
      {/* 
      <section className="section-padding bg-secondary-custom">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 mb-4 slide-in-bottom">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="lead text-muted mb-4 slide-in-bottom stagger-2">
                The passionate individuals behind InfiNoraTec's innovative solutions.
              </p>
              <p className="text-muted slide-in-bottom stagger-3" style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
                Our team combines diverse expertise, fresh perspectives, and a shared commitment to excellence. 
                Each member brings unique skills and experiences that contribute to our collective ability to 
                deliver exceptional digital solutions. We're not just colleagues – we're a close-knit team 
                united by our passion for technology and dedication to client success.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className={`h-100 border-0 shadow-sm enhanced-hover slide-in-bottom stagger-${index + 1}`}>
                  <Card.Body className="p-4 text-center">
                    <div className="feature-icon mb-3 floating" style={{animationDelay: `${index * 0.5}s`}}>
                      {member.icon}
                    </div>
                    <Card.Title className="h5 mb-2">{member.name}</Card.Title>
                    <Card.Subtitle className="text-primary mb-3">{member.role}</Card.Subtitle>
                    <Card.Text className="text-muted mb-3">
                      {member.description}
                    </Card.Text>
                    <div className="d-flex flex-wrap gap-2 justify-content-center">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="badge bg-light text-dark">{skill}</span>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      */}

      {/* Company Story Section */}
      <section className="section-padding bg-secondary-custom">
        <Container>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="display-5 mb-4 slide-in-bottom">
                Our <span className="gradient-text">Journey</span>
              </h2>
              <p className="lead text-muted mb-4 slide-in-bottom stagger-2">
                Every great company starts with a vision and the determination to make it reality.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="timeline">
                <div className="timeline-item slide-in-left">
                  <div className="timeline-marker">🌱</div>
                  <div className="timeline-content">
                    <h5 className="fw-bold">The Beginning (2024)</h5>
                    <p className="text-muted mb-0">
                      InfiNoraTec was born from a simple yet powerful idea: that exceptional digital solutions 
                      should be accessible to businesses of all sizes. Our founders, passionate about technology 
                      and driven by a desire to make a real impact, came together to create a company that 
                      would bridge the gap between cutting-edge technology and practical business needs.
                    </p>
                  </div>
                </div>

                <div className="timeline-item slide-in-right">
                  <div className="timeline-marker">🚀</div>
                  <div className="timeline-content">
                    <h5 className="fw-bold">Building Excellence (2024-Present)</h5>
                    <p className="text-muted mb-0">
                      From day one, we've been committed to building a culture of excellence, innovation, 
                      and continuous learning. We've invested heavily in mastering the latest technologies, 
                      understanding industry best practices, and developing processes that ensure consistent, 
                      high-quality delivery across all our projects.
                    </p>
                  </div>
                </div>

                <div className="timeline-item slide-in-left">
                  <div className="timeline-marker">🎯</div>
                  <div className="timeline-content">
                    <h5 className="fw-bold">Looking Forward (2025 & Beyond)</h5>
                    <p className="text-muted mb-0">
                      Today, we're focused on expanding our capabilities, building meaningful partnerships, 
                      and continuing to deliver solutions that exceed expectations. Our goal is not just to 
                      be a service provider, but to become a trusted technology partner that businesses can 
                      rely on for their digital transformation journey.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding about-cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="about-cta-content">
                <h2 className="h3 fw-bold mb-4 slide-in-bottom">
                  Ready to Start Your Digital Journey?
                </h2>
                <p className="lead text-muted mb-4 slide-in-bottom stagger-2">
                  Let's discuss how we can help transform your ideas into powerful digital solutions that drive real business growth.
                </p>
                <div className="cta-actions slide-in-bottom stagger-3">
                  <a 
                    href="mailto:info@infinoratec.com?subject=Digital Transformation Consultation&body=Hello InfiNoraTec Team,%0D%0A%0D%0AI'm interested in discussing my digital transformation needs and would like to schedule a consultation.%0D%0A%0D%0AProject Details:%0D%0A- Company/Business: [Please specify]%0D%0A- Current Challenges: [Please describe]%0D%0A- Goals: [Please outline]%0D%0A- Timeline: [Please specify]%0D%0A%0D%0APlease let me know your availability for a detailed discussion.%0D%0A%0D%0AThank you!%0D%0A%0D%0ABest regards"
                    className="btn-get-in-touch me-3 mb-3"
                  >
                    <i className="fas fa-envelope me-2"></i>
                    Get In Touch
                  </a>
                  <a href="/services" className="btn btn-outline-primary btn-lg mb-3">
                    <i className="fas fa-arrow-right me-2"></i>
                    Explore Services
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

export default About;