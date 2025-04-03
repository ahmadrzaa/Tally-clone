// src/components/AnalysisVerification.jsx
import React, { useEffect, useState } from 'react';
import '../styles/analysisVerification.css';

const AnalysisVerification = () => {
  const [company, setCompany] = useState(null);
  const [ledgers, setLedgers] = useState([]);
  const [stockItems, setStockItems] = useState([]);
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    setCompany(JSON.parse(localStorage.getItem('createdCompany')));
    setLedgers(JSON.parse(localStorage.getItem('ledgers')) || []);
    setStockItems(JSON.parse(localStorage.getItem('stockItems')) || []);
    setVouchers(JSON.parse(localStorage.getItem('vouchers')) || []);
  }, []);

  const invalidLedgers = ledgers.filter(
    (l) => !l.name || !l.group || !l.balance
  );

  const unmatchedStock = stockItems.filter(
    (item) => !item.name || isNaN(item.qty) || isNaN(item.rate)
  );

  const emptyVouchers = vouchers.filter(
    (v) => !v.type || isNaN(v.amount) || !v.date
  );

  return (
    <div className="analysis-verification-wrapper">
      <h2>Analysis & Verification</h2>
      <div className="company-name">
        {company?.name ? `Company: ${company.name}` : 'No Company Selected'}
      </div>

      <div className="section">
        <h3>Ledger Checks</h3>
        <p>Total Ledgers: {ledgers.length}</p>
        <p>Incomplete Ledgers: {invalidLedgers.length}</p>
      </div>

      <div className="section">
        <h3>Stock Item Validation</h3>
        <p>Total Stock Items: {stockItems.length}</p>
        <p>Unmatched Stock Entries: {unmatchedStock.length}</p>
      </div>

      <div className="section">
        <h3>Voucher Sanity</h3>
        <p>Total Vouchers: {vouchers.length}</p>
        <p>Invalid Vouchers: {emptyVouchers.length}</p>
      </div>
    </div>
  );
};

export default AnalysisVerification;
