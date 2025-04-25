import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaPhoneAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-toggle") &&
        !event.target.closest(".dropdown-menu")
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="shadow sticky top-0 z-50" style={{background:"#101828"}}>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-blue-600">
            Home
          </Link>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="dropdown-toggle flex items-center gap-1 text-white"
            >
              Category <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu absolute top-8 left-0 bg-gray-700 shadow-lg rounded w-48 py-2 z-50">
                <Link
                  to="/news"
                  className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                >
                  News
                </Link>
                <Link
                  to="/international"
                  className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                >
                  International
                </Link>
                <Link
                  to="/sports"
                  className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                >
                  Sports
                </Link>
                <Link
                  to="/jobs"
                  className="block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                >
                  Jobs
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-white hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-3 text-gray-600">
          <Link to="#">
            <FaFacebookF size={18} />
          </Link>
          <Link to="#">
            <FaInstagram size={18} />
          </Link>
          <Link to="#">
            <FaYoutube size={18} />
          </Link>
          <Link to="#">
            <FaTelegramPlane size={18} />
          </Link>
          <Link to="#">
            <FaPhoneAlt size={18} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          <Link to="/" className="block text-gray-700">
            Home
          </Link>

          {/* Dropdown */}
          <div className="space-y-1">
            <button
              onClick={toggleDropdown}
              className="w-full flex items-center justify-between text-gray-700"
            >
              Category <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="pl-4 space-y-1">
                <Link to="/news" className="block text-gray-700">
                  News
                </Link>
                <Link to="/international" className="block text-gray-700">
                  International
                </Link>
                <Link to="/sports" className="block text-gray-700">
                  Sports
                </Link>
                <Link to="/jobs" className="block text-gray-700">
                  Jobs
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="block text-gray-700">
            About
          </Link>
          <Link to="/contact" className="block text-gray-700">
            Contact
          </Link>

          <div className="flex gap-3 pt-3 border-t text-gray-600">
            <Link to="#">
              <FaFacebookF size={18} />
            </Link>
            <Link to="#">
              <FaInstagram size={18} />
            </Link>
            <Link to="#">
              <FaYoutube size={18} />
            </Link>
            <Link to="#">
              <FaTelegramPlane size={18} />
            </Link>
            <Link to="#">
              <FaPhoneAlt size={18} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
