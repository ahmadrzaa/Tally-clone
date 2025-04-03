// src/components/Banking.jsx
import React from 'react';
import '../styles/banking.css';

const Banking = () => {
  const company = JSON.parse(localStorage.getItem('createdCompany'));

  return (
    <div className="banking-wrapper">
      <div className="banking-header">Banking</div>
      <div className="company-bar">{company?.name?.toUpperCase() || '---'}</div>

      <div className="banking-section">
        <div className="bank-option">Reconcile Bank Accounts</div>
        <div className="bank-option">Bank Allocations</div>
        <div className="bank-option">Cheque Printing</div>
        <div className="bank-option">Deposit Slip</div>
        <div className="bank-option">E-Payments</div>
        <div className="bank-option">Banking Configurations</div>
      </div>
    </div>
  );
};

export default Banking;
