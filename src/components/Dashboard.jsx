import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const menuItems = [
  { title: 'Masters', items: ['Accounts Info.', 'Inventory Info.'] },
  { title: 'Transactions', items: ['Accounting Vouchers', 'Inventory Vouchers', 'Billing'] },
  { title: 'Utilities', items: ['Import Data', 'Banking'] },
  {
    title: 'Reports',
    items: [
      'Balance Sheet',
      'Profit & Loss A/c',
      'Stock Summary',
      'Ratio Analysis',
      'Analysis & Verification',
      'Display',
      'Voucher Report'
    ]
  },
  { title: '', items: ['Quit'] }
];



const Dashboard = () => {
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [selected, setSelected] = useState(0);
  const [flatMenu, setFlatMenu] = useState([]);

  const currentDateTime = new Date().toLocaleString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  useEffect(() => {
    const flat = [];
    menuItems.forEach(section => {
      section.items.forEach(item => flat.push(item));
    });
    setFlatMenu(flat);
  }, []);

  useEffect(() => {
    const savedCompany = JSON.parse(localStorage.getItem('createdCompany'));
    setCompany(savedCompany || null);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setSelected((prev) => (prev + 1) % flatMenu.length);
    } else if (e.key === 'ArrowUp') {
      setSelected((prev) => (prev - 1 + flatMenu.length) % flatMenu.length);
    } else if (e.key === 'Enter') {
      handleMenuSelect(flatMenu[selected]);
    } else if (e.key === 'Escape' || e.key.toLowerCase() === 'q') {
      navigate('/');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, flatMenu]);

  const handleMenuSelect = (item) => {
    switch (item) {
      case 'Display': navigate('/display'); break;
      case 'Accounts Info.': navigate('/accounts'); break;
      case 'Inventory Info.': navigate('/inventory'); break;
      case 'Accounting Vouchers': navigate('/vouchers'); break;
      case 'Inventory Vouchers': navigate('/inventory-voucher-create'); break;
      case 'Import Data': navigate('/import-data'); break;
      case 'Banking': navigate('/banking'); break;
      case 'Balance Sheet': navigate('/balance-sheet'); break;
      case 'Profit & Loss A/c': navigate('/profit-loss'); break;
      case 'Stock Summary': navigate('/stock-summary'); break;
      case 'Ratio Analysis': navigate('/ratio-analysis'); break;
      case 'Analysis & Verification': navigate('/display-vouchers'); break;
      case 'Voucher Report': navigate('/voucher-print'); break;
      case 'Billing': navigate('/billing'); break;

      case 'Quit': navigate('/'); break;
      default: break;
    }
  };

  const handleDeleteCompany = () => {
    const all = JSON.parse(localStorage.getItem('allCompanies')) || [];
    const filtered = all.filter(c => c.name !== company.name);
    localStorage.setItem('allCompanies', JSON.stringify(filtered));
    localStorage.removeItem('createdCompany');
    setCompany(null);
    navigate('/select-company');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-left-panel">
        <div className="dashboard-header">
          <div><b>Gateway of Tally</b></div>
          <div>Current Period<br /><b>1-1-2025 to 31-12-2025</b></div>
          <div>Name of Company<br /><b>{company?.name || 'No Company Selected'}</b></div>
        </div>

        {company && (
          <div className="company-info-block">
            <div><b>Type:</b> {company.companyType || 'N/A'}</div>
            <div><b>About:</b> {company.about || 'N/A'}</div>
            <div><b>Address:</b> {company.address || '—'}</div>
            <div><b>Country:</b> {company.country}</div>
            <div><b>Email:</b> {company.email || '—'}</div>
            <div><b>Phone:</b> {company.phone || '—'}</div>
            <div><b>Currency:</b> {company.currency}</div>
            {company.logo && (
              <img src={company.logo} alt="Logo" className="company-logo" />
            )}
          </div>
        )}

        <div className="dashboard-actions">
          <button className="create-btn" onClick={() => navigate('/create-company')}>Create Company</button>
          <button className="create-btn" onClick={() => navigate('/select-company')}>Select Company</button>
          {company && (
            <button className="delete-btn" onClick={handleDeleteCompany}>Delete Company</button>
          )}
        </div>
      </div>

      {/* Gateway Menu */}
      <div className="gateway-box">
        <div className="box-title">Gateway of Tally</div>
        <ul className="gateway-menu">
          {menuItems.map((section, idx) => (
            <React.Fragment key={idx}>
              {section.title && <li className="section-title"><b>{section.title}</b></li>}
              {section.items.map((item, itemIdx) => {
                const flatIndex = flatMenu.indexOf(item);
                return (
                  <li
                    key={item}
                    className={`menu-item ${selected === flatIndex ? 'selected' : ''}`}
                    onClick={() => handleMenuSelect(item)}
                    onMouseEnter={() => setSelected(flatIndex)}
                  >
                    {item}
                  </li>
                );
              })}
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* Right Panel */}
      <div className="dashboard-right-panel">
        <div>Current Date<br /><b>{currentDateTime}</b></div>
        <div>Date of Last Entry<br /><b>No Vouchers Entered</b></div>
        <hr />
        <div className="right-key">F1: Select Cmp</div>
        <div className="right-key">F1: Shut Cmp</div>
        <div className="right-key">F2: Date</div>
        <div className="right-key">F2: Period</div>
        <div className="right-key">F3: Cmp Info</div>
        <div className="right-key">F4: Connect</div>
        <div className="right-key">F4: Disconnect</div>
        <div className="right-key">F11: Features</div>
        <div className="right-key">F12: Configure</div>
      </div>

      {/* Footer */}
      <div className="dashboard-footer">
        <div className="footer-left">Tally MAIN -- Gateway of Tally</div>
        <div className="footer-right">{currentDateTime}</div>
      </div>
    </div>
  );
};

export default Dashboard;
