// src/components/VoucherTypeCreate.jsx
import React, { useState } from 'react';
import '../styles/voucher.css';

const VoucherTypeCreate = () => {
  const [form, setForm] = useState({
    name: '',
    alias: '',
    abbreviation: '',
    numbering: 'Automatic',
    printAfterSaving: false,
    effectiveDates: false,
    optionalDefault: false,
    narration: true,
    narrationPerLedger: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = JSON.parse(localStorage.getItem('voucherTypes')) || [];
    list.push(form);
    localStorage.setItem('voucherTypes', JSON.stringify(list));
    alert('Voucher Type Created');
  };

  return (
    <div className="voucher-type-wrapper">
      <div className="voucher-header">Voucher Type Creation</div>
      <form onSubmit={handleSubmit} className="voucher-form">
        <div className="row">
          <label>Name :</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="row">
          <label>(alias) :</label>
          <input name="alias" value={form.alias} onChange={handleChange} />
        </div>

        <div className="split-group">
          <div className="section">
            <div className="section-title">General</div>
            <div className="row"><label>Select type of voucher :</label><input name="abbreviation" value={form.abbreviation} onChange={handleChange} /></div>
            <div className="row"><label>Method of voucher numbering :</label><input name="numbering" value={form.numbering} onChange={handleChange} /></div>
          </div>
          <div className="section">
            <div className="section-title">Printing</div>
            <div className="row">
              <label>Print voucher after saving ?</label>
              <input type="checkbox" name="printAfterSaving" checked={form.printAfterSaving} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="row"><label>Use effective dates for vouchers ?</label><input type="checkbox" name="effectiveDates" checked={form.effectiveDates} onChange={handleChange} /></div>
        <div className="row"><label>Make optional by default ?</label><input type="checkbox" name="optionalDefault" checked={form.optionalDefault} onChange={handleChange} /></div>
        <div className="row"><label>Allow narration ?</label><input type="checkbox" name="narration" checked={form.narration} onChange={handleChange} /></div>
        <div className="row"><label>Provide narration per ledger ?</label><input type="checkbox" name="narrationPerLedger" checked={form.narrationPerLedger} onChange={handleChange} /></div>

        <div style={{ marginTop: 20 }}>
          <button type="submit">Create Voucher Type</button>
        </div>
      </form>
    </div>
  );
};

export default VoucherTypeCreate;
