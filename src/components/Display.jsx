import React, { useEffect, useState } from 'react';
import '../styles/display.css';

const Display = () => {
  const [company, setCompany] = useState({});
  const [ledgers, setLedgers] = useState([]);
  const [stockItems, setStockItems] = useState([]);
  const [inventoryVouchers, setInventoryVouchers] = useState([]);

  useEffect(() => {
    const cmp = JSON.parse(localStorage.getItem('createdCompany'));
    const led = JSON.parse(localStorage.getItem('ledgers')) || [];
    const stock = JSON.parse(localStorage.getItem('stockItems')) || [];
    const inventory = JSON.parse(localStorage.getItem('inventoryVouchers')) || [];

    setCompany(cmp);
    setLedgers(led);
    setStockItems(stock);
    setInventoryVouchers(inventory);
  }, []);

  return (
    <div className="display-wrapper">
      <h2>Display</h2>
      <div className="display-company">
        Current Company: <b>{company?.name || 'No Company Selected'}</b>
      </div>

      <div className="section">
        <div className="section-title">Ledgers</div>
        {ledgers.length === 0 ? (
          <p>No Ledgers</p>
        ) : (
          <ul>
            {ledgers.map((l, i) => (
              <li key={i}>
                {l.name} ({l.group}) - {l.balance} {l.type}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <div className="section-title">Stock Items</div>
        {stockItems.length === 0 ? (
          <p>No Stock Items</p>
        ) : (
          <ul>
            {stockItems.map((item, i) => (
              <li key={i}>
                {item.name} - Qty: {item.qty}, Rate: {item.rate}, Unit: {item.unit}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="section">
        <div className="section-title">Inventory Vouchers</div>
        {inventoryVouchers.length === 0 ? (
          <p>No Inventory Vouchers</p>
        ) : (
          <ul>
            {inventoryVouchers.map((v, i) => (
              <li key={i}>
                Stock Journal #{i + 1} - {v.sourceItem} ➝ {v.destinationItem}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Display;
