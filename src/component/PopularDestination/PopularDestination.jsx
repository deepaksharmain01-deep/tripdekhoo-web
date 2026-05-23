import React, { memo, useCallback } from 'react';
import './PopularDestinations.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getOptimizedUrl } from '../../utils/imageUtils';


const destinations = [
  { name: 'Himachal', image: 'https://d19k5x9tl64mcw.cloudfront.net/Sampleimg.webp' },
  { name: 'Rajasthan', image: 'https://d19k5x9tl64mcw.cloudfront.net/raj5.jpg' },
  { name: 'Ladakh', image: 'https://d19k5x9tl64mcw.cloudfront.net/ladakh15.jpg' },
  { name: 'Kerala', image: 'https://d19k5x9tl64mcw.cloudfront.net/south10.jpg' },
  { name: 'Kashmir', image: 'https://d19k5x9tl64mcw.cloudfront.net/kashmir7.jpg' },
  { name: 'Europe', image: 'https://d19k5x9tl64mcw.cloudfront.net/europe10.jpg' },
  { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai5.jpg' },
  { name: 'Japan', image: 'https://d19k5x9tl64mcw.cloudfront.net/Japan8.jpg' },
  { name: 'Maldives', image: 'https://d19k5x9tl64mcw.cloudfront.net/Maldives5.jpg' },
  { name: 'Singapore', image: 'https://d19k5x9tl64mcw.cloudfront.net/Singapore1.jpg' },
];

const slidesData = [
  destinations.slice(0, 5),
  destinations.slice(5, 10),
];

const PopularDestination = () => {
  const navigate = useNavigate();

  const handleCardClick = useCallback(
    (destination) => {
      navigate(`/packages/${destination.toLowerCase()}`);
    },
    [navigate]
  );

  return (
    <Container className="text-center popular-destination-container">
      {/* ✅ Heading & Subheading stay unchanged */}
      <h2 className="destination-heading">Popular Destination</h2>
      <p className="sub-heading mb-5">Customise your dream</p>
  
      <div className="testimonial-carousel-wrapper">
        <Carousel
          controls={false}
          indicators={true}
          className="custom-testimonial-carousel"
          interval={3000}
          pause={false}
          fade={false}
          touch={true}
          keyboard={true}
        >
          {slidesData.map((slide, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {slide.map((dest, index) => (
                  <Col
                    key={index}
                    xs={10}
                    sm={6}
                    md={4}
                    lg={2}
                    className="mb-4"
                  >
                    <div
                      className="destination-card-popular"
                      onClick={() => handleCardClick(dest.name)}
                      style={{ cursor: 'pointer', willChange: 'transform' }}
                    >
                      <img
                        src={getOptimizedUrl(dest.image, 300)}
                        alt={dest.name}
                        loading="lazy"
                        decoding="async"
                        className="img-fluid destination-img"
                      />
                      <div className="destination-name-popular">{dest.name}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default memo(PopularDestination);
