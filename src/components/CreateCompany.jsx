// src/components/CreateCompany.jsx

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/createCompany.css';

const CreateCompany = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    companyType: '',
    about: '',
    address: '',
    country: 'Bahrain',
    email: '',
    phone: '',
    currency: 'BHD',
    decimals: 2,
    logo: null
  });

  // Refs for keyboard navigation
  const refs = {
    name: useRef(),
    companyType: useRef(),
    about: useRef(),
    address: useRef(),
    country: useRef(),
    email: useRef(),
    phone: useRef(),
    currency: useRef(),
    decimals: useRef(),
  };

  useEffect(() => {
    refs.name.current.focus();
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') navigate('/');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, logo: reader.result }));
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('createdCompany', JSON.stringify(formData));
    navigate('/dashboard');
  };

  // Move focus to next field with Enter
  const handleKeyNav = (e, nextRefName) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      refs[nextRefName]?.current?.focus();
    }
  };

  return (
    <div className="company-creation-wrapper">
      <form className="company-form" onSubmit={handleSubmit}>
        <div className="form-title-bar">
          <span><b>Company</b></span>&nbsp;&nbsp;Creation
        </div>

        <div className="form-row">
          <label>Directory:</label>
          <span>C:\Users\Public\Tally.ERP9\Data</span>
        </div>

        <div className="form-row">
          <label>Name:</label>
          <input
            ref={refs.name}
            name="name"
            value={formData.name}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyNav(e, 'companyType')}
            required
          />
        </div>

        <div className="form-row">
          <label>Type:</label>
          <input
            ref={refs.companyType}
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyNav(e, 'about')}
          />
        </div>

        <div className="form-row">
          <label>About:</label>
          <textarea
            ref={refs.about}
            name="about"
            value={formData.about}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyNav(e, 'address')}
          />
        </div>

        <div className="form-row">
          <label>Address:</label>
          <input
            ref={refs.address}
            name="address"
            value={formData.address}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyNav(e, 'country')}
          />
        </div>

        <div className="form-row">
          <label>Country:</label>
          <select
            ref={refs.country}
            name="country"
            value={formData.country}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyNav(e, 'email')}
          >
            <option value="Bahrain">Bahrain</option>
            <option value="India">India</option>
            <option value="UAE">UAE</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>
        </div>

        <div className="form-row">
          <label>Email:</label>
          <input
            ref={refs.email}
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyNav(e, 'phone')}
          />
        </div>

        <div className="form-row">
          <label>Phone:</label>
          <input
            ref={refs.phone}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyNav(e, 'currency')}
          />
        </div>

        <div className="form-row">
          <label>Currency:</label>
          <select
            ref={refs.currency}
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyNav(e, 'decimals')}
          >
            <option value="BHD">BHD</option>
            <option value="INR">INR</option>
            <option value="AED">AED</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
          </select>
        </div>

        <div className="form-row">
          <label>Decimals:</label>
          <input
            ref={refs.decimals}
            type="number"
            name="decimals"
            value={formData.decimals}
            onChange={handleChange}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
          />
        </div>

        <div className="form-row">
          <label>Company Logo:</label>
          <input type="file" accept="image/*" onChange={handleLogoUpload} />
        </div>

        <div className="form-row center">
          <button type="submit">Create Company</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCompany;
