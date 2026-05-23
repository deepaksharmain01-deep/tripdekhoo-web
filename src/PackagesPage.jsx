import React, { useState, useEffect } from 'react';
import domesticData from '../domestic.json';
import internationalData from '../international.json';
import piligram from '../piligram.json'; // not used currently, but kept
import { useNavigate } from 'react-router-dom';
import SEO from './component/Common/SEO';
import './packagepage.css';

const PackagesPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  const domesticPackages = domesticData.destinations;
  const internationalPackages = internationalData.destinations;

  // Reset animation whenever filter changes
  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => setIsLoaded(true), 50); 
    return () => clearTimeout(timer);
  }, [activeFilter]);

  const getFilteredPackages = () => {
    if (activeFilter === 'domestic') return domesticPackages;
    if (activeFilter === 'international') return internationalPackages;
    return [...domesticPackages, ...internationalPackages];
  };

  const PackageCard = ({ pkg, index }) => (
    <div
      className={`col-12 col-md-6 col-xl-4 mb-4 package-card-wrapper ${isLoaded ? 'animate-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card package-card h-100 border-0 shadow-lg overflow-hidden">
        <div className="position-relative package-image-container">
          <img
            src={pkg.image}
            className="card-img-top package-image"
            alt={pkg.destination}
          />
          <div className="image-overlay"></div>
          {pkg.mostLoved && (
            <div className="position-absolute top-0 end-0 m-3">
              <span className="badge most-loved-badge">
                <i className="fas fa-heart me-1"></i>
                Most Loved
              </span>
            </div>
          )}
          <div className="position-absolute bottom-0 start-0 m-3">
            <span className="badge type-badge">
              {pkg.type === 'domestic' ? 'Domestic Tour' : 'International Tour'}
            </span>
          </div>
        </div>

        <div className="card-body p-4 d-flex flex-column">
          <div className="mb-3">
            <h5 className="card-title destination-title mb-2">{pkg.name}</h5>
            <p className="card-text text-muted mb-3">{pkg.subTitle}</p>
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center text-primary">
                <i className="fas fa-map-marker-alt me-2"></i>
                <small className="fw-medium">
                  {pkg.type === 'domestic' ? 'Domestic' : 'International'}
                </small>
              </div>
              <div className="text-success fw-bold">
                <i className="fas fa-phone me-1"></i>
                <small>Get Quote</small>
              </div>
            </div>
          </div>

          <button
            className="btn explore-btn mt-auto"
            onClick={() => navigate(`/packages/${pkg.destination}`)}
          >
            <span>Explore Packages</span>
            <i className="fas fa-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div style={{ paddingTop: 'calc(var(--navbar-height, 80px))' }}>
        <SEO 
          title="Our Tour Packages"
          description="Explore all our domestic and international tour packages."
          url="/destinations"
        />
        {/* Hero Section */}
        <div className="image-container">
          <img
            className="w-100"
            src="https://d19k5x9tl64mcw.cloudfront.net/goa4.jpg"
            alt="destination"
          />
       <div className="details-text-overlaps">
  <h1>Our Tour Packages</h1>
  <div
    className="quote-badge"
    onClick={() => {
      const phoneNumber = '+917568624246'; // Replace with your WhatsApp number
      const message = encodeURIComponent('Hi! I am interested in your tour packages.');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }}
    style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
  >
    Get a Quote
  </div>
</div>
        </div>

        {/* Filter Section */}
        <div className="filter-section">
          <div className="container">
            <div className="text-center">
              <button
                className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                <i className="fas fa-globe me-2"></i>
                All Packages
              </button>
              <button
                className={`filter-btn ${activeFilter === 'domestic' ? 'active' : ''}`}
                onClick={() => setActiveFilter('domestic')}
              >
                <i className="fas fa-flag me-2"></i>
                Domestic
              </button>
              <button
                className={`filter-btn ${activeFilter === 'international' ? 'active' : ''}`}
                onClick={() => setActiveFilter('international')}
              >
                <i className="fas fa-plane me-2"></i>
                International
              </button>
            </div>
          </div>
        </div>

        {/* Packages Section */}
        <div className="packages-section">
          <div className="container">
            <h2 className="section-title">
              {activeFilter === 'all'
                ? 'All Travel Packages'
                : activeFilter === 'domestic'
                ? 'Domestic Packages'
                : 'International Packages'}
            </h2>

            <div className="row g-4" key={activeFilter}>
              {getFilteredPackages().map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>

            {getFilteredPackages().length === 0 && (
              <div className="text-center py-5">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 className="text-muted">No packages found</h4>
                <p className="text-muted">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PackagesPage;
