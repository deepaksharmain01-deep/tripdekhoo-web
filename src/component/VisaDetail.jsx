import React, { useState } from 'react'

  const VisaDetail = ({ country, onBack }) => {
    const [activeTab, setActiveTab] = useState('refund');

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

    return (
      <div className="container-fluid" style={{ paddingTop: '20px' }}>
         <div className="row mb-5">
              <div className="col-12 p-0">
                <div 
                  className="position-relative w-100 d-flex align-items-center justify-content-center"
                  style={{
                    height: '500px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              backgroundImage: `url(https://d19k5x9tl64mcw.cloudfront.net/VISA3.webp)`,
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
        <div className="container">
          {/* Back Button */}
          <button 
            className="btn btn-outline-primary mb-4" 
            onClick={onBack}
          >
            ← Back to Countries
          </button>

          <div className="row">
            {/* Left Column - Visa Information */}
            <div className="col-lg-8">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">{country} Visa Information</h2>
                <div className="d-flex gap-2">
                  <span className="badge bg-light text-dark">🗓️ 30 July</span>
                  <span className="badge bg-light text-dark">🗓️ 29 July</span>
                </div>
              </div>

              {/* Visa Details Grid */}
              <div className="row mb-4">
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-2 bg-primary bg-opacity-10 rounded">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0d6efd">
                        <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V8L14 2Z"/>
                      </svg>
                    </div>
                    <div>
                      <small className="text-muted">Visa Type:</small>
                      <div className="fw-bold">E-Visa</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-2 bg-info bg-opacity-10 rounded">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#0dcaf0">
                        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"/>
                      </svg>
                    </div>
                    <div>
                      <small className="text-muted">Length of Stay:</small>
                      <div className="fw-bold">30 days</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-2 bg-success bg-opacity-10 rounded">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#198754">
                        <circle cx="12" cy="12" r="10"/>
                      </svg>
                    </div>
                    <div>
                      <small className="text-muted">Validity:</small>
                      <div className="fw-bold">60 days</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-2 bg-warning bg-opacity-10 rounded">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffc107">
                        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                      </svg>
                    </div>
                    <div>
                      <small className="text-muted">Entry:</small>
                      <div className="fw-bold">Single</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-2 bg-secondary bg-opacity-10 rounded">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#6c757d">
                        <path d="M14 2H6C5.45 2 5 2.45 5 3V21C5 21.55 5.45 22 6 22H18C18.55 22 19 21.55 19 21V8L14 2Z"/>
                      </svg>
                    </div>
                    <div>
                      <small className="text-muted">Method:</small>
                      <div className="fw-bold">Paperless</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Required */}
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="fw-bold mb-3">Documents Required</h5>
                  <p className="text-muted mb-4">Submit all the essential documents for a smooth visa processing</p>
                  
                  <div className="row">
                    <div className="col-6 col-md-3 mb-3">
                      <div className="text-center p-3 bg-light rounded">
                        <div className="mb-2">📄</div>
                        <small>Passport</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                      <div className="text-center p-3 bg-light rounded">
                        <div className="mb-2">📸</div>
                        <small>Photo</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                      <div className="text-center p-3 bg-light rounded">
                        <div className="mb-2">💳</div>
                        <small>Pan Card</small>
                      </div>
                    </div>
                    <div className="col-6 col-md-3 mb-3">
                      <div className="text-center p-3 bg-light rounded">
                        <div className="mb-2">📋</div>
                        <small>Other Documents</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="alert alert-info mb-4">
                <strong>📋 Disclaimer:</strong> Visa fees and required documents may change at any time without prior notice.
              </div>

              {/* List of Essential Documents */}
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="fw-bold mb-4">List of Essential Documents</h5>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold">Passport</h6>
                    <ul className="list-unstyled ms-3">
                      <li>• The passport must have a minimum validity of 6 months from the departure date of {country}.</li>
                      <li>• Handwritten passports and passports exceeding 10 years of duration are invalid.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold">Photograph</h6>
                    <ul className="list-unstyled ms-3">
                      <li>• The photograph must be clicked against the plain white background.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold">Pan Card</h6>
                    <ul className="list-unstyled ms-3">
                      <li>• All applicants above the age of 18 are required to carry a valid copy of their PAN Card.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold">Flight Tickets</h6>
                    <ul className="list-unstyled ms-3">
                      <li>• {country}-approved visas are not updated by Abu Dhabi's ICP systems, it's crucial for {country} visa holders to visit {country} directly. In case, the traveller is entering Abu Dhabi or Sharjah with an inactive visa, then it might raise an issue during deportation.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Travel Details */}
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="fw-bold mb-4">Travel Details</h5>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold">Flight Tickets</h6>
                    <ul className="list-unstyled ms-3">
                      <li>• It's mandatory to carry a copy of confirmed arrival and departure flight tickets.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold">Hotel Reservations</h6>
                    <ul className="list-unstyled ms-3">
                      <li>• The tourist must carry a copy of the confirmed hotel reservation depicting the various essential details, including hotel address, contact number, applicant's name and reservation dates.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conditional Requirements */}
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="fw-bold mb-4">Conditional Requirements</h5>
                  
                  <div className="mb-4">
                    <h6 className="fw-bold">US Visa</h6>
                    <ul className="list-unstyled ms-3">
                      <li>• If an individual possesses a US Visa (B1/B2 or a green card) with a minimum validity of 6 months, then the UAE will provide a Visa on arrival for 14 days.</li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h6 className="fw-bold">Birth Certificate</h6>
                    <ul className="list-unstyled ms-3">
                      <li>• Tourists under the age of 18 have to bring their birth certificate for verification if travelling alone without parents.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="col-lg-4">
              <div className="sticky-top" style={{ top: '20px' }}>
                <div className="card shadow">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-center mb-3 p-3 bg-primary text-white rounded">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="me-2">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      Get Your Visa in 1 day
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold">Price Breakdown</h6>
                      <div className="d-flex justify-content-between mb-2">
                        <span>🏛️ Government fee</span>
                        <span>₹6,250 × 1</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>⚡ Atlys Fees</span>
                        <span>₹1,000 ₹0 for now</span>
                      </div>
                      <small className="text-muted">No advance payment. Pay only when you get your visa</small>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-between mb-3">
                      <strong>Total Amount</strong>
                      <strong>₹6,250</strong>
                    </div>

                    <button className="btn btn-dark w-100 py-2 fw-bold mb-4">
                      BOOK NOW
                    </button>

                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">Application Process</h6>
                      <small className="text-muted">Check-out all the steps that are involved in visa application processing</small>
                      
                      <div className="mt-3">
                        <div className="d-flex align-items-start mb-3">
                          <div className="badge bg-primary rounded-pill me-3">STEP 1</div>
                          <div>
                            <div className="fw-bold small">Apply Online</div>
                            <div className="text-muted small">Visit our exclusive platform and fill in the required details hassle-free to meet criteria.</div>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="badge bg-primary rounded-pill me-3">STEP 2</div>
                          <div>
                            <div className="fw-bold small">Get An Appointment</div>
                            <div className="text-muted small">Receive an appointment schedule & meet our professionals for guidance.</div>
                          </div>
                        </div>
                        <div className="d-flex align-items-start mb-3">
                          <div className="badge bg-primary rounded-pill me-3">STEP 3</div>
                          <div>
                            <div className="fw-bold small">Submit Document</div>
                            <div className="text-muted small">Send us all the relevant documents to verify and process your visa application.</div>
                          </div>
                        </div>
                        <div className="d-flex align-items-start">
                          <div className="badge bg-primary rounded-pill me-3">STEP 4</div>
                          <div>
                            <div className="fw-bold small">Receive Your Visa</div>
                            <div className="text-muted small">Once approved, you'll receive your visas instantly with our efficient procedure.</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="mb-3">
                      <div className="btn-group w-100" role="group">
                        <button 
                          className={`btn ${activeTab === 'refund' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setActiveTab('refund')}
                        >
                          Refund Policy
                        </button>
                        <button 
                          className={`btn ${activeTab === 'terms' ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => setActiveTab('terms')}
                        >
                          Terms of Service
                        </button>
                      </div>
                    </div>

                    {/* Tab Content */}
                    <div className="small text-muted">
                      {activeTab === 'refund' && (
                        <div>
                          <h6 className="fw-bold text-dark">Refund Policy</h6>
                          <ul className="list-unstyled">
                            <li>• The processing time or delivery of visa is solely at the discretion of the Embassy/Consulate of any respective destination or a visa application, payment of the application fee, and submission of documents does not guarantee the approval of a visa.</li>
                            <li>• Application fees, processing fees, and any additional service charges are non-refundable, irrespective of the outcome of the application</li>
                            <li>• The processing time for a visa is an estimate and subject to change based on individual cases, administrative processes, and workload. The Embassy/Consulate are responsible for delays in visa processing or any other related issues.</li>
                            <li>• The Embassy/Consulate reserves the right to request additional documentation at any stage of the application process. Failure to provide the requested information within the stipulated timeframe may result in application rejection.</li>
                            <li>• For many countries, visa fees are charged in the local currency of the issuing country. if payments are made in a different currency, the fees may vary depending on exchange rate fluctuations.</li>
                          </ul>
                        </div>
                      )}
                      {activeTab === 'terms' && (
                        <div>
                          <h6 className="fw-bold text-dark">Terms of Service</h6>
                          <p>By using our visa services, you agree to comply with all terms and conditions. Our service includes visa consultation, document verification, and application submission to the respective embassies.</p>
                          <p>We are not responsible for visa rejection or delays caused by embassy procedures. All visa decisions are made solely by the embassy or consulate.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      </div>
    );
  };

export default VisaDetail
