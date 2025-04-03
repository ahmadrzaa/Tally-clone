import React, { useEffect, useState } from 'react';
import '../styles/displayVoucher.css';

const DisplayVoucher = () => {
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('vouchers')) || [];
    setVouchers(data);
  }, []);

  return (
    <div className="display-voucher-wrapper">
      <div className="display-title">Day Book (Vouchers)</div>

      {vouchers.length === 0 ? (
        <p>No vouchers found.</p>
      ) : (
        <table className="voucher-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Amount</th>
              <th>Narration</th>
            </tr>
          </thead>
          <tbody>
            {vouchers.map((v, i) => (
              <tr key={i}>
                <td>{v.date}</td>
                <td>{v.type}</td>
                <td>{v.debitAccount}</td>
                <td>{v.creditAccount}</td>
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

export default DisplayVoucher;
