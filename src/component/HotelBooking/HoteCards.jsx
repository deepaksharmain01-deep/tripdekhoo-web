import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBuilding, FaWallet, FaStar, FaUmbrellaBeach } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HoteCards.css"; // CSS styles
import TestimonialCarousel from "../Testimonals/TestimonialCarousel";
import TestimonialCard from "../Testimonals/TestimonalCard";

const features = [
  {
    icon: <FaBuilding size={40} />,
    title: "Extensive Hotel Options",
    desc: "Best hotels available for different destinations to offer you the stay of a lifetime.",
  },
  {
    icon: <FaWallet size={40} />,
    title: "Savings on Hotel Booking",
    desc: "Enjoy hotel bookings with the best offers and discounts and make your stay unforgettable.",
  },
  {
    icon: <FaStar size={40} />,
    title: "Hotel Ratings",
    desc: "All our hotels have good ratings on Trip Advisor and are recommended by users.",
  },
  {
    icon: <FaUmbrellaBeach size={40} />,
    title: "Best Price",
    desc: "Get excellent hotels/resorts at the best prices to pamper your desires.",
  },
];

const reviews = [
  {
    stars: 5,
    title: "Easy to book and prices",
    desc: "Easy to book and prices",
    name: "NALIN",
    time: "49 minutes ago",
  },
  {
    stars: 5,
    title: "Good experience",
    desc: "Good experience",
    name: "Prince",
    time: "1 hour ago",
  },
  {
    stars: 5,
    title: "EaseMyTrip is offering the be...",
    desc: "EaseMyTrip is offering the best discount. Booking experience was great.",
    name: "customer",
    time: "1 hour ago",
  },
  {
    stars: 5,
    title: "Good discount.",
    desc: "Good discount.",
    name: "customer",
    time: "1 hour ago",
  },
  {
    stars: 5,
    title: "Good discount man.",
    desc: "Good discount.",
    name: "customer",
    time: "1 hour ago",
  },
];

const HoteCards = () => {
  const [index, setIndex] = useState(0);
  const chunkSize = 4;

  const handleNext = () => {
    if ((index + 1) * chunkSize < reviews.length) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleReviews = reviews.slice(index * chunkSize, index * chunkSize + chunkSize);

  return (
    <Container className="tripdekhoo-container my-5">
      <h2 className="text-center fw-bold mb-5">
        Why Book Hotels With <span className="text-dark">Tripdekhoo.com?</span>
      </h2>

      <Row className="mb-5 text-center justify-content-center">
  {features.map((item, idx) => (
    <Col key={idx} xs={6} md={3} className="mb-4">
      <Card className="feature-card h-100 text-center border rounded-4 shadow-sm">
        <div className="icon-wrapper mx-auto">
          <div className="feature-icon">{item.icon}</div>
        </div>
        <Card.Body>
          <h6 className="fw-bold">{item.title}</h6>
          <p className="text-muted small mb-0">{item.desc}</p>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


    <TestimonialCard/>
    </Container>
  );
};

export default HoteCards;