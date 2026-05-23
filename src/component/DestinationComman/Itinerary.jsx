import React, { useState } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { FaMapMarkedAlt, FaLightbulb, FaRoad } from 'react-icons/fa';
import TestimonialCard from '../Testimonals/TestimonalCard';
import { MapPin, Lightbulb, Navigation, Package, ChevronDown, ChevronUp, Plus, Minus, HelpCircle } from 'lucide-react';

const Itinerary = ({ packageObj }) => {
  const tourPackage = packageObj[0];
const [showAllFAQs, setShowAllFAQs] = useState(false);
  const sections = [
    { key: 'about_the_tour', title: 'About the Tour', icon: <FaMapMarkedAlt /> },
    { key: 'things_not_to_miss', title: 'Things Not to Miss', icon: <FaLightbulb /> },
    { key: 'how_to_reach', title: 'How to Reach', icon: <FaRoad /> },
    { key: 'things_to_carry', title: 'Things to Carry', icon: <FaRoad /> }
  ];

  const availableSections = sections.filter(
    section => tourPackage?.[section.key] && tourPackage[section.key].length > 0
  );

  const [activeKey, setActiveKey] = useState(availableSections[0]?.key || '');
  const [expandedTabs, setExpandedTabs] = useState({}); // track expanded state per tab
 
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleExpand = (tabKey) => {
    setExpandedTabs(prev => ({
      ...prev,
      [tabKey]: !prev[tabKey]
    }));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+917568624246';
    const currentUrl = window.location.href;
    const message = encodeURIComponent(
      `Hi! I am interested in your tour packages. Here's the link: ${currentUrl}`
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

 const renderTabContent = (title, content, icon, tabKey) => {
    if (!content || (Array.isArray(content) && content.length === 0)) return null;

    const isList = Array.isArray(content);
    const isExpanded = expandedTabs[tabKey] || false;

    const displayContent = isList
      ? (isExpanded ? content : content.slice(0, 5))
      : [content];

    return (
      <div className="mt-4">
       
        
        <div className="row g-3">
          {displayContent.map((item, index) => (
            <div key={index} className="col-12">
              <div 
                className="card h-100 border-0 shadow-sm"
                style={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0.5rem 1rem rgba(138, 87, 222, 0.15)';
                  e.currentTarget.style.borderColor = '#8a57de';
                  e.currentTarget.style.borderWidth = '1px';
                  e.currentTarget.style.borderStyle = 'solid';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)';
                  e.currentTarget.style.border = 'none';
                }}
              >
                <div className="card-body p-3">
                  <div className="d-flex align-items-start gap-3">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                      style={{ 
                        background: 'linear-gradient(135deg, #8a57de 0%, #6b46c1 100%)', 
                        width: '24px', 
                        height: '24px', 
                        fontSize: '12px',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      {index + 1}
                    </div>
                    <p className="mb-0 text-dark" style={{ lineHeight: '1.6' ,textAlign:"left"}}>
                      {item}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isList && content.length > 5 && (
          <div className="text-center mt-4">
            <button
              onClick={() => toggleExpand(tabKey)}
              className="btn d-flex align-items-center gap-2 mx-auto px-4 py-2 fw-medium"
              style={{
                background: 'rgba(138, 87, 222, 0.1)',
                color: '#8a57de',
                border: '1px solid rgba(138, 87, 222, 0.3)',
                borderRadius: '25px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #8a57de 0%, #6b46c1 100%)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(138, 87, 222, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(138, 87, 222, 0.1)';
                e.currentTarget.style.color = '#8a57de';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={16} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Show More ({content.length - 5} more items)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    );
  };

  const customTabStyle = {
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    margin: '0 6px 12px 0',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px'
  };

  const activeTabStyle = {
    ...customTabStyle,
    background: 'linear-gradient(135deg, #8a57de 0%, #6b46c1 100%)',
    color: 'white',
    boxShadow: '0 4px 12px rgba(138, 87, 222, 0.3)',
    transform: 'translateY(-1px)'
  };

  const inactiveTabStyle = {
    ...customTabStyle,
    backgroundColor: '#f8f9fa',
    color: '#6c757d',
    border: '1px solid #e9ecef'
  };

  return (
    <Container>
      {availableSections.length > 0 && (
        <>
          <div className="d-flex flex-wrap justify-content-center mb-4">
            {availableSections.map(({ key: tabKey, title, icon }) => (
              <Button
                key={tabKey}
                onClick={() => setActiveKey(tabKey)}
                style={activeKey === tabKey ? activeTabStyle : inactiveTabStyle}
                onMouseEnter={(e) => {
                  if (activeKey !== tabKey) {
                    e.target.style.backgroundColor = 'rgba(138, 87, 222, 0.1)';
                    e.target.style.color = '#8a57de';
                    e.target.style.borderColor = 'rgba(138, 87, 222, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeKey !== tabKey) {
                    e.target.style.backgroundColor = '#f8f9fa';
                    e.target.style.color = '#6c757d';
                    e.target.style.borderColor = '#e9ecef';
                  }
                }}
              >
                <span style={{ fontSize: '12px' }}>{icon}</span>
                <span>{title}</span>
              </Button>
            ))}
          </div>

          {availableSections.map(({ key: tabKey, title, icon }) => (
            <div
              key={tabKey}
              style={{ display: activeKey === tabKey ? 'block' : 'none' }}
            >
              {renderTabContent(title, tourPackage?.[tabKey], icon, tabKey)}
            </div>
          ))}
        </>
      )}

      <div className='my-5'>
        <TestimonialCard data={tourPackage?.testimonals} />
      </div>

      {tourPackage?.faqs && tourPackage.faqs.length > 0 && (
        <div className="mt-5">
       
          <div>
         {tourPackage?.faqs && tourPackage.faqs.length > 0 && (
        <div className="mt-5">
          {/* FAQ Header */}
          <div className="text-center mb-5">
            <div 
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
              style={{
                background: 'rgba(138, 87, 222, 0.1)',
                color: '#8a57de',
                width: '50px',
                height: '50px'
              }}
            >
              <HelpCircle size={24} />
            </div>
            <h3 className="fw-bold text-dark mb-2" style={{ fontSize: '24px' }}>
              {tourPackage?.fagHeading || "Frequently Asked Questions"}
            </h3>
            <p className="text-muted">Find answers to common questions about our tour packages</p>
          </div>

        
          <div className="row justify-content-center">
            <div className="col-lg-9 col-md-11">
              {(showAllFAQs ? tourPackage.faqs : tourPackage.faqs.slice(0, 5)).map((faq, index) => (
                <div key={index} className="mb-3">
                  <div 
                    className={`card border-0 shadow-sm overflow-hidden ${
                      openFAQ === index ? 'shadow-lg' : ''
                    }`}
                    style={{
                      borderRadius: '15px',
                      transition: 'all 0.3s ease',
                      transform: openFAQ === index ? 'translateY(-2px)' : 'translateY(0)',
                      boxShadow: openFAQ === index ? '0 8px 25px rgba(138, 87, 222, 0.15)' : '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
                    }}
                  >
                    {/* Question Header */}
                    <div
                      className={`card-header border-0 p-0 ${
                        openFAQ === index 
                          ? 'bg-gradient' 
                          : 'bg-light bg-opacity-50'
                      }`}
                      style={{
                        borderRadius: openFAQ === index ? '15px 15px 0 0' : '15px',
                        background: openFAQ === index 
                          ? 'linear-gradient(135deg, rgba(138, 87, 222, 0.1) 0%, rgba(107, 70, 193, 0.1) 100%)' 
                          : '#f8f9fa',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <button
                        className="btn btn-link text-decoration-none w-100 p-4 text-start d-flex align-items-center justify-content-between"
                        type="button"
                        onClick={() => toggleFAQ(index)}
                        style={{
                          color: '#2c3e50',
                          fontWeight: '600',
                          fontSize: '16px',
                          borderRadius: '15px'
                        }}
                      >
                        <span className="pe-3">{faq.question}</span>
                        <div 
                          className={`d-flex align-items-center justify-content-center rounded-circle ${
                            openFAQ === index 
                              ? 'bg-white shadow-sm' 
                              : 'bg-white shadow-sm'
                          }`}
                          style={{
                            width: '32px',
                            height: '32px',
                            minWidth: '32px',
                            transition: 'all 0.3s ease',
                            transform: openFAQ === index ? 'rotate(45deg)' : 'rotate(0deg)',
                            color: openFAQ === index ? '#8a57de' : '#6c757d'
                          }}
                        >
                          <Plus size={16} />
                        </div>
                      </button>
                    </div>

                    {/* Answer Content */}
                    {openFAQ === index && (
                      <div
                        className="card-body pt-0 pb-4 px-4 display-flex align-items-start"
                        style={{
                          animation: 'fadeInUp 0.3s ease forwards',
                          opacity: 0,
                          transform: 'translateY(10px)'
                        }}
                      >
                        <div className="pt-3 border-top" style={{ borderColor: 'rgba(138, 87, 222, 0.3) !important' }}>
                          {Array.isArray(faq.answer) ? (
                            <div>
                              {faq.answer.map((point, i) => (
                                <div 
                                  key={i} 
                                  className="d-flex align-items-start mb-3"
                                  style={{ 
                                    animationDelay: `${i * 0.1}s`,
                                    animation: `fadeInLeft 0.1s ease forwards ${i * 0.1}s`,
                                    opacity: 0,
                                    transform: 'translateX(-10px)',
                                    textAlign:"left"
                                  }}
                                >
                                  <div
                                    className="rounded-circle me-3 mt-2 flex-shrink-0"
                                    style={{
                                      width: '8px',
                                      height: '8px',
                                      backgroundColor: '#8a57de'
                                    }}
                                  ></div>
                                  <span 
                                    className="text-muted" 
                                    style={{ lineHeight: '1.6' }}
                                  >
                                    {point}
                                  </span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p 
                              className="mb-0 text-muted"
                              style={{
                                lineHeight: '1.6',
                                animation: 'fadeInUp 0.3s ease forwards 0.1s',
                                opacity: 0,
                                transform: 'translateY(10px)'
                              }}
                            >
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

             
            </div>
          </div>
  {tourPackage.faqs.length > 5 && (
           <div className="text-center mt-3 mb-3">
                  <button
                     onClick={() => setShowAllFAQs(!showAllFAQs)}
                    className="btn whatsapp-button"
                  >
                    {showAllFAQs ? "Show Less" : "Show More"}
                  </button>
                </div>)}
        
       
          </div>
)}
        </div>
        </div>
      )}
        
      
     
    </Container>
  );
};

export default Itinerary;