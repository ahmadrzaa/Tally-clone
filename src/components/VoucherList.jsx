// src/components/VoucherList.jsx
import React, { useEffect, useState } from 'react';
import '../styles/voucherList.css';

const VoucherList = () => {
  const [vouchers, setVouchers] = useState([]);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('vouchers')) || [];
    setVouchers(data);
    const cmp = JSON.parse(localStorage.getItem('createdCompany'));
    setCompany(cmp);
  }, []);

  return (
    <div className="voucher-list-wrapper">
      <h2>Voucher List</h2>
      <div className="company-name">
        {company?.name ? `Company: ${company.name}` : 'No Company Selected'}
      </div>

      {vouchers.length === 0 ? (
        <p>No vouchers found.</p>
      ) : (
        <table className="voucher-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Ledger</th>
              <th>Amount</th>
              <th>Narration</th>
            </tr>
          </thead>
          <tbody>
            {vouchers.map((v, index) => (
              <tr key={index}>
                <td>{v.date}</td>
                <td>{v.type}</td>
                <td>{v.ledger}</td>
                <td>{v.amount}</td>
                <td>{v.narration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default VoucherList;
