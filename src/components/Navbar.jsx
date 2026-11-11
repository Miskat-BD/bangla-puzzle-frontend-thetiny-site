"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xs border-b border-gray-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="text-base sm:text-lg font-bold tracking-[0.25em] text-slate-900 uppercase"
            >
              THETINY.SITE
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm sm:text-base font-medium text-indigo-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm sm:text-base font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-sm sm:text-base font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/terms"
              className="text-sm sm:text-base font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Terms
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/login"
              className="px-5 py-2 text-sm font-medium text-slate-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-gray-100 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-base font-medium text-indigo-600 rounded-md hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900"
            >
              Blog
            </Link>
            <Link
              href="/terms"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 text-base font-medium text-slate-600 rounded-md hover:bg-gray-50 hover:text-slate-900"
            >
              Terms
            </Link>
          </div>
          <div className="pt-3 border-t border-gray-100 flex flex-col space-y-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2 text-sm font-medium text-slate-800 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
