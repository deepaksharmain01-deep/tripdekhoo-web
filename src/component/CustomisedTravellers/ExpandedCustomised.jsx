import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../Common/SEO';
const customisedPackages = {
  'Couples': [
    { name: 'Maldives', image: 'https://d19k5x9tl64mcw.cloudfront.net/Maldives4.jpg' },
    { name: 'Kashmir', image: 'https://d19k5x9tl64mcw.cloudfront.net/kashmir5.jpg' },
    { name: 'Bali', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bali1.jpg' },
  ],
  'family-with-parents': [
    { name: 'Kerala', image: 'https://d19k5x9tl64mcw.cloudfront.net/south10.jpg' },
    { name: 'Rajasthan', image: 'https://d19k5x9tl64mcw.cloudfront.net/raj10.jpg' },
    { name: 'Bhutan', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bhutan2.jpg' },
  ],
  'family-with-kids': [
    { name: 'Singapore', image: 'https://d19k5x9tl64mcw.cloudfront.net/Singapore2.jpg' },
    { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai2.jpg' },
    { name: 'Goa', image: 'https://d19k5x9tl64mcw.cloudfront.net/goa2.jpg' },
  ],
  'Colleagues': [
    { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai2.jpg' },
    { name: 'Thailand', image: 'https://d19k5x9tl64mcw.cloudfront.net/Thailand4.jpg' },
    { name: 'Himachal', image: 'https://d19k5x9tl64mcw.cloudfront.net/himachalpradesh1.jpg' },
  ],
  'Childhood-Friends': [
    { name: 'Goa', image: 'https://d19k5x9tl64mcw.cloudfront.net/goa10.jpg' },
    { name: 'Vietnam', image: 'https://d19k5x9tl64mcw.cloudfront.net/Vietnam3.jpg' },
    { name: 'Europe', image: 'https://d19k5x9tl64mcw.cloudfront.net/europe2.jpg' },
  ],
  'Best-Friends': [
    { name: 'Ladakh', image: 'https://d19k5x9tl64mcw.cloudfront.net/ladakh10.jpg' },
    { name: 'ArunachalPradesh', image: 'https://d19k5x9tl64mcw.cloudfront.net/ne3.jpg' },
    { name: 'Spiti', image: 'https://d19k5x9tl64mcw.cloudfront.net/spiti3.jpg' },
  ],
};

const ExpandedCustomised = () => {
  const { moodName } = useParams();
  const navigate = useNavigate();
  const destinations = customisedPackages[moodName] || [];
  
  // Format mood name for display
  const formatMoodName = (mood) => {
    if (!mood) return 'Destinations';
    
 
    
    // Handle special cases for better display
    const moodMappings = {
      'Couples': 'Couples',
      'family-with-parents': 'Family with Parents',
      'family-with-kids': 'Family with Kids',
      'Colleagues': 'Colleagues',
      'Childhood-Friends': 'Childhood Friends',
      'Best-Friends': 'Best Friends'
    };
    
    return moodMappings[mood] || mood.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <>
      <SEO 
        key={moodName}
        title={`Customised Trips for ${formatMoodName(moodName)}`}
        description={`Explore handpicked destinations perfect for ${formatMoodName(moodName).toLowerCase()}.`}
        image={destinations[0]?.image}
        url={`/cotravellers/${moodName}`}
      />
      {/* Custom CSS */}
      <style jsx>{`
        .hero-section {
          position: relative;
          height: 60vh;
          min-height: 400px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.3;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          animation: fadeInUp 1s ease-out;
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          animation: fadeInUp 1s ease-out 0.2s both;
        }
        
        .quote-btn {
          background: linear-gradient(45deg, #ff6b6b, #ee5a52);
          border: none;
          padding: 12px 30px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          color: white;
          transition: all 0.3s ease;
          animation: fadeInUp 1s ease-out 0.4s both;
          box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }
        
        .quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
          background: linear-gradient(45deg, #ff5252, #d32f2f);
        }
        
        .destinations-section {
          padding: 80px 0;
          background: #f8f9fa;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        
        .section-title p {
          font-size: 1.1rem;
          color: #6c757d;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .destination-card {
          border: none;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          height: 100%;
        }
        
        .destination-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        
        .card-img-overlay {
          background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2rem;
        }
        
        .destination-image {
          height: 300px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .destination-card:hover .destination-image {
          transform: scale(1.05);
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #2c3e50;
        }
        
        .explore-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 10px 25px;
          border-radius: 25px;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
        }
        
        .explore-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
          background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
        }
        
        .breadcrumb {
          background: transparent;
          padding: 1rem 0;
          margin-bottom: 0;
        }
        
        .breadcrumb-item a {
          color: #667eea;
          text-decoration: none;
        }
        
        .breadcrumb-item.active {
          color: #6c757d;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .section-title h2 {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className="pt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/packages">Packages</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {formatMoodName(moodName)}
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        {destinations[0] && (
          <img 
            src={destinations[0].image} 
            alt="Hero Background" 
            className="hero-bg"
          />
        )}
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Perfect for {formatMoodName(moodName)}
          </h1>
          <p className="hero-subtitle">
            Discover handpicked destinations tailored for your travel mood
          </p>
          <button className="btn quote-btn">
            <i className="fas fa-paper-plane me-2"></i>
            Get Custom Quote
          </button>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="destinations-section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Destinations</h2>
            <p>
              Explore our carefully curated selection of destinations perfect for your travel style. 
              Each location offers unique experiences and unforgettable memories.
            </p>
          </div>
          
          <div className="row g-4">
            {destinations.map((place, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card destination-card">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="card-img-top destination-image"
                  />
                  <div className="card-body text-center p-4">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="text-muted mb-3">
                      Experience the beauty and culture of {place.name} with our specially designed packages.
                    </p>
                    <button
                      className="btn explore-btn w-100"
                      onClick={() => navigate(`/packages/${place.name}`)}
                    >
                      <i className="fas fa-compass me-2"></i>
                      Explore Destination
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {destinations.length === 0 && (
            <div className="text-center py-5">
              <h3 className="text-muted">No destinations found</h3>
              <p className="text-muted">Please select a valid travel mood to see available destinations.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExpandedCustomised;