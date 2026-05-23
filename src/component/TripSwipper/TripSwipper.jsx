import React, { useRef, useCallback, memo } from "react";
import { Container } from "react-bootstrap";
import "./TripSwipper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

const tripMoods = [
  { name: "Beach Mood", image: "https://d19k5x9tl64mcw.cloudfront.net/goa2.jpg" },
  { name: "Anniversary Trip", image: "https://d19k5x9tl64mcw.cloudfront.net/kashmir10.jpg" },
  { name: "Desert Mood", image: "https://d19k5x9tl64mcw.cloudfront.net/desert.webp" },
  { name: "Honeymoon Trip", image: "https://d19k5x9tl64mcw.cloudfront.net/Bali2.jpg" },
  { name: "Mountain Trip", image: "https://d19k5x9tl64mcw.cloudfront.net/tr15.jpg" },
  { name: "Surprise Trip", image: "https://d19k5x9tl64mcw.cloudfront.net/Vietnam1.jpg" },
  { name: "Birthday Celebration", image: "https://d19k5x9tl64mcw.cloudfront.net/Singapore1.jpg" },
  { name: "Work Anniversary", image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai5.jpg" },
  { name: "Candlelight Gateways", image: "https://d19k5x9tl64mcw.cloudfront.net/raj5.jpg" },
  { name: "Proposal Perfect", image: "https://d19k5x9tl64mcw.cloudfront.net/Thailand2.jpg" },
  { name: "Just Married Moments", image: "https://d19k5x9tl64mcw.cloudfront.net/Bali2.jpg" },
  { name: "Mountain Calling", image: "https://d19k5x9tl64mcw.cloudfront.net/kashmir9.jpg" },
  { name: "Beach and Breeze", image: "https://d19k5x9tl64mcw.cloudfront.net/goa15.jpg" },
  { name: "Desert Dream", image: "https://d19k5x9tl64mcw.cloudfront.net/desert2.webp" },
  { name: "Snowy Escape", image: "https://d19k5x9tl64mcw.cloudfront.net/kashmir8.jpg" },
  { name: "Birthday Bash Trip", image: "https://d19k5x9tl64mcw.cloudfront.net/Singapore2.jpg" },
  { name: "Bacherlorette Trip", image: "https://d19k5x9tl64mcw.cloudfront.net/goa10.jpg" },
  { name: "Workiverary Weekend", image: "https://d19k5x9tl64mcw.cloudfront.net/south12.jpg" },
  { name: "Luxary on a Budget", image: "https://d19k5x9tl64mcw.cloudfront.net/Vietnam2.jpg" },
  { name: "Insta-worthy spots", image: "https://d19k5x9tl64mcw.cloudfront.net/Bali2.jpg" },
  { name: "Foody-Trail", image: "https://d19k5x9tl64mcw.cloudfront.net/goa5.jpg" },
];

const TripSwipper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();

  const handleNavigate = useCallback(
    (name) => navigate(`/mood/${encodeURIComponent(name)}`),
    [navigate]
  );

  return (
    <Container className="trip-mood-container text-center">
      {/* ✅ Title and Description remain exactly as before */}
      <h2 className="trip-heading mb-3">Trip mood</h2>
      <p className="trip-desc mb-5">
        Based on your mood and preferences, we’ll offer personalized options.
        With over 5 years of experience in planning honeymoons and anniversaries,
        we’ve had the pleasure of making countless couples happy.
      </p>

      <div className="swiper-wrapper-custom position-relative d-flex align-items-center mt-4 mb-4">
        {/* Navigation Arrows */}
        <div ref={prevRef} className="swiper-custom-nav swiper-custom-prev">
          &#xab;
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={3}
          preloadImages={false}
          watchSlidesProgress={true}
          updateOnWindowResize={false}
          observer={false}
          observeParents={false}
          lazyPreloadPrevNext={1}
          speed={450}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => {
            requestAnimationFrame(() => {
              if (prevRef.current && nextRef.current) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
        >
          {tripMoods.map(({ name, image }) => (
            <SwiperSlide key={name}>
              <div
                className="trip-card"
                onClick={() => handleNavigate(name)}
                style={{ cursor: "pointer", willChange: "transform" }}
              >
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: "100%",
                    height: "80%",
                    objectFit: "cover",
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden",
                  }}
                />
                <h5 className="trip-title">{name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div ref={nextRef} className="swiper-custom-nav swiper-custom-next">
          &#xbb;
        </div>
      </div>
    </Container>
  );
};

export default memo(TripSwipper);
