import React, { useState } from 'react';
import '../styles/inventoryVoucher.css';

const InventoryVoucherCreate = () => {
  const [form, setForm] = useState({
    date: '1-Jan-2025',
    sourceItem: '',
    sourceQty: '',
    sourceRate: '',
    destinationItem: '',
    destinationQty: '',
    destinationRate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem('inventoryVouchers')) || [];
    list.push(form);
    localStorage.setItem('inventoryVouchers', JSON.stringify(list));
    alert('Inventory Voucher Created');
  };

  return (
    <div className="inventory-wrapper">
      <div className="inventory-header">Inventory Voucher Creation</div>
      <div className="inventory-subheader">Stock Journal No. 1</div>
      <form onSubmit={handleSubmit}>
        <div className="voucher-table">
          <div className="voucher-section">
            <div className="voucher-title">Source (Consumption)</div>
            <label>Name of Item:</label>
            <input name="sourceItem" value={form.sourceItem} onChange={handleChange} />
            <label>Quantity:</label>
            <input name="sourceQty" value={form.sourceQty} onChange={handleChange} />
            <label>Rate:</label>
            <input name="sourceRate" value={form.sourceRate} onChange={handleChange} />
          </div>

          <div className="voucher-section">
            <div className="voucher-title">Destination (Production)</div>
            <label>Name of Item:</label>
            <input name="destinationItem" value={form.destinationItem} onChange={handleChange} />
            <label>Quantity:</label>
            <input name="destinationQty" value={form.destinationQty} onChange={handleChange} />
            <label>Rate:</label>
            <input name="destinationRate" value={form.destinationRate} onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="submit-btn">Accept (Enter)</button>
      </form>
    </div>
  );
};

export default InventoryVoucherCreate;
