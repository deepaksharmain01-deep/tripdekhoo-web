import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBus, FaThumbsUp, FaShieldAlt, FaHotel, FaShuttleVan, FaCheck, FaMapMarkerAlt } from "react-icons/fa";

const HotelDetails = ({ destinationName }) => {
  const name = destinationName || "Dubai";
  const hotelName = `Premium Selection Hotel in ${name}`;

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <span className="badge bg-primary me-2">Exclusive Deals</span>
        <span className="badge bg-info text-dark">Newly built in 2024</span>
      </div>

      <h3 className="fw-bold">
        {hotelName} <span className="text-warning">★★★★</span>
      </h3>
      <p className="mb-1">
        Centrally located in {name}, {name} District -{" "}
        <a href="#">SEE MAP</a>
      </p>

      <div className="row mt-4">
        {/* Left Side - Highlights, Facilities, About */}
        <div className="col-md-8">
          {/* Highlights */}
          <div className="border rounded p-3 mb-3">
            <h5 className="fw-bold mb-3">Highlights</h5>
            <div className="d-flex flex-wrap gap-4">
              <div><FaBus className="me-2 text-primary"/>Convenient public transportation</div>
              <div><FaThumbsUp className="me-2 text-success"/>Great for sightseeing</div>
              <div><FaShieldAlt className="me-2 text-success"/>Hygiene Plus Certified</div>
              <div><FaHotel className="me-2 text-info"/>Modern Architecture</div>
              <div><FaShuttleVan className="me-2 text-dark"/>Airport pickup available</div>
            </div>
          </div>

          {/* Facilities */}
          <div className="border rounded p-3 mb-3">
            <h5 className="fw-bold mb-3">Facilities</h5>
            <div className="row">
              <div className="col-6 col-md-4"><FaCheck className="text-success me-2"/>High-speed Wi-Fi</div>
              <div className="col-6 col-md-4"><FaCheck className="text-success me-2"/>Rooftop Pool</div>
              <div className="col-6 col-md-4"><FaCheck className="text-success me-2"/>Free Parking</div>
              <div className="col-6 col-md-4"><FaCheck className="text-success me-2"/>Wellness Spa</div>
              <div className="col-6 col-md-4"><FaCheck className="text-success me-2"/>24-hour Concierge</div>
              <div className="col-6 col-md-4"><FaCheck className="text-success me-2"/>Fitness Center</div>
              <div className="col-6 col-md-4"><FaCheck className="text-success me-2"/>Multi-cuisine Restaurant</div>
              <div className="col-6 col-md-4"><FaCheck className="text-success me-2"/>Business Center</div>
            </div>
          </div>

          {/* About us */}
          <div className="border rounded p-3 mb-3">
            <h5 className="fw-bold mb-2">About us</h5>
            <p>
              {hotelName} offers a memorable stay with a luxury experience
              showcasing panoramic views of {name} and unique wellness options tailored to your comfort.
              <a href="#"> Read more</a>
            </p>
          </div>

          {/* Demand Alert */}
          <div className="alert alert-danger fw-bold">
            This property is in high demand! <br />
            <small>Many travelers have booked for these dates today.</small>
          </div>
        </div>

        {/* Right Side - Reviews & Map */}
        <div className="col-md-4">
          {/* Reviews */}
          <div className="border rounded p-3 mb-3">
            <h6 className="fw-bold">7.7 Very good</h6>
            <p className="mb-1 text-muted">1,862 reviews</p>
            <div className="mb-2">
              <span className="badge bg-success me-2">Cleanliness 8.2</span>
              <span className="badge bg-success me-2">Value for money 8.0</span>
              <span className="badge bg-success me-2">Location 7.9</span>
              <span className="badge bg-success">Facilities 7.8</span>
            </div>
            <blockquote className="blockquote mb-0">
              <p className="small">"Thank you very much for making our stay comfortable."</p>
            </blockquote>
          </div>

          {/* Location */}
          <div className="border rounded p-3">
            <div className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="text-danger me-2"/> 
              <h6 className="mb-0">7.9 Very good</h6>
            </div>
            <p className="small text-muted">Location rating score</p>
            <p><strong>Excellent central location in {name}</strong></p>

            <h6 className="fw-bold">Popular landmarks nearby</h6>
            <ul className="list-unstyled small">
              <li>Main City Square of {name}</li>
              <li>{name} Cultural Heritage Site</li>
              <li>Popular Shopping District</li>
              <li>Local Scenic Park</li>
              <li>Art & History Museum</li>
            </ul>
            <a href="#">See all nearby places</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
