// src/components/TopNavButtons.jsx

import React from 'react';
import '../styles/topnavbuttons.css';

const TopNavButtons = () => {
  const buttons = [
    'P:Print', 'E:Export', 'M:E-Mail', 'O:Upload',
    'S:TallyShop', 'G:Language', 'K:Keyboard',
    'K:Control Centre', 'H:Support Centre', 'H:Help'
  ];

  return (
    <div className="top-nav-wrapper">
      <div className="top-nav-left">
        {buttons.map((label, index) => (
          <div className="nav-btn" key={index}>
            <b>{label.split(':')[0]}:</b> {label.split(':')[1]}
          </div>
        ))}
      </div>
      {/* <div className="top-nav-right">
        <div className="gateway-btn"><b>F2:</b> Gateway Servers</div>
      </div> */}
    </div>
  );
};

export default TopNavButtons;
