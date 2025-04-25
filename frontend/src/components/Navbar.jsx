import React, { useState, useEffect } from "react";
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

  // Close dropdown on outside click
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
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">MyLogo</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="dropdown-toggle flex items-center gap-1 text-gray-700 hover:text-blue-600"
            >
              Category <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu absolute top-8 left-0 bg-white shadow-lg rounded w-48 py-2 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  News
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  International
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Sports
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Jobs
                </a>
              </div>
            )}
          </div>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-3 text-gray-600">
          <a href="#">
            <FaFacebookF size={18} />
          </a>
          <a href="#">
            <FaInstagram size={18} />
          </a>
          <a href="#">
            <FaYoutube size={18} />
          </a>
          <a href="#">
            <FaTelegramPlane size={18} />
          </a>
          <a href="#">
            <FaPhoneAlt size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          <a href="#" className="block text-gray-700">
            Home
          </a>

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
                <a href="#" className="block text-gray-700">
                  News
                </a>
                <a href="#" className="block text-gray-700">
                  International
                </a>
                <a href="#" className="block text-gray-700">
                  Sports
                </a>
                <a href="#" className="block text-gray-700">
                  Jobs
                </a>
              </div>
            )}
          </div>

          <a href="#" className="block text-gray-700">
            About
          </a>
          <a href="#" className="block text-gray-700">
            Contact
          </a>

          <div className="flex gap-3 pt-3 border-t text-gray-600">
            <a href="#">
              <FaFacebookF size={18} />
            </a>
            <a href="#">
              <FaInstagram size={18} />
            </a>
            <a href="#">
              <FaYoutube size={18} />
            </a>
            <a href="#">
              <FaTelegramPlane size={18} />
            </a>
            <a href="#">
              <FaPhoneAlt size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
