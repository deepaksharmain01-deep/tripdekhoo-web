import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import HeavenDestinations from './component/HeavenDestinations/HeavenDestinations'
import CustomisedTravellers from './component/CustomisedTravellers/CustomisedTravellers'
import TripSwipper from './component/TripSwipper/TripSwipper'
import PopularDestination from './component/PopularDestination/PopularDestination'
import WhyUs from './component/WhyUs/WhyUs'
import TestimonialCard from './component/Testimonals/TestimonalCard'
import Packages from './component/Packages/Packages'
import Footer from './component/Footer/Footer'
import Faq from './component/FAQ/Faq'
import ReligiousTourPackages from './component/Religious/ReligiousTourPackages'
import PeakTrail from './component/PeakTrail/PeakTrail'

import SEO from './component/Common/SEO'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <SEO 
        title="Your Dream Vacation Partner"
        description="Explore the best tour packages with Tripdekhoo. From luxury stays to budget-friendly trips, we have it all."
        url="/"
      />
      {/* Hero Section - Full width */}
      <section className="hero-section-homepage">
        <Hero />
      </section>

      {/* Main Content Sections - Responsive container */}
      <main className="main-content">
        <div className="container-fluid px-0">
          {/* Heaven Destinations */}
          <section className="section-wrapper py-4 py-md-5">
            <div className="container">
             
                <HeavenDestinations />
             
            </div>
          </section>

          {/* Customised Travellers */}
          <section className="section-wrapper py-4 py-md-5">
            <div className="container">
           
                <CustomisedTravellers />
             
            </div>
          </section>

          {/* Trip Swipper */}
          <section className="section-wrapper py-4 py-md-5">
            <div className="container">
            
                <TripSwipper />
             
            </div>
          </section>

          {/* Popular Destination */}
          <section className="section-wrapper py-4 py-md-5">
            <div className="container">
             
                <PopularDestination />
              
            </div>
          </section>

          {/* Peak Trail */}
          <section className="section-wrapper py-4 py-md-5">
            <div className="container">
             
                <PeakTrail />
             
            </div>
          </section>

          {/* Religious Tour Packages */}
   

          {/* Testimonial Card */}
          <section className="section-wrapper py-1 py-md-1">
            <div className="container">
            
                <TestimonialCard />
            
            </div>
          </section>

          {/* FAQ */}
          <section className="section-wrapper py-4 py-md-5">
            <div className="container">
            
                <Faq />
             
            </div>
          </section>

          {/* Packages */}
          <section className="section-wrapper py-4 py-md-5">
            <div className="container">
            
                <Packages show={true}/>
              
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Homepage
