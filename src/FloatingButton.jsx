import { useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import ConnectForm from './component/DestinationComman/ConnectForm';
import './Floating.css'; // Import the CSS file

const FloatingButtons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Floating Buttons */}
      <div 
        className="floating-container position-fixed bottom-0 end-0 p-4 d-flex flex-column gap-3"
        style={{ zIndex: 1055 }}
      >
        <button 
          onClick={openModal}
          className="btn btn-primary floating-btn connect-btn d-flex align-items-center gap-2 rounded-pill px-4 py-3 fw-bold shadow-lg"
          style={{ fontSize: '16px' }}
          aria-label="Connect with us - Opens contact form"
        >
          <Phone size={20} />
          <span>Connect Now</span>
        </button>
        
        <a 
          href="https://wa.me/917568624246" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-success floating-btn whatsapp-btn d-flex align-items-center gap-2 rounded-pill px-4 py-3 fw-bold shadow-lg text-decoration-none"
          style={{ fontSize: '16px' }}
          aria-label="Contact us on WhatsApp - Opens in new tab"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
      </div>
      
      <ConnectForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default FloatingButtons;