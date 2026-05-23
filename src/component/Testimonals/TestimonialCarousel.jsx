import React, { useEffect, useState } from "react";
import "./testimonal.css";

const TestimonialCarousel = ({ testimonials }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Random avatar
  const randomAvatar = () =>
    `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 50) + 1}`;

  const renderCard = (t, i) => (
    <div className="tv-card" key={i}>
      <p className="tv-review">"{t.review}"</p>
      <div className="tv-user">
        <img src={randomAvatar()} alt="User" className="tv-avatar" />
        <div>
          <h6 className="tv-name">{t.name}</h6>
          <small className="tv-role">{t.location}</small>
        </div>
      </div>
    </div>
  );

  // MOBILE: 1 marquee column
  if (isMobile) {
    return (
      <div className="tv-section">
        <div className="tv-grid single">
          <div className="tv-column up">
            <div className="marquee mobile-marquee">
              {[...testimonials, ...testimonials].map((t, i) =>
                renderCard(t, i)
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // DESKTOP: 3 columns
  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <div className="tv-section">
      <div className="tv-grid">
        <div className="tv-column up">
          <div className="marquee">
            {[...col1, ...col1].map(renderCard)}
          </div>
        </div>

        <div className="tv-column down">
          <div className="marquee">
            {[...col2, ...col2].map(renderCard)}
          </div>
        </div>

        <div className="tv-column up">
          <div className="marquee">
            {[...col3, ...col3].map(renderCard)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
