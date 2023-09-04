import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <img
                  src="data:image/png;base64,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"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-gray-900 text-lg">
                  MedReach
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-purple-400 hover:text-purple-700 font-semibold"
              >
                Home
              </Link>
              <Link
                to="/signin"
                className="py-4 px-2 text-gray-900 font-semibold hover:text-purple-700 transition duration-300"
              >
                Find Link Doctor
              </Link>
              <Link
                to="/contact"
                className="py-4 px-2 text-gray-900 font-semibold hover:text-purple-700 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/signin"
              className="py-2 px-2 font-medium text-gray-900 rounded hover:bg-purple-700 hover:text-white transition duration-300"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-2 font-medium text-white bg-purple-400 rounded hover:bg-purple-700 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6 text-gray-900 hover:bg-purple-700"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`mobile-menu ${showMenu ? "" : "hidden"}`}>
        <ul className="px-10 py-10">
          <li className="active mobile">
            <Link
              to="/"
              className="py-4 px-2 text-purple-400 hover:text-purple-700 font-semibold "
            >
              Home
            </Link>
          </li>
          <li className="mobile">
            <Link
              to="/signin"
              className="py-4 px-2 text-gray-900 font-semibold hover:text-purple-700 transition duration-300"
            >
              Find Link Doctor
            </Link>
          </li>
          <li className="mobile">
            <Link
              to="/contact"
              className="py-10 px-2 text-gray-900 font-semibold hover:text-purple-700 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li className="mobile">
            <Link
              to="/signin"
              className="py-2 px-2 font-medium text-gray-900 rounded hover:bg-purple-700 hover:text-white transition duration-300"
            >
              Sign In
            </Link>
          </li>
          <li className="mobile">
            <Link
              to="/signup.js"
              className="py-2 px-2 font-medium text-white bg-purple-400 rounded hover:bg-purple-700 transition duration-300"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
