import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CustomisedTravellers.css';
import { useNavigate } from 'react-router-dom';

const coTravellers = [
  { title: 'Couples',  slug: 'Couples', image: 'https://d19k5x9tl64mcw.cloudfront.net/Couple.webp' },
  { title: 'Senior Citizen Friendly',  slug: 'family-with-parents', image: 'https://d19k5x9tl64mcw.cloudfront.net/parent.webp' },
  { title: 'Family', slug: 'family-with-kids', image: 'https://d19k5x9tl64mcw.cloudfront.net/Kid.webp' },
  { title: 'Colleagues',  slug: 'Colleagues', image: 'https://d19k5x9tl64mcw.cloudfront.net/office.webp' },
  { title: 'Childhood Friends',slug:'Childhood-Friends',  image: 'https://d19k5x9tl64mcw.cloudfront.net/childhood.webp' },
  { title: 'Best Friends',slug:'Best-Friends', image: 'https://d19k5x9tl64mcw.cloudfront.net/bff.webp' },
];

const CustomisedTravellers = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/cotravellers/${slug}`);
  };
  
  return (
    <Container className="text-center co-traveller-section">
      <h2 className="section-title">
        <span className='main-heading'>Customised Packages For Your Co-Travellers</span>
      </h2>
      <p className="subtitle-cotraveller my-2" style={{fontWeight:"700"}}>People Originated Options</p>
      <p className="description">
        While you’re free to customize your trip on your own, we go a step further — by curating packages that prioritize your travel partner’s comfort and expectations.
        Whether you’re traveling solo, as a couple, with family and kids, parents, office colleagues, college buddies, or childhood friends, we’ve got something special for you.
        Our dedicated team listens to your ideas and tailors the entire experience to match your vision. Because every trip deserves personal attention, and every traveler deserves the perfect plan.
      </p>

    <Row className="mt-4">
  {coTravellers.map((person, index) => (
    <Col md={4} sm={6} xs={6} className="mb-4" key={index} onClick={() => handleClick(person.slug)}>
      <div className="image-wrap">
        <img src={person.image} alt={person.title} className="styled-image" />
        <h5 className="image-title">{person.title}</h5>
      </div>
    </Col>
  ))}
</Row>

    </Container>
  );
};

export default CustomisedTravellers;
