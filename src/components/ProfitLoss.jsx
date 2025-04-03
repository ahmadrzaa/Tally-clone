// src/components/ProfitLoss.jsx
import React from 'react';
import '../styles/profitLoss.css';

const ProfitLoss = () => {
  const company = JSON.parse(localStorage.getItem('createdCompany'));

  return (
    <div className="pl-wrapper">
      <div className="pl-header">Profit & Loss A/c</div>
      <div className="company-bar">{company?.name?.toUpperCase() || '---'}</div>

      <div className="pl-columns">
        <div className="column">
          <div className="column-title">Expenses</div>
          <div className="entry">Purchase: ₹40,000</div>
          <div className="entry">Salary: ₹10,000</div>
          <div className="entry">Rent: ₹5,000</div>
        </div>

        <div className="column">
          <div className="column-title">Incomes</div>
          <div className="entry">Sales: ₹80,000</div>
          <div className="entry">Commission: ₹5,000</div>
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;
