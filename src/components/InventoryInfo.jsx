// src/components/InventoryInfo.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/inventoryInfo.css';

const InventoryInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="inventory-info-wrapper">
      <div className="tally-title">Gateway of Tally</div>
      <div className="section-title">Inventory Info.</div>

      <div className="inventory-box">
        <div className="menu-group">
          <div className="menu-title">Stock Items</div>
          <div className="submenu-item" onClick={() => navigate('/stock-create')}>Create</div>
          <div className="submenu-item disabled">Display</div>
          <div className="submenu-item disabled">Alter</div>
        </div>

        <div className="menu-group">
          <div className="menu-title">Units of Measure</div>
          <div className="submenu-item disabled">Create</div>
          <div className="submenu-item disabled">Display</div>
          <div className="submenu-item disabled">Alter</div>
        </div>

        <div className="submenu-item" onClick={() => navigate('/dashboard')}>Quit</div>
      </div>
    </div>
  );
};

export default InventoryInfo;
