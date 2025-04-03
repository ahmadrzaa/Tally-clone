import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/stockItemCreate.css';

const StockItemCreate = () => {
  const navigate = useNavigate();
  const company = JSON.parse(localStorage.getItem('selectedCompany'));

  const [form, setForm] = useState({
    name: '',
    alias: '',
    group: 'Primary',
    units: 'Not Applicable',
    duty: '',
    qty: '',
    rate: '',
    per: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stockItems = JSON.parse(localStorage.getItem('stockItems')) || [];
    stockItems.push({ ...form, company: company?.name });
    localStorage.setItem('stockItems', JSON.stringify(stockItems));
    navigate('/inventory');
  };

  return (
    <div className="stock-outer">
      <div className="stock-top-header">Stock Item Creation</div>
      <div className="company-title">{company?.name?.toUpperCase() || '---'}</div>

      <form onSubmit={handleSubmit} className="stock-layout">
        {/* LEFT BLOCK */}
        <div className="left-block">
          <div className="row">
            <label>Name :</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="row">
            <label>(alias) :</label>
            <input name="alias" value={form.alias} onChange={handleChange} />
          </div>

          <div className="row bold-label">Under :</div>
          <div className="row indent-value">♦ {form.group}</div>

          <div className="row bold-label">Units :</div>
          <div className="row indent-value">♦ {form.units}</div>
        </div>

        {/* RIGHT BLOCK */}
        <div className="right-block">
          <div className="bold-label underline">Statutory Information</div>
          <div className="row">
            <label>Rate of Duty (eg 5) :</label>
            <input name="duty" value={form.duty} onChange={handleChange} />
          </div>
        </div>

        {/* OPENING BALANCE */}
        <div className="opening-balance-row">
          <span>Opening Balance :</span>
          <div className="input-grid">
            <input name="qty" placeholder="Quantity" value={form.qty} onChange={handleChange} />
            <input name="rate" placeholder="Rate" value={form.rate} onChange={handleChange} />
            <input name="per" placeholder="per" value={form.per} onChange={handleChange} />
            <div className="value-box">
              {(form.qty && form.rate) ? `Value: ${parseFloat(form.qty) * parseFloat(form.rate)}` : ''}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">Accept (Enter)</button>
      </form>
    </div>
  );
};

export default StockItemCreate;
