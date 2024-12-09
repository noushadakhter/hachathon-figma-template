import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FreeTrial: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
          Start your 14 days free trial
        </h1>
        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        {/* Button */}
        <div className="mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-md hover:bg-blue-700 transition">
            Try it free now
          </button>
        </div>
        {/* Social Icons */}
        <div className="mt-10 flex justify-center space-x-4">
        <a
                href="#"
                className="text-gray-500 hover:text-blue-500"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          {/* Add more icons similarly */}
        </div>
      </div>
  );
};

export default FreeTrial;