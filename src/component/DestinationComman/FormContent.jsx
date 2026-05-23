import { memo } from 'react';
import { User, Phone, Mail, Zap, Check } from 'lucide-react';

const FormContent = memo(({ formData, handleChange, handleSubmit, isSubmitting, isSubmitted, errors }) => {
  if (isSubmitted) {
    return (
      <div className="text-center py-5">
        <div className="mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success mx-auto"
            style={{
              width: '80px',
              height: '80px',
              animation: 'scaleIn 0.5s ease-out'
            }}
          >
            <Check size={40} color="white" />
          </div>
        </div>
        <h3 className="text-success mb-3 fw-bold">Thank You!</h3>
        <p className="text-muted fs-5">We'll connect with you shortly.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h3 className="mb-3 fw-bold" style={{ color: "#8c52ff" }}>Connect with Our Expert</h3>
        <p className="text-muted">Fill out the form below and we'll get back to you within 24 hours</p>
      </div>

      {/* Name Field */}
      <div className="mb-3">
        <div className="form-floating">
          <input
            type="text"
            name="name"
            id="name"
            className={`form-control form-control-lg border-2 ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name" className="text-muted d-flex align-items-center">
            <User size={16} className="me-2" />Your Full Name
          </label>
        </div>
        {errors.name && <div className="text-danger mt-1 ms-1">{errors.name}</div>}
      </div>

      {/* Phone Field */}
      <div className="mb-3">
        <div className="form-floating">
          <input
            type="tel"
            name="phone"
            id="phone"
            className={`form-control form-control-lg border-2 ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            maxLength={10}
          />
          <label htmlFor="phone" className="text-muted d-flex align-items-center">
            <Phone size={16} className="me-2" />Phone Number
          </label>
        </div>
        {errors.phone && <div className="text-danger mt-1 ms-1">{errors.phone}</div>}
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <div className="form-floating">
          <input
            type="email"
            name="email"
            id="email"
            className={`form-control form-control-lg border-2 ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email" className="text-muted d-flex align-items-center">
            <Mail size={16} className="me-2" />Email Address
          </label>
        </div>
        {errors.email && <div className="text-danger mt-1 ms-1">{errors.email}</div>}
      </div>

      {/* Submit Button */}
      <div className="d-grid gap-2">
        <button
          onClick={handleSubmit}
          className="btn btn-primary btn-lg rounded-pill py-3 fw-bold"
          disabled={isSubmitting}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            fontSize: '18px',
            transition: 'all 0.3s ease'
          }}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Connecting...
            </>
          ) : (
            <div className="d-flex align-items-center justify-content-center">
              <Zap size={20} className="me-2" />
              Connect with Expert
            </div>
          )}
        </button>
      </div>
    </div>
  );
});

export default FormContent;
