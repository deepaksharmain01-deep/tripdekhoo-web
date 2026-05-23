import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUtensils, FaBus, FaSuitcase, FaTicketAlt, FaWalking } from "react-icons/fa";

const ThingsToDo = () => {
  const activities = [
    {
      type: "Attraction Tickets",
      title: "Dubai Frame Ticket",
      rating: "4.6",
      reviews: "1.1T",
      booked: "6T booked",
      img: "https://d3k6380jbp6od4.cloudfront.net/tr25.jpg",
      oldPrice: "1,178",
      newPrice: "995",
      tag: "10 sold in last 24 hours",
    },
    {
      type: "Attraction Tickets",
      title: "Atlantis Dubai",
      rating: "4.0",
      reviews: "19",
      booked: "414 booked",
      img: "https://d3k6380jbp6od4.cloudfront.net/tr25.jpg",
      oldPrice: "2,944",
      newPrice: "1,696",
    },
    {
      type: "Tours",
      title: "Desert Safari Dubai with BBQ Buffet Dinner",
      rating: "4.9",
      reviews: "238",
      booked: "72 booked",
      img: "https://d3k6380jbp6od4.cloudfront.net/tr25.jpg",
      oldPrice: "1,990",
      newPrice: "1,689",
      cancellation: true,
    },
    {
      type: "Tours",
      title: "Abu Dhabi Tour Qasar al Watan Louver Museum",
      rating: "4.9",
      reviews: "320",
      booked: "150 booked",
      img: "https://d3k6380jbp6od4.cloudfront.net/tr25.jpg",
      oldPrice: "21,630",
      newPrice: "21,154",
      cancellation: true,
    },
    {
      type: "Attraction Tickets",
      title: "IMG Worlds of Adventure Ticket in Dubai",
      rating: "4.3",
      reviews: "25",
      booked: "156 booked",
      img: "https://d3k6380jbp6od4.cloudfront.net/tr25.jpg",
      newPrice: "4,689",
    },
  ];

  return (
    <div className="container my-4">
      {/* Header */}
      <div className="d-flex align-items-center mb-3">
        <h4 className="fw-bold me-2">Top things to do in Dubai</h4>
        <span className="badge bg-success">Up to 5% off</span>
      </div>

      {/* Categories */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        <button className="btn btn-light rounded-pill border">All</button>
        <button className="btn btn-light rounded-pill border"><FaWalking className="me-1"/>Tours</button>
        <button className="btn btn-light rounded-pill border"><FaWalking className="me-1"/>Local Experiences</button>
        <button className="btn btn-light rounded-pill border"><FaTicketAlt className="me-1"/>Attraction Tickets</button>
        <button className="btn btn-light rounded-pill border"><FaUtensils className="me-1"/>Food & Drinks</button>
        <button className="btn btn-light rounded-pill border"><FaBus className="me-1"/>Transportation</button>
        <button className="btn btn-light rounded-pill border"><FaSuitcase className="me-1"/>Airport & Luggage Services</button>
      </div>

      {/* Card Slider */}
      <div className="d-flex overflow-auto gap-3 pb-3">
        {/* Popular things card */}
        <div
          className="d-flex align-items-end text-white rounded"
          style={{
            minWidth: "180px",
            height: "300px",
            backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-2 w-100 text-center bg-dark bg-opacity-50 rounded-bottom">
            <p className="mb-1">Popular things to do</p>
            <button className="btn btn-light btn-sm rounded-pill">See all</button>
          </div>
        </div>

        {/* Activity Cards */}
        {activities.map((item, idx) => (
          <div
            key={idx}
            className="border rounded shadow-sm"
            style={{ minWidth: "220px", maxWidth: "220px" }}
          >
            <div
              className="position-relative"
              style={{
                height: "140px",
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {item.tag && (
                <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                  {item.tag}
                </span>
              )}
            </div>
            <div className="p-2">
              <small className="text-muted">{item.type}</small>
              <h6 className="fw-bold mt-1">{item.title}</h6>
              <p className="mb-1">
                ⭐ {item.rating} <small>({item.reviews}) · {item.booked}</small>
              </p>
              {item.cancellation && (
                <span className="badge bg-light text-primary border mb-2">
                  Free cancellation
                </span>
              )}
              <div>
                {item.oldPrice && (
                  <small className="text-muted text-decoration-line-through me-2">
                    Rs. {item.oldPrice}
                  </small>
                )}
                <span className="fw-bold text-danger">Rs. {item.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
