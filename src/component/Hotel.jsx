import React, { useState } from 'react';
import HotelBookingUI from './HotelBooking/HotelBookingUI';
import HoteCards from './HotelBooking/HoteCards';
import { Col, Container, Row } from 'react-bootstrap';
import Faq from './FAQ/Faq';
import TravelInquiryCard from './TravelInquiry/TravelInquiryCard';

const Hotel = () => {


  const offerCards = [
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Dubai6.jpg", alt: "Special Offer", text: "30% OFF\nOn your first booking\nLIMITED TIME" },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Bali3.jpg", alt: "Promo", text: "PROMO\nSALE" },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/europe3.jpg", alt: "Adventure", text: "GET\nOFFER" },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Japan6.jpg", alt: "Best Deals", text: "Best\nOFFER" },
  ];
  return (
    <div style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
      {/* Header Section with Purple Gradient */}
      {/* Hero Image Section */}
      <div style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
        width: '100%',
        position: 'relative'
      }}>
        {/* Overlay with Tagline */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 className="display-3 fw-bold mb-3">Discover Your Perfect Stay</h1>
          <p className="fs-4">Luxury hotels at unbeatable prices</p>
        </div>
      </div>

      {/* Exclusive Offers Section */}
      <div className="py-5 bg-white">
        <h2 className="text-center fw-bold text-primary mb-5">Exclusive Offers</h2>

        <Container className="mb-5">
          <Row className="justify-content-center g-4">
            {offerCards.map((card, idx) => (
              <Col key={idx} md={3} xs={6}>
                <div
                  className="text-white d-flex align-items-center justify-content-center p-3"
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "250px",
                    transform: "skewY(-5deg)",
                    borderRadius: "10px",
                  }}
                >
                  <h5 className="fw-bold text-center" style={{ whiteSpace: "pre-line" }}>
                    {card.text}
                  </h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="py-5 bg-light">
        <div className="container d-flex justify-content-center">
          <TravelInquiryCard
            defaultServiceType="Hotel"
            title="Plan Your Perfect Stay"
            subtitle="Find the best hotels at the best prices."
            imageUrl="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2000&auto=format&fit=crop"
          />
        </div>
      </div>
      <HotelBookingUI />

      <HoteCards />

      {/* Travel Inquiry Section */}

      <Faq />
    </div>
  );
};

export default Hotel;