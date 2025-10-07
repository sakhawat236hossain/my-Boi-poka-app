import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa'; // ⚠️ React Icon

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 to-white text-gray-800 px-4">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-md">
         "The page you requested could not be found. Please return to the homepage."
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-xl shadow-md hover:scale-105 transition-transform font-semibold"
      >
        🏠 Go Back Home
      </Link>
    </div>
  );
};

export default Error;
