// src/components/VoucherPrint.jsx
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../styles/voucherPrint.css';

const VoucherPrint = () => {
  const [vouchers, setVouchers] = useState([]);
  const [company, setCompany] = useState(null);

  useEffect(() => {
    setVouchers(JSON.parse(localStorage.getItem('vouchers')) || []);
    setCompany(JSON.parse(localStorage.getItem('createdCompany')) || {});
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    doc.setFontSize(18);
    doc.text('Voucher Report', 14, 20);
    doc.setFontSize(12);
    doc.text(`Company: ${company?.name || 'N/A'}`, 14, 28);

    const tableBody = vouchers.map((v, index) => [
      index + 1,
      v.type,
      v.ledger,
      v.amount,
      v.date
    ]);

    doc.autoTable({
      head: [['#', 'Type', 'Ledger', 'Amount', 'Date']],
      body: tableBody,
      startY: 35,
      theme: 'striped'
    });

    doc.save('voucher-report.pdf');
  };

  return (
    <div className="voucher-print-wrapper">
      <h2>Voucher Report</h2>
      <div className="voucher-company">{company?.name || 'No Company Selected'}</div>
      <button className="print-btn" onClick={handleDownload}>
        Download PDF
      </button>
      <table className="voucher-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Ledger</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((v, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{v.type}</td>
              <td>{v.ledger}</td>
              <td>{v.amount}</td>
              <td>{v.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VoucherPrint;
