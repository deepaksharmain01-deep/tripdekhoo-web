import React, { memo, useCallback } from 'react';
import './PopularDestinations.css';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


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
      <h2 className="destination-heading">Popular Destination</h2>
      <p className="sub-heading mb-5">Customise your dream</p>

      {/* Marquee */}
      <div className="popular-marquee">
        <div className="marquee-track">
          {[...destinations, ...destinations].map((dest, index) => (
            <div
              key={index}
              className="destination-card-popular marquee-card"
              onClick={() => handleCardClick(dest.name)}
            >
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                decoding="async"
                className="img-fluid destination-img"
              />
              <div className="destination-name-popular">{dest.name}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default memo(PopularDestination);
