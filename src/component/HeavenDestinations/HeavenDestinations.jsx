import React, { useMemo, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeavenDestinations.css';

const destinations = [
  { name: 'Thailand', image: "https://d19k5x9tl64mcw.cloudfront.net/Thailand5.jpg", description: 'Explore beautiful beaches and rich culture' },
  { name: 'Bali', image: "https://d19k5x9tl64mcw.cloudfront.net/Bali1.jpg", description: 'Discover spiritual temples and serene landscapes' },
  { name: 'Dubai', image: "https://d19k5x9tl64mcw.cloudfront.net/Dubai10.jpg", description: 'Experience luxury and modern architecture' },
  { name: 'Vietnam', image: "https://d19k5x9tl64mcw.cloudfront.net/Vietnam1.jpg", description: 'Enjoy breathtaking scenery and vibrant culture' },
  { name: 'Maldives', image: "https://d19k5x9tl64mcw.cloudfront.net/Maldives5.jpg", description: 'Paradise on earth with crystal clear waters' },
  { name: 'Europe', image: "https://d19k5x9tl64mcw.cloudfront.net/europe10.jpg", description: 'Breathtaking alpine landscapes' },
  { name: 'Kashmir', image: "https://d19k5x9tl64mcw.cloudfront.net/kashmir1.jpg", description: 'Heaven on Earth with stunning valleys' },
  { name: 'Ladakh', image: "https://d19k5x9tl64mcw.cloudfront.net/ladakh10.jpg", description: 'High-altitude desert with spiritual vibes' },
  { name: 'Kerala', image: "https://d19k5x9tl64mcw.cloudfront.net/south5.jpg", description: 'Backwaters, beaches, and green landscapes' },
  { name: 'Himachal', image: "https://d19k5x9tl64mcw.cloudfront.net/tr10.jpg", description: 'Hills, rivers, and adventure experiences' },
];

// ✅ Memoized Slide Component to avoid re-renders
const DestinationSlide = React.memo(({ destination, isActive, onClick }) => (
  <div
    className={`destination-cardss ${isActive ? 'active' : ''}`}
    onClick={onClick}
    style={{ willChange: 'transform' }}
  >
    <div className="destination-image">
      <img src={destination.image} alt={destination.name} loading="lazy" />
    </div>
    <div className="destination-overlay">
      <h3 className="namedestination">{destination.name}</h3>
      {isActive && <p className="destination-description">{destination.description}</p>}
    </div>
  </div>
));

function HeavenDestinations() {
  const navigate = useNavigate();

  const swiperSettings = useMemo(() => ({
    modules: [Navigation, Pagination, EffectCoverflow],
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    spaceBetween: 20,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 180, // reduced for smoother animation
      modifier: 1,
      slideShadows: false,
    },
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    loopAdditionalSlides: 1, // reduced to save memory
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 15 },
      576: { slidesPerView: 1.5 },
      768: { slidesPerView: 2.2 },
      992: { slidesPerView: 3.2 },
      1200: { slidesPerView: 4 },
    },
  }), []);

  const handleCardClick = useCallback((name) => {
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/packages/${slug}`);
  }, [navigate]);

  return (
    <div className="heaven-destinations container">
      <header className="text-center">
        <Container>
          <div className="escape-text">Escape to Our</div>
          <div className="heaven-text">Heaven Destinations</div>
          <p className="main-description mt-2">
            Discover the most popular travel destinations with us! We serve travel experiences in over 195 countries
            and specialize in both India and international tours. With 10+ years of expertise, we craft personalized
            itineraries and tour packages to fit every budget.
          </p>
        </Container>
      </header>

      <section className="destinations-showcase py-2">
        <Container fluid className="px-4">
          <Swiper {...swiperSettings} className="destinations-slider py-5">
            {destinations.map((d, i) => (
              <SwiperSlide key={d.name}>
                <DestinationSlide
                  destination={d}
                  isActive={i === 2} // static visual highlight (Dubai by default)
                  onClick={() => handleCardClick(d.name)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="discover-more text-center mt-3">
            <button className="btn btn-lg btn-explores" onClick={() => navigate('/destinations')}>
              Explore Destinations
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default React.memo(HeavenDestinations);
