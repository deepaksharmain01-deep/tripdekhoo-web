import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HotelSearchBar = ({ destinationName }) => {
  const [destination, setDestination] = useState(destinationName || "Your Destination");
  const [checkIn, setCheckIn] = useState("2025-08-22");
  const [checkOut, setCheckOut] = useState("2025-08-23");
  const [adults, setAdults] = useState(2);
  const [rooms, setRooms] = useState(1);

  const handleUpdate = () => {
    alert(
      `Searching for ${destination} from ${checkIn} to ${checkOut} for ${adults} adults, ${rooms} room(s)`
    );
  };

  return (
    <div className="bg-primary py-3">
      <div className="container d-flex flex-wrap gap-2">
        {/* Destination input */}
        <input
          type="text"
          className="form-control flex-grow-1"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Where are you going?"
        />

        {/* Check-in */}
        <div className="d-flex flex-column">
          <input
            type="date"
            className="form-control"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <small className="text-white text-center">Check-in</small>
        </div>

        {/* Check-out */}
        <div className="d-flex flex-column">
          <input
            type="date"
            className="form-control"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
          <small className="text-white text-center">Check-out</small>
        </div>

        {/* Guests & rooms */}
        <div className="d-flex flex-column">
          <select
            className="form-select"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n} adult{n > 1 ? "s" : ""}</option>
            ))}
          </select>
          <small className="text-white text-center">Adults</small>
        </div>

        <div className="d-flex flex-column">
          <select
            className="form-select"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n} room{n > 1 ? "s" : ""}</option>
            ))}
          </select>
          <small className="text-white text-center">Rooms</small>
        </div>

        {/* Update button */}
        <button className="btn btn-light fw-bold" onClick={handleUpdate}>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default HotelSearchBar;
