import React, { useMemo, memo } from 'react';
import './PeakTrail.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useNavigate } from 'react-router-dom';

const seasons = {
  Winters: [
    { name: 'Ladakh', img: 'https://d19k5x9tl64mcw.cloudfront.net/ladakh15.jpg' },
    { name: 'Europe', img: 'https://d19k5x9tl64mcw.cloudfront.net/europe5.jpg' },
    { name: 'Himachal', img: 'https://d19k5x9tl64mcw.cloudfront.net/himachalpradesh10.jpg' }
  ],
  Monsoons: [
    { name: 'Malaysia', img: 'https://d19k5x9tl64mcw.cloudfront.net/Malaysia10.jpg' },
    { name: 'Kerala', img: 'https://d19k5x9tl64mcw.cloudfront.net/south16.jpg' },
    { name: 'Bali', img: 'https://d19k5x9tl64mcw.cloudfront.net/Bali2.jpg' }
  ],
  Summers: [
    { name: 'Dubai', img: 'https://d19k5x9tl64mcw.cloudfront.net/Dubai2.jpg' },
    { name: 'Singapore', img: 'https://d19k5x9tl64mcw.cloudfront.net/Singapore2.jpg' },
    { name: 'Mauritius', img: 'https://d19k5x9tl64mcw.cloudfront.net/Mauritius10.jpg' }
  ]
};

const PeakTrail = () => {
  const navigate = useNavigate();

  // ✅ Memoized Swiper config to prevent re-render lag
  const swiperConfig = useMemo(() => ({
    grabCursor: true,
    modules: [EffectCoverflow, Autoplay],
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    speed: 600,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 45,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    loop: true,
    watchSlidesProgress: true,
  }), []);

  return (
    <div className="peak-trail-container text-center container">
      <h1 className="title">Peak Trails</h1>
      <p className="subtitle mb-5">According to weather, pack your bags...</p>

      <div className="row justify-content-center season-section">
        {Object.entries(seasons).map(([season, places]) => (
          <div key={season} className="col-md-3 mb-2">
            <h5 className="season-label">{season}</h5>

            <Swiper {...swiperConfig}>
              {places.map((place) => (
                <SwiperSlide key={place.name}>
                  <div
                    className="image-card"
                    onClick={() => navigate(`/packages/${place.name.toLowerCase()}`)}
                    style={{ cursor: 'pointer', willChange: 'transform' }}
                  >
                    <img
                      src={place.img}
                      alt={place.name}
                      loading="lazy"
                      decoding="async"
                      style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                    />
                    <div className="label">{place.name}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      <div className="text-end">
        <button
          className="btn text-decoration-none fw-bold"
          style={{ color: '#A55EFF' }}
          onClick={() => navigate('/destinations')}
        >
          Click for More
        </button>
      </div>
    </div>
  );
};

export default memo(PeakTrail);
