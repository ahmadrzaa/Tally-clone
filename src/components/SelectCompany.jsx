import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectCompany = () => {
  const navigate = useNavigate();
  const companies = JSON.parse(localStorage.getItem('allCompanies')) || [];

  const handleSelect = (company) => {
    localStorage.setItem('createdCompany', JSON.stringify(company));
    navigate('/dashboard');
  };

  const handleDelete = (index) => {
    const updated = companies.filter((_, i) => i !== index);
    localStorage.setItem('allCompanies', JSON.stringify(updated));
    if (updated.length > 0) {
      localStorage.setItem('createdCompany', JSON.stringify(updated[0]));
    } else {
      localStorage.removeItem('createdCompany');
    }
    window.location.reload();
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>Select a Company</h2>
      {companies.length === 0 ? (
        <p>No companies created yet.</p>
      ) : (
        <ul>
          {companies.map((c, i) => (
            <li key={i} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '15px' }}>
              <b>{c.name}</b> ({c.country})<br />
              {c.logo && <img src={c.logo} alt="Logo" style={{ width: '60px', marginTop: '5px' }} />}<br />
              <button onClick={() => handleSelect(c)}>Load</button>
              <button onClick={() => handleDelete(i)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate('/create-company')} style={{ marginTop: '20px' }}>Create New Company</button>
    </div>
  );
};

export default SelectCompany;
