// src/components/StartupScreen.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/startup.css';
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts';

const StartupScreen = () => {
  const navigate = useNavigate();

  // Keyboard shortcuts
  useKeyboardShortcuts({
    Q: () => window.close(),
    L: () => navigate('/login'),
    G: () => navigate('/gst'),
    D: () => navigate('/ledger'),
    V: () => navigate('/vouchers'),
    E: () => navigate('/dashboard'),
    N: () => navigate('/create-company'), // N for New Company
    ENTER: () => console.log('ENTER pressed'),
    F1: () => console.log('F1 - Help'),
    F2: () => console.log('F2 - Gateway Servers'),
    ArrowUp: () => console.log('Arrow Up'),
    ArrowDown: () => console.log('Arrow Down'),
    ArrowLeft: () => console.log('Arrow Left'),
    ArrowRight: () => console.log('Arrow Right'),
  });

  // UI rendering
  return (
    <div className="startup-container">
      <div className="startup-box">
        <div className="startup-title-bar">Startup</div>
        <div className="startup-content">
          <p><b>Accounting Modules</b></p>

          <p className="clickable-option" onClick={() => navigate('/login')}>
            <span className="red">L :</span> <b>Login to User Account</b>
          </p>
          <p className="note">Access your account and continue with accounting tasks.</p>

          <p className="clickable-option" onClick={() => navigate('/gst')}>
            <span className="red">G :</span> <b>GST Settings</b>
          </p>
          <p className="note">Set up and manage GST details for your company.</p>

          <p className="clickable-option" onClick={() => navigate('/ledger')}>
            <span className="red">D :</span> <b>Create Ledger</b>
          </p>
          <p className="note">Add and manage your ledger entries.</p>

          <p className="clickable-option" onClick={() => navigate('/vouchers')}>
            <span className="red">V :</span> <b>Voucher Entry</b>
          </p>
          <p className="note">Enter and manage accounting vouchers.</p>

          <p className="clickable-option" onClick={() => navigate('/dashboard')}>
            <span className="red">E :</span> <b>Dashboard</b>
          </p>
          <p className="note">Overview of all financial activity.</p>

          <p className="clickable-option" onClick={() => alert("Educational Mode Coming Soon")}>
            <span className="red">W :</span> <b>Educational Mode</b>
          </p>
          <p className="note">Practice accounting without a license in restricted mode.</p>

          <p className="bottom-bar clickable-option" onClick={() => window.close()}>
            <span className="red">Q :</span> <b>Quit</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartupScreen;
