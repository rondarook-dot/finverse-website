import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Login to FinVerse</h2>
        <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 mb-4">Login with Google</button>
        <input type="email" placeholder="Email address" className="w-full p-2 border rounded mb-3" />
        <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">Login with Email</button>
      </div>
    </div>
  );
};

export default Login;