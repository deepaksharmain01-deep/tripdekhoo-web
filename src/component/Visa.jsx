import React, { useState } from 'react';
import VisaDetail from './VisaDetail';
import TravelInquiryCard from './TravelInquiry/TravelInquiryCard';

const Visa = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  // Country data organized by visa type
  // const visaData = {
  //   visaFree: {
  //     title: "Visa Free Countries",
  //     subtitle: "Enjoy visa-free travel - no visa required for Indian passport holders",
  //     countries: ['Indonesia', 'Maldives', 'Mauritius', 'Sri Lanka', 'Seychelles'],
  //     bgClass: ""
  //   },
  //   visaOnArrival: {
  //     title: "Visa On Arrival",
  //     subtitle: "Get your visa upon arrival - smooth and hassle-free process",
  //     countries: ['Malaysia', 'Thailand', 'Egypt', 'Vietnam', 'Qatar'],
  //     bgClass: "bg-light"
  //   },
  //   eVisa: {
  //     title: "E-Visa",
  //     subtitle: "Apply online for electronic visas - we make the process hassle-free",
  //     countries: ['Turkey', 'Dubai', 'Azerbaijan', 'Japan', 'Singapore', 'Australia', 'Canada', 'UK', 'South Korea', 'New Zealand'],
  //     bgClass: ""
  //   }
  // };

  // Generate country flag placeholder
  const getCountryImage = (country) => {
    const colors = [
      ['#ff69b4', '#ff1493'],
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#4facfe', '#00f2fe'],
      ['#43e97b', '#38f9d7']
    ];
    const colorSet = colors[country.length % colors.length];

    return `https://d19k5x9tl64mcw.cloudfront.net/ne12.jpg`;
  };

  const CountryCard = ({ country, onClick }) => (
    <div className="col-6 col-md-4 col-lg-2 mb-4">
      <div
        className="card border-0 h-100 shadow-sm"
        style={{
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: 'translateY(0)'
        }}
        onClick={() => onClick(country)}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        <div className="position-relative overflow-hidden">
          <img
            src={getCountryImage(country)}
            alt={country}
            className="card-img-top"
            style={{
              height: '100px',
              objectFit: 'cover'
            }}
          />
          <div className="position-absolute top-0 end-0 p-2">
            <span className="badge bg-primary bg-opacity-90">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
          </div>
        </div>
        <div className="card-body p-3 text-center">
          <h6 className="card-title mb-0 fw-bold text-dark">{country}</h6>
          <small className="text-muted">Click for details</small>
        </div>
      </div>
    </div>
  );

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setShowDetail(true);
    console.log(`Viewing ${country} visa details`);
  };

  const handleBackToCountries = () => {
    setSelectedCountry(null);
    setShowDetail(false);
  };

  const ProcessStep = ({ stepNumber, title, description, icon, bgGradient }) => (
    <div className="col-6 col-md-3 mb-4">
      <div className="card text-center border-0 h-100 shadow-sm">
        <div className="card-body p-4">
          <div className="mb-3">
            <div
              className="mx-auto rounded position-relative"
              style={{
                width: '100px',
                height: '70px',
                background: bgGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {icon}
              <span
                className="position-absolute top-0 end-0 badge bg-primary rounded-pill"
                style={{ fontSize: '10px', transform: 'translate(25%, -25%)' }}
              >
                STEP {stepNumber}
              </span>
            </div>
          </div>
          <h6 className="fw-bold mb-2">{title}</h6>
          <p className="text-muted small">{description}</p>
        </div>
      </div>
    </div>
  );

  const FeatureCard = ({ title, icon, bgGradient }) => (
    <div className="col-6 col-md-3 mb-4">
      <div className="card text-center border-0 h-100 shadow-sm">
        <div className="card-body p-4">
          <div className="mb-3">
            <div
              className="mx-auto rounded-circle"
              style={{
                width: '80px',
                height: '80px',
                background: bgGradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {icon}
            </div>
          </div>
          <h6 className="fw-bold mb-2">{title}</h6>
        </div>
      </div>
    </div>
  );

  const FAQItem = ({ id, question, answer }) => (
    <div className="accordion-item mb-3 border-0 shadow-sm">
      <h2 className="accordion-header">
        <button
          className="accordion-button fw-bold collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
        // style={{ backgroundColor: 'transparent' }}
        >
          {question}
        </button>
      </h2>
      <div id={id} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
        <div className="accordion-body text-muted">
          {answer}
        </div>
      </div>
    </div>
  );

  if (showDetail && selectedCountry) {
    return <VisaDetail country={selectedCountry} onBack={handleBackToCountries} />;
  }

  return (
    <div className="container-fluid" style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-12 p-0">
          <div
            className="position-relative w-100 d-flex align-items-center justify-content-center"
            style={{
              height: '500px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundImage: `url(https://d19k5x9tl64mcw.cloudfront.net/VISA1.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',

            }}
          >
            <div className="text-center text-white">
              <h1 className="display-4 fw-bold mb-3">Visa Information</h1>
              <p className="lead">Explore visa-free destinations and easy visa options</p>
            </div>
          </div>
        </div>
      </div>

      {/* Country Sections */}
      {/* {Object.entries(visaData).map(([key, section]) => (
        <div key={key} className={`py-5 ${section.bgClass}`}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold text-dark mb-3">{section.title}</h2>
              <p className="text-muted">{section.subtitle}</p>
            </div>
            <div className="row justify-content-center">
              {section.countries.map((country, index) => (
                <CountryCard key={`${key}-${index}`} country={country} onClick={handleCountryClick} />
              ))}
            </div>
          </div>
        </div>
      ))} */}

      {/* How It Works Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-muted mb-2">How It Works?</p>
            <h2 className="fw-bold text-dark mb-4">Get Your Visa in 4 Easy Steps</h2>
          </div>
          <div className="row justify-content-center">
            <ProcessStep
              stepNumber={1}
              title="Apply Online"
              description="Visit our platform and fill in the required details to meet the criteria."
              bgGradient="linear-gradient(135deg, #e3f2fd, #bbdefb)"
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V8L14 2Z" fill="#1976d2" />
                  <path d="M14 2V8H19" fill="#42a5f5" />
                </svg>
              }
            />
            <ProcessStep
              stepNumber={2}
              title="Get An Appointment"
              description="Receive an appointment schedule and meet our professionals for expert guidance."
              bgGradient="linear-gradient(135deg, #f3e5f5, #e1bee7)"
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="#7b1fa2" />
                  <path d="M12 7L17 12L12 17L7 12L12 7Z" fill="#ab47bc" />
                </svg>
              }
            />
            <ProcessStep
              stepNumber={3}
              title="Submit Documents"
              description="Send us all relevant documents to verify and process your visa application."
              bgGradient="linear-gradient(135deg, #e8f5e8, #c8e6c9)"
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1H4C2.9 1 2 1.9 2 3V17C2 18.1 2.9 19 4 19H16C17.1 19 18 18.1 18 17V3C18 1.9 17.1 1 16 1Z" fill="#388e3c" />
                  <path d="M22 5V21C22 22.1 21.1 23 20 23H6V21H20V5H22Z" fill="#66bb6a" />
                </svg>
              }
            />
            <ProcessStep
              stepNumber={4}
              title="Receive Your Visa"
              description="Once approved, receive your visa instantly through our hassle-free procedure."
              bgGradient="linear-gradient(135deg, #fff3e0, #ffcc02)"
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#f57c00" />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="d-flex justify-content-center">
          <TravelInquiryCard
            defaultServiceType="Visa"
            title="Need Visa Assistance?"
            subtitle="Get expert guidance for your visa application process."
          />
        </div>
      </div>
      {/* What We're Known For Section */}
      <div className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-muted mb-2">We Are Different</p>
            <h2 className="fw-bold text-dark mb-4">What Are We Known For?</h2>
          </div>
          <div className="row justify-content-center">
            <FeatureCard
              title="Special Visa Services for Diverse Countries"
              bgGradient="linear-gradient(135deg, #e3f2fd, #1976d2)"
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              }
            />
            <FeatureCard
              title="Years of Unrivaled Expertise in Visa Processing"
              bgGradient="linear-gradient(135deg, #f3e5f5, #7b1fa2)"
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
                </svg>
              }
            />
            <FeatureCard
              title="Dedicated End-to-End Visa Assistance"
              bgGradient="linear-gradient(135deg, #fff3e0, #f57c00)"
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 7C14.76 7 17 9.24 17 12V16H15V22H9V16H7V12C7 9.24 9.24 7 12 7Z" />
                </svg>
              }
            />
            <FeatureCard
              title="Optimal Level of Safety & Confidentiality"
              bgGradient="linear-gradient(135deg, #e8f5e8, #388e3c)"
              icon={
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                </svg>
              }
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <p className="text-muted mb-2">Frequently</p>
                <h2 className="fw-bold text-dark mb-4">Asked Questions</h2>
              </div>

              <div className="accordion" id="faqAccordion">
                <FAQItem
                  id="faq1"
                  question="What documents are required to apply for a tourist visa?"
                  answer="Typically, you'll need a valid passport, completed visa application form, passport-sized photographs, proof of accommodation, travel itinerary, and financial statements showing sufficient funds for your trip."
                />
                <FAQItem
                  id="faq2"
                  question="How many steps are usually involved in visa processing?"
                  answer="Our streamlined process involves 4 simple steps: Apply Online, Get An Appointment, Submit Documents, and Receive Your Visa. We handle all the complex procedures for you."
                />
                <FAQItem
                  id="faq3"
                  question="How long does it take to approve the tourist visa application?"
                  answer="Processing times vary by country and visa type. Tourist visas typically take 5-15 business days, while some countries offer expedited services for faster processing."
                />
                <FAQItem
                  id="faq4"
                  question="Will I get the visa on an estimated date as mentioned on the platform?"
                  answer="We provide estimated processing times based on embassy guidelines and our experience. While we strive to meet these timelines, actual processing may vary due to embassy workload and individual case complexity."
                />
                <FAQItem
                  id="faq5"
                  question="Why do Visa applications get rejected?"
                  answer="Common reasons include incomplete documentation, insufficient funds, unclear travel purpose, previous immigration violations, or inconsistencies in application details. Our experts help minimize these risks."
                />
                <FAQItem
                  id="faq6"
                  question="Can I reapply for a visa after it has been rejected?"
                  answer="Yes, you can reapply after addressing the reasons for rejection. We recommend waiting for an appropriate period, gathering additional supporting documents, and ensuring all requirements are met before reapplying."
                />
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Visa;