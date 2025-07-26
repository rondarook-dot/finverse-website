import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-indigo-700 text-xl font-bold">FinVerse</Link>
      <div className="space-x-4">
        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
        <Link to="/rewards" className="text-gray-700 hover:text-indigo-600">Rewards</Link>
        <Link to="/finbot" className="text-gray-700 hover:text-indigo-600">FinBot</Link>
        <Link to="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;