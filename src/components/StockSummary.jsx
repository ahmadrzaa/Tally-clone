// src/components/StockSummary.jsx
import React, { useEffect, useState } from 'react';
import '../styles/stockSummary.css';

const StockSummary = () => {
  const [stocks, setStocks] = useState([]);
  const company = JSON.parse(localStorage.getItem('createdCompany'));

  useEffect(() => {
    const stockList = JSON.parse(localStorage.getItem('stockItems')) || [];
    setStocks(stockList);
  }, []);

  return (
    <div className="stock-summary-wrapper">
      <div className="stock-summary-header">Stock Summary</div>
      <div className="company-bar">{company?.name?.toUpperCase() || '---'}</div>

      <table className="stock-summary-table">
        <thead>
          <tr>
            <th>Name of Item</th>
            <th>Opening Qty</th>
            <th>Rate</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((item, index) => {
            const value = (parseFloat(item.qty || 0) * parseFloat(item.rate || 0)).toFixed(2);
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.rate}</td>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockSummary;
