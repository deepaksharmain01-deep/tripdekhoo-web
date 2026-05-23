import React, { useState, useEffect } from 'react';
import { Plane, Globe, Users, Heart, Shield, Zap, Star, ArrowRight, CheckCircle, Award, Target, Eye } from 'lucide-react';

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
    { icon: Shield, title: "Transparency", desc: "Clear policies and fair pricing, no hidden charges" },
    { icon: Heart, title: "Customer First", desc: "Your journey is our priority" },
    { icon: CheckCircle, title: "Reliability", desc: "Consistent quality and dependable service" },
    { icon: Zap, title: "Innovation", desc: "Constantly improving through technology and better feedback" },
    { icon: Star, title: "Simplicity", desc: "Making complex travel easy and enjoyable" }
  ];

  const services = [
    { icon: "✈️", title: "Flight Booking", desc: "Competitive fares and quick booking across global and domestic routes" },
    { icon: "🏨", title: "Hotels", desc: "Verified stays from budget to luxury with clear pricing and facilities" },
    { icon: "📋", title: "Visa Services", desc: "Fast, reliable visa assistance for multiple countries" },
    { icon: "🎯", title: "Corporate Travel", desc: "Tailored to your business needs and budgets" },
    { icon: "👥", title: "Group Bookings", desc: "Special rates for families, friends, and corporate groups" },
    { icon: "📞", title: "24/7 Support", desc: "Always there to help, making international travel seamless for peace" }
  ];

  const stats = [
    { number: "500K+", label: "Happy Travelers" },
    { number: "200+", label: "Destinations" },
    { number: "99.8%", label: "Success Rate" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <>
      <div className="modern-about">
        {/* Hero Section */}
        <section className="hero-section position-relative overflow-hidden">
          <div className="container position-relative">
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
        <section id="welcome" className={`welcome-section position-relative transition-section ${isVisible.welcome ? 'visible' : ''}`}>
          <div className="section-decoration"></div>
          
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="welcome-content">
                  <h2 className="display-5 fw-bold mb-4">
                    Discover the World with Ease — Welcome to <span className="text-primary">TripDekhoo</span>
                  </h2>
                  
                  <p className="text-muted mb-4 lh-lg">
                    TripDekhoo is your one-stop destination designed to simplify the way you explore the world. 
                    Whether you're planning a casual road getaway, a luxury holiday, or just need a place to stay during an—
                    meeting, we're bringing you closest to your favorite destinations! Our commitment to excellence, has
                    earned us the trust of thousands of travelers worldwide.
                  </p>
                  
                  <p className="text-muted mb-4 lh-lg">
                    From flight bookings to hotel reservations, we make every aspect of your journey stress-free and 
                    accessible for everyone. No more juggling between sites, comparing prices, organizing plane or hostel
                    tours without your bookings. At TripDekhoo, we combine technology, trusted partnerships, and human
                    expertise to craft exceptional travel experiences. Ready to start your next travel adventure?
                  </p>

                  <div className="stats-row d-flex gap-4 mt-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="stat-item text-center">
                        <div className="stat-number h4 fw-bold text-primary mb-1">{stat.number}</div>
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
        <section id="mission" className={`mission-section position-relative transition-section ${isVisible.mission ? 'visible' : ''}`}>
          <div className="curved-top"></div>
          
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="mission-content text-center">
                  <div className="section-icon mb-4">
                    <Target size={40} className="text-primary" />
                  </div>
                  
                  <h2 className="display-5 fw-bold mb-4">
                    Our <span className="text-primary">Mission</span>
                  </h2>
                  
                  <p className="text-muted fs-6 lh-lg mb-5">
                    At TripDekhoo, our mission is to simplify and elevate every trip world-wide. We bring together 
                    transportation, accommodation, and essential travel services into one seamless platform designed to 
                    reduce hassle and save time. Focused on innovation, reliability, and customer satisfaction, we make it 
                    easier for travelers to enjoy meaningful experiences by putting user experience at the center. we take 
                    pride in delivering value that goes beyond basic bookings. From individual adventurers to corporate 
                    groups planning a weekend trip, we're here to make travel effortless, affordable, and more 
                    connected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className={`vision-section position-relative transition-section ${isVisible.vision ? 'visible' : ''}`}>
          <div className="vision-bg"></div>
          
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="vision-content text-center">
                  <div className="section-icon mb-4">
                    <Eye size={40} className="text-primary" />
                  </div>
                  
                  <h2 className="display-5 fw-bold mb-4">
                    Our <span className="text-primary">Vision</span>
                  </h2>
                  
                  <p className="text-muted fs-6 lh-lg">
                    To become the most trusted and accessible global travel platform — connecting people to experiences, places, 
                    and possibilities around the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="vision-decoration"></div>
        </section>

        {/* Why We Started Section */}
        <section id="why-started" className={`why-section position-relative transition-section ${isVisible['why-started'] ? 'visible' : ''}`}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="why-content text-center">
                  <h2 className="display-5 fw-bold mb-4">
                    Why We <span className="text-primary">Started?</span>
                  </h2>
                  
                  <p className="text-muted fs-6 lh-lg mb-4">
                    Travel should be accessible for all as we believe.
                  </p>
                  
                  <p className="text-muted fs-6 lh-lg">
                    TripDekhoo was founded with a vision to solve common travel challenges: scattered information, conflicting 
                    prices, limited travel options, and poor customer service. We realized that planning trips was often more 
                    stressful than the trip itself, which led us to create a platform that brings all travel essentials together — with clarity, 
                    transparency, and trust.
                  </p>
                  
                  <p className="text-muted fs-6 lh-lg">
                    Today, we're a testament to what exceptional support from trustworthy to tech-forward operations can achieve.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="aircraft-decoration"></div>
        </section>

        {/* What We Offer Section */}
        <section id="services" className={`services-section position-relative transition-section ${isVisible.services ? 'visible' : ''}`}>
          <div className="services-bg"></div>
          
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">
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
                        <h3 className="h6 fw-bold mb-2 text-primary">{service.title}</h3>
                        <p className="text-muted small mb-0 lh-lg">{service.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="values" className={`values-section position-relative transition-section ${isVisible.values ? 'visible' : ''}`}>
          <div className="values-decoration"></div>
          
          <div className="container">
            <div className="text-center mb-5">
              <div className="section-icon mb-4">
                <Award size={40} className="text-primary" />
              </div>
              <h2 className="display-5 fw-bold mb-3">
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
                          <h3 className="h6 fw-bold mb-2 text-primary">{value.title}</h3>
                          <p className="text-muted small mb-0 lh-lg">{value.desc}</p>
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

        <style jsx>{`
          :root {
            --primary-purple: #5f5bff;
            --primary-purple-light: #7975ff;
            --primary-purple-dark: #4c48cc;
            --primary-purple-50: rgba(95, 91, 255, 0.05);
            --primary-purple-100: rgba(95, 91, 255, 0.1);
            --primary-purple-200: rgba(95, 91, 255, 0.2);
            --primary-purple-300: rgba(95, 91, 255, 0.3);
            --secondary-purple: #8b87ff;
            --accent-purple: #a29bff;
            --light-purple: #e8e7ff;
            --bg-purple: #f7f7ff;
          }

          .modern-about {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            overflow-x: hidden;
          }

          /* Hero Section */
          .hero-section {
            padding: 120px 0 80px 0;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, var(--primary-purple-dark) 100%);
            position: relative;
          }

          .hero-decoration::before {
            content: '';
            position: absolute;
            top: 20%;
            right: 10%;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--primary-purple-300) 0%, transparent 70%);
          }

          .hero-decoration::after {
            content: '';
            position: absolute;
            bottom: 30%;
            left: 5%;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--secondary-purple) 0%, transparent 70%);
            opacity: 0.4;
          }

          .hero-badge {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 50px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 0.875rem;
          }

          .text-highlight {
            color: #7dd3fc;
            font-weight: 700;
          }

          .hero-illustration {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .bus-icon {
            animation: float 3s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          /* Welcome Section */
          .welcome-section {
            position: relative;
            padding: 80px 0;
          }

          .section-decoration::before {
            content: '';
            position: absolute;
            top: -50px;
            left: 0;
            width: 100%;
            height: 100px;
            background: linear-gradient(135deg, var(--primary-purple-dark) 0%, transparent 100%);
            clip-path: ellipse(100% 100% at 50% 0%);
          }

          .welcome-illustration {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .curved-decoration::before {
            content: '';
            position: absolute;
            top: 20%;
            right: -50px;
            width: 200px;
            height: 300px;
            background: linear-gradient(135deg, var(--primary-purple-100) 0%, transparent 100%);
            border-radius: 50%;
            transform: rotate(15deg);
          }

          .curved-decoration::after {
            content: '';
            position: absolute;
            bottom: 10%;
            right: 20px;
            width: 100px;
            height: 200px;
            background: linear-gradient(135deg, var(--accent-purple) 0%, transparent 100%);
            border-radius: 50%;
            transform: rotate(-30deg);
            opacity: 0.6;
          }

          /* Mission Section */
          .mission-section {
            position: relative;
            padding: 80px 0;
          }

          .curved-top::before {
            content: '';
            position: absolute;
            top: -50px;
            left: 0;
            width: 100%;
            height: 100px;
            background: #f8f9fa;
            clip-path: ellipse(80% 100% at 50% 0%);
          }

          .section-icon {
            display: flex;
            justify-content: center;
          }

          /* Vision Section */
          .vision-section {
            background: var(--bg-purple);
            position: relative;
            padding: 80px 0;
          }

          .vision-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary-purple-50) 0%, transparent 50%);
          }

          .vision-decoration::before {
            content: '';
            position: absolute;
            bottom: 20%;
            left: 10%;
            width: 150px;
            height: 150px;
            border: 2px dashed var(--primary-purple-200);
            border-radius: 50%;
          }

          .vision-decoration::after {
            content: '';
            position: absolute;
            top: 30%;
            right: 15%;
            width: 100px;
            height: 100px;
            border: 2px dashed var(--accent-purple);
            border-radius: 50%;
            opacity: 0.7;
          }

          /* Why Started Section */
          .why-section {
            position: relative;
            padding: 80px 0;
          }

          .aircraft-decoration::before {
            content: '✈️';
            position: absolute;
            top: 20%;
            right: 10%;
            font-size: 3rem;
            opacity: 0.2;
            animation: fly 10s linear infinite;
          }

          @keyframes fly {
            0% { transform: translateX(-100px) translateY(50px); }
            100% { transform: translateX(100px) translateY(-50px); }
          }

          /* Services Section */
          .services-section {
            background: var(--light-purple);
            position: relative;
            padding: 80px 0;
          }

          .services-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--primary-purple-50) 0%, transparent 100%);
          }

          .service-card {
            transition: all 0.3s ease;
            border: 1px solid rgba(95, 91, 255, 0.1);
          }

          .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px var(--primary-purple-200);
          }

          .service-icon-bg {
            width: 3rem;
            height: 3rem;
            background: var(--primary-purple-100);
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .service-icon {
            font-size: 1.5rem;
          }

          /* Values Section */
          .values-section {
            position: relative;
            padding: 80px 0;
          }

          .values-decoration::before {
            content: '';
            position: absolute;
            top: 20%;
            left: 5%;
            width: 300px;
            height: 200px;
            background: linear-gradient(135deg, var(--primary-purple-50) 0%, transparent 100%);
            border-radius: 50% 30% 70% 40%;
            transform: rotate(-15deg);
          }

          .curved-decoration-bottom::before {
            content: '';
            position: absolute;
            bottom: -50px;
            left: 0;
            width: 100%;
            height: 100px;
            background: #ffffff;
            clip-path: ellipse(100% 100% at 50% 100%);
          }

          .value-card {
            transition: all 0.3s ease;
            border: 1px solid var(--primary-purple-100);
          }

          .value-card:hover {
            background: var(--primary-purple-50) !important;
            transform: translateY(-3px);
          }

          .value-icon-bg {
            width: 3rem;
            height: 3rem;
            background: var(--primary-purple-100);
            border-radius: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          /* Stats */
          .stats-row {
            flex-wrap: wrap;
          }

          .stat-item {
            min-width: 80px;
          }

          /* Text Colors */
          .text-primary {
            color: var(--primary-purple) !important;
          }

          /* Transitions */
          .transition-section {
            opacity: 0;
            transform: translateY(2rem);
            transition: all 0.8s ease;
          }

          .transition-section.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Button Styles */
          .btn {
            font-weight: 500;
            letter-spacing: 0.01em;
            transition: all 0.3s ease;
          }

          .btn:hover {
            transform: translateY(-2px);
          }

          .btn-light:hover {
            background-color: var(--light-purple);
            border-color: var(--primary-purple);
            color: var(--primary-purple-dark);
          }

          /* Responsive */
          @media (max-width: 768px) {
            .hero-title {
              font-size: 2rem;
            }
            
            .stats-row {
              justify-content: center;
            }
            
            .stat-item {
              margin-bottom: 1rem;
            }
            
            .hero-section {
              padding: 100px 0 60px 0;
            }
            
            .welcome-section,
            .mission-section,
            .vision-section,
            .why-section,
            .services-section,
            .values-section {
              padding: 60px 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default AboutUsmain;

