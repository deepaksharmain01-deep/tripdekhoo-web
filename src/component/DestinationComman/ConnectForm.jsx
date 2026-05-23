import { useCallback, useState } from 'react';
import { X } from 'lucide-react';
import FormContent from './FormContent';

const ConnectForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, email } = formData;

    let newErrors = { name: '', phone: '', email: '' };
    let isValid = true;

   const nameRegex = /^[A-Za-z ]{2,50}$/;

if (!name.trim()) {
  newErrors.name = "Name is required";
  isValid = false;
} else if (!nameRegex.test(name)) {
  newErrors.name = "Enter a valid name (letters only)";
  isValid = false;
}


    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phone) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      // 🚀 Submit data to Google Form (connected to your Sheet)
      const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZcKJzLLG0J81w-6yqRu7B0ImqTPluukcvdgtFBiYIIrvkVQ/formResponse";

      const formDataToSubmit = new FormData();

      // 🟢 Replace entry IDs with actual ones from your form fields:
      formDataToSubmit.append("entry.881723697", name);   // <-- ID for Name field
      formDataToSubmit.append("entry.976115346", phone);  // <-- ID for Phone field
      formDataToSubmit.append("entry.1397520932", email);  // <-- ID for Email field

      await fetch(formUrl, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors", // required for Google Forms
      });

      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "" });
      setErrors({ name: '', phone: '', email: '' });

      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting to Google Form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.6)'
        }}
      ></div>

      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="connectModalLabel"
        aria-hidden="true"
        style={{
          zIndex: 1060,
          animation: 'slideInUp 0.3s ease-out'
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content border-0 shadow-lg">
            <div className="modal-header border-0 pb-0">
              <div className="ms-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-transparent border-0 p-1"
                  aria-label="Close"
                >
                  <X size={24} color="black" />
                </button>
              </div>
            </div>

            <div className="modal-body pt-0">
              <FormContent
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                isSubmitted={isSubmitted}
                errors={errors}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectForm;

