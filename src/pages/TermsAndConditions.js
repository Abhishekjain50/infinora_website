import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../styles/Policy.css';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Infinora</title>
        <meta name="description" content="Terms and Conditions for Infinora - Our terms of service and legal agreements." />
      </Helmet>
      
      <Container className="py-5">
        <Row>
          <Col lg={10} xl={8} className="mx-auto">
            <div className="policy-content">
              <h1 className="display-4 mb-4 text-center">Terms and Conditions</h1>
              <p className="text-muted text-center mb-5">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-5">
                <h2 className="h3 mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing and using Infinora's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">2. Definitions</h2>
                <ul>
                  <li><strong>"Company"</strong> (referred to as "we," "us," or "our") refers to Infinora</li>
                  <li><strong>"Service"</strong> refers to the website and services provided by Infinora</li>
                  <li><strong>"User"</strong> or "Client" refers to the individual or entity using our services</li>
                  <li><strong>"Content"</strong> refers to any text, graphics, images, music, software, audio, video, or other materials</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">3. Services Provided</h2>
                <p>Infinora provides web development, mobile app development, and digital solution services including but not limited to:</p>
                <ul>
                  <li>Custom website development</li>
                  <li>Mobile application development</li>
                  <li>E-commerce solutions</li>
                  <li>Digital marketing services</li>
                  <li>Maintenance and support services</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">4. User Responsibilities</h2>
                <h4 className="h5 mb-2">4.1 Account Security</h4>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                
                <h4 className="h5 mb-2 mt-4">4.2 Lawful Use</h4>
                <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">5. Project Terms</h2>
                <h4 className="h5 mb-2">5.1 Project Scope</h4>
                <p>All projects will be governed by a separate project agreement that outlines specific deliverables, timelines, and costs.</p>
                
                <h4 className="h5 mb-2 mt-4">5.2 Payment Terms</h4>
                <ul>
                  <li>Payment schedules will be outlined in individual project agreements</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All payments are non-refundable unless specified in the project agreement</li>
                </ul>
                
                <h4 className="h5 mb-2 mt-4">5.3 Intellectual Property</h4>
                <p>Upon full payment, clients will own the final deliverables. Infinora retains the right to showcase completed work in our portfolio unless otherwise agreed.</p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">6. Warranties and Disclaimers</h2>
                <h4 className="h5 mb-2">6.1 Service Warranty</h4>
                <p>We warrant that our services will be performed in a professional manner consistent with industry standards.</p>
                
                <h4 className="h5 mb-2 mt-4">6.2 Disclaimer</h4>
                <p>
                  Our services are provided "as is" without warranty of any kind. We disclaim all warranties, express or implied, including but not limited to merchantability and fitness for a particular purpose.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">7. Limitation of Liability</h2>
                <p>
                  In no event shall Infinora be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or related to your use of our services.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">8. Termination</h2>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">9. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">10. Governing Law</h2>
                <p>
                  These Terms shall be interpreted and governed by the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify users of any changes by posting the updated Terms on our website. Your continued use of our services constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">12. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-light p-3 rounded">
                  <p className="mb-1"><strong>Email:</strong> legal@infinora.com</p>
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

export default TermsAndConditions;
