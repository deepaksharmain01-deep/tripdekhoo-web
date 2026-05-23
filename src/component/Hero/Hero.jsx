import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import { getOptimizedUrl } from "../../utils/imageUtils";

const indiaPackages = [
  { name: "Andaman and Nicobar", path: "AndamanAndNicobar" },
  { name: "Goa", path: "Goa" },
  { name: "Himachal", path: "Himachal" },
  { name: "Ladakh", path: "Ladakh" },
  { name: "Spiti", path: "Spiti" },
  { name: "Kashmir", path: "Kashmir" },
  { name: "Kerala", path: "Kerala" },
  { name: "Meghalaya", path: "Meghalaya" },
  { name: "Rajasthan", path: "Rajasthan" },
  { name: "South", path: "South" },
  { name: "Uttarakhand", path: "Uttarakhand" },
  { name: "Tamil Nadu", path: "TamilNadu" },
  { name: "Arunachal Pradesh", path: "ArunachalPradesh" },
  { name: "Bhutan", path: "Bhutan" }
];

const internationalPackages = [
  { name: "Bali", path: "Bali" },
  { name: "Dubai", path: "Dubai" },
  { name: "Europe", path: "Europe" },
  { name: "Kazakhstan", path: "Kazakhstan" },
  { name: "Maldives", path: "Maldives" },
  { name: "Mauritius", path: "Mauritius" },
  { name: "Singapore", path: "Singapore" },
  { name: "Thailand", path: "Thailand" },
  { name: "Vietnam", path: "Vietnam" },
  { name: "Japan", path: "Japan" },
  { name: "Sri Lanka", path: "Srilanka" },
  { name: "Egypt", path: "Egypt" }
];

const slides = [
  {
    img: "https://d19k5x9tl64mcw.cloudfront.net/Dubai3.jpg",
    text: "Dubai",
    subtitle: "City of Gold & Luxury"
  },
  {
    img: "https://d19k5x9tl64mcw.cloudfront.net/Malaysia1.jpg",
    text: "Malaysia",
    subtitle: "Truly Asia Experience"
  },
  {
    img: "https://d19k5x9tl64mcw.cloudfront.net/Bali1.jpg",
    text: "Bali",
    subtitle: "Island of Gods"
  },
  {
    img: "https://d19k5x9tl64mcw.cloudfront.net/south10.jpg",
    text: "Kerala",
    subtitle: "God's Own Country"
  },
  {
    img: "https://d19k5x9tl64mcw.cloudfront.net/kashmir10.jpg",
    text: "Ladakh",
    subtitle: "Land of High Passes"
  }
];

const Hero = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  // Preload the next slide
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % slides.length;
    const img = new Image();
    img.src = getOptimizedUrl(slides[nextIndex].img, 1920);
  }, [activeIndex]);

  /* Auto slider (paused when tab inactive) */
  useEffect(() => {
    let interval;

    const start = () => {
      interval = setInterval(() => {
        setActiveIndex((i) => (i + 1) % slides.length);
      }, 6000);
    };

    const stop = () => clearInterval(interval);

    document.addEventListener("visibilitychange", () => {
      document.hidden ? stop() : start();
    });

    start();
    return stop;
  }, []);

  const handleSearch = () => {
    const query = searchTerm.trim().toLowerCase();
    if (query.length < 3 || !/^[a-z\s]+$/i.test(query)) {
      setNotification({ type: "error", msg: "Enter a valid destination" });
      return;
    }

    setIsSearching(true);
    const all = [...indiaPackages, ...internationalPackages];
    const match = all.find(
      (p) => p.name.toLowerCase() === query || p.path.toLowerCase() === query
    );

    setTimeout(() => {
      setIsSearching(false);
      setSearchTerm("");

      if (match) {
        // setNotification({ type: "success", msg: `Redirecting to ${match.name}` });
        setTimeout(() => navigate(`/packages/${match.path}`), 1200);
      } else {
        setNotification({ type: "warning", msg: "Destination not found" });
      }
    }, 600);
  };

  return (
    <>
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.msg}
          <span onClick={() => setNotification(null)}>×</span>
        </div>
      )}

      <section className="hero">
        {/* SINGLE SLIDE */}
        <div
          className="slide active"
          style={{ backgroundImage: `url(${getOptimizedUrl(slides[activeIndex].img, 1920)})` }}
        />

        <div className="overlay" />

        <div className="location-info">
          📍 {slides[activeIndex].text} — {slides[activeIndex].subtitle}
        </div>

        <div className="hero-content">
          <h1 className="main-title-hero">Discover Your Next Adventure</h1>
          <p className="subtitle-hero">
            Luxury travel experiences crafted just for you
          </p>

          <div className="search-wrapper">
            <input
              className="search-input"
              placeholder={`Search "${slides[activeIndex].text}"`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button className="search-button" onClick={handleSearch}>
              {isSearching ? "⟳" : "🔍"}
            </button>
          </div>

          <div className="featureCard">
            Premium Destinations • Tailored Experiences • Luxury Service
          </div>
        </div>

        <div className="indicators">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
