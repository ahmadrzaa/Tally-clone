// src/components/AccountsInfo.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/accountsInfo.css';

const AccountsInfo = () => {
  const navigate = useNavigate();
  const [ledgers, setLedgers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('ledgers')) || [];
    setLedgers(data);
  }, []);

  const deleteLedger = (index) => {
    const updated = [...ledgers];
    updated.splice(index, 1);
    setLedgers(updated);
    localStorage.setItem('ledgers', JSON.stringify(updated));
  };

  const editLedger = (ledger, index) => {
    navigate('/ledger-create', { state: { editLedger: ledger, index } });
  };

  return (
    <div className="accounts-info-wrapper">
      <div className="tally-title">Gateway of Tally</div>
      <div className="section-title">Accounts Info.</div>

      <div className="accounts-box">
        <div className="menu-group">
          <div className="menu-title">Ledgers</div>
          <div className="submenu-item" onClick={() => navigate('/ledger-create')}>Create</div>
          <div className="submenu-item">Display</div>
          <div className="submenu-item">Alter</div>
        </div>

        <div className="submenu-item" onClick={() => navigate('/dashboard')}>Quit</div>
      </div>

      {/* Display ledger list */}
      <div className="ledger-display-box">
        <h4>Created Ledgers</h4>
        {ledgers.length === 0 ? (
          <p>No ledgers created yet.</p>
        ) : (
          <ul className="ledger-list">
            {ledgers.map((ledger, index) => (
              <li key={index} className="ledger-item">
                <b>{ledger.name}</b> — {ledger.group} — {ledger.balance} {ledger.type}
                <div className="ledger-actions">
                  <button onClick={() => editLedger(ledger, index)}>Edit</button>
                  <button onClick={() => deleteLedger(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AccountsInfo;
