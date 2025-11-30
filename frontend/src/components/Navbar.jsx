import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
      {/* Moving Animated Border */}
      <div className="absolute inset-0 border-4 border-blue-500 rounded-lg animate-border"></div>

      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
        {/* Left Side - Logo Fully Left */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-white hover:text-blue-400 transition duration-300 animate-fade-in">
            Learn Peak
          </h1>
        </div>

        {/* Center - Navigation Links */}
        <div className="absolute right-3 transform -translate-x-1/2 flex gap-8">
          <Link
            to="/home"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 hover:scale-110"
          >
            About
          </Link>
          {/* <Link
            to="/contact"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 hover:scale-110"
          >
            Contact
          </Link> */}
        </div>

        {/* Right Side - Other Links */}
        <div className="flex gap-6 flex-1 justify-end">
          {/* <Link
            to="/signup"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 hover:scale-110"
          >
            Signup
          </Link>
          <Link
            to="/login"
            className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 hover:scale-110"
          >
            Login
          </Link> */}

          {/* Conditionally display Profile and Logout */}
          {/* <div className="flex gap-6">
            <Link
              to="/profile"
              className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 hover:scale-110"
            >
              Profile
            </Link>
            <Link
              to="/logout"
              className="text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 hover:scale-110"
            >
              Logout
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
