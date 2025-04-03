// src/components/BalanceSheet.jsx
import React from 'react';
import '../styles/balanceSheet.css';

const BalanceSheet = () => {
  const company = JSON.parse(localStorage.getItem('createdCompany'));

  return (
    <div className="balance-wrapper">
      <div className="balance-header">Balance Sheet</div>
      <div className="company-bar">{company?.name?.toUpperCase() || '---'}</div>

      <div className="balance-columns">
        <div className="column">
          <div className="column-title">Liabilities</div>
          <div className="entry">Capital Account: ₹50,000</div>
          <div className="entry">Loans: ₹25,000</div>
          <div className="entry">Sundry Creditors: ₹10,000</div>
        </div>

        <div className="column">
          <div className="column-title">Assets</div>
          <div className="entry">Cash-in-Hand: ₹20,000</div>
          <div className="entry">Bank A/c: ₹30,000</div>
          <div className="entry">Stock-in-Hand: ₹35,000</div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheet;
