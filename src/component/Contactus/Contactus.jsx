import React, { useState } from 'react';


import { toast } from 'react-toastify';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactRegex = /^[0-9]{10}$/;
  const nameRegex = /^[A-Za-z ]{2,50}$/;

  if (
    !formData.firstName.trim() ||
    !formData.lastName.trim() ||
    !formData.message.trim()
  ) {
    toast.warning("Please fill out all required fields.");
    return false;
  }

  if (!nameRegex.test(formData.firstName)) {
    toast.error("Please enter a valid first name (letters only).");
    return false;
  }

  if (!nameRegex.test(formData.lastName)) {
    toast.error("Please enter a valid last name (letters only).");
    return false;
  }

  if (!emailRegex.test(formData.email)) {
    toast.error("Please enter a valid email address.");
    return false;
  }

  if (!contactRegex.test(formData.contact)) {
    toast.error("Please enter a valid 10-digit contact number.");
    return false;
  }

  return true;
};


const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    toast.warning("Please fill all fields correctly.");
    return;
  }

  const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdejEyenGae4zcq0vR7ERp6WGOeiV4c5relSTZTbcFHAd59iA/formResponse";
  const formDataGoogle = new FormData();

  formDataGoogle.append("entry.1420503925", formData.firstName);
  formDataGoogle.append("entry.494496240", formData.lastName);
  formDataGoogle.append("entry.1517098015", formData.contact);
formDataGoogle.append("entry.1856751346", formData.email);
  formDataGoogle.append("entry.2055400043", formData.message);

  try {
    await fetch(formUrl, {
      method: "POST",
      body: formDataGoogle,
      mode: "no-cors", // required for Google Forms
    });

    toast.success("Your enquiry has been submitted successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      contact: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("Error submitting to Google Form:", error);
    toast.error("Something went wrong. Please try again later.");
  }
};


  return (
    <div className="w-100" style={{ paddingTop: 'var(--navbar-height, 80px)' }}>
   <div>
   <img src={'https://d19k5x9tl64mcw.cloudfront.net/contactUS.png'} className='w-100'/>
   </div>
      <div className="container-fluid" style={{ backgroundColor: '#f8f9fa', minHeight: '100%', padding: '60px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 col-xl-10">
              {/* Header Section */}
              <div className="text-center mb-5">
                <h1 className="fw-bold mb-4" style={{ fontSize: '32px', color: '#333' }}>
                  We're Here to Help You{' '}
                  <span style={{ color: '#6366f1' }}>Travel Better</span>
                </h1>
                <div className="mx-auto" style={{ maxWidth: '800px' }}>
                  <p className="mb-3" style={{ fontSize: '18px', color: '#666' }}>
                    Have questions, need assistance, or want to customize your trip?
                  </p>
                  <p className="" style={{ fontSize: '16px', color: '#666' }}>
                    Our team at TripDekhoo is ready to support you every step of the way — from planning to booking, and beyond.
                  </p>
                  <p style={{ fontSize: '16px', color: '#666' }}>
                    Whether it's flight issues, hotel options, visa queries, or group bookings, we're just a message or call away.
                  </p>
                </div>
              </div>

              <div className="row g-5 align-items-start">
                {/* Contact Form */}
                <div className="col-lg-6">
                  <div className="p-4 rounded-3" style={{   background: 'linear-gradient(135deg, rgb(99, 102, 241), rgb(193, 195, 255))' }}>
                    <h3 className="mb-4" style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                      Get in touch <span style={{ fontWeight: 'normal' }}>with us?</span>
                    </h3>
                    
                    <div>
                      <div className="row mb-3">
                        <div className="col-6 pe-2">
                          <input
                            type="text"
                            className="form-control border-0 py-3"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            style={{ 
                              backgroundColor: '#f5f5f5',
                              fontSize: '1rem',
                              borderRadius: '8px'
                            }}
                          />
                        </div>
                        <div className="col-6 ps-2">
                          <input
                            type="text"
                            className="form-control border-0 py-3"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            style={{ 
                              backgroundColor: '#f5f5f5',
                              fontSize: '1rem',
                              borderRadius: '8px'
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control border-0 py-3"
                          placeholder="Contact"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          style={{ 
                            backgroundColor: '#f5f5f5',
                            fontSize: '1rem',
                            borderRadius: '8px'
                          }}
                        />
                      </div>
                      
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control border-0 py-3"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          style={{ 
                            backgroundColor: '#f5f5f5',
                            fontSize: '1rem',
                            borderRadius: '8px'
                          }}
                        />
                      </div>
                      
                      <div className="mb-4">
                        <textarea
                          className="form-control border-0 py-3"
                          rows="6"
                          placeholder="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          style={{ 
                            backgroundColor: '#f5f5f5',
                            fontSize: '1rem',
                            borderRadius: '8px',
                            resize: 'vertical'
                          }}
                        ></textarea>
                      </div>
                      
                      <button 
                        onClick={handleSubmit}
                        className="btn px-4 py-3 fw-semibold"
                        style={{ 
                          backgroundColor: '#2c2c2c',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          fontSize: '1rem'
                        }}
                      >
                        Submit Enquiry
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="col-lg-6">
                  <div className="ps-lg-4">
                    <h3 className="mb-4" style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                      Reach out to <span style={{ fontWeight: 'normal' }}>us?</span>
                    </h3>
                    
                    <div className="mb-4">
                      <p className="mb-1" style={{ fontSize: '16px', color: '#333', lineHeight: '1.6' }}>
                        <strong>Phone Support:</strong>{' '}
                        <a 
                          href="tel:+917568624246" 
                          className="text-decoration-none fw-bold" 
                          style={{ color: '#6366f1' }}
                        >
                          +91-7568624246
                        </a>{' '}
                        <span style={{ color: '#666' }}>(Monday to Saturday - 10 AM to 7 PM IST)</span>
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <p className="mb-1" style={{ fontSize: '16px', color: '#333', lineHeight: '1.6' }}>
                        <strong>WhatsApp Support:</strong>{' '}
                        <a 
                          href="https://wa.me/917568624246" 
                          className="text-decoration-none fw-bold" 
                          style={{ color: '#6366f1' }}
                        >
                          +91-7568624246
                        </a>{' '}
                        <span style={{ color: '#666' }}>(Quick replies within business hours)</span>
                      </p>
                    </div>
                    
                    <div className="mb-5">
                      <p className="mb-1" style={{ fontSize: '16px', color: '#333', lineHeight: '1.6' }}>
                        <strong>Email us:</strong>{' '}
                        <a 
                          href="mailto:Support@tripdekhoo.com" 
                          className="text-decoration-none fw-bold" 
                          style={{ color: '#6366f1' }}
                        >
                          Support@tripdekhoo.com
                        </a>{' '}
                        <span style={{ color: '#666' }}>(We respond within 24 hours)</span>
                      </p>
                    </div>

                    <div className="mb-2">
                      <p style={{ fontSize: '20px', color: '#333', fontWeight: '500' }}>
                        At <span style={{ color: '#6366f1', fontWeight: 'bold' }}>TripDekhoo</span>, we don't just plan trips — we make travel personal.
                      </p>
                    </div>

                    <div>
                      <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.5', fontWeight: '500' }}>
                        Let's connect and start planning your next journey today!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}