// src/components/RatioAnalysis.jsx
import React from 'react';
import '../styles/ratioAnalysis.css';

const RatioAnalysis = () => {
  const company = JSON.parse(localStorage.getItem('createdCompany'));
  const ledgers = JSON.parse(localStorage.getItem('ledgers')) || [];

  const totalAssets = ledgers
    .filter(l => l.group.toLowerCase().includes('asset'))
    .reduce((sum, l) => sum + parseFloat(l.balance || 0), 0);

  const totalLiabilities = ledgers
    .filter(l => l.group.toLowerCase().includes('liability'))
    .reduce((sum, l) => sum + parseFloat(l.balance || 0), 0);

  const debtEquityRatio = totalLiabilities !== 0
    ? (totalAssets / totalLiabilities).toFixed(2)
    : 'N/A';

  return (
    <div className="ratio-analysis-wrapper">
      <div className="ratio-header">Ratio Analysis</div>
      <div className="company-bar">{company?.name?.toUpperCase() || '---'}</div>

      <div className="ratio-block">
        <div><b>Total Assets:</b> {totalAssets}</div>
        <div><b>Total Liabilities:</b> {totalLiabilities}</div>
        <div><b>Debt-Equity Ratio:</b> {debtEquityRatio}</div>
      </div>
    </div>
  );
};

export default RatioAnalysis;
