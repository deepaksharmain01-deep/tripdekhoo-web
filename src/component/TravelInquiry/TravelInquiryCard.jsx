import React, { useState } from 'react';
import './TravelInquiry.css';
import { toast } from 'react-toastify';

const TravelInquiryCard = ({
    defaultServiceType ,
    imageUrl,
    title = "Start Your Journey",
    subtitle = "Tell us what you need, and we'll make it happen."
}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        serviceType: defaultServiceType,
        destination: '',
        travelDate: '',
        notes: ''
    });
const today = new Date().toISOString().split("T")[0];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

const validateForm = () => {
  const nameRegex = /^[A-Za-z ]{2,50}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;        // Indian mobile
  const destinationRegex = /^[A-Za-z ]{2,50}$/;

  if (!formData.name.trim()) {
    toast.error("Name is required");
    return false;
  }

  if (!nameRegex.test(formData.name)) {
    toast.error("Enter a valid name (letters only)");
    return false;
  }

  if (!formData.email.trim()) {
    toast.error("Email is required");
    return false;
  }

  if (!emailRegex.test(formData.email)) {
    toast.error("Enter a valid email address");
    return false;
  }

  if (!formData.phone.trim()) {
    toast.error("Phone number is required");
    return false;
  }

  if (!phoneRegex.test(formData.phone)) {
    toast.error("Enter valid 10-digit mobile number");
    return false;
  }

  if (!formData.destination.trim()) {
    toast.error("Destination is required");
    return false;
  }

  if (!destinationRegex.test(formData.destination)) {
    toast.error("Enter valid destination (letters only)");
    return false;
  }

  if (!formData.travelDate) {
    toast.error("Travel date is required");
    return false;
  }

  return true;
};

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      if (!validateForm()) {
        toast.warning("Please fill all fields correctly.");
        return;
      }

      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd8irO3oaEYW-iHwLnKbr9BznY8fGE0ofWW4Qhm4i01aBX0HA/formResponse";
    const formDataGoogle = new FormData();

    // Text fields
    formDataGoogle.append("entry.1976584445", formData.name);
    formDataGoogle.append("entry.1559982109", formData.email);
    formDataGoogle.append("entry.112138152", formData.phone);
    formDataGoogle.append("entry.346880172", formData.destination);
    formDataGoogle.append("entry.1720829763", formData.serviceType);
formDataGoogle.append("entry.1398613187", formData.notes);
    // Date split
    const date = new Date(formData.travelDate);
    formDataGoogle.append("entry.1039554707_year", date.getFullYear());
    formDataGoogle.append("entry.1039554707_month", date.getMonth() + 1);
    formDataGoogle.append("entry.1039554707_day", date.getDate());

    try {
        await fetch(formUrl, {
            method: "POST",
            mode: "no-cors",
            body: formDataGoogle,
        });

        toast.success("Inquiry submitted successfully!");

        setFormData({
            name: '',
            email: '',
            phone: '',
            serviceType: defaultServiceType,
            destination: '',
            travelDate: '',
            notes: ''
        });
    } catch (err) {
        toast.error("Submission failed");
    }
    };

    return (
        <div className="travel-inquiry-card">
            <div
                className="travel-inquiry-image"
                style={imageUrl ? { backgroundImage: `url('${imageUrl}')` } : {}}
            >
                <div className="travel-inquiry-image-content">
                    <h2>Explore the World</h2>
                    <p>Let us handle the details while you create the memories. Flights, Visas, Hotels - all in one place.</p>
                </div>
            </div>
            <div className="travel-inquiry-form-section">
                <div className="text-center text-lg-start">
                    <h1 className="travel-inquiry-title">{title}</h1>
                    <p className="travel-inquiry-subtitle">{subtitle}</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="name">Full Name</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="email">Email Address</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="phone">Phone Number</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="destination"
                                    name="destination"
                                    placeholder="Destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="destination">Destination</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="travelDate"
                                    name="travelDate"
                                    value={formData.travelDate}
                                    onChange={handleChange}
                                    min={today}
                                    required
                                />
                                <label htmlFor="travelDate">Travel Date</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="notes"
                                    name="notes"
                                    style={{ height: '100px' }}
                                    value={formData.notes}
                                    onChange={handleChange}
                                ></textarea>
                                <label htmlFor="notes">Additional Requirements</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-gradient w-100 py-3">Submit Inquiry</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TravelInquiryCard;
