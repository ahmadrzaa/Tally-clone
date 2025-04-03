import React from 'react';
import '../styles/topbar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left-options">
        <span><b>F1:</b> Help</span>
        <span><b>P:</b> Print</span>
        <span><b>E:</b> Export</span>
        <span><b>M:</b> E-Mail</span>
        <span><b>O:</b> Upload</span>
      </div>
      <div className="right-options">
        <span><b>Q:</b> Quit</span>
      </div>
    </div>
  );
};

export default TopBar;
