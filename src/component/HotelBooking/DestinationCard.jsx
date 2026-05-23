import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HotelSearchBar from "./HotelSearchBar";

const DestinationCard = ({ destinationName }) => {
  const [activeTab, setActiveTab] = useState("Overview"); // default tab
  const name = destinationName || "Dubai";
  const hotelName = `Premium Selection Hotel in ${name}`;

  // Define content for each tab
  const tabContent = {
    Overview: (
      <p>
        {hotelName} offers a comfortable stay in {name} with modern
        amenities, spacious rooms, and close proximity to top attractions.
      </p>
    ),
    Rooms: (
      <ul>
        <li>Standard Double Room</li>
        <li>Standard Twin Room</li>
        <li>Family Room</li>
        <li>Family Inter-Connecting Rooms</li>
      </ul>
    ),
    "Trip recommendations": (
      <p>
        Ideal for families, couples, and business travelers. Explore the vibrant 
        culture and landmark attractions of {name} during your stay.
      </p>
    ),
    Facilities: (
      <ul>
        <li>Swimming Pool</li>
        <li>Fitness Center</li>
        <li>Restaurant & Bar</li>
        <li>24/7 Front Desk</li>
      </ul>
    ),
    Reviews: (
      <p>
        ⭐⭐⭐⭐ 4.2/5 — Guests love the hospitality and central location of the
        hotel.
      </p>
    ),
    Location: <p>Located in the heart of {name}, conveniently accessible from the main transport hubs.</p>,
    Policies: (
      <ul>
        <li>Check-in: 2:00 PM</li>
        <li>Check-out: 12:00 PM</li>
        <li>Free cancellation up to 24 hours before check-in</li>
      </ul>
    ),
  };

  return (
    <div className="container my-4">
      {/* Breadcrumb */}
  
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/hotel">Hotels</a></li>
          <li className="breadcrumb-item"><a href={`/hotel/destination/${name}`}>{name} Hotels</a></li>
          <li className="breadcrumb-item active" aria-current="page">Book {hotelName}</li>
        </ol>
      </nav>

      {/* Images Section */}
      <div className="row g-2">
        <div className="col-md-6">
          <img
            src="https://d3k6380jbp6od4.cloudfront.net/tr25.jpg"
            alt={`${hotelName} Main`}
            className="img-fluid rounded w-100 h-100"
          />
        </div>
        <div className="col-md-6">
          <div className="row g-2">
            <div className="col-6">
              <img src="https://d3k6380jbp6od4.cloudfront.net/tr25.jpg" alt="Room View" className="img-fluid rounded" />
            </div>
            <div className="col-6">
              <img src="https://d3k6380jbp6od4.cloudfront.net/tr25.jpg" alt="Hotel Lobby" className="img-fluid rounded" />
            </div>
            <div className="col-6">
              <img src="https://d3k6380jbp6od4.cloudfront.net/tr25.jpg" alt="Dining Area" className="img-fluid rounded" />
            </div>
            <div className="col-6">
              <img src="https://d3k6380jbp6od4.cloudfront.net/tr25.jpg" alt="Swimming Pool" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <ul className="nav nav-tabs my-3">
        {Object.keys(tabContent).map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="p-3 border rounded bg-light">
        {tabContent[activeTab]}
      </div>

      {/* Price & CTA */}
      <div className="d-flex justify-content-between align-items-center p-3 border rounded mt-3">
        <div>
          <span className="text-muted">from </span>
          <span className="text-danger fw-bold">Rs. 2,169</span>
        </div>
        <button className="btn btn-primary" onClick={() => alert(`Booking flow for ${hotelName} in ${name}`)}>VIEW THIS DEAL</button>
      </div>
    </div>
  );
};

export default DestinationCard;
