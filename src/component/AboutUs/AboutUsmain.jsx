import React, { useState, useEffect } from 'react';
import { Plane, Globe, Users, Heart, Shield, Zap, Star, ArrowRight, CheckCircle, Award, Target, Eye } from 'lucide-react';
import './AboutUsmain.css';

const AboutUsmain = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    { icon: Shield, title: "Transparency", desc: "Clear pricing, real information, no hidden surprises" },
    { icon: Heart, title: "Customer First", desc: "Your journey is our priority" },
    { icon: CheckCircle, title: "Reliability", desc: "We partner only with trusted providers" },
    { icon: Zap, title: "Innovation", desc: " Constantly improving through technology and traveler feedback" },
    { icon: Star, title: "Simplicity", desc: "Making complex travel easy and enjoyable" }
  ];

  const services = [
    { icon: "✈️", title: "Flight Booking", desc: "Competitive fares and quick bookings across global and domestic routes" },
    { icon: "🏨", title: "Hotels", desc: "Verified stays from budget to luxury with clear pricing and inclusions" },
    { icon: "📋", title: "Visa Services", desc: "Fast, reliable visa assistance for multiple countries" },
    { icon: "🎯", title: "Customized Travel Packages", desc: "Tailored to your interests, mood, and budget" },
    { icon: "📞", title: "Booking Advisors", desc: "Real humans to help finalize your trip with the best offers" },
    { icon: "👥", title: "All-in-One Dashboard", desc: "Keep your bookings, documents, and updates in one place" }
  ];

  const stats = [
    { number: "5000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "99.8%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <>
      <div className="modern-about" style={{paddingTop: 'var(--navbar-height, 80px)'}}>
        {/* Hero Section */}
        <section className="hero-section position-relative overflow-hidden">    
          <div className="container position-relative py-5">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="hero-content text-white">
          
                  
                  <h1 className="hero-title display-2 fw-bold mb-4 lh-1">
                    We began our journey with a vision to bring <span className="text-highlight">global transportation</span><br/>
                    and travel services together in one place.
                  </h1>
                  
                </div>
              </div>
              
              <div className="col-lg-5">
                <div className="hero-illustration position-relative">
                  <div className="bus-icon">
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                      <rect x="10" y="20" width="90" height="40" rx="8" fill="white" opacity="0.9"/>
                      <rect x="15" y="25" width="15" height="12" rx="2" fill="#5f5bff"/>
                      <rect x="35" y="25" width="15" height="12" rx="2" fill="#5f5bff"/>
                      <rect x="55" y="25" width="15" height="12" rx="2" fill="#5f5bff"/>
                      <rect x="75" y="25" width="15" height="12" rx="2" fill="#5f5bff"/>
                      <circle cx="25" cy="70" r="8" fill="white"/>
                      <circle cx="85" cy="70" r="8" fill="white"/>
                      <rect x="30" y="45" width="50" height="8" rx="4" fill="#5f5bff"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section id="welcome" className={`welcome-section position-relative py-5 bg-light transition-section ${isVisible.welcome ? 'visible' : ''}`}>
          <div className="section-decoration"></div>
          
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="welcome-content">
                  <h2 className="display-5 fw-bold mb-4" style={{fontSize:"28px"}}>
                    Discover the World with Ease — Welcome to <span className="text-primary">TripDekhoo</span>
                  </h2>
                  
                  <p className="text-muted mb-4" style={{fontSize:"16px"}}>
                  TripDekhoo is your one-stop travel platform designed to simplify the way you explore the world. Whether you're planning a weekend getaway, a luxury holiday, or just need a place to stay on the go — we bring everything under one roof. From flights and hotels to visas and curated travel experiences, we make it easier than ever to plan, book, and enjoy your journeys.
                  </p>
                  
                  <p className="text-muted mb-4" style={{fontSize:"16px"}}>
We were born out of a simple yet powerful idea — to make travel smoother, smarter, and more accessible for everyone. No more hopping between sites, comparing dozens of options, or feeling unsure about your bookings. At TripDekhoo, we combine technology, trusted partnerships, and human support to deliver everything a traveler needs, in one seamless experience.

                  </p>

                  <div className="stats-row d-flex gap-4 mt-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="stat-item text-center">
                        <div className="stat-number h6 fw-bold text-primary mb-1">{stat.number}</div>
                        <div className="stat-label small text-muted">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="welcome-illustration position-relative">
                  <div className="curved-decoration"></div>
                  <div className="bus-illustration">
                    <svg width="300" height="200" viewBox="0 0 300 200" fill="none">
                      <rect x="50" y="80" width="200" height="60" rx="15" fill="#5f5bff" opacity="0.1"/>
                      <rect x="60" y="90" width="30" height="20" rx="3" fill="#5f5bff"/>
                      <rect x="100" y="90" width="30" height="20" rx="3" fill="#5f5bff"/>
                      <rect x="140" y="90" width="30" height="20" rx="3" fill="#5f5bff"/>
                      <rect x="180" y="90" width="30" height="20" rx="3" fill="#5f5bff"/>
                      <circle cx="80" cy="160" r="15" fill="#5f5bff"/>
                      <circle cx="220" cy="160" r="15" fill="#5f5bff"/>
                      <rect x="70" y="120" width="160" height="15" rx="7" fill="#5f5bff"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className={`mission-section position-relative py-1 bg-white transition-section ${isVisible.mission ? 'visible' : ''}`}>
          <div className="curved-top"></div>
          
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="mission-content text-center">
                  <div className="section-icon mb-4">
                    <Target size={30} className="text-primary" />
                  </div>
                  
                  <h2 className="display-5 fw-bold mb-4" style={{fontSize:"28px"}}>
                    Our <span className="text-primary" >Mission</span>
                  </h2>
                  
                  <p className="text-muted fs-6">
                    Our mission is to simplify and elevate the global travel experience.
 We aim to bring all essential travel services — flights, hotels, visas, and more — into a single platform.
 By putting travelers at the center, we deliver personalized, transparent, and efficient travel solutions.
 Our goal is to help you spend less time planning and more time exploring. We exist to make travel easier, faster, and more enjoyable — no matter where you're headed.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className={`vision-section position-relative transition-section ${isVisible.vision ? 'visible' : ''}`}>
          <div className="vision-bg"></div>
          
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="vision-content text-center">
                  <div className="section-icon mb-4">
                    <Eye size={30} className="text-primary" />
                  </div>
                  
                  <h2 className="display-5 fw-bold mb-4" style={{fontSize:"28px"}}>
                    Our <span className="text-primary">Vision</span>
                  </h2>
                  
                  <p className="text-muted fs-6">
                  To become the most trusted and accessible global travel platform — connecting people to experiences, places, and possibilities around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="vision-decoration"></div>
        </section>

        {/* Why We Started Section */}
        <section id="why-started" className={`why-section position-relative py-5 bg-white transition-section ${isVisible['why-started'] ? 'visible' : ''}`}>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="why-content text-center">
                  <h2 className="display-5 fw-bold mb-4" style={{fontSize:"28px"}}>
                    Why We <span className="text-primary">Started?</span>
                  </h2>
                  
                  <p className="text-muted fs-6 mb-2">
                   Travel should be exciting — not exhausting.
                  </p>
                  
                  <p className="text-muted fs-6">
                   TripDekhoo was founded with a vision to solve common travel challenges: scattered information, confusing bookings, visa delays, and lack of support.
 As travelers ourselves, we understood the need for a platform that brings everything together — with clarity, convenience, and care.
                  </p>
                  
                  <p className="text-muted fs-6">
                  Today, we are on a mission to offer end-to-end support, from the first search to your safe return.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="aircraft-decoration"></div>
        </section>

        {/* What We Offer Section */}
        <section id="services" className={`services-section position-relative py-5 transition-section ${isVisible.services ? 'visible' : ''}`}>
          <div className="services-bg"></div>
          
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3"style={{fontSize:"28px"}}>
                What We <span className="text-primary">Offer?</span>
              </h2>
            </div>

            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="service-card bg-white p-4 h-100 rounded-4 border-0 shadow-sm">
                    <div className="service-header d-flex align-items-start gap-3 mb-3">
                      <div className="service-icon-bg d-flex align-items-center justify-content-center">
                        <span className="service-icon">{service.icon}</span>
                      </div>
                      <div className="flex-grow-1">
                        <h3 className="fw-bold mb-2 text-primary" style={{fontSize:"18px"}}>{service.title}</h3>
                        <p className="text-muted small mb-0">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="values" className={`values-section position-relative py-5 bg-white transition-section ${isVisible.values ? 'visible' : ''}`}>
          <div className="values-decoration"></div>
          
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-icon mb-1">
                <Award size={30} className="text-primary" />
              </div>
              <h2 className="display-5 fw-bold mb-3"style={{fontSize:"28px"}}>
                Our Core <span className="text-primary">Values</span>
              </h2>
            </div>

            <div className="row g-4">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="value-card bg-light p-4 rounded-4 h-100">
                      <div className="d-flex align-items-start gap-3">
                        <div className="value-icon-bg d-flex align-items-center justify-content-center">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="fw-bold mb-2 text-primary" style={{fontSize:"18PX"}}>{value.title}</h3>
                          <p className="text-muted small mb-0">{value.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="curved-decoration-bottom"></div>
        </section>

       <section
  id="services"
  className={`services-section position-relative py-5 transition-section ${isVisible.services ? 'visible' : ''}`}
>
  <div className="services-bg"></div>

  <div className="container py-5">
    {/* Section Header */}
    <div className="text-center mb-1">
     
      <h2 className="display-6 fw-bold text-primary" style={{fontSize:"28px"}}>Who We Serve</h2>
    </div>
    {/* Main Paragraph */}
    <div className="row">
      <p>
        From solo travelers and families to honeymooners and business
        explorers, TripDekhoo is built for everyone who wants travel made
        simple. Whether you're exploring India or flying across continents,
        we’re here to guide and support you at every step.
      </p>
    </div>

    {/* Join Us on the Journey Section */}
    <div className="text-center mt-1">
      <h3 className="fw-bold">Join Us on the Journey</h3>
      <p>
        Thousands of travelers trust TripDekhoo for seamless, stress-free
        bookings and personalized travel solutions. We invite you to become a
        part of our growing travel family and see how simple planning your next
        adventure can be.
      </p>
      <p className="fw-semibold text-primary">
        Let’s make your next trip unforgettable.
      </p>
    </div>
  </div>
</section>

              </div>
    </>
  );
};

export default AboutUsmain;