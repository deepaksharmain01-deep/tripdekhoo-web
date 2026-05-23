import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import ConnectForm from "../DestinationComman/ConnectForm";


export default function HotelBookingUI() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundImage: `url(https://d19k5x9tl64mcw.cloudfront.net/hotel1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255,255,255,0.7)",
            borderRadius: "12px",
          }}
        ></div>

        <Container className="py-5 text-center position-relative">
          <h2 className="fw-bold mb-2">Book Hotels For Every Mood</h2>
          <p className="text-muted mb-5">
            Curated Escapes for Your Curious Soul!
          </p>

          <Row className="mb-5 g-4 justify-content-center">
            {[
              {
                title: "Mountains Calling",
                image:
                  "https://d19k5x9tl64mcw.cloudfront.net/himachalpradesh10.jpg",
              },
              {
                title: "Beach Vacations",
                image: "https://d19k5x9tl64mcw.cloudfront.net/goa11.jpg",
              },
              {
                title: "Weekend Getaways",
                image: "https://d19k5x9tl64mcw.cloudfront.net/tr14.jpg",
              },
            ].map((item, index) => (
              <Col md={4} key={index}>
                <Card
                  className="border-0 shadow-sm overflow-hidden rounded-4"
                  style={{ cursor: "pointer" }}
                  onClick={openModal}
                >
                  <Card.Img src={item.image} alt={item.title} />
                  <Card.ImgOverlay
                    className="d-flex flex-column justify-content-end p-3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    }}
                  >
                    <h5 className="text-white fw-bold">{item.title}</h5>
                    <small className="text-white">Enquire Now</small>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* 🔥 Modal */}
      <ConnectForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
