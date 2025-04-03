import React from 'react';
import '../styles/rightpanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel">
      <div className="right-box"><b>F2:</b> Gateway Servers</div>
      {[...Array(7)].map((_, i) => (
        <div className="right-box" key={i}></div>
      ))}
    </div>
  );
};

export default RightPanel;
