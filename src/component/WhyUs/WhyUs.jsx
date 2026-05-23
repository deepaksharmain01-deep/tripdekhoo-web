import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./whyus.css";

const cardData = [
  {
    title: "All-in-One Travel Booking",
    description: "Flights, hotels, and visa services under one roof for complete convenience.",
  },
  {
    title: "Customized Tour Packages",
    description: "Tailor-made travel experiences based on your interests, budget, and travel style.",
  },
  {
    title: "Best Price Guarantee",
    description: "Competitive pricing and exclusive deals you won’t find elsewhere.",
  },
  {
    title: "Expert Travel Assistance",
    description: "Dedicated travel consultants to help you plan your perfect trip.",
  },
  {
    title: "Easy Visa Processing",
    description: "Hassle-free visa services with documentation support and guidance.",
  },
  {
    title: "Secure Online Booking",
    description: "Safe and encrypted payment gateways for stress-free transactions.",
  },
  {
    title: "24/7 Customer Support",
    description: "Safe and e– Round-the-clock help before, during, and after your journey.",
  },
  {
    title: "Verified Hotels & Trusted Airlines",
    description: "Handpicked accommodations and globally recognized airlines.",
  },
  {
    title: "Group & Corporate Travel Solutions",
    description: "Special packages and logistics for group tours and business trips.",
  },
  {
    title: "Exciting Deals & Discounts",
    description: "Flash sales, seasonal offers, and loyalty rewards.",
  },
  {
    title: "Real Customer Reviews",
    description: "Authentic feedback to help you make informed choices.",
  },
  {
    title: "Fast & User-Friendly Website",
    description: "Smooth browsing experience with a mobile-optimized interface.",
  },
];

const WhyUs = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center heading mb-5">Why choose us?</h2>
      <Row>
        {cardData.map((item, index) => (
          <Col key={index} sm={12} md={6} lg={3} className="mb-4">
            <Card className="custom-card h-100">
              <Card.Body>
                <Card.Title className="card-title">{item.title}</Card.Title>
                <Card.Text className="card-desc">{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyUs;
