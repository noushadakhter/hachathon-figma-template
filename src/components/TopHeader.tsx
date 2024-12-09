import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../app/globals.css";

const Header = () => {
  return (
    <div className="bg-[#23856D] text-white flex items-center justify-between h-12 px-6 py-2">
      {/* Large Screens: Full Header */}
      <div className="hidden md:flex items-center justify-between w-full">
        {/* Left Side: Contact Info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <p className="text-sm">(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="text-sm">michelle.rivera@example.com</p>
          </div>
        </div>

        {/* Center Text */}
        <div>
          <p className="text-sm">Follow Us and get a chance to win 80% off-</p>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>

      {/* Mobile Screen: Shop Now Button */}
      <div className="flex md:hidden items-center justify-center w-full">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded">
          Shop Now
        </button>
        <span className="ml-4 text-sm">Summer Sale 80% off</span>
      </div>
    </div>
  );
};

export default Header;