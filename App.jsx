// FinVerse - Real Website Launch Code Begins
// Tech: React.js + TailwindCSS + Firebase Auth + Razorpay Setup (initial)

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Rewards from './pages/Rewards';
import Screener from './pages/Screener';
import FinBot from './pages/FinBot';
import KYC from './pages/KYC';
import MutualFunds from './pages/MutualFunds';
import IPO from './pages/IPO';
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/screener" element={<Screener />} />
        <Route path="/finbot" element={<FinBot />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/mutual-funds" element={<MutualFunds />} />
        <Route path="/ipo" element={<IPO />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;