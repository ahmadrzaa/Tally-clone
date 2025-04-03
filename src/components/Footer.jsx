import React from 'react';
import '../styles/footer.css';


const Footer = () => {
  const now = new Date();
  const date = now.toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric'
  });
  const time = now.toLocaleTimeString('en-GB');

  return (
    <div className="footer-wrapper">
      <div className="footer-row first-row">
        <span className="green-link">Q:</span> <span className="link">Quit</span>
      </div>

      <div className="footer-row second-row">
        <div className="footer-box product-title">Product</div>
        <div className="footer-box">Version & Updates</div>
        <div className="footer-box">License & Services</div>
        <div className="footer-box">Configuration</div>
        <div className="footer-box">Calculator</div>
      </div>

      <div className="footer-row third-row">
        <div className="footer-box logo-box">
          <div className="tally-logo">Tally</div>
          <div className="tally-tag">POWER OF SIMPLICITY</div>
          <div className="tally-erp9">Tally.ERP 9</div>
        </div>
        <div className="footer-box"><div>Series A Release 6.6.3</div><i>(Latest)</i></div>
        <div className="footer-box">Educational Mode</div>
        <div className="footer-box"><div>Gateway</div><div>ODBC Server</div></div>
        <div className="footer-box"><div>localhost:9999</div><div>9000</div></div>
      </div>

      <div className="footer-row fourth-row">
        <div className="footer-left">Tally MAIN -- Startup</div>
        <div className="footer-right">
          <span>{date}</span>&nbsp;&nbsp;
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
