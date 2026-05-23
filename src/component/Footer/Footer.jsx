import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css"; // Import your CSS file for styling
const Footer = () => {
  const socialLinks = {
    instagram: "https://www.instagram.com/tripdekhoo.travels/",
    twitter: "https://x.com/tripdekhoo",
    facebook: "https://www.facebook.com/people/Tripdekhoocom/61570067206336/",
    youtube: "https://www.youtube.com/@tripdekhoo",
    location: "https://maps.app.goo.gl/F5rvCAM5a6u9Lgu37",
    linkedin: "https://www.linkedin.com/company/tripdekhoo-com/",
  };
  
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+917568624246";
    const message = encodeURIComponent(
      "Hi! I am interested in your tour packages."
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="brand-section">
            <h2 className="brand-title">Tripdekhoo</h2>
            <p className="brand-description">
              Creating unforgettable travel experiences that transform your wanderlust into reality.
            </p>
            <div className="stats">
              <div className="stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Happy Travelers</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Destinations</span>
              </div>
              <div className="stat">
                <span className="stat-number">5★</span>
                <span className="stat-label">Rating</span>
              </div>
            </div>
          </div>

          {/* Links and Contact */}
          <div className="info-section">
            <div className="links-column">
              <h3 className="column-title">Quick Links</h3>
              <ul className="links-list">
                <li><a href="/about">About Us</a></li>
                <li><a href="/privacypolicy">Privacy Policy</a></li>
                <li><a href="/TandC">Terms & Conditions</a></li>      
                <li><a href="/Copyright">Copyright</a></li>
             
              </ul>
            </div>

            <div className="contact-column">
              <h3 className="column-title">Contact Us</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+91 7568624246</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>marketing@tripdekhoo.com</span>
                </div>
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <div>Plot No. 39, Block A, Vatika Vally</div>
                    <div>Near Durgesh Properties and Builders Sukhdeopura Nohara</div>
                    <div>Jaipur</div>
                    <div>Rajasthan - 302022</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="social-column">
              <h3 className="column-title">Follow Us</h3>
              <div className="social-links">
                <button className="social-btn" onClick={() => openLink(socialLinks.instagram)}>
                  <FaInstagram />
                </button>
                <button className="social-btn" onClick={() => openLink(socialLinks.facebook)}>
                  <FaFacebookF />
                </button>
                <button className="social-btn" onClick={() => openLink(socialLinks.twitter)}>
                  <FaXTwitter />
                </button>
                <button className="social-btn" onClick={() => openLink(socialLinks.youtube)}>
                  <FaYoutube />
                </button>
                <button className="social-btn" onClick={() => openLink(socialLinks.linkedin)}>
                  <FaLinkedin />
                </button>
              </div>
              <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
                <FaWhatsapp />
                Start Planning
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;