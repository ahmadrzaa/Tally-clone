// src/components/ImportData.jsx
import React from 'react';
import '../styles/importData.css';

const ImportData = () => {
  const company = JSON.parse(localStorage.getItem('createdCompany'));

  return (
    <div className="import-wrapper">
      <div className="import-header">Import Data</div>
      <div className="company-bar">{company?.name?.toUpperCase() || '---'}</div>

      <div className="import-box">
        <div className="import-option">Masters (XML)</div>
        <div className="import-option">Transactions (XML)</div>
        <div className="import-option">Bank Statements (CSV)</div>
        <div className="import-option">Stock Items (Excel)</div>
        <div className="import-option">Ledgers (Excel)</div>
      </div>
    </div>
  );
};

export default ImportData;
