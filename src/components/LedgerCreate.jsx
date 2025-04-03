// src/components/LedgerCreate.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/ledgerCreate.css';

const LedgerCreate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const company = JSON.parse(localStorage.getItem('createdCompany'));

  const [form, setForm] = useState({
    name: '',
    alias: '',
    group: 'Capital Account',
    inventory: false,
    mailname: '',
    address: '',
    country: '',
    balance: '',
  });

  const editLedger = location.state?.editLedger;
  const editIndex = location.state?.index;

  const accountGroups = [
    'Capital Account', 'Cash-in-Hand', 'Bank Accounts', 'Current Assets', 'Current Liabilities',
    'Direct Expenses', 'Indirect Expenses', 'Direct Incomes', 'Indirect Incomes',
    'Loans (Liability)', 'Loans & Advances (Asset)', 'Fixed Assets', 'Investments',
    'Stock-in-Hand', 'Sundry Debtors', 'Sundry Creditors', 'Sales Accounts', 'Purchase Accounts'
  ];

  useEffect(() => {
    if (editLedger) {
      setForm(editLedger);
    }
  }, [editLedger]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ledgers = JSON.parse(localStorage.getItem('ledgers')) || [];

    if (editIndex !== undefined) {
      ledgers[editIndex] = form;
    } else {
      ledgers.push(form);
    }

    localStorage.setItem('ledgers', JSON.stringify(ledgers));
    navigate('/accounts');
  };

  return (
    <div className="ledger-wrapper">
      <div className="ledger-title">Ledger Creation</div>
      <div className="company-name">{company?.name?.toUpperCase() || '---'}</div>

      <form className="ledger-form-tally" onSubmit={handleSubmit}>
        <div className="ledger-top-section">
          {/* LEFT BLOCK */}
          <div className="ledger-left">
            <div className="form-row">
              <label>Name :</label>
              <input name="name" value={form.name} onChange={handleChange} required />
            </div>

            <div className="form-row">
              <label>(alias) :</label>
              <input name="alias" value={form.alias} onChange={handleChange} />
            </div>

            <div className="form-row">
              <label>Under :</label>
              <select name="group" value={form.group} onChange={handleChange}>
                {accountGroups.map((grp, i) => (
                  <option key={i} value={grp}>{grp}</option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <label>Inventory values are affected ?</label>
              <span style={{ fontWeight: 'bold' }}>{form.inventory ? 'Yes' : 'No'}</span>
              <input
                type="checkbox"
                name="inventory"
                checked={form.inventory}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* RIGHT BLOCK */}
          <div className="ledger-right">
            <div className="subheading">Mailing Details</div>
            <div className="form-row">
              <label>Name :</label>
              <input name="mailname" value={form.mailname} onChange={handleChange} />
            </div>

            <div className="form-row">
              <label>Address :</label>
              <input name="address" value={form.address} onChange={handleChange} />
            </div>

            <div className="form-row">
              <label>Country :</label>
              <input name="country" value={form.country} onChange={handleChange} />
            </div>

            <div className="form-row">
              <label>Provide bank details :</label>
              <span style={{ fontWeight: 'bold' }}>No</span>
            </div>
          </div>
        </div>

        {/* BOTTOM BLOCK */}
        <div className="ledger-bottom">
          <label>Opening Balance (on 1-Jan-2025):</label>
          <input name="balance" value={form.balance} onChange={handleChange} />
        </div>

        <div className="accept-btn-row">
          <button type="submit" className="accept-btn">Accept (Enter)</button>
        </div>
      </form>
    </div>
  );
};

export default LedgerCreate;
