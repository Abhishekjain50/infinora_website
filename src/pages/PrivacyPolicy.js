import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../styles/Policy.css';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - InfiNora</title>
        <meta name="description" content="Privacy Policy for InfiNora - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Container className="py-5">
        <Row>
          <Col lg={10} xl={8} className="mx-auto">
            <div className="policy-content">
              <h1 className="display-4 mb-4 text-center">Privacy Policy</h1>
              <p className="text-muted text-center mb-5">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-5">
                <h2 className="h3 mb-3">1. Introduction</h2>
                <p>
                  Welcome to InfiNora ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">2. Information We Collect</h2>
                <h4 className="h5 mb-2">2.1 Personal Information</h4>
                <p>We may collect personal information that you voluntarily provide to us, including:</p>
                <ul>
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company information</li>
                  <li>Project requirements and specifications</li>
                  <li>Communication preferences</li>
                </ul>
                
                <h4 className="h5 mb-2 mt-4">2.2 Automatically Collected Information</h4>
                <p>When you visit our website, we may automatically collect:</p>
                <ul>
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you about projects and services</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To improve our website and services</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">4. Information Sharing and Disclosure</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                <ul>
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist us in operating our website</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">6. Your Rights</h2>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul>
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate information</li>
                  <li>Right to erase your personal data</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">7. Cookies and Tracking Technologies</h2>
                <p>
                  Our website uses cookies and similar tracking technologies to enhance your browsing experience. Please refer to our Cookie Policy for detailed information about how we use cookies.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-light p-3 rounded">
                  <p className="mb-1"><strong>Email:</strong> privacy@infinora.com</p>
                  <p className="mb-1"><strong>Phone:</strong> [Your Phone Number]</p>
                  <p className="mb-0"><strong>Address:</strong> [Your Business Address]</p>
                </div>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
