import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../styles/Policy.css';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - InfiNora</title>
        <meta name="description" content="Cookie Policy for InfiNora - Learn about how we use cookies and tracking technologies." />
      </Helmet>
      
      <Container className="py-5">
        <Row>
          <Col lg={10} xl={8} className="mx-auto">
            <div className="policy-content">
              <h1 className="display-4 mb-4 text-center">Cookie Policy</h1>
              <p className="text-muted text-center mb-5">Last updated: {new Date().toLocaleDateString()}</p>
              
              <section className="mb-5">
                <h2 className="h3 mb-3">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">2. How We Use Cookies</h2>
                <p>
                  InfiNora uses cookies to enhance your browsing experience, analyze website traffic, and for marketing purposes. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a specified period).
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">3. Types of Cookies We Use</h2>
                
                <h4 className="h5 mb-3">3.1 Essential Cookies</h4>
                <p>These cookies are necessary for the website to function properly. They cannot be disabled.</p>
                
                <Table striped bordered hover responsive className="mb-4">
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>session_id</td>
                      <td>Maintains user session state</td>
                      <td>Session</td>
                    </tr>
                    <tr>
                      <td>csrf_token</td>
                      <td>Security protection against cross-site attacks</td>
                      <td>Session</td>
                    </tr>
                  </tbody>
                </Table>

                <h4 className="h5 mb-3">3.2 Analytics Cookies</h4>
                <p>These cookies help us understand how visitors interact with our website.</p>
                
                <Table striped bordered hover responsive className="mb-4">
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_ga</td>
                      <td>Google Analytics - distinguishes users</td>
                      <td>2 years</td>
                    </tr>
                    <tr>
                      <td>_ga_[ID]</td>
                      <td>Google Analytics - persists session state</td>
                      <td>2 years</td>
                    </tr>
                    <tr>
                      <td>_gid</td>
                      <td>Google Analytics - distinguishes users</td>
                      <td>24 hours</td>
                    </tr>
                  </tbody>
                </Table>

                <h4 className="h5 mb-3">3.3 Functional Cookies</h4>
                <p>These cookies enable enhanced functionality and personalization.</p>
                
                <Table striped bordered hover responsive className="mb-4">
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>user_preferences</td>
                      <td>Stores user preferences and settings</td>
                      <td>1 year</td>
                    </tr>
                    <tr>
                      <td>language</td>
                      <td>Remembers selected language</td>
                      <td>1 year</td>
                    </tr>
                  </tbody>
                </Table>

                <h4 className="h5 mb-3">3.4 Marketing Cookies</h4>
                <p>These cookies are used to track visitors across websites for marketing purposes.</p>
                
                <Table striped bordered hover responsive className="mb-4">
                  <thead>
                    <tr>
                      <th>Cookie Name</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>_fbp</td>
                      <td>Facebook Pixel - tracks conversions</td>
                      <td>3 months</td>
                    </tr>
                    <tr>
                      <td>_gcl_au</td>
                      <td>Google AdSense - ad targeting</td>
                      <td>3 months</td>
                    </tr>
                  </tbody>
                </Table>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">4. Third-Party Cookies</h2>
                <p>We may also use third-party services that set cookies on your device:</p>
                <ul>
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Ads:</strong> For advertising and remarketing</li>
                  <li><strong>Facebook Pixel:</strong> For social media advertising</li>
                  <li><strong>LinkedIn Insight Tag:</strong> For professional network advertising</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">5. Managing Cookies</h2>
                <h4 className="h5 mb-2">5.1 Browser Settings</h4>
                <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
                <ul>
                  <li>View what cookies are stored on your device</li>
                  <li>Delete cookies individually or all at once</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block all cookies</li>
                  <li>Get a warning before a cookie is stored</li>
                </ul>

                <h4 className="h5 mb-2 mt-4">5.2 Cookie Consent</h4>
                <p>
                  When you first visit our website, you will see a cookie banner asking for your consent to use non-essential cookies. You can manage your preferences at any time through our cookie settings.
                </p>

                <h4 className="h5 mb-2 mt-4">5.3 Opt-Out Links</h4>
                <ul>
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                  <li><strong>Google Ads:</strong> <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
                  <li><strong>Facebook:</strong> <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">6. Impact of Disabling Cookies</h2>
                <p>
                  If you disable cookies, some features of our website may not function properly. Essential cookies cannot be disabled as they are necessary for the website to work.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">7. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">8. Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy;
