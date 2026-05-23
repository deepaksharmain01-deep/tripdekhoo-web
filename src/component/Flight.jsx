import React, { useState } from "react";
import { Form, Row, Col, Button, Container, Modal, Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";

const Flight = () => {
  const [activeTab, setActiveTab] = useState("domestic");

  const [tripType, setTripType] = useState("Round-trip");
  const [nonStop, setNonStop] = useState(false);

  const [leavingFrom, setLeavingFrom] = useState("");
  const [goingTo, setGoingTo] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const [showPassengerModal, setShowPassengerModal] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });

  const [travelClass, setTravelClass] = useState("Economy");
  
  const indianDomesticFlights = [
    "Flights to Goa", "Flights to Mumbai", "Flights to Delhi", "Flights to Bengaluru", "Flights to Shirdi", "Flights to Hyderabad",
    "Flights to Chennai", "Flights to Kolkata", "Flights to Jaipur", "Flights to Pune", "Flights to Tirupati", "Flights to Ahmedabad",
    "Flights to Coimbatore", "Flights to Mangaluru", "Flights to Guwahati", "Flights to Udaipur", "Flights to Dehradun", "Flights to Srinagar",
    "Flights to Chandigarh", "Flights to Port Blair", "Flights to Indore", "Flights to Mysore", "Flights to Bhubaneswar", "Flights to Trivandrum",
    "Flights to Varanasi", "Flights to Kochi", "Flights to Amritsar", "Flights to Nagpur", "Flights to Patna", "Flights to Bagdogra",
    "Flights to Lucknow", "Flights to Raipur", "Flights to Bhopal", "Flights to Madurai", "Flights to Shillong", "Flights to Surat",
    "Flights to Jammu", "Flights to Kolhapur", "Flights to Jodhpur", "Flights to Vijayawada", "Flights to Hubli", "Flights to Ranchi",
    "Flights to Prayagraj", "Flights to Visakhapatnam", "Flights to Kannur", "Flights to Belagavi", "Flights to Jabalpur", "Flights to Gorakhpur",
    "Flights to Tiruchirappalli", "Flights to Rajahmundry", "Flights to Vadodara", "Flights to Tuticorin", "Flights to Agartala", "Flights to Gaya",
    "Flights to Kozhikode", "Flights to Imphal", "Flights to Dibrugarh", "Flights to Silchar", "Flights to Dimapur", "Flights to Jorhat",
    "Flights to Agra", "Flights to Aizawl", "Flights to Aurangabad", "Flights to Leh", "Flights to Kurnool", "Flights to Bareilly",
    "Flights to Rajkot", "Flights to Durgapur", "Flights to Darbhanga", "Flights to Gwalior", "Flights to Kanpur", "Flights to Kadapa",
    "Flights to Pantnagar", "Flights to Deoghar", "Flights to Itanagar", "Flights to Nashik", "Flights to Dharamshala", "Flights to Gondia",
    "Flights to Shivamogga", "Flights to Jaisalmer", "Flights to Khajuraho", "Flights to Salem", "Flights to Jharsuguda", "Flights to Diu",
    "Flights to Ayodhya", "Flights to Jagdalpur", "Flights to Agatti", "Flights to Puducherry"
  ];

  const internationalFlights = [
    "Flights to Boston", "Flights to Chicago", "Flights to Washington", "Flights to Casablanca",
    "Flights to San Francisco", "Flights to Sydney", "Flights to Melbourne", "Flights to Perth",
    "Flights to Brisbane", "Flights to Helsinki", "Flights to Stockholm", "Flights to Oslo",
    "Flights to Canberra", "Flights to Adelaide", "Flights to Gold-Coast", "Flights to France",
    "Flights to Austria", "Flights to Switzerland", "Flights to Italy", "Flights to England",
    "Flights to Portugal", "Flights to Spain", "Flights to Bulgaria", "Flights to USA", "Flights to Australia"
  ];

  const midFlights = [
    "Flights to Bali", "Flights to Jaffna", "Flights to Jakarta", "Flights to Nairobi",
    "Flights to Baku", "Flights to Tbilisi", "Flights to Tashkent", "Flights to Almaty",
    "Flights to Mauritius", "Flights to Langkawi", "Flights to UAE", "Flights to Thailand",
    "Flights to Saudi Arabia", "Flights to Vietnam", "Flights to Indonesia", "Flights to Sri Lanka",
    "Flights to Amsterdam", "Flights to Athens", "Flights to Brussels", "Flights to Budapest",
    "Flights to Copenhagen", "Flights to Dublin", "Flights to Malta", "Flights to Paris"
  ];

  const europeFlights = [
    "Flights to Prague", "Flights to Tel-Aviv", "Flights to Vienna", "Flights to Zurich",
    "Flights to Geneva", "Flights to Nice", "Flights to Lyon", "Flights to Milan", "Flights to Rome",
    "Flights to Birmingham", "Flights to London", "Flights to Porto", "Flights to Basel",
    "Flights to Toulouse", "Flights to Salzburg", "Flights to Venice", "Flights to Manchester",
    "Flights to Lisbon", "Flights to Barcelona", "Flights to Valencia", "Flights to Madrid",
    "Flights to Sofia", "Flights to Varna", "Flights to Edinburgh", "Flights to New-York"
  ];

  const offerCards = [
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Dubai3.jpg", alt: "Dubai", text: "30% OFF\nOn your first booking\nDUBAI" },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Bali3.jpg", alt: "Maldives", text: "PROMO\nSALE" },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/europe7.jpg", alt: "Bike", text: "GET\nOFFER" },
    { img: "https://d19k5x9tl64mcw.cloudfront.net/Japan6.jpg", alt: "Paris", text: "Best\nOFFER" },
  ];

  const travelClasses = [
    "Economy",
    "Economy/premium economy",
    "Premium economy",
    "First/business",
    "Business",
    "First"
  ];

  const getFlightLinks = () => {
    if (activeTab === "domestic") return indianDomesticFlights;
    return [...midFlights, ...europeFlights, ...internationalFlights];
  };

  const updatePassengerCount = (type, increment) => {
    setPassengers(prev => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1))
    }));
  };

  const getTotalPassengers = () => {
    return passengers.adults + passengers.children + passengers.infants;
  };

  const getPassengerSummary = () => {
    const total = getTotalPassengers();
    if (total === 1 && passengers.adults === 1) {
      return `1 adult, ${travelClass}`;
    }

    let summary = [];
    if (passengers.adults > 0) summary.push(`${passengers.adults} adult${passengers.adults > 1 ? 's' : ''}`);
    if (passengers.children > 0) summary.push(`${passengers.children} child${passengers.children > 1 ? 'ren' : ''}`);
    if (passengers.infants > 0) summary.push(`${passengers.infants} infant${passengers.infants > 1 ? 's' : ''}`);

    return `${summary.join(', ')}, ${travelClass}`;
  };
const getPassengerOnlySummary = () => {
  let summary = [];

  if (passengers.adults > 0) {
    summary.push(`${passengers.adults} Adult${passengers.adults > 1 ? "s" : ""}`);
  }

  if (passengers.children > 0) {
    summary.push(`${passengers.children} Child${passengers.children > 1 ? "ren" : ""}`);
  }

  if (passengers.infants > 0) {
    summary.push(`${passengers.infants} Infant${passengers.infants > 1 ? "s" : ""}`);
  }

  return summary.join(", ");
};

  const handleModalClose = () => {
    setShowPassengerModal(false);
  };
  const today = new Date().toISOString().split("T")[0];

  const validateForm = () => {
  const nameRegex = /^[A-Za-z ]{2,50}$/;
  const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cityRegex = /^[A-Za-z ]{2,50}$/;

  if (!tripType) {
    toast.error("Please select trip type");
    return false;
  }

  if (!leavingFrom.trim()) {
    toast.error("Leaving From is required");
    return false;
  }

  if (!cityRegex.test(leavingFrom)) {
    toast.error("Enter valid Leaving From city");
    return false;
  }

  if (!goingTo.trim()) {
    toast.error("Going To is required");
    return false;
  }

  if (!cityRegex.test(goingTo)) {
    toast.error("Enter valid Going To city");
    return false;
  }

  if (leavingFrom.toLowerCase() === goingTo.toLowerCase()) {
    toast.error("Leaving From and Going To cannot be same");
    return false;
  }

  if (!travelDate) {
    toast.error("Please select travel date");
    return false;
  }

  if (!name.trim()) {
    toast.error("Name is required");
    return false;
  }

  if (!nameRegex.test(name)) {
    toast.error("Enter valid name (letters only)");
    return false;
  }

  if (!contact.trim()) {
    toast.error("Contact number is required");
    return false;
  }

  if (!phoneRegex.test(contact)) {
    toast.error("Enter valid 10-digit mobile number");
    return false;
  }

  if (email && !emailRegex.test(email)) {
    toast.error("Enter valid email address");
    return false;
  }

  return true;
};


 const handleSubmit = async (e) => {
    e.preventDefault();

     if (!validateForm()) {
      toast.warning("Please fill all required fields correctly.");
      return;
     };


    const dateObj = new Date(travelDate);

    try {
      const formDataGoogle = new FormData();

     formDataGoogle.append("entry.1240446337", tripType);
formDataGoogle.append("entry.354087961", nonStop ? "Yes" : "No");
      formDataGoogle.append("entry.1769537535", leavingFrom);
      formDataGoogle.append("entry.251437378", goingTo);

      formDataGoogle.append("entry.1325488901_year", dateObj.getFullYear());
      formDataGoogle.append("entry.1325488901_month", dateObj.getMonth() + 1);
      formDataGoogle.append("entry.1325488901_day", dateObj.getDate());

      formDataGoogle.append("entry.1447403728", getPassengerOnlySummary());
      formDataGoogle.append("entry.1550085462", travelClass);
      formDataGoogle.append("entry.1107110426", contact);
      formDataGoogle.append("entry.688474273", email);

      formDataGoogle.append("entry.512069843", name); // if name entry differs, replace ID

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSe6K94EjoZlEfZHBFce5S5Ah6EYz6jwchdrC4RNFAVK3fNqIw/formResponse",
        {
          method: "POST",
          body: formDataGoogle,
          mode: "no-cors",
        }
      );

      toast.success("Flight enquiry submitted successfully!");

      // reset
      setLeavingFrom("");
      setGoingTo("");
      setTravelDate("");
      setName("");
      setContact("");
      setEmail("");
      setPassengers({ adults: 1, children: 0, infants: 0 });
      setTravelClass("Economy");
    } catch (err) {
      console.error(err);
      toast.error("Submission failed");
    }
  };




  return (
    <div style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
      {/* Hero Section */}
      <div
        className="hero-section position-relative"
        style={{
          backgroundImage: "url(https://d19k5x9tl64mcw.cloudfront.net/kashmir10.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100 w-100">
          <h1 className="text-white fw-bold text-center display-5 m-0">
            Fly wherever your heart takes you.
          </h1>
        </div>
      </div>

      {/* Floating Form Box */}
      <div className="container">
        <div
          className="bg-white shadow p-4 rounded position-relative"
          style={{
            marginTop: "-120px",
            zIndex: 10,
          }}
        >
          {/* Flight Type */}
          {/* Flight Type */}
          <div className="mb-3 d-flex flex-wrap gap-3">
        <Form.Check
  inline
  type="radio"
  label="Round-trip"
  name="trip"
  value="Round-trip"
  checked={tripType === "Round-trip"}
  onChange={(e) => setTripType(e.target.value)}
/>

<Form.Check
  inline
  type="radio"
  label="One Way"
  name="trip"
  value="One Way"
  checked={tripType === "One Way"}
  onChange={(e) => setTripType(e.target.value)}
/>

<Form.Check
  inline
  type="radio"
  label="Multi city"
  name="trip"
  value="Multi city"
  checked={tripType === "Multi city"}
  onChange={(e) => setTripType(e.target.value)}
/>
            <Form.Check
  inline
  type="checkbox"
  label="Nonstop only"
  checked={nonStop}
  onChange={(e) => setNonStop(e.target.checked)}
/>

          </div>

          {/* Top Row */}
        <Row className="mb-3">
  <Col md={3}>
    <Form.Control 
      placeholder="Leaving from"
      value={leavingFrom}
      onChange={(e) => setLeavingFrom(e.target.value)}
    />
  </Col>
  <Col md={3}>
    <Form.Control 
      placeholder="Going to"
      value={goingTo}
      onChange={(e) => setGoingTo(e.target.value)}
    />
  </Col>
  <Col md={3}>
    <Form.Control 
      type="date"
      value={travelDate}
      min={today}
      onChange={(e) => setTravelDate(e.target.value)}
    />
  </Col>
  <Col md={3}>
    <div
      className="form-control d-flex align-items-center justify-content-between"
      style={{ cursor: 'pointer' }}
      onClick={() => setShowPassengerModal(true)}
    >
      <span>{getPassengerSummary()}</span>
      <i className="fas fa-chevron-down"></i>
    </div>
  </Col>
</Row>

          {/* Middle Row */}
          <Row>
            <Col md={6}>
              <p>
                We're here to make it easy — fill out the form, and our{" "}
                <span className="fw-bold text-primary">booking advisor</span>{" "}
                will help you book your ticket with the best deal.
              </p>
            </Col>
           <Col md={6}>
  <Form.Control 
    className="mb-2" 
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <Form.Control 
    className="mb-2" 
    placeholder="Contact"
    value={contact}
    onChange={(e) => setContact(e.target.value)}
  />
  <Form.Control 
    className="mb-2" 
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <Button onClick={(e)=>{handleSubmit(e)}} variant="primary" className="w-100">
    Submit Enquiry
  </Button>
</Col>
          </Row>
        </div>
      </div>

      {/* Passenger Selection Modal */}
      <Modal show={showPassengerModal} onHide={handleModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <i className="fas fa-user me-2"></i>
            {getPassengerSummary()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted mb-4">
            Please select the exact number of passengers to view the best prices
          </p>

          {/* Adults */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <div className="fw-bold">Adults</div>
              <small className="text-muted">12+ years old</small>
            </div>
            <div className="d-flex align-items-center gap-3">
              <Button
                variant="outline-secondary"
                size="sm"
                className="rounded-circle"
                onClick={() => updatePassengerCount('adults', false)}
                disabled={passengers.adults <= 1}
              >
                -
              </Button>
              <span className="fw-bold">{passengers.adults}</span>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-circle"
                onClick={() => updatePassengerCount('adults', true)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Children */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <div className="fw-bold">Children</div>
              <small className="text-muted">2-11 years old</small>
            </div>
            <div className="d-flex align-items-center gap-3">
              <Button
                variant="outline-secondary"
                size="sm"
                className="rounded-circle"
                onClick={() => updatePassengerCount('children', false)}
                disabled={passengers.children <= 0}
              >
                -
              </Button>
              <span className="fw-bold">{passengers.children}</span>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-circle"
                onClick={() => updatePassengerCount('children', true)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Infants */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <div className="fw-bold">Infants on lap</div>
              <small className="text-muted">Under 2 years old</small>
            </div>
            <div className="d-flex align-items-center gap-3">
              <Button
                variant="outline-secondary"
                size="sm"
                className="rounded-circle"
                onClick={() => updatePassengerCount('infants', false)}
                disabled={passengers.infants <= 0}
              >
                -
              </Button>
              <span className="fw-bold">{passengers.infants}</span>
              <Button
                variant="outline-primary"
                size="sm"
                className="rounded-circle"
                onClick={() => updatePassengerCount('infants', true)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Travel Class */}
          <div className="mb-4">
            <Form.Select
              value={travelClass}
              onChange={(e) => setTravelClass(e.target.value)}
              className="border-warning"
            >
              {travelClasses.map((cls, idx) => (
                <option key={idx} value={cls}>
                  {cls}
                </option>
              ))}
            </Form.Select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose} className="w-100">
            Done
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Offers Section */}
      <div className="py-5 bg-white">
        <h2 className="text-center fw-bold text-primary mb-5">Exclusive Offers</h2>

        <Container className="mb-5">
          <Row className="justify-content-center g-4">
            {offerCards.map((card, idx) => (
              <Col key={idx} md={3} xs={6}>
                <div
                  className="text-white d-flex align-items-center justify-content-center p-3"
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "250px",
                    transform: "skewY(-5deg)",
                    borderRadius: "10px",
                  }}
                >
                  <h5 className="fw-bold text-center" style={{ whiteSpace: "pre-line" }}>
                    {card.text}
                  </h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Tab Switch */}
        <div className="text-center mb-4">
          <Button
            variant={activeTab === "domestic" ? "primary" : "light"}
            className="me-2"
            onClick={() => setActiveTab("domestic")}
          >
            Domestic Flights
          </Button>
          <Button
            variant={activeTab === "international" ? "primary" : "light"}
            onClick={() => setActiveTab("international")}
          >
            International Flights
          </Button>
        </div>

        {/* Link Grid */}
        <Container>
          <Row>
            {getFlightLinks().map((item, idx) => (
              <Col key={idx} md={3} xs={6} className="mb-2">
                <a href="#" className="d-block text-decoration-underline text-dark">
                  {item}
                </a>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Flight;