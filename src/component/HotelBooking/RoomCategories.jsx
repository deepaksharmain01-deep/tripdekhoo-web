import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DestinationCard from "./DestinationCard";
import SEO from "../Common/SEO";
import { FaArrowDown, FaArrowCircleRight } from "react-icons/fa";
import HotelDetails from "./HotelDetails";
import ThingsToDo from "./ThingstoDo";
import HotelSearchBar from "./HotelSearchBar";

const RoomCategories = () => {
  const { name, id } = useParams();
  const [activeTab, setActiveTab] = useState(0); // store selected room index

  const rooms = [
    {
      title: "Standard Double Room",
      details: [
        "Room With Free Cancellation",
        "Book with ₹ 0 Payment",
        "No meals included",
        "Free Cancellation till check-in",
        "Double Bed",
        "Breakfast Included",
      ],
      price: "₹ 2,827",
      taxes: "+₹ 636 taxes & fees Per Night",
      images: [
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
      ],
    },
    {
      title: "Standard Twin Room",
      details: [
        "Free Wi-Fi",
        "2 Single Beds",
        "Work Desk",
        "Complimentary Water Bottles",
      ],
      price: "₹ 3,200",
      taxes: "+₹ 700 taxes & fees Per Night",
      images: [
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
      ],
    },
    {
      title: "Family Room",
      details: [
        "Spacious Room for 4",
        "2 Double Beds",
        "Mini Fridge",
        "TV + Sofa Area",
      ],
      price: "₹ 4,500",
      taxes: "+₹ 900 taxes & fees Per Night",
      images: [
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
      ],
    },
    {
      title: "Family Inter-Connecting Rooms",
      details: [
        "2 Interconnected Rooms",
        "Ideal for Families",
        "Private Bathrooms",
        "Breakfast Included",
      ],
      price: "₹ 6,000",
      taxes: "+₹ 1200 taxes & fees Per Night",
      images: [
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
        "https://d19k5x9tl64mcw.cloudfront.net/tr25.jpg",
      ],
    },
  ];

  return (
    <div style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
      <SEO 
        key={`${name}-${id}`}
        title={`Room Categories & Hotel Details in ${name}`}
        description={`View available room types, pricing, and amenities for your stay in ${name}. Book your perfect room with Tripdekhoo.`}
        url={`/hotel/${name}/${id}`}
      />
      <HotelSearchBar destinationName={name} />
      <DestinationCard destinationName={name} />
      <div className="container my-4">
        <h2 className="text-center fw-bold mb-5">Room Categories</h2>

        {rooms.map((room, index) => (
          <div key={index} className="row mb-4 align-items-center">
            {/* Left Section - Title + Details */}
            <div
              className="col-md-5"
              onClick={() => setActiveTab(index)} // set clicked tab
              style={{ cursor: "pointer" }}
            >
              <div
                className="d-flex align-items-center p-3 mb-2"
                style={{
                  backgroundColor: "#CDBEFF",
                  clipPath: "polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)",
                }}
              >
                {activeTab === index && (
                  <FaArrowDown size={28} className="me-2 fw-bold" />
                )}
                <h5 className="fw-bold mb-0">{room.title}</h5>
              </div>

              {activeTab === index && (
                <div className="border p-3">
                  <ul className="mb-3" style={{ listStyle: "disc" }}>
                    {room.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <h5 className="fw-bold mb-0">{room.price}</h5>
                  <small className="text-muted">{room.taxes}</small>

                  <button
                    className="btn w-100 mt-3 fw-bold d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: "#333",
                      color: "white",
                      borderRadius: "50px",
                      padding: "12px",
                      fontSize: "18px",
                    }}
                  >
                    <FaArrowCircleRight size={22} className="me-2" /> BOOK NOW
                  </button>
                </div>
              )}
            </div>

            {/* Right Section - Images */}
            <div className="col-md-7">
              <div className="d-flex flex-wrap gap-2">
                {room.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="room"
                    className="rounded"
                    style={{
                      width: "120px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <HotelDetails destinationName={name} />
      <ThingsToDo />
    </div>
  );
};

export default RoomCategories;
