import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TourPackages.css';


const IMAGE_PREFIX = "https://d19k5x9tl64mcw.cloudfront.net";

// Define the tour data with dynamic image URLs
const tourData = [
  { id: 1, name: 'Kashi Vishwanath Temple', image: `${IMAGE_PREFIX}/kashi.webp` },
  { id: 2, name: 'Tirupati Balaji', image: `${IMAGE_PREFIX}/tirupati.webp` },
  { id: 3, name: 'Kedarnath Temple', image: `${IMAGE_PREFIX}/kedarnath.webp` },
  { id: 4, name: 'Vaishno Devi Temple', image: `${IMAGE_PREFIX}/vaishnodevi.webp` },
  { id: 5, name: 'Golden Temple', image: `${IMAGE_PREFIX}/goldentemple.webp` },
  { id: 6, name: 'Ram Mandir Ayodhya', image: `${IMAGE_PREFIX}/Rammandir.webp` },
  { id: 7, name: 'Mahakaleshwar Temple', image: `${IMAGE_PREFIX}/mahakaleshwar.webp` },
  { id: 8, name: 'Rameswaram Temple', image: `${IMAGE_PREFIX}/rameshwaram.webp` },
  { id: 9, name: 'Kashi Vishwanath Temple', image: `${IMAGE_PREFIX}/kashi.webp` },
  { id: 10, name: 'Tirupati Balaji', image: `${IMAGE_PREFIX}/tirupati.webp` },
  { id: 11, name: 'Kedarnath Temple', image: `${IMAGE_PREFIX}/kedarnath.webp` },
  { id: 12, name: 'Vaishno Devi Temple', image: `${IMAGE_PREFIX}/vaishnodevi.webp` },
  { id: 13, name: 'Golden Temple', image: `${IMAGE_PREFIX}/goldentemple.webp` },
  { id: 14, name: 'Ram Mandir Ayodhya', image: `${IMAGE_PREFIX}/Rammandir.webp` },
  { id: 15, name: 'Mahakaleshwar Temple', image: `${IMAGE_PREFIX}/mahakaleshwar.webp` },
  { id: 16, name: 'Rameswaram Temple', image: `${IMAGE_PREFIX}/rameshwaram.webp` },
];

const slidesData = [
  tourData.slice(0, 8),
  tourData.slice(8, 16),
];

const ReligiousTourPackages = () => {
  return (
    <Container>
      <div className="text-center mb-3">
        <h1 className="display-4 main-title">Religious Place - Tour Packages</h1>
        <p className="subtitle">Top India's most visited places</p>
      </div>

    <div className="testimonial-carousel-wrapper">
            <Carousel 
               controls={false}
              indicators={true}
              className="custom-testimonial-carousel"
            >
      {slidesData.map((slide, index) => (
        <Carousel.Item key={index}>
          <Row>
            {slide.map((tour) => (
              <Col key={tour.id} xs={12} sm={6} md={3} className="mb-4">
                <div className="tour-card">
                  <div className="torn-image-container">
                    <img src={tour.image} alt={tour.name} className="torn-image" />
                  </div>
                  <h5 className="tour-name text-center mt-2">{tour.name}</h5>
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

export default ReligiousTourPackages;
