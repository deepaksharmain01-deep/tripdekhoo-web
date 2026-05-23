import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MoodDetails.css';
import SEO from '../Common/SEO';
const moodDestinations = {
  'Beach Mood': [
    { name: 'Goa', image: 'https://d19k5x9tl64mcw.cloudfront.net/goa2.jpg' },
    { name: 'AndamanAndNicobar', image: 'https://d19k5x9tl64mcw.cloudfront.net/ad5.jpg' },
    { name: 'Bali', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bali1.jpg' },
  ],
  'Anniversary Trip': [
    { name: 'Kerala', image: 'https://d19k5x9tl64mcw.cloudfront.net/south3.jpg' },
    { name: 'Kashmir', image: 'https://d19k5x9tl64mcw.cloudfront.net/kashmir10.jpg' },
    { name: 'Maldives', image: 'https://d19k5x9tl64mcw.cloudfront.net/Maldives5.jpg' },
  ],
  'Desert Mood': [
    { name: 'Rajasthan', image: 'https://d19k5x9tl64mcw.cloudfront.net/raj5.jpg' },
    { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai10.jpg' },
  ],
  'Honeymoon Trip': [
    { name: 'Kashmir', image: 'https://d19k5x9tl64mcw.cloudfront.net/kashmir6.jpg' },
    { name: 'Bali', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bali2.jpg' },
    { name: 'Maldives', image: 'https://d19k5x9tl64mcw.cloudfront.net/Maldives20.jpg' },
  ],
  'Mountain Trip': [
   
    { name: 'Himachal', image: 'https://d19k5x9tl64mcw.cloudfront.net/himachalpradesh13.jpg' },
    { name: 'Uttrakhand', image: 'https://d19k5x9tl64mcw.cloudfront.net/uk5.jpg' },
  ],
  'Surprise Trip': [
    { name: 'Vietnam', image: 'https://d19k5x9tl64mcw.cloudfront.net/Vietnam1.jpg' },
    { name: 'Thailand', image: 'https://d19k5x9tl64mcw.cloudfront.net/Thailand10.jpg' },
    { name: 'Meghalaya', image: 'https://d19k5x9tl64mcw.cloudfront.net/ne2.jpg' },
  ],
  'Birthday Celebration': [ 
    { name: 'Goa', image: 'https://d19k5x9tl64mcw.cloudfront.net/goa3.jpg' },
    { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai9.jpg' },
    { name: 'Singapore', image: 'https://d19k5x9tl64mcw.cloudfront.net/Singapore1.jpg' },
  ],
  'Work Anniversary': [ 
    { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai4.jpg' },
    { name: 'Kerala', image: 'https://d19k5x9tl64mcw.cloudfront.net/south20.jpg' },
    { name: 'Mauritius', image: 'https://d19k5x9tl64mcw.cloudfront.net/Mauritius5.jpg' },
  ],
  'Candlelight Gateways': [ 
    { name: 'Maldives', image: 'https://d19k5x9tl64mcw.cloudfront.net/Maldives2.jpg' },
    { name: 'Rajasthan', image: 'https://d19k5x9tl64mcw.cloudfront.net/raj9.jpg' },
    { name: 'Kerela', image: 'https://d19k5x9tl64mcw.cloudfront.net/south10.jpg' },
  ],
  'Proposal Perfect': [ 
     { name: 'Europe', image: 'https://d19k5x9tl64mcw.cloudfront.net/europe5.jpg' },
    { name: 'Kashmir', image: 'https://d19k5x9tl64mcw.cloudfront.net/kashmir15.jpg' },
  ],
  'Just Married Moments': [ 
     { name: 'Bali', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bali10.jpg' },
    { name: 'Maldives', image: 'https://d19k5x9tl64mcw.cloudfront.net/Maldives4.jpg' },
    { name: 'Kerela', image: 'https://d19k5x9tl64mcw.cloudfront.net/south23.jpg' },
  ],
  'Mountain Calling': [
      { name: 'Himachal', image: 'https://d19k5x9tl64mcw.cloudfront.net/himachalpradesh1.jpg' },
    { name: 'Uttrakhand', image: 'https://d19k5x9tl64mcw.cloudfront.net/uk3.jpg' },
    { name: 'Bhutan', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bhutan2.jpg' },
  ],
  'Beach and Breeze': [ 
     { name: 'Goa', image: 'https://d19k5x9tl64mcw.cloudfront.net/goa2.jpg' },
    { name: 'Andaman', image: 'https://d19k5x9tl64mcw.cloudfront.net/ad4.jpg' },
    { name: 'Bali', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bali2.jpg' },
  ],
  'Desert Dream': [ 
    { name: 'Rajasthan', image: 'https://d19k5x9tl64mcw.cloudfront.net/raj7.jpg' },
    { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai2.jpg' },
  ],
  'Snowy Escape': [
    { name: 'Kashmir', image: 'https://d19k5x9tl64mcw.cloudfront.net/kashmir14.jpg' },
    { name: 'Spiti', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai3.jpg' },
    { name: 'Himachal', image: 'https://d19k5x9tl64mcw.cloudfront.net/himachalpradesh6.jpg' },
  ],
  'Birthday Bash Trip': [
    { name: 'Singapore', image: 'https://d19k5x9tl64mcw.cloudfront.net/Singapore1.jpg' },
    { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai2.jpg' },
    { name: 'Goa', image: 'https://d19k5x9tl64mcw.cloudfront.net/goa5.jpg' },
  ],
  'Bacherlorette Trip': [
    { name: 'Goa', image: 'https://d19k5x9tl64mcw.cloudfront.net/goa3.jpg' },
    { name: 'Thailand', image: 'https://d19k5x9tl64mcw.cloudfront.net/Thailand10.jpg' },
    { name: 'Bali', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bali2.jpg' },
  ],
  'Workiverary Weekend': [ 
    { name: 'Kerala', image: 'https://d19k5x9tl64mcw.cloudfront.net/south10.jpg' },
    { name: 'Dubai', image: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai7.jpg' },
    { name: 'Singapore', image: 'https://d19k5x9tl64mcw.cloudfront.net/Singapore5.jpg' },
  ],
  'Luxary on a Budget': [ 
    { name: 'Vietnam', image: 'https://d19k5x9tl64mcw.cloudfront.net/Vietnam2.jpg' },
    { name: 'Thailand', image: 'https://d19k5x9tl64mcw.cloudfront.net/Thailand2.jpg' },
    { name: 'Himachal', image: 'https://d19k5x9tl64mcw.cloudfront.net/himachalpradesh10.jpg' },
  ],
  'Insta-worthy spots': [ 
    { name: 'Bali', image: 'https://d19k5x9tl64mcw.cloudfront.net/Bali2.jpg' },
    { name: 'Kashmir', image: 'https://d19k5x9tl64mcw.cloudfront.net/kashmir20.jpg' },
    { name: 'Ladakh', image: 'https://d19k5x9tl64mcw.cloudfront.net/ladakh10.jpg' },
  ],
  'Foody-Trail': [ 
    { name: 'Thailand', image: 'https://d19k5x9tl64mcw.cloudfront.net/Thailand3.jpg' },
    { name: 'SouthIndia', image: 'https://d19k5x9tl64mcw.cloudfront.net/south15.jpg' },
    { name: 'Vietnam', image: 'https://d19k5x9tl64mcw.cloudfront.net/Vietnam1.jpg' },
  ],
};

const MoodDetails = () => {
  const { moodName } = useParams();
  const navigate = useNavigate();
  const destinations = moodDestinations[moodName] || [];
  
  // Get mood-specific descriptions
  const getMoodDescription = (mood) => {
    const descriptions = {
      'Beach Mood': 'Dive into crystal clear waters and feel the soft sand between your toes',
      'Anniversary Trip': 'Celebrate your love story with romantic getaways and intimate moments',
      'Desert Mood': 'Experience the mystique of golden dunes and starlit nights',
      'Honeymoon Trip': 'Begin your journey together with magical destinations for newlyweds',
      'Mountain Trip': 'Breathe in fresh mountain air and conquer majestic peaks',
      'Surprise Trip': 'Discover hidden gems and unexpected adventures waiting to unfold',
      'Birthday Celebration': 'Make your special day unforgettable with exciting birthday destinations',
      'Work Anniversary': 'Reward your hard work with well-deserved luxury escapes',
      'Candlelight Gateways': 'Romance awaits in these intimate and dreamy destinations',
      'Proposal Perfect': 'Pop the question in picture-perfect locations made for love',
      'Just Married Moments': 'Create your first memories as a married couple in paradise',
      'Mountain Calling': 'Answer the call of towering peaks and scenic mountain vistas',
      'Beach and Breeze': 'Let the ocean waves wash away your worries in tropical paradise',
      'Desert Dream': 'Immerse yourself in the enchanting beauty of desert landscapes',
      'Snowy Escape': 'Experience winter wonderlands and snow-capped adventures',
      'Birthday Bash Trip': 'Celebrate another year around the sun in style',
      'Bacherlorette Trip': 'Create unforgettable memories with your squad before the big day',
      'Workiverary Weekend': 'Toast to your professional achievements in luxurious settings',
      'Luxary on a Budget': 'Experience premium destinations without breaking the bank',
      'Insta-worthy spots': 'Capture picture-perfect moments at the most photogenic locations',
      'Foody-Trail': 'Embark on a culinary journey through flavors and local cuisines'
    };
    return descriptions[mood] || 'Discover amazing destinations tailored to your travel mood';
  };

  return (
    <>
      <SEO 
        key={moodName}
        title={`${moodName} Destinations`}
        description={getMoodDescription(moodName)}
        image={destinations[0]?.image}
        url={`/mood/${moodName}`}
      />
      {/* Custom CSS */}


      {/* Breadcrumb */}
      <div className="container">
        <nav aria-label="breadcrumb" className="pt-3">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/moods">Travel Moods</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {moodName}
            </li>
          </ol>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="hero-section-mood">
        {destinations[0] && (
          <img 
            src={destinations[0].image} 
            alt="Hero Background" 
            className="hero-bg-mood"
          />
        )}
        <div className="hero-overlay-mood"></div>
        <div className="hero-content-mood">
          <div className="mood-badge">{moodName}</div>
          <h1 className="hero-title-mood">
            {moodName}
          </h1>
          <p className="hero-subtitle-mood">
            {getMoodDescription(moodName)}
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
            <h2>Curated Destinations</h2>
            <p>
              Handpicked locations that perfectly match your {moodName.toLowerCase()} vibe. 
              Each destination offers unique experiences tailored to create unforgettable memories.
            </p>
          </div>
          
          <div className="row g-4 justify-content-center">
            {destinations.map((place, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="card destination-card-mood">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="card-img-top destination-image-mood"
                  />
                  <div className="card-body text-center p-4">
                    <h5 className="card-title">{place.name}</h5>
                    <p className="text-muted mb-3">
                      Experience the perfect {moodName.toLowerCase()} getaway in {place.name} with our specially curated packages.
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

export default MoodDetails;