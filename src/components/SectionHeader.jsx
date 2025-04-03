import React from 'react';
import '../styles/sectionheader.css';

const SectionHeader = () => {
  return (
    <div className="section-header">
      <div className="section-title">Startup</div>
      <div className="section-controls">
        <span><b>Ctrl + M</b></span>
        <span className="close-btn">X</span>
      </div>
    </div>
  );
};

export default SectionHeader;
