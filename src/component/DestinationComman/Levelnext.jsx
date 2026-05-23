// DubaiPackages.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Details.css';
import allPackagesData from '../../../packages.json';
import Itinerary from './Itinerary';
import TestimonialCard from '../Testimonals/TestimonalCard';
import SEO from '../Common/SEO';

const Levelnext = () => {
    
  const { destination ,subdestination} = useParams();
  const navigate = useNavigate();

  // Synchronous lookup for immediate SEO updates
  const matchedDestination = allPackagesData.destinations.find(
    (dest) => dest.destination.toLowerCase() === destination.toLowerCase()
  );

  const packageObj = matchedDestination?.packages.find(
    (pkg) => pkg.destination.toLowerCase() === subdestination.toLowerCase()
  );

  const finalObj = packageObj?.packages || [];


  const handleWhatsAppClick = () => {
    const phoneNumber = '+917568624246';
    const currentUrl = window.location.href;
    const message = encodeURIComponent(
      `Hi! I am interested in your tour packages. Here's the link: ${currentUrl}`
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="text-center" style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
      <SEO 
        key={`${destination}-${subdestination}`}
        title={packageObj?.destination || subdestination}
        description={packageObj?.name}
        image={packageObj?.image}
        url={`/packages/${destination}/${subdestination}`}
      />
      {packageObj && matchedDestination && (
        <div id="destinationCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#destinationCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="image-container">
                <img className="w-100" src={packageObj.image} alt={packageObj.destination} />
                <div className="details-text-overlaps">
                  <h3>{packageObj?.name}</h3>
                  <h1>{packageObj?.destination.charAt(0).toUpperCase() + packageObj?.destination.slice(1).replace(/([A-Z])/g, ' $1').trim()}</h1>
                               <div
    className="quote-badge"
    onClick={() => {
      const phoneNumber = '+917568624246'; // Replace with your WhatsApp number
      const message = encodeURIComponent(`Hi! I am interested in your tour ${packageObj?.destination} packages.`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }}
    style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
  >
    Get a Quote
  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="image-container">
                <img className="w-100" src={packageObj.image2} alt={packageObj.destination} />
                <div className="details-text-overlaps">
                  <h3>{packageObj?.name}</h3>
                  <h1>{packageObj?.destination.charAt(0).toUpperCase() + packageObj?.destination.slice(1).replace(/([A-Z])/g, ' $1').trim()}</h1>
                                        <div
    className="quote-badge"
    onClick={() => {
      const phoneNumber = '+917568624246'; // Replace with your WhatsApp number
      const message = encodeURIComponent(`Hi! I am interested in your tour ${packageObj?.destination} packages.`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }}
    style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
  >
    Get a Quote
  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="image-container">
                <img className="w-100" src={packageObj.image3} alt={packageObj.destination} />
                <div className="details-text-overlaps">
                  <h3>{packageObj?.name}</h3>
                  <h1>{packageObj?.destination.charAt(0).toUpperCase() + packageObj?.destination.slice(1).replace(/([A-Z])/g, ' $1').trim()}</h1>
                                         <div
    className="quote-badge"
    onClick={() => {
      const phoneNumber = '+917568624246'; // Replace with your WhatsApp number
      const message = encodeURIComponent(`Hi! I am interested in your tour ${packageObj?.destination} packages.`);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }}
    style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
  >
    Get a Quote
  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#destinationCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#destinationCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}

      <Container>
        <h1 className="heading mt-5">{matchedDestination?.tagline || "Your Dream Vacation, Wrapped & Ready"}</h1>
        <h4 className="subheading" style={{ fontSize: "24px" }}>{matchedDestination?.slogan || "Best price with all inclusions"}</h4>
        <p className="description">
          We’ve proudly served over 1 lakh happy customers with our {destination.charAt(0).toUpperCase() + destination.slice(1).replace(/([A-Z])/g, ' $1').trim()} tour packages – and their satisfaction speaks for itself.
          {matchedDestination?.about || "At Tripdekhoo, we prioritize exceptional customer service and seamless experiences. From hotels, visas, and flights to sightseeing and end-to-end transfers, we take care of everything so you can travel stress-free."}
        </p>

        <Row className="justify-content-center">
          {finalObj.map((pkg, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <div className="package-card">
                <div className="image-wrapper">
                  <img src={pkg.image} alt={pkg.title} className="package-image" />
                </div>
                <h5 className="package-title mt-3">{pkg.title}</h5>
                <p className="package-subtitle">{pkg.name}</p>
                <Button
                  className="details-button mt-2"
                  style={{ background: "linear-gradient(90deg, #8c52ff, #5a2ea6)" }}
                  onClick={() => navigate(`/packages/${destination}/${packageObj?.destination}/${pkg.id}`)}
                >
                  Explore Itinerary →
                </Button>
                <h5 className="package-price mt-2" style={{ fontSize: "16px" }}>
                  {Number.isFinite(pkg.price) && `Rs ${new Intl.NumberFormat('en-IN').format(pkg.price)}/-`}
                </h5>
              </div>
            </Col>
          ))}
        </Row>

        {packageObj && <Itinerary packageObj={packageObj} />}
      </Container>
    </div>
  );
};

export default Levelnext;
