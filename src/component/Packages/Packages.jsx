import React, { useState } from 'react';
import './packages.css'; // Make sure to import the CSS
import { Link, useNavigate } from 'react-router-dom';
import packagesData from '../../../packages.json';

const Packages = ({show}) => {

  const budgets = [
    '10,000/-', '15,000/-', '30,000/-',
    '50,000/-', '75,000/-', '1,00,000/-', '5,00,000/-'
  ];

  const indiaPackages = [
    { name: 'Andaman and Nicobar', path: 'AndamanAndNicobar' },
    { name: 'Goa', path: 'Goa' },
    { name: 'Himachal', path: 'Himachal' },
    { name: 'Ladakh', path: 'Ladakh' },
    { name: 'Spiti', path: 'Spiti' },
    { name: 'Kashmir', path: 'Kashmir' },
    { name: 'Kerala', path: 'Kerala' },
    { name: 'Meghalaya', path: 'Meghalaya' },
    { name: 'Rajasthan', path: 'Rajasthan' },
    { name: 'South', path: 'southindia' },
    { name: 'Uttarakhand', path: 'uttrakhand' },
    { name: 'Tamil Nadu', path: 'TamilNadu' },
    { name: 'Arunachal Pradesh', path: 'ArunachalPradesh' },
    { name: 'Bhutan', path: 'Bhutan' },
  ];

  const internationalPackages = [
    { name: 'Bali', path: 'Bali' },
    { name: 'Dubai', path: 'Dubai' },
    { name: 'Europe', path: 'Europe' },
    { name: 'Kazakhstan', path: 'Kazakhstan' },
    { name: 'Maldives', path: 'Maldives' },
    { name: 'Mauritius', path: 'Mauritius' },
    { name: 'Singapore', path: 'Singapore' },
    { name: 'Thailand', path: 'Thailand' },
    { name: 'Vietnam', path: 'Vietnam' },
    { name: 'Japan', path: 'Japan' },
    { name: 'Sri Lanka', path: 'Srilanka' },
    { name: 'Egypt', path: 'Egypt' },
  ];

  const navigate = useNavigate();

  const handleBudgetClick = (budgetStr) => {
    const amount = parseInt(budgetStr.replace(/,/g, '').replace('/-', ''), 10);
    navigate(`/budget/${amount}`);
  };

  return (
    <div className="text-center py-1 px-3">
    {show &&(
      <>
        <h1 className="packages_left_Section_1 fw-bold">Your Holiday Budget</h1>
        <p className="packages_Subheading">Pick your budget and create your own plan</p>
    
        <div className="d-flex flex-wrap justify-content-center gap-3 pb-3">
          {budgets.map((budget, index) => (
            <div
              key={index}
              className="position-relative"
              style={{ width: '120px', height: '120px', cursor: 'pointer' }}
              onClick={() => handleBudgetClick(budget)}
            >
              {/* SVG background */}
              <img
                src='https://d19k5x9tl64mcw.cloudfront.net/price.svg'
                alt="Price Starburst"
                className="img-fluid w-100 h-100"
                style={{ objectFit: 'contain' }}
              />
        
              {/* Text overlay */}
              <div
                className="position-absolute top-50 start-50 translate-middle text-white text-center fw-bold"
                style={{ fontSize: '10px' }}
              >
                <div>UPTO</div>
                <div>{budget}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  
  
    <div className="mx-auto" style={{ maxWidth: '1200px', textAlign: "start" }}>
      <h5 className="fw-bold">India Tour Packages</h5>
      <p>
        {indiaPackages.map((place, i) => (
          <span key={i}>
            <Link
              to={`/packages/${place.path}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              {place.name} Tour Packages
            </Link>
            {i !== indiaPackages.length - 1 ? ' | ' : ''}
          </span>
        ))}
      </p>

      <h5 className="fw-bold mt-4">International Tour Packages</h5>
      <p>
        {internationalPackages.map((place, i) => (
          <span key={i}>
            <Link
              to={`/packages/${place.path}`}
              style={{ textDecoration: 'none', color: '#000' }}
            >
              {place.name} Tour Packages
            </Link>
            {i !== internationalPackages.length - 1 ? ' | ' : ''}
          </span>
        ))}
      </p>
    </div>
  </div>
  );
};

export default Packages;
