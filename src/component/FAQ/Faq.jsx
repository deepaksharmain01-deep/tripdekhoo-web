import React, { useState } from 'react';

import './Faq.css';
import { categorizedFaqs } from './CategrorisedFaq';

const Faq = () => {
  const [openCategories, setOpenCategories] = useState({});
  const [openIndex, setOpenIndex] = useState({});

  const toggleCategory = (catIndex) => {
    setOpenCategories(prev => ({
      ...prev,
      [catIndex]: !prev[catIndex]
    }));
  };

  const toggle = (catIndex, faqIndex) => {
    setOpenIndex((prev) => ({
      ...prev,
      [catIndex]: prev[catIndex] === faqIndex ? null : faqIndex
    }));
  };

  const styles = `
    .Faq_heading, .faq_opener {
      color: #8c52ff;
    }
    .Faq_heading {
      font-size: 32px;
      font-weight: 700;
    }
    .faq_subheading {
      font-size: 18px;
      font-weight: 500;
    }
    .category-dropdown {
      border: none;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      border-radius: 0.75rem;
      overflow: hidden;
      margin-bottom: 1rem;
      background: white;
    }
    .category-header {
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
    }
    .category-header:hover {
      background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
    }
    .category-title {
      color: #1f2937;
      font-weight: 600;
      font-size: 1.125rem;
      margin-bottom: 0;
    }
    .category-badge {
      background: #8c52ff;
      color: white;
      font-size: 0.75rem;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-weight: 500;
    }
    .faq-item {
      border: 1px solid #f3f4f6;
      border-radius: 0.75rem;
      margin-bottom: 0.75rem;
      overflow: hidden;
      background: #f9fafb;
    }
    .faq-question {
      background: white;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
    }
    .faq-question:hover {
      background: #f3f4f6;
    }
    .faq-answer {
      background: white;
      border-top: 1px solid #f3f4f6;
    }
    .chevron-icon {
      color: #8c52ff;
      transition: transform 0.3s ease;
    }
    .chevron-rotated {
      transform: rotate(180deg);
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        <h2 className="text-center Faq_heading mb-1">Frequently Asked Questions</h2>
        <p className="text-center faq_subheading mb-5">By our customers</p>
        
        {categorizedFaqs.map((category, catIndex) => (
          <div key={catIndex} className="category-dropdown">
            {/* Category Header */}
            <div
              className="category-header d-flex justify-content-between align-items-center p-4"
              onClick={() => toggleCategory(catIndex)}
            >
              <div className="d-flex align-items-center">
                <div 
                  className="category-index me-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #8c52ff, #a855f7)',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    boxShadow: '0 4px 12px rgba(140, 82, 255, 0.3)'
                  }}
                >
                  {String(catIndex + 1).padStart(2, '0')}
                </div>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="d-flex align-items-center">
                <span className="category-badge me-3">
                  {category.faqs.length} questions
                </span>
                <div className={`chevron-icon ${openCategories[catIndex] ? 'chevron-rotated' : ''}`}>
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* FAQ Items */}
            {openCategories[catIndex] && (
              <div className="p-2">
                {category.faqs.map((faq, faqIndex) => (
                  <div className="faq-item" key={faqIndex}>
                    <div
                      className="faq-question d-flex justify-content-between align-items-center p-2"
                      onClick={() => toggle(catIndex, faqIndex)}
                    >
                      <div className="d-flex align-items-center">
                        <div 
                          className="faq-index me-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: '32px',
                            height: '32px',
                            backgroundColor: openIndex[catIndex] === faqIndex ? '#8c52ff' : '#e9ecef',
                            color: openIndex[catIndex] === faqIndex ? 'white' : '#6c757d',
                            borderRadius: '50%',
                            fontSize: '14px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {String(faqIndex + 1).padStart(2, '0')}
                        </div>
                        <h6 className="mb-0 pe-3" style={{ color: '#1f2937' }}>
                          {faq.question}
                        </h6>
                      </div>
                      <span className="faq_opener display-5">
                        {openIndex[catIndex] === faqIndex ? '−' : '+'}
                      </span>
                    </div>
                    <div
                      className={`faq-answer pt-2 pb-3 px-4 text-muted ${openIndex[catIndex] === faqIndex ? 'd-block' : 'd-none'}`}
                      style={{ marginLeft: '47px' }}
                    >
                      <p className="mb-0 lh-base">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;