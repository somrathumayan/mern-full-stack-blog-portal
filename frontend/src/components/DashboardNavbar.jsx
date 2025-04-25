import React, { useState, useEffect } from "react";
import { Bell, Mail, Moon, Search, Sun, Menu } from "lucide-react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 dark:text-white shadow px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left: Logo & Hamburger */}
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
          </button>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>

        {/* Middle: Search (hidden on small screens) */}
        <div className="hidden md:block w-full max-w-md mx-4">
          <div className="relative">
            {/* <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-300" /> */}
            <h2 className=" w-full mx-4 text-4xl font-bold">
              Humayan Blog Portal
            </h2>
          </div>
        </div>

        {/* Right: Icons + Profile */}
        <div className="flex items-center gap-4">
          {/* <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer" /> */}
          <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer" />

          {darkMode ? (
            <Sun
              className="w-6 h-6 text-yellow-400 cursor-pointer"
              onClick={toggleDarkMode}
            />
          ) : (
            <Moon
              className="w-6 h-6 text-gray-600 dark:text-gray-300 cursor-pointer"
              onClick={toggleDarkMode}
            />
          )}

          <div className="relative">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-9 h-9 rounded-full cursor-pointer border-2 border-gray-300"
              onClick={toggleDropdown}
            />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50">
                <ul className="text-sm text-gray-700 dark:text-gray-200">
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search and Menu (below main row) */}
      {mobileMenuOpen && (
        <div className="mt-4 md:hidden space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 dark:text-gray-300" />
          </div>
        </div>
      )}
    </header>
  );
}
