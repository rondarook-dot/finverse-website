import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-indigo-700">Welcome to Your FinVerse Dashboard 💼</h2>
        <p className="mt-2 text-gray-700">Here’s your summary, rewards and insights.</p>
        <div className="mt-4">
          <p className="text-lg">💰 FinCash: <strong>₹50</strong></p>
          <p className="text-lg">🎁 Bonus Pending: <strong>₹100</strong> (Complete KYC + Invest ₹100 to claim)</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/mutual-funds" className="block bg-white p-4 shadow rounded hover:shadow-lg text-center">📈 Mutual Funds</Link>
        <Link to="/rewards" className="block bg-white p-4 shadow rounded hover:shadow-lg text-center">🎁 Rewards Wallet</Link>
        <Link to="/kyc" className="block bg-white p-4 shadow rounded hover:shadow-lg text-center">🔐 KYC Verification</Link>
        <Link to="/screener" className="block bg-white p-4 shadow rounded hover:shadow-lg text-center">🔍 Screener</Link>
        <Link to="/ipo" className="block bg-white p-4 shadow rounded hover:shadow-lg text-center">📅 IPO Listings</Link>
        <Link to="/finbot" className="block bg-white p-4 shadow rounded hover:shadow-lg text-center">🤖 FinBot Assistant</Link>
        <Link to="/events" className="block bg-white p-4 shadow rounded hover:shadow-lg text-center">🗓 Market Events</Link>
      </div>
    </div>
  );
};

export default Dashboard;