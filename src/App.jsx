
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Details from './component/DestinationComman/Details'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Allpackages from './component/DestinationComman/Allpackages'
import MoodDetails from './component/TripSwipper/MoodDetails'
import ExpandedCustomised from './component/CustomisedTravellers/ExpandedCustomised'
import PackagesPage from './PackagesPage'
import Hotel from './component/Hotel'
import Visa from './component/Visa'
import Flight from './component/Flight'
import TermsAndConditions from './component/Policy/TermsandCondition'
import PrivacyPolicy from './component/Policy/PrivacyPolicy'
import CopyrightPolicy from './component/Policy/CopyrightPolicy'
import FloatingButtons from './FloatingButton'
import AboutUsmain from './component/AboutUs/AboutUsmain'
import ContactUs from './component/Contactus/Contactus'
import BlogComponent from './component/Blogs/BlogList'
import { ToastContainer } from 'react-toastify'
import DestinationHotels from './component/HotelBooking/DestinationHotels'
import RoomCategories from './component/HotelBooking/RoomCategories'
import ScrollToTop from './ScrolltoTop'
import Levelnext from './component/DestinationComman/Levelnext'
import Leveltwopages from './component/DestinationComman/Leveltwopages'
import BudgetPackages from './component/Packages/BudgetPackages'




function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/destinations" element={<PackagesPage />} />
          <Route path="/packages/:destination" element={<Details />} />
          <Route path="/mood/:moodName" element={<MoodDetails />} />
          <Route path="/cotravellers/:moodName" element={<ExpandedCustomised />} />
          <Route path="/packages/:destination/:subdestination/:id" element={<Leveltwopages />} />
          <Route path="/packages/:destination/:subdestination" element={<Levelnext />} />
          <Route path="/packages/:destination/itinerary/:packages" element={<Allpackages />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/TandC" element={<TermsAndConditions />} />
          <Route path="/Copyright" element={<CopyrightPolicy />} />
          <Route path="/blogsection" element={<BlogComponent />} />
          <Route path="/about" element={<AboutUsmain />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/hotel/destination/:name" element={<DestinationHotels />} />
          <Route path="/hotel/:name/:id" element={<RoomCategories />} />
          <Route path="/budget/:price" element={<BudgetPackages />} />


          <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
        </Routes>
        <Footer />
        <FloatingButtons />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          toastClassName="custom-toast"
          className="custom-toast-container"
        />
        <div className="w-100 py-2 d-flex bg-dark text-white" style={{ justifyContent: "center" }}>Tripdekhoo @2026 All right reserved</div>
      </BrowserRouter>
    </>
  )
}

export default App
