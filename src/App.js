// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutContainer from './components/LayoutContainer';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import GSTSettings from './components/GSTSettings';
import LedgerPage from './components/LedgerPage';
import Vouchers from './components/Vouchers';
import CreateCompany from './components/CreateCompany';
import SelectCompany from './components/SelectCompany';
import AccountsInfo from './components/AccountsInfo';
import LedgerCreate from './components/LedgerCreate';
import InventoryInfo from './components/InventoryInfo';
import StockItemCreate from './components/StockItemCreate';
import InventoryVoucherCreate from './components/InventoryVoucherCreate';
import InventoryDisplay from './components/inventoryDisplay';
import VoucherTypeCreate from './components/VoucherTypeCreate';
import DisplayVoucher from './components/DisplayVoucher';
import Display from './components/Display';
import VoucherEntry from './components/VoucherEntry';
import VoucherList from './components/VoucherList';
import Reports from './components/Reports';
import RatioAnalysis from './components/RatioAnalysis';
import AnalysisVerification from './components/AnalysisVerification';
import VoucherPrint from './components/VoucherPrint';
import BillingPage from './components/BillingPage'; // You’ll get this file next if not added yet



function App() {
  return (
    <div style={{ backgroundColor: '#FFF8DC', height: '100vh' }}>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutContainer />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gst" element={<GSTSettings />} />
          <Route path="/ledger" element={<LedgerPage />} />
          <Route path="/vouchers" element={<Vouchers />} />
          <Route path="/create-company" element={<CreateCompany />} />
          <Route path="/select-company" element={<SelectCompany />} />
          <Route path="/accounts" element={<AccountsInfo />} />
          <Route path="/ledger-create" element={<LedgerCreate />} />
          <Route path="/inventory" element={<InventoryInfo />} />
          <Route path="/stock-create" element={<StockItemCreate />} />
          <Route path="/inventory-voucher-create" element={<InventoryVoucherCreate />} />
          <Route path="/inventory-display" element={<InventoryDisplay />} />
          <Route path="/voucher-type-create" element={<VoucherTypeCreate />} />
          <Route path="/display-vouchers" element={<DisplayVoucher />} />
          <Route path="/voucher-entry" element={<VoucherEntry />} />
          <Route path="/voucher-list" element={<VoucherList />} />
          <Route path="/display" element={<Display />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/ratio-analysis" element={<RatioAnalysis />} />
          <Route path="/analysis-verification" element={<AnalysisVerification />} />
          <Route path="/voucher-print" element={<VoucherPrint />} />
          <Route path="/billing" element={<BillingPage />} />
   
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
