import React, { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Import your logo


// Define the prefix for the image URLs
const IMAGE_PREFIX = "https://d19k5x9tl64mcw.cloudfront.net";

// Define all destination icons with the prefix
const tamilnaduIcon = `${IMAGE_PREFIX}/icons/1.png`;
const southindiaIcon = `${IMAGE_PREFIX}/icons/2.png`;
const keralaIcon = `${IMAGE_PREFIX}/icons/3.png`;
const uttrakhandIcon = `${IMAGE_PREFIX}/icons/4.png`;
const goaIcon = `${IMAGE_PREFIX}/icons/5.png`;
const andamanIcon = `${IMAGE_PREFIX}/icons/6.png`;
const rajasthanIcon = `${IMAGE_PREFIX}/icons/7.png`;
const spitiIcon = `${IMAGE_PREFIX}/icons/8.png`;
const kashmirIcon = `${IMAGE_PREFIX}/icons/9.png`;
const himachalIcon = `${IMAGE_PREFIX}/icons/10.png`;
const bhutanIcon = `${IMAGE_PREFIX}/icons/11.png`;
const meghalayaIcon = `${IMAGE_PREFIX}/icons/12.png`;
const arunachalIcon = `${IMAGE_PREFIX}/icons/13.png`;

// International icons
const singaporeIcon = `${IMAGE_PREFIX}/icons/14.png`;
const vietnamIcon = `${IMAGE_PREFIX}/icons/15.png`;
const japanIcon = `${IMAGE_PREFIX}/icons/16.png`;
const baliIcon = `${IMAGE_PREFIX}/icons/17.png`;
const dubaiIcon = `${IMAGE_PREFIX}/icons/18.png`;
const maldivesIcon = `${IMAGE_PREFIX}/icons/19.png`;
const mauritiusIcon = `${IMAGE_PREFIX}/icons/20.png`;
const europeIcon = `${IMAGE_PREFIX}/icons/21.png`;
const kenyaIcon = `${IMAGE_PREFIX}/icons/22.png`;
const egyptIcon = `${IMAGE_PREFIX}/icons/23.png`;
const thailandIcon = `${IMAGE_PREFIX}/icons/24.png`;
const malaysiaIcon = `${IMAGE_PREFIX}/icons/25.png`;
const kazakhstanIcon = `${IMAGE_PREFIX}/icons/26.png`;
const srilankaIcon = `${IMAGE_PREFIX}/icons/27.png`;

// Spiritual icons
const varanasiIcon = `${IMAGE_PREFIX}/temple/5.svg`;
const ayodhayaIcon = `${IMAGE_PREFIX}/temple/6.svg`;
const prayagrajIcon = `${IMAGE_PREFIX}/temple/7.svg`;
const ujjainIcon = `${IMAGE_PREFIX}/temple/8.svg`;
const vaishnodeviIcon = `${IMAGE_PREFIX}/temple/9.svg`;
const kedarnathIcon = `${IMAGE_PREFIX}/temple/10.svg`;
const haridwar = `${IMAGE_PREFIX}/temple/11.svg`;
const amarnathIcon = `${IMAGE_PREFIX}/temple/12.svg`;
const badrinathIcon = `${IMAGE_PREFIX}/temple/13.svg`;
const gangotriIcon = `${IMAGE_PREFIX}/temple/14.svg`;
const mathuraIcon = `${IMAGE_PREFIX}/temple/15.svg`;
const kurukshetraIcon = `${IMAGE_PREFIX}/temple/16.svg`;
const goldenTempleIcon = `${IMAGE_PREFIX}/temple/17.svg`;
const somnathIcon = `${IMAGE_PREFIX}/temple/18.svg`;
const dwarkaIcon = `${IMAGE_PREFIX}/temple/19.svg`;
const shirdiIcon = `${IMAGE_PREFIX}/temple/20.svg`;
const tribkeshwarIcon = `${IMAGE_PREFIX}/temple/21.svg`;
const shanishingnapur = `${IMAGE_PREFIX}/temple/22.svg`;
const Jagannathicon = `${IMAGE_PREFIX}/temple/23.svg`;
const KonarkSunTempleIcon = `${IMAGE_PREFIX}/temple/24.svg`;
const KamakhyaTempleIcon = `${IMAGE_PREFIX}/temple/25.svg`;
const bodhgyaIcon = `${IMAGE_PREFIX}/temple/26.svg`;
const mahabodhiIcon = `${IMAGE_PREFIX}/temple/27.svg`;
const tirupatiIcon = `${IMAGE_PREFIX}/temple/28.svg`;
const meenakshiicon = `${IMAGE_PREFIX}/temple/29.svg`;
const padmanabhaswamyIcon = `${IMAGE_PREFIX}/temple/30.svg`;
const murudeshwarIcon = `${IMAGE_PREFIX}/temple/31.svg`;
const sabarimalaIcon = `${IMAGE_PREFIX}/temple/32.svg`;
const guruvayurIcon = `${IMAGE_PREFIX}/temple/33.svg`;

// The rest of the code remains unchanged...
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [domesticSubmenuOpen, setDomesticSubmenuOpen] = useState(false);
  const [internationalSubmenuOpen, setInternationalSubmenuOpen] = useState(false);
  const [religious, setReligiousSubmenuOpen] = useState(false);

  // Optimized toggle functions using useCallback to prevent unnecessary re-renders
  const toggleDrawer = useCallback(() => {
    setDrawerOpen(prev => !prev);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setSubmenuOpen(false);
    setDomesticSubmenuOpen(false);
    setInternationalSubmenuOpen(false);
    setReligiousSubmenuOpen(false);
  }, []);

  const toggleSubmenu = useCallback(() => {
    setSubmenuOpen(prev => {
      const newState = !prev;
      // Close nested submenus when main submenu closes
      if (!newState) {
        setDomesticSubmenuOpen(false);
        setInternationalSubmenuOpen(false);
        setReligiousSubmenuOpen(false);
      }
      return newState;
    });
  }, []);

  const toggleDomesticSubmenu = useCallback(() => {
    setDomesticSubmenuOpen(prev => !prev);
  }, []);

  const toggleInternationalSubmenu = useCallback(() => {
    setInternationalSubmenuOpen(prev => !prev);
  }, []);

  const toggleReligiousSubmenu = useCallback(() => {
    setReligiousSubmenuOpen(prev => !prev);
  }, []);


  // Memoized destination data with custom icons
  const destinations = useMemo(() => ({
    domestic: [
      { path: "/packages/tamilnadu", label: "Tamil Nadu", icon: tamilnaduIcon },
      { path: "/packages/southindia", label: "South India", icon: southindiaIcon },
      { path: "/packages/kerala", label: "Kerala", icon: keralaIcon },
      { path: "/packages/uttrakhand", label: "Uttarakhand", icon: uttrakhandIcon },
      { path: "/packages/goa", label: "Goa", icon: goaIcon },
      { path: "/packages/andamanandnicobar", label: "Andaman & Nicobar", icon: andamanIcon },
      { path: "/packages/rajasthan", label: "Rajasthan", icon: rajasthanIcon },
      { path: "/packages/spiti", label: "Spiti", icon: spitiIcon },
      { path: "/packages/kashmir", label: "Kashmir", icon: kashmirIcon },
      { path: "/packages/himachal", label: "Himachal", icon: himachalIcon },
      { path: "/packages/bhutan", label: "Bhutan", icon: bhutanIcon },
      { path: "/packages/meghalaya", label: "Meghalaya", icon: meghalayaIcon },
      { path: "/packages/arunachalpradesh", label: "Arunachal Pradesh", icon: arunachalIcon },
      { path: "/packages/ladakh", label: "Ladakh", icon: spitiIcon },
      { path: "/packages/sikkim", label: "Sikkim", icon: arunachalIcon },
      { path: "/packages/Treks", label: "Treks", icon: himachalIcon }
    ],
    international: [
      { path: "/packages/singapore", label: "Singapore", icon: singaporeIcon },
      { path: "/packages/vietnam", label: "Vietnam", icon: vietnamIcon },
      { path: "/packages/japan", label: "Japan", icon: japanIcon },
      { path: "/packages/bali", label: "Bali", icon: baliIcon },
      { path: "/packages/dubai", label: "Dubai", icon: dubaiIcon },
      { path: "/packages/maldives", label: "Maldives", icon: maldivesIcon },
      { path: "/packages/mauritius", label: "Mauritius", icon: mauritiusIcon },
      { path: "/packages/europe", label: "Europe", icon: europeIcon },
      { path: "/packages/kenya", label: "Kenya", icon: kenyaIcon },
      { path: "/packages/egypt", label: "Egypt", icon: egyptIcon },
      { path: "/packages/thailand", label: "Thailand", icon: thailandIcon },
      { path: "/packages/malaysia", label: "Malaysia", icon: malaysiaIcon },
      { path: "/packages/kazakhstan", label: "Kazakhstan", icon: kazakhstanIcon },
      { path: "/packages/srilanka", label: "Sri Lanka", icon: srilankaIcon }
    ],
    spiritual: [
      // 🌄 North India
      { path: "/packages/varanasi", label: "Varanasi", icon: varanasiIcon },
      { path: "/packages/ayodhya", label: "Ayodhya", icon: ayodhayaIcon },
      { path: "/packages/prayagraj", label: "Prayagraj", icon: prayagrajIcon },
      { path: "/packages/ujjain", label: "Ujjain", icon: ujjainIcon },
      { path: "/packages/VaishnoDevi", label: "Vaishno Devi", icon: vaishnodeviIcon },
      { path: "/packages/Kedarnath", label: "Kedarnath Jyotirlinga", icon: kedarnathIcon },
      { path: "/packages/Haridwar&Rishikesh", label: "Haridwar & Rishikesh", icon: haridwar },
      { path: "/packages/AmarnathYatra", label: "Amarnath Cave", icon: amarnathIcon },
      { path: "/packages/badrinath", label: "Badrinath Temple", icon: badrinathIcon },
      { path: "/packages/Gangotri&Yamunotri", label: "Gangotri & Yamunotri", icon: gangotriIcon },
      { path: "/packages/Mathura&Vrindavan", label: "Mathura & Vrindavan", icon: mathuraIcon },
      { path: "/packages/kurukshetra", label: "Kurukshetra", icon: kurukshetraIcon },

      // 🌅 West India
      { path: "/packages/GoldenTemple", label: "Golden Temple (Amritsar)", icon: goldenTempleIcon },
      { path: "/packages/somnath", label: "Somnath Jyotirlinga", icon: somnathIcon },
      { path: "/packages/DwarkadhishTemple", label: "Dwarkadhish Temple", icon: guruvayurIcon },
      { path: "/packages/ShirdiSaiBabaTemple", label: "Shirdi Sai Baba", icon: shirdiIcon },
      { path: "/packages/Trimbakeshwar", label: "Trimbakeshwar Jyotirlinga", icon: tribkeshwarIcon },
      { path: "/packages/ShaniShingnapur", label: "Shani Shingnapur", icon: shanishingnapur },

      // 🌏 East India
      { path: "/packages/Jagannath", label: "Jagannath Puri", icon: Jagannathicon },
      { path: "/packages/KonarkSunTemple", label: "Konark Sun Temple", icon: KonarkSunTempleIcon },
      { path: "/packages/KamakhyaTemple", label: "Kamakhya Temple", icon: KamakhyaTempleIcon },
      { path: "/packages/bodhgaya", label: "Bodh Gaya", icon: bodhgyaIcon },
      { path: "/packages/MahabodhiTemple", label: "Mahabodhi Temple", icon: mahabodhiIcon },

      // 🌴 South India
      { path: "/packages/TirupatiBalajiTemple", label: "Tirupati Balaji", icon: tirupatiIcon },
      { path: "/packages/MaduraiMeenakshiTemple", label: "Meenakshi Temple", icon: meenakshiicon },
      { path: "/packages/PadmanabhaswamyTemple", label: "Padmanabhaswamy Temple", icon: padmanabhaswamyIcon },
      { path: "/packages/MurudeshwarTemple", label: "Murudeshwar Temple", icon: murudeshwarIcon },
      { path: "/packages/sabarimala", label: "Sabarimala", icon: sabarimalaIcon },
      { path: "/packages/guruvayur", label: "Guruvayur Temple", icon: guruvayurIcon }
    ]
  }), []);


  // const additionalPackages = useMemo(() => [
  //   { path: "/honeymoon-packages", label: "Honeymoon Package", icon: honeymoonIcon },
  //   { path: "/anniversary-packages", label: "Anniversary Celebration Package", icon: anniversaryIcon },
  //   { path: "/surprise-packages", label: "Surprise Tour Package", icon: surpriseIcon },
  //   { path: "/religious-packages", label: "Religious Tour Package", icon: religiousIcon },
  //   { path: "/trekking-packages", label: "Trekking Tour Package", icon: trekkingIcon },
  //   { path: "/adventure-packages", label: "Adventure Tour Package", icon: adventureIcon }
  // ], []);

  const mainNavItems = useMemo(() => [
    { path: "/hotel", label: "Hotel" },
    { path: "/visa", label: "Visa" },
    { path: "/flight", label: "Flight" },
    { path: "/blogsection", label: "Blogs" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact Us" }
  ], []);

  // Helper function to render destination columns for desktop dropdown
  const renderDestinationColumns = (destinationList, columns = 2) => {
    const itemsPerColumn = Math.ceil(destinationList.length / columns);
    const columnArrays = [];

    for (let i = 0; i < columns; i++) {
      columnArrays.push(
        destinationList.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn)
      );
    }

    return columnArrays.map((column, columnIndex) => (
      <div key={columnIndex} className="dropdown-column">
        {column.map((destination) => (
          <li key={destination.path}>
            <Link className="dropdown-item" to={destination.path}>
              <img
                src={destination.icon}
                alt={`${destination.label} Icon`}
                className="destination-icon"
              />
              {destination.label}
            </Link>
          </li>
        ))}
      </div>
    ));
  };

  // Helper function to prevent default link behavior
  const handlePreventDefault = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div className="container position-relative">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top nav_head">
        <div className="container-fluid">
          <div className="container px-3 px-md-4">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link className="navbar-brand" to="/">
                <img src={'https://d19k5x9tl64mcw.cloudfront.net/Logo1.png'} alt="Logo" className="navbar_logo" />
              </Link>

              {/* Desktop menu */}
              <ul className="navbar-nav ms-auto gap-4 d-none d-lg-flex align-items-center">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                {/* Tour Packages Dropdown */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="tourPackagesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={handlePreventDefault}
                  >
                    Tour Packages
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="tourPackagesDropdown">
                    {/* Domestic Dropdown */}
                    <li className="dropdown-submenu">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/domestic-destinations"
                        onClick={handlePreventDefault}
                      >
                        Domestic Tour Package
                      </Link>
                      <ul className="dropdown-menu dropdown-submenu-menu dropdown-menu-dark multi-column" style={{ maxHeight: "80vh", width: "fitContent", overflow: "auto" }}>
                        {renderDestinationColumns(destinations.domestic)}
                      </ul>
                    </li>


                    {/* International Dropdown */}
                    <li className="dropdown-submenu">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/international-destinations"
                        onClick={handlePreventDefault}
                      >
                        International Tour Package
                      </Link>
                      <ul className="dropdown-menu dropdown-submenu-menu dropdown-menu-dark multi-column" style={{ maxHeight: "80vh", overflow: "auto" }}>
                        {renderDestinationColumns(destinations.international)}
                      </ul>
                    </li>

                    <li className="dropdown-submenu">
                      <Link
                        className="dropdown-item dropdown-toggle"
                        to="/domestic-destinations"
                        onClick={handlePreventDefault}
                      >
                        Religious Tour Package
                      </Link>
                      <ul className="dropdown-menu dropdown-submenu-menu dropdown-menu-dark multi-column" style={{ maxHeight: "80vh", width: "fitContent", overflow: "auto" }}>
                        {renderDestinationColumns(destinations.spiritual)}
                      </ul>
                    </li>
                  </ul>
                </li>

                {/* Main Navigation Items */}
                {mainNavItems.map((item) => (
                  <li key={item.path} className="nav-item">
                    <Link className="nav-link" to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>

              {/* Mobile hamburger */}
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                onClick={toggleDrawer}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeDrawer} aria-label="Close menu">
          ×
        </button>
        <ul className="drawer-nav">
          <li><Link to="/" onClick={closeDrawer}>Home</Link></li>

          {/* Tour Packages with Submenu */}
          <li>
            <span className="drawer-link-with-submenu" onClick={toggleSubmenu}>
              Tour Packages {submenuOpen ? "▲" : "▼"}
            </span>
            {submenuOpen && (
              <ul className="drawer-submenu">
                {/* Domestic with nested submenu */}
                <li>
                  <span className="drawer-link-with-submenu">
                    <div onClick={toggleDomesticSubmenu} className="drawer-main-link">
                      Domestic Tour Package
                    </div>
                    <span onClick={toggleDomesticSubmenu} className="drawer-toggle">
                      {domesticSubmenuOpen ? "▲" : "▼"}
                    </span>
                  </span>
                  {domesticSubmenuOpen && (
                    <ul className="drawer-nested-submenu">
                      {destinations.domestic.map((destination) => (
                        <li key={destination.path}>
                          <Link to={destination.path} onClick={closeDrawer}>
                            <img
                              src={destination.icon}
                              alt={`${destination.label} Icon`}
                              className="destination-icon"
                            />
                            {destination.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* International with nested submenu */}
                <li>
                  <span className="drawer-link-with-submenu">
                    <div onClick={toggleInternationalSubmenu} className="drawer-main-link">
                      International Tour Package
                    </div>
                    <span onClick={toggleInternationalSubmenu} className="drawer-toggle">
                      {internationalSubmenuOpen ? "▲" : "▼"}
                    </span>
                  </span>
                  {internationalSubmenuOpen && (
                    <ul className="drawer-nested-submenu">
                      {destinations.international.map((destination) => (
                        <li key={destination.path}>
                          <Link to={destination.path} onClick={closeDrawer}>
                            <img
                              src={destination.icon}
                              alt={`${destination.label} Icon`}
                              className="destination-icon"
                            />
                            {destination.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <span className="drawer-link-with-submenu">
                    <div onClick={toggleReligiousSubmenu} className="drawer-main-link">
                      Sipritual Tour Package
                    </div>
                    <span onClick={toggleReligiousSubmenu} className="drawer-toggle">
                      {religious ? "▲" : "▼"}
                    </span>
                  </span>
                  {religious && (
                    <ul className="drawer-nested-submenu">
                      {destinations.spiritual.map((destination) => (
                        <li key={destination.path}>
                          <Link to={destination.path} onClick={closeDrawer}>
                            <img
                              src={destination.icon}
                              alt={`${destination.label} Icon`}
                              className="destination-icon"
                            />
                            {destination.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

              </ul>
            )}
          </li>

          {/* Main Navigation Items in Mobile */}
          {mainNavItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} onClick={closeDrawer}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {drawerOpen && <div className="drawer-overlay" onClick={closeDrawer}></div>}
    </div>
  );
};

export default Navbar;