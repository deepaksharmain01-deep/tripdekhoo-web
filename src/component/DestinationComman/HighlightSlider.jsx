import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useEffect } from 'react';

const HighlightSlider = ({ highlights,highlight_image }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="highlight-slider-wrapper position-relative">
      {/* External Navigation Buttons */}
      <button ref={prevRef} className="swiper-button-custom prev-btn">
        ◀
      </button>
      <button ref={nextRef} className="swiper-button-custom next-btn">
        ▶
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
     {highlights && highlight_image && highlights.map((text, index) => (
  <SwiperSlide key={index}>
    <div className="highlight-card-modern position-relative h-100">
      
      {/* Floating Number Badge */}
      <div className="highlight-number-badge">
        <span className="highlight-number">{String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Image Container */}
      <div className="highlight-image-container">
        <img
          src={highlight_image[index] || 'fallback.jpg'}
          alt={`Highlight ${index + 1}`}
          className="highlight-image"
        />
        <div className="highlight-gradient-overlay"></div>
        <div className="highlight-pattern-overlay"></div>

        {/* Floating Icon */}
        <div className="highlight-floating-icon">
          <div className="highlight-icon-inner">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="highlight-content">
        <div className="highlight-text-container">
          <p className="highlight-text">{text}</p>
        </div>

        {/* Action Button */}
        <div className="highlight-action">
          <button className="highlight-btn">
            <span className="highlight-btn-text">Explore More</span>
            <div className="highlight-btn-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="highlight-hover-glow"></div>
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </div>
  );
};

export default HighlightSlider;
