import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allPackagesData from '../../../packages.json';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaHeart, FaMapMarkerAlt, FaRegFileAlt } from "react-icons/fa";
import { Navigation, Pagination,Autoplay } from 'swiper/modules';
import { Camera, Phone, PhoneCall } from 'lucide-react';
import HighlightSlider from './HighlightSlider';
import Packages from '../Packages/Packages';
import TestimonialCard from '../Testimonals/TestimonalCard';
import ConnectForm from './ConnectForm';
import whatsapp from '../../assets/whatsapp.svg'
import phone from '../../assets/phone.svg'
import SEO from '../Common/SEO';
const policies = {
    international: {
      "Confirmation Policy": [
        "A booking confirmation voucher will be shared via email within 48–72 hours after successful booking, useful for visa purposes.",
        "Final travel vouchers will be issued 7 days prior to the trip start date.",
        "If the requested hotel/slots are unavailable, Trip Dekhoo will provide an alternative option as per the traveler's preference (additional charges may apply). A new confirmation voucher will then be issued via email.",
      ],
      "Refund Policy": [
        "Guests who have opted for a refundable booking can check details through the provided refundable booking terms (extra charges may apply).",
        "If any activity or sightseeing is closed due to unforeseen circumstances (e.g., COVID restrictions), refunds will be processed for paid activities within 30 working days. Complimentary services or those not charged by TripDekhoo will not qualify for a refund.",
        "If a package is cancelled due to natural calamities, weather disruptions, or other unavoidable conditions, Trip Dekhoo will work with partners/vendors to offer the maximum possible refund.",
        "In case a traveler tests positive for COVID-19, rescheduling will be offered for a later date (seasonal surcharges may apply) upon submission of valid medical reports.",
        "If travel restrictions or government bans prevent Indians from visiting a booked destination, Trip Dekhoo will provide an alternate itinerary or reschedule the trip to a later date (surcharges may vary by season).",
      ],
      "Cancellation Policy": [
        "Cancellations made 30 days or more before the travel date will incur a cancellation fee of 30% of the total booking cost.",
        "Cancellations made within 30 days of the travel date will result in 100% of the booking amount being charged as cancellation fees.",
        "In case of unexpected events such as weather issues, strikes, government restrictions, or any situation beyond Trip Dekhoo's control, certain activities may be cancelled. In such cases, suitable alternatives will be offered, but no cash refund will be available.",
      ],
      "Payment Terms": [
        "100% of the total package cost must be paid at least 7 days before the travel start date in order to confirm the booking.",
      ],
    },
    domestic: {
      "Confirmation Policy": [
        "Guests can make payments in installments for their booking.",
        "Upon receiving the initial payment, an email confirmation will be shared.",
        "Once the booking amount is fully paid (100%), the final voucher with complete trip details will be issued.",
      ],
      "Refund Policy": [
        "Eligible refunds will be initiated within 10 business days.",
        "Refunds will be credited to the traveler's Trip Dekhoo account/wallet and can be used for future bookings.",
      ],
      "Cancellation Policy": [
        "Cancellations made 60 days or more before the travel date will attract a cancellation fee of 10% of the total booking cost.",
        "Cancellations made between 30 to 60 days prior to travel will incur 25% of the total booking cost as cancellation charges.",
        "Cancellations made between 15 to 30 days prior to travel will incur 50% of the total booking cost as cancellation charges.",
        "Cancellations made between 7 to 15 days prior to travel will incur 75% of the total booking cost as cancellation charges.",
        "Cancellations made within 0 to 7 days of travel will result in 100% cancellation charges (no refund).",
        "In the event of unforeseen conditions like bad weather, strikes, government restrictions, or any other unavoidable circumstances, some activities may be cancelled. In such cases, alternate feasible options will be provided, but cash refunds will not be available.",
      ],
      "Payment Term Policy": [
        "The full package amount (100%) must be paid at least 30 days before the travel date to confirm the booking.",
      ],
    },
  };

const Allpackages = () => {

  const { destination, packages } = useParams();
  
  // Synchronous lookup for immediate SEO updates
  const destinationObj = allPackagesData.destinations.find(
    (dest) => dest.destination.toLowerCase() === destination.toLowerCase()
  );
  
  const matchedPackage = destinationObj?.packages.find(
    (pkg) => pkg.id.toLowerCase() === packages.toLowerCase()
  );

  const [activeTab, setActiveTab] = useState("know_before_you_go");
// State to store multiple expanded days
const [expandedDays, setExpandedDays] = useState([]);
const [showAllContent, setShowAllContent] = useState(false);
 const [expandedSections, setExpandedSections] = useState({});

  const currentPolicies = matchedPackage?.internationl === true
    ? policies.international
    : policies.domestic;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
 const features = [
    {
      icon: <FaHeart size={40} color="#7B5CFF" />,
      title: "50,000+ Travelers",
      description: "Trusted by happy customers across India & abroad.",
    },
    {
      icon: <FaMapMarkerAlt size={40} color="#7B5CFF" />,
      title: "4.8 / 5.0 Ratings",
      description: "Highly rated trips curated with traveler feedback.",
    },
    {
      icon: <FaRegFileAlt size={40} color="#7B5CFF" />,
      title: "Tailor-Made Itineraries",
      description: "Personalized experiences designed with expert planning.",
    },
    {
      icon: <Phone size={40} color="#7B5CFF" />,
      title: "24×7 Assistance",
      description: "Dedicated support before, during, and after your trip.",
    },
  ];


const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };


 const getPolicyIcon = (policyName) => {
    switch (policyName) {
      case 'Confirmation Policy':
        return 'fa-check-circle';
      case 'Refund Policy':
        return 'fa-undo-alt';
      case 'Cancellation Policy':
        return 'fa-times-circle';
      case 'Payment Terms':
      case 'Payment Term Policy':
        return 'fa-credit-card';
      default:
        return 'fa-file-alt';
    }
  };






      










  function formatIndianNumber(num) {
    if (isNaN(num)) return "";
    return new Intl.NumberFormat("en-IN").format(num);
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+917568624246';
    const currentUrl = window.location.href;
    const message = encodeURIComponent(
      `Hi! I am interested in your tour packages. Here's the link: ${currentUrl}`
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const allTabs = matchedPackage ? [
    { key: "know_before_you_go", label: "Know before you go", data: matchedPackage.know_before_you_go },
    { key: "Do", label: "Do's", data: matchedPackage?.dos_and_donts?.dos },
    { key: "Dont", label: "Don't", data: matchedPackage?.dos_and_donts?.donts }
  ] : [];

  const tabs = allTabs.filter(tab => Array.isArray(tab.data) && tab.data.length > 0);

  const toggleDay = (index) => {
    setExpandedDays((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-100" style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
      <SEO 
        key={`${destination}-${packages}`}
        title={matchedPackage?.title || (packages ? packages.replace(/-/g, ' ').charAt(0).toUpperCase() + packages.replace(/-/g, ' ').slice(1) : destination)}
        description={matchedPackage?.subTitle}
        image={matchedPackage?.image}
        url={`/packages/${destination}/itinerary/${packages}`}
      />
      {matchedPackage === null ? (
        <div className="text-center py-5">Loading Package Details...</div>
      ) : (
        <div>
    <div
      id="destinationCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
   
      {/* Slides */}
      <div className="carousel-inner" style={{overflow:"visible"}}>
        {[matchedPackage.image, matchedPackage.image2, matchedPackage.image3].map(
          (img, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="image-container position-relative">

                <img className="w-100" src={img} alt={`${matchedPackage.title} - View ${index + 1}`} />
<div
    className="bottom-gradient-overlay position-absolute w-100"
    style={{
      bottom: 0,
      left: 0,
      height: "40%",
      background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
      zIndex: 1, // gradient sits below
    }}
  ></div>
                {/* Text Overlay */}
                <div className="details-text-overlap text-center text-white"  style={{ zIndex: 2 }}>
                  <p className="mb-1">
                    Get {" "}
                    <span className="text-warning fw-bold">{matchedPackage?.discount}% OFF</span> on
                  </p>
                  <h1 className="fw-bold">{matchedPackage?.title}</h1>
                  <p>
               {matchedPackage?.subTitle}
                  </p>
                  <h3 className="fw-bold text-warning">
                    {matchedPackage.name}{" "}
                   
                  </h3>
                  <p>
                    Starting at{" "}
                    <span className="text-decoration-line-through fw-bold me-2">
                INR {formatIndianNumber(matchedPackage?.trashprice)}

                    </span>{" "}
                    <span className="fw-bold fs-5 text-white">
                     INR {formatIndianNumber(matchedPackage?.price)} / ADULT

                    </span>
                  </p>
                </div>

             
                <div className="connect-btn-wrapper text-center position-absolute" style={{zIndex:"2"}} onClick={openModal} sty>
                  <button
          className="btn d-flex align-items-center text-white fw-bold px-4 py-2 me-3"
          style={{
            backgroundColor: "#7B5CFF",
            borderRadius: "50px",
            flex: 1,
          }}
        >
       
          <img
    src={phone}
    alt="phone"
className="me-2 bg-white text-dark rounded-circle p-2"
    style={{ width: "40px", height: "40px" }}
  />
          <div className="text-start" >
            <div>Connect</div>
            <small className="fw-normal">Travel Expert</small>
          </div>
        </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#destinationCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#destinationCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>


      
      <Container>
        <div className="container-fluid py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              
              {/* Trip Highlights Section */}
              <div className="mb-5" style={{marginTop:"40px"}}>
                <div className="text-center mb-5">
                  <div className="position-relative d-inline-block">
                    <h2 className="display-4 fw-bold text-dark mb-3 position-relative" style={{fontSize: '24px'}}>
                      <span className="highlight-title-bg"></span>
                      ✨ Trip Highlights
                    </h2>
                    <div className="highlight-title-underline"></div>
                  </div>
                  <p className="lead text-muted col-md-8 mx-auto fs-5">
                    Discover the amazing experiences waiting for you on this incredible journey
                  </p>
                </div>

              <HighlightSlider highlights={matchedPackage.highlight} highlight_image={matchedPackage.highlight_image}/>
              </div>

                   <div className="col-12 mt-5">
                <div className="itinerary-section">
                  <div className="text-center mb-5">
                    <h2 className="itinerary-title">
                      Trip Itinerary
                    </h2>
                    <p className="itinerary-subtitle">Discover your journey day by day</p>
<div className="itinerary-floating-controls"> <button className="floating-btns expand-btns" onClick={() => setExpandedDays(matchedPackage.itinerary.map((_, i) => i))} > <svg width="22" height="22" fill="white" viewBox="0 0 24 24"> <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/> </svg> </button> <button className="floating-btns collapse-btns" onClick={() => setExpandedDays([])} > <svg width="22" height="22" fill="white" viewBox="0 0 24 24"> <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round"/> </svg> </button> </div>
                  </div>
                  <div className="itinerary-timeline">
                    {matchedPackage.itinerary && matchedPackage.itinerary.map((day, index) => (
                      <div key={`day-${index}`} className="itinerary-day-card">
                        <div className="day-number-badge">
                          <span className="day-number">{index + 1}</span>
                        </div>

                        <div className="day-content-card">
                          {/* Day Header */}
                          <div className="day-header" onClick={() => toggleDay(index)}>
                            <div className="day-info">
                              <h3 className="day-title">{day.day}</h3>
                              <span className="activities-count">
                                {day?.activities?.length || 0} Activities
                              </span>
                            </div>
                            <div  className={`expand-icon ${
    expandedDays.includes(index) ? 'expanded' : ''
  }`}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>

                          <div className={`day-content ${expandedDays.includes(index) ? 'expanded' : ''}`}>
                         {day?.images && day.images.length > 0 && (
  <details className="accordion-section p-3" open>
    <summary
      className="accordion-header activities-title d-flex align-items-center gap-2"
      style={{ fontSize: "18px" }}
    >
      <Camera size={22} />
      Explore Photo Moments
    </summary>

    <Swiper
     modules={[Navigation, Pagination,Autoplay]}
  spaceBetween={10}
  slidesPerView={1}
  navigation
  loop={true} // infinite loop
  autoplay={{
    delay: 3000,   // 3 seconds per slide
    disableOnInteraction: false, // keeps autoplay after user swipes
  }}
  speed={800} 
    >
      {day.images.map((img, idx) => (
        <SwiperSlide key={idx} style={{borderRadius:"10px"}}>
          <div className="swiper-image-container" style={{borderRadius:"10px"}} >
            <img
              src={img}
              alt={`${day.day} - ${idx + 1}`}
              className="day-image"
              style={{borderRadius:"10px"}}
            />
            <div className="image-overlay"   style={{borderRadius:"10px"}}></div>
            <div className="image-caption"style={{borderRadius:"10px"}}>
              <span className="caption-text">{day.day}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </details>
)}

                            <div className="activities-container">
                              <h4 className="activities-title">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L19.7071 9.70711C19.8946 9.89464 20 10.149 20 10.4142V19C20 20.1046 19.1046 21 18 21H17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Today's Activities
                              </h4>
                              <div className="activities-list">
                                {day?.activities?.map((activity, actIndex) => (
                                  <div key={`activity-${index}-${actIndex}`} className="activity-item">
                                    <div className="activity-icon">
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </div>
                                    <span className="activity-text">{activity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {index < matchedPackage.itinerary.length - 1 && (
                          <div className="timeline-connector"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                

              </div>
              
             <div className="container text-center my-5">
      {/* Heading */}
      <h4 className="fw-bold" style={{ color: "#4B47F5" }}>
        Prefer to discuss?
      </h4>
      <p className="text-muted mb-4">
        Choose an option below as per your convenience
      </p>



    <div className="container my-4">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-wrap justify-content-center align-items-center border rounded-pill p-3 shadow-sm bg-white" style={{ maxWidth: "650px" }}>
          
          {/* Request Callback */}
          <button
            onClick={openModal}
            className="btn d-flex align-items-center text-white fw-bold px-4 py-3 me-2 mb-2 mb-md-0 flex-grow-1"
            style={{
              backgroundColor: "#7B5CFF",
              borderRadius: "50px",
              minWidth: "250px",
            }}
          >
             <img
    src={phone}
    alt="phone"
className="me-2 bg-white text-dark rounded-circle p-2"
    style={{ width: "40px", height: "40px" }}
  />
            <div className="text-start lh-sm">
              <div>Request</div>
              <small className="fw-normal">For Call Back</small>
            </div>
          </button>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppClick}
            className="btn d-flex align-items-center text-white fw-bold px-4 py-3 ms-2 flex-grow-1"
            style={{
              backgroundColor: "#25D366",
              borderRadius: "50px",
              minWidth: "250px",
            }}
          >
           <img
    src={whatsapp}
    alt="WhatsApp"
    className="me-3 bg-white rounded-circle p-2"
    style={{ width: "40px", height: "40px" }}
  />
            <div className="text-start lh-sm">
              <div>WhatsApp</div>
              <small className="fw-normal">Send your Enquiry</small>
            </div>
          </button>

        </div>
      </div>
    </div>


    </div>
    <div>
                  <h3 className="text-center fw-bold" style={{ color: "#4B47F5" }}>
        What inside the package?
      </h3>
      <p className="text-center text-muted">Know about your purchase</p>

      <div className="row mt-4">
        {/* Inclusions */}
        <div className="col-md-6">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="fw-bold mb-3">Inclusions</h5>
            <ul className="list-unstyled">
              {matchedPackage.inclusions.map((item, index) => (
              <li key={index} className="d-flex align-items-start mb-2">
  <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" size={18} />
  <span>{item}</span>
</li>

              ))}
            </ul>
          </div>
        </div>

        {/* Exclusions */}
        <div className="col-md-6">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="fw-bold mb-3">Exclusions</h5>
            <ul className="list-unstyled">
              {matchedPackage.exclusions.map((item, index) => (
                <li key={index} className="d-flex align-items-start mb-2">
                  <FaTimesCircle className="text-danger me-2 mt-1 flex-shrink-0" size={18}  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
              {/* Package Tabs Section */}
         <div className="package-tabs-container">
 
  <div className="tab-headers">
    {tabs.map((tab, index) => (
      <button
        key={tab.key}
        className={`tab-button ${activeTab === tab.key ? "active" : ""}`}
        onClick={() => setActiveTab(tab.key)}
      >
        <span className="tab-label d-flex justify-content-center">{tab.label}</span>
        <div className="tab-indicator"></div>
      </button>
    ))}
  </div>

  {/* Tab Content with enhanced styling */}
  <div className="tab-content">
    <div className="tab-content-header">
      <h3 className="content-title">
        {tabs.find(tab => tab.key === activeTab)?.label} Details
      </h3>
      <span className="content-count">
        {tabs.find(tab => tab.key === activeTab)?.data.length || 0} items
      </span>
    </div>

    <ul className="content-list">
      {(() => {
        const activeTabData = tabs.find(tab => tab.key === activeTab)?.data || [];
        const itemsToShow = showAllContent ? activeTabData : activeTabData.slice(0, 5);

        return itemsToShow.map((item, index) => (
          <li key={index} className="tab-item">
            <div className="item-index">{String(index + 1).padStart(2, '0')}</div>
            <div className="item-content">{item}</div>
            <div className="item-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </li>
        ));
      })()}
    </ul>

    {tabs.find(tab => tab.key === activeTab)?.data.length > 5 && (
      <div className="show-more-container">
        <button
          className="show-more-button"
          onClick={() => setShowAllContent(!showAllContent)}
        >
          <span>{showAllContent ? "Show Less" : "Show More"}</span>
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none"
            className={`arrow-icon ${showAllContent ? 'rotated' : ''}`}
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    )}
  </div>
</div>

              {/* Enhanced Itinerary Section */}
         

   <TestimonialCard/>

       <div className="container my-5">
      <div className="row text-center">
        {features.map((feature, index) => (
          <div key={index} className="col-md-3 col-6 mb-4">
            <div className="mb-3">{feature.icon}</div>
            <h6 className="fw-bold">{feature.title}</h6>
            <p className="text-muted mb-0">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    <Packages show={false}/>
   <div className="container-fluid p-3" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row">
        <div className="col-12">
          {Object.entries(currentPolicies).map(([policyName, policyItems]) => (
            <div key={policyName} className="card mb-3 shadow-sm border-0">
              <div 
                className="card-header bg-white border-0 d-flex justify-content-between align-items-center"
                style={{ cursor: 'pointer', padding: '1rem 1.5rem' }}
                onClick={() => toggleSection(policyName)}
              >
                <h5 className="mb-0 fw-bold" style={{ color: '#333' }}>
                  {policyName} – <span style={{ color: '#6366f1' }}>TripDekhoo</span>
                </h5>
                <i 
                  className={`fas ${expandedSections[policyName] ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                  style={{ color: '#6c757d', fontSize: '14px' }}
                ></i>
              </div>
              
              {expandedSections[policyName] && (
                <div className="card-body" style={{ padding: '1.5rem' }}>
                  <ul className="list-unstyled mb-0">
                    {policyItems.map((item, index) => (
                      <li key={index} className="mb-3 d-flex">
                        <span 
                          className="me-3 flex-shrink-0"
                          style={{ 
                            color: '#6366f1', 
                            fontSize: '14px', 
                            marginTop: '2px',
                            fontWeight: 'bold'
                          }}
                        >
                          •
                        </span>
                        <span style={{ color: '#495057', lineHeight: '1.6' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          
          <div className="text-center mt-4">
            <p className="text-muted small mb-0">
              Showing {matchedPackage.internationl ? 'International' : 'Domestic'} Travel Policies
            </p>
          </div>
        </div>
      </div>
        </div>
        </div>
      </div>
    </div>
  </Container>
  <ConnectForm isOpen={isModalOpen} onClose={closeModal} />
  </div>
)}
</div>
);
};

export default Allpackages;