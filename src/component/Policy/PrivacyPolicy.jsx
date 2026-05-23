import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <>
      <div className="image-container">
        <img
          className="w-100"
          src="https://d19k5x9tl64mcw.cloudfront.net/spiti6.jpg"
        />
        <div className="details-text-overlap">
          <h1>Privacy Policy</h1>
          <div>Last Updated: May 15, 2025</div>
          <div>Welcome to tripdekhoo.com</div>
        </div>
      </div>
      <Container className=" privacy-policy">
        {/* Main Heading */}

        <Row className="mb-4 mt-5">
          <Col>
            <h1 className="main-heading">Privacy Policy</h1>

          </Col>
        </Row>

        {/* Intro */}
        <Row className="mb-4">
          <Col>
            <p className="body-text">
              This Privacy Policy outlines how <strong>Tripdekhoo</strong> ("Tripdekhoo," "we," "our," or "us") collects,
              uses, stores, shares, and protects the personal information of users who interact with our website,{' '}
              <a
                href="https://www.tripdekhoo.com"
                className="fw-bold text-primary text-decoration-underline"
              >
                www.tripdekhoo.com
              </a>{' '}
              (the "Website").
            </p>
            <p className="body-text">
              We are committed to ensuring your privacy and protecting the data you provide while planning, booking, or
              enjoying your travel experience through Tripdekhoo.com.
            </p>
          </Col>
        </Row>

        {/* Section 1 */}
        <section className="mb-5">
          <h2 className="section-heading">1. Our Commitment to Travel-Specific Privacy</h2>
          <p className="body-text">
            As a travel platform, we understand the importance of trust and confidentiality in planning trips and
            vacations. Whether you're booking a solo backpacking trip, a honeymoon getaway, or a group tour, we ensure
            your personal and travel-related data is handled securely and only used to enhance your experience.
          </p>
          <p className="body-text">
            We comply with the applicable privacy and data protection laws of India and take a proactive stance on user
            safety and privacy across all stages of your travel journey.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-5">
          <h2 className="section-heading">2. Information We Collect</h2>
          <p className="body-text">When you engage with Tripdekhoo.com, we may collect:</p>

          <h3 className="sub-heading">Personal Information</h3>
          <ul className="list-unstyled body-text">
            <li>● Full name, email address, mobile number</li>
            <li>● Gender, age, nationality (for travel permits or regulations)</li>
            <li>● Billing address and payment method (processed securely via third-party payment gateways)</li>
          </ul>

          <h3 className="sub-heading">Travel-Specific Details</h3>
          <ul className="list-unstyled body-text">
            <li>● Destination preferences, travel history, travel group size</li>
            <li>● Passport or ID number (only when required for specific bookings or permits)</li>
            <li>● Emergency contact information (optional, for guided tours or adventure activities)</li>
          </ul>

          <h3 className="sub-heading">Technical and Usage Data</h3>
          <ul className="list-unstyled body-text">
            <li>● Device type, IP address, browser type, location data (if permitted)</li>
            <li>● Usage behavior (pages viewed, time spent, clicks) to improve our services</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-5">
          <h2 className="section-heading">3. How We Use Your Information</h2>
          <p className="body-text">We use your data to:</p>
          <ul className="list-unstyled body-text">
            <li>● Facilitate safe and smooth travel bookings</li>
            <li>● Customize travel recommendations and itineraries</li>
            <li>● Communicate confirmations, updates, and offers</li>
            <li>● Handle customer service inquiries and support</li>
            <li>● Ensure compliance with local travel regulations and safety protocols</li>
            <li>● Conduct internal analytics to improve our website and services</li>
          </ul>
          <p className="body-text">
            We do <strong>not</strong> sell your personal data. Data is only shared with trusted travel service providers
            (e.g., hotels, local guides, activity operators) when necessary to complete your booking.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-5">
          <h2 className="section-heading">4. Cookies and Tracking Technologies</h2>
          <p className="body-text">Cookies help us personalize your browsing experience. We may use:</p>
          <ul className="list-unstyled body-text">
            <li>● <strong>Session cookies</strong> for booking sessions</li>
            <li>● <strong>Analytics cookies</strong> for site performance and behavior tracking</li>
            <li>● <strong>Marketing cookies</strong> for relevant promotions (with your consent)</li>
          </ul>
          <p className="body-text">You can modify cookie settings in your browser at any time.</p>
        </section>

        {/* Section 5 */}
        <section className="mb-5">
          <h2 className="section-heading">5. Safe and Secure Transactions</h2>
          <p className="body-text">
            All payment transactions are securely processed through PCI-DSS compliant third-party gateways. We do{' '}
            <strong>not</strong> store your credit/debit card details on our servers. SSL encryption is used site-wide to
            safeguard your data during transmission.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-5">
          <h2 className="section-heading">6. Communications and Notifications</h2>
          <p className="body-text">By signing up or booking with Tripdekhoo.com, you consent to receive:</p>
          <ul className="list-unstyled body-text">
            <li>● Booking confirmations and trip reminders</li>
            <li>● Service updates and safety advisories</li>
            <li>● Promotional travel deals (you can opt out anytime)</li>
          </ul>
          <p className="body-text">
            You can unsubscribe from promotional emails via the link at the bottom of any email, or by contacting us at{' '}
            <a href="mailto:support@tripdekhoo.com">support@tripdekhoo.com</a>
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-5">
          <h2 className="section-heading">7. Social Media and External Links</h2>
          <p className="body-text">
            We maintain a presence on social platforms to interact with our community. However, our Privacy Policy does
            not cover interactions on third-party platforms like Facebook, Instagram, or WhatsApp. Always review their
            privacy terms separately.
          </p>
          <p className="body-text">
            Our website may also contain links to external travel blogs, tourism boards, or affiliate partners. We are
            not responsible for their data handling practices.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-5">
          <h2 className="section-heading">8. Child Safety and Travel</h2>
          <p className="body-text">
            Tripdekhoo.com is not intended for individuals under the age of 13 without parental consent. When collecting
            information for family or group travel, we require the adult booking to provide consent and relevant data
            responsibly.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-5">
          <h2 className="section-heading">9. Data Storage and Retention</h2>
          <p className="body-text">
            Your data is stored on secure servers located in India or in regions with adequate data protection laws. We
            retain your information only as long as necessary to fulfill travel-related services and meet legal
            obligations.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-5">
          <h2 className="section-heading">10. Your Rights</h2>
          <p className="body-text">You may request to:</p>
          <ul className="list-unstyled body-text">
            <li>● Access or correct your personal information</li>
            <li>● Delete your data from our system</li>
            <li>● Withdraw consent or limit certain data uses</li>
          </ul>
          <p className="body-text">
            Send requests to: <a href="mailto:support@tripdekhoo.com">support@tripdekhoo.com</a>
          </p>
          <p className="body-text">We aim to respond within 24-48 working hours.</p>
        </section>

        {/* Section 11 */}
        <section className="mb-5">
          <h2 className="section-heading">11. Policy Updates</h2>
          <p className="body-text">
            We may revise this Privacy Policy periodically. Any changes will be posted on this page with the updated
            date. Your continued use of Tripdekhoo.com signifies your acceptance of the revised terms.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-5">
          <h2 className="section-heading">12. Contact Information</h2>
          <h4 className="sub-heading">Tripdekhoo Travels</h4>
          <p className="body-text">📧 Email: <a href="mailto:support@tripdekhoo.com">support@tripdekhoo.com</a></p>
          <p className="body-text">📍 Address:
            Plot No. 39, Block A, Vatika Vally
            Near Durgesh Properties and Builders
            Sukhdeopura Nohara
            Jaipur, Rajasthan – 302022
            India</p>
          <p className="body-text">🌐 Website: <a href="https://www.tripdekhoo.com">https://www.tripdekhoo.com</a></p>
        </section>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
