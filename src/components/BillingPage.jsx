// src/components/BillingPage.jsx

import React, { useState } from 'react';
import '../styles/billingPage.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // This is the important part


const BillingPage = () => {
  const [form, setForm] = useState({
    customer: '',
    item: '',
    qty: '',
    rate: '',
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bills = JSON.parse(localStorage.getItem('bills')) || [];
    bills.push(form);
    localStorage.setItem('bills', JSON.stringify(bills));
    alert('Bill saved');
  };

  return (
    <div className="billing-wrapper">
      <div className="billing-header">Sales Invoice / Billing</div>
      <form onSubmit={handleSubmit} className="billing-form">
        <label>Date:</label>
        <input type="date" name="date" value={form.date} onChange={handleChange} />

        <label>Customer:</label>
        <input name="customer" value={form.customer} onChange={handleChange} />

        <label>Item:</label>
        <input name="item" value={form.item} onChange={handleChange} />

        <label>Quantity:</label>
        <input name="qty" type="number" value={form.qty} onChange={handleChange} />

        <label>Rate:</label>
        <input name="rate" type="number" value={form.rate} onChange={handleChange} />

        <button type="submit" className="submit-btn">Save & Print</button>
      </form>
    </div>
  );
};

export default BillingPage;
