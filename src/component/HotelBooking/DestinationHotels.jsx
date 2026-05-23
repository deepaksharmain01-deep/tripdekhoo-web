import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import DestinationCard from "./DestinationCard";
import SEO from "../Common/SEO";

// ✅ Sidebar Filter Options
const filters = {
  price: ["₹ 1 - ₹ 2,000", "₹ 2,001 - ₹ 4,000", "₹ 4,001 - ₹ 8,000", "Above ₹ 30,000"],
  amenities: ["Free Breakfast", "Wi-Fi", "AC", "Bar", "Free Cancellation"],
  propertyType: ["Guest House", "House", "Aparthotels", "Homes", "Apartments"],
};

const DestinationHotels = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [selectedFilters, setSelectedFilters] = useState({});

  const formattedName = name ? name.charAt(0).toUpperCase() + name.slice(1) : "Destination";

  // ✅ Dynamic Hotel Data
  const hotelsData = {
    "3 Star": [
      {
        id: 1,
        name: `Ibis ${formattedName} Central`,
        price: 2755.95,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai10.jpg",
        address: `Near City Center, ${formattedName}`,
      },
      {
        id: 2,
        name: `CityMax ${formattedName}`,
        price: 2850.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai11.jpg",
        address: `Commercial Area, ${formattedName}`,
      },
      {
        id: 3,
        name: `Premier Inn ${formattedName}`,
        price: 2900.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai15.jpg",
        address: `Main Square, ${formattedName}`,
      },
      {
        id: 4,
        name: `Rove ${formattedName} View`,
        price: 3100.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai16.jpg",
        address: `Downtown ${formattedName}`,
      },
    ],
    "4 Star": [
      {
        id: 5,
        name: `${formattedName} Grand Resort`,
        price: 12000.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai12.jpg",
        address: `Beach Front, ${formattedName}`,
      },
      {
        id: 6,
        name: "Millennium Plaza View",
        price: 8900.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai17.jpg",
        address: `Central District, ${formattedName}`,
      },
      {
        id: 7,
        name: `Hilton Garden Inn ${formattedName}`,
        price: 7200.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai18.jpg",
        address: `Mall Side, ${formattedName}`,
      },
      {
        id: 8,
        name: `Novotel ${formattedName} Center`,
        price: 8100.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai19.jpg",
        address: `Business District, ${formattedName}`,
      },
    ],
    "5 Star": [
      {
        id: 9,
        name: `${formattedName} Royal Palace`,
        price: 9500.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai13.jpg",
        address: `Skyline Towers, ${formattedName}`,
      },
      {
        id: 10,
        name: `The Grand ${formattedName} Icons`,
        price: 60000.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai20.jpg",
        address: `Premium Area, ${formattedName}`,
      },
      {
        id: 11,
        name: `Armani Residency ${formattedName}`,
        price: 32000.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai21.jpg",
        address: `Heritage District, ${formattedName}`,
      },
      {
        id: 12,
        name: `The Ritz-Carlton ${formattedName}`,
        price: 28000.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai22.jpg",
        address: `Elite Enclave, ${formattedName}`,
      },
    ],
    "Apartments and BNBs": [
      {
        id: 13,
        name: `${formattedName} Budget Inn`,
        price: 1500.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai14.jpg",
        address: `Local Market, ${formattedName}`,
      },
      {
        id: 14,
        name: "City Wide Apartments",
        price: 1800.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai23.jpg",
        address: `Residential Zone, ${formattedName}`,
      },
      {
        id: 15,
        name: "Cozy Stay BNB",
        price: 2200.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai24.jpg",
        address: `Green Valley, ${formattedName}`,
      },
      {
        id: 16,
        name: "Modern Downtown Studio",
        price: 2500.0,
        image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai25.jpg",
        address: `Downtown ${formattedName}`,
      },
    ],
  };

  const offerCards = [
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Dubai.jpg", alt: formattedName, text: `30% OFF\nOn your first booking\n${formattedName.toUpperCase()}` },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Bali3.jpg", alt: "Special Offer", text: "PROMO\nSALE" },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/europe3.jpg", alt: "Adventure", text: "GET\nOFFER" },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Japan6.jpg", alt: "Travel", text: "Best\nOFFER" },
  ];

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[category] || [];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];
      return { ...prev, [category]: updatedValues };
    });
  };

  return (
    <Container fluid style={{ paddingTop: 'calc(var(--navbar-height, 80px))' }}>
      <SEO 
        title={`Best Hotels in ${name.charAt(0).toUpperCase() + name.slice(1)}`}
        description={`Find and book the top-rated 3-star, 4-star, and luxury 5-star hotels in ${name}. Explore budget-friendly stays and premium accommodations.`}
        url={`/hotel/destination/${name}`}
      />

      <Row>
        {/* Sidebar Filters */}
        {/* Sidebar Filters */}
        <Col md={3} className="mb-4">
          <div className="border rounded p-3 bg-white shadow-sm">
            {/* 🔹 Filters Section */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-bold mb-0">Filters</h6>
              <Button variant="link" className="p-0 text-danger">
                Clear All
              </Button>
            </div>

            {Object.entries(filters).map(([category, options]) => (
              <div key={category} className="mb-3">
                <h6 className="fw-bold text-muted text-capitalize">{category}</h6>
                {options.map((option, idx) => (
                  <Form.Check
                    key={idx}
                    type="checkbox"
                    label={option}
                    checked={selectedFilters[category]?.includes(option)}
                    onChange={() => handleFilterChange(category, option)}
                  />
                ))}
              </div>
            ))}

            {/* ✅ Offer Banners Section inside box */}

          </div>
          <div className="mt-4">
            <h6 className="fw-bold mb-3">Special Offers</h6>
            <Row className="justify-content-center g-3">
              {offerCards.map((card, idx) => (
                <div
                  key={idx}
                  className="text-white d-flex align-items-center justify-content-center p-3"
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                  }}
                >
                  <h5 className="fw-bold text-center" style={{ whiteSpace: "pre-line" }}>
                    {card.text}
                  </h5>
                </div>
              ))}
            </Row>
          </div>
        </Col>



        {/* Hotel Listings */}
        <Col md={9}>
          <h4 className="fw-bold mb-4">
            Hotels in {name.charAt(0).toUpperCase() + name.slice(1)}
          </h4>

          {Object.entries(hotelsData).map(([category, hotels]) => (
            <div key={category} className="mb-5">
              <h5 className="fw-bold mb-3">{category} Hotels</h5>
              <Row className="g-3">
                {hotels.map((hotel, idx) => (
                  <Col md={6} lg={3} key={idx}>
                    <Card className="h-100 border-0 shadow-sm p-3 rounded-4 text-center" onClick={() => navigate(`/hotel/${name}/${hotel.id}`)}>
                      {/* 🔹 Hotel Image */}
                      <div style={{ borderRadius: "25px", overflow: "hidden" }}>
                        <Card.Img
                          src={hotel.image}
                          style={{
                            height: "220px",
                            objectFit: "cover",
                            borderRadius: "25px",
                          }}
                        />
                      </div>

                      <Card.Body className="mt-3">
                        {/* 🔹 Hotel Name */}
                        <h6 className="fw-bold text-dark">{hotel.name}</h6>

                        {/* 🔹 Price */}
                        <p className="fw-bold mb-2" style={{ color: "#5D3FD3" }}>
                          Starting Price – {hotel.price} INR
                        </p>

                        {/* 🔹 Room Categories */}
                        <small className="d-block text-muted">
                          Room Categories: {hotel.rooms}
                        </small>

                        {/* 🔹 Address */}
                        <small className="d-block text-muted mb-2">
                          Address: {hotel.address}
                        </small>

                        {/* 🔹 Ratings & Map */}
                        <div className="d-flex align-items-center justify-content-center gap-2 mb-3 flex-wrap">
                          {/* Google Icon */}
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                            alt="google"
                            width="50"
                          />
                          <span className="text-warning">★★★★★</span>

                          {/* TripAdvisor Icon */}


                          {/* Map Icon */}
                          <i className="bi bi-geo-alt-fill text-danger"></i>
                          <small className="text-muted">Google Map</small>
                        </div>

                        {/* 🔹 Booking Button */}
                        <Button
                          variant="light"
                          className="w-100 fw-bold rounded-pill border shadow-sm d-flex justify-content-between align-items-center"
                        >
                          Booking Request
                          <i className="bi bi-chevron-down"></i>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}

        </Col>
      </Row>
    </Container>
  );
};

export default DestinationHotels;
