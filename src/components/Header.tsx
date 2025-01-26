import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src='src/assets/logo.png'
                alt="Perfect Wood Crafts"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/plans" className="text-gray-700 hover:text-amber-900">
              Plans
            </Link>
            <Link to="/tools" className="text-gray-700 hover:text-amber-900">
              Tools
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-amber-900">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-amber-900">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-900">
              Contact
            </Link>

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/plans" className="text-gray-700 hover:text-amber-900">
                Plans
              </Link>
              <Link to="/tools" className="text-gray-700 hover:text-amber-900">
                Tools
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-amber-900">
                Blog
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-amber-900">
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-amber-900"
              >
                Contact
              </Link>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
