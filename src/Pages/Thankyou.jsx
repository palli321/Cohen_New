import React from 'react';
import { CheckCircle } from 'react-feather';

const Thankyou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center w-full max-w-lg">
        <div className="flex justify-center mb-6">
          <CheckCircle className="text-green-500" size={60} />
        </div>
        <h1 className="text-4xl font-extrabold text-primary mb-4">Thank You!</h1>
        <p className="text-gray-600 text-lg mb-6">
          We have received your submission. We'll get back to you shortly.
        </p>
        <a
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-base font-medium py-2 px-6 rounded-lg transition duration-300"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default Thankyou;
