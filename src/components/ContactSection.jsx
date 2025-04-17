import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    mobile: '',
    interest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Validation for name (only letters)
    if (name === 'name') {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }
    
    // Validation for mobile (only numbers)
    if (name === 'mobile') {
      if (!/^[0-9]*$/.test(value)) return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Submit form logic here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here (API call, etc.)
  };


  
  return (
    <div className="contact-section">
      <div className="contact-overlay"></div>
      <div className="contact-container">
        <div className="contact-content">
          <h1>Contact us</h1>
          
          <p>Scaling Up Start Ups! Lets contact us to know better how we can Help !<br></br><b>hello@ekovits.com</b></p>
        </div>
        
        <div className="contact-form ">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="underline-input"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="underline-input"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-row">
              <div className="form-group half-width">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="underline-input"
                />
              </div>
              <div className="form-group half-width">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="underline-input"
                />
                {errors.mobile && <span className="error-message">{errors.mobile}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="underline-select"
              >
                <option value="">What you are looking for?</option>
                <option value="web-development">Web Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="underline-input"
                rows="3"
              />
            </div>
            
            <button type="submit" className="submit-btn">Submit </button>
          </form>
        </div>
      </div>
    </div>

    
  );
};



export default ContactSection;