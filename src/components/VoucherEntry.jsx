import React, { useState } from 'react';
import '../styles/voucherEntry.css';

const VoucherEntry = () => {
  const [voucher, setVoucher] = useState({
    date: '1-Jan-2025',
    type: 'Sales',
    debitAccount: '',
    creditAccount: '',
    amount: '',
    narration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVoucher((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem('vouchers')) || [];
    list.push(voucher);
    localStorage.setItem('vouchers', JSON.stringify(list));
    alert('Voucher Saved');
  };

  return (
    <div className="voucher-wrapper">
      <div className="voucher-title">Voucher Entry - {voucher.type}</div>
      <form onSubmit={handleSubmit} className="voucher-form">
        <label>Date:</label>
        <input name="date" value={voucher.date} onChange={handleChange} />

        <label>Type of Voucher:</label>
        <select name="type" value={voucher.type} onChange={handleChange}>
          <option>Sales</option>
          <option>Purchase</option>
          <option>Payment</option>
          <option>Receipt</option>
          <option>Journal</option>
          <option>Contra</option>
        </select>

        <label>Debit Account:</label>
        <input name="debitAccount" value={voucher.debitAccount} onChange={handleChange} />

        <label>Credit Account:</label>
        <input name="creditAccount" value={voucher.creditAccount} onChange={handleChange} />

        <label>Amount:</label>
        <input name="amount" value={voucher.amount} onChange={handleChange} />

        <label>Narration:</label>
        <input name="narration" value={voucher.narration} onChange={handleChange} />

        <button type="submit" className="submit-btn">Accept (Enter)</button>
      </form>
    </div>
  );
};

export default VoucherEntry;
