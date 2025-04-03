// src/components/Reports.jsx
import React, { useEffect, useState } from 'react';
import '../styles/reports.css';

const Reports = () => {
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

  const getTotalByType = (type) =>
    vouchers
      .filter((v) => v.type === type)
      .reduce((acc, v) => acc + parseFloat(v.amount || 0), 0);

  const totalSales = getTotalByType('Sales');
  const totalPurchase = getTotalByType('Purchase');
  const totalReceipts = getTotalByType('Receipt');
  const totalPayments = getTotalByType('Payment');

  const profitOrLoss = totalSales - totalPurchase;

  const stockValue = stockItems.reduce((acc, item) => {
    const qty = parseFloat(item.qty || 0);
    const rate = parseFloat(item.rate || 0);
    return acc + qty * rate;
  }, 0);

  return (
    <div className="reports-wrapper">
      <h2>Reports</h2>
      <div className="company-name">
        {company?.name ? `Company: ${company.name}` : 'No Company Selected'}
      </div>

      <div className="report-section">
        <h3>Profit & Loss Account</h3>
        <p>Total Sales: ₹{totalSales}</p>
        <p>Total Purchase: ₹{totalPurchase}</p>
        <p>
          <b>{profitOrLoss >= 0 ? 'Net Profit' : 'Net Loss'}: ₹{Math.abs(profitOrLoss)}</b>
        </p>
      </div>

      <div className="report-section">
        <h3>Balance Sheet</h3>
        <p>Total Receipts: ₹{totalReceipts}</p>
        <p>Total Payments: ₹{totalPayments}</p>
        <p>
          <b>Balance: ₹{totalReceipts - totalPayments}</b>
        </p>
      </div>

      <div className="report-section">
        <h3>Stock Summary</h3>
        <p>Total Stock Value: ₹{stockValue}</p>
      </div>
    </div>
  );
};

export default Reports;
