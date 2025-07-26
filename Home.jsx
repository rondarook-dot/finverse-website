import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-center p-10">
      <h1 className="text-4xl font-bold text-indigo-700">Welcome to FinVerse 🚀</h1>
      <p className="text-lg mt-4 text-gray-700">Invest. Earn. Grow. India’s Simplest Investment Platform</p>
      <div className="mt-6">
        <Link to="/login">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;