'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from './Searchbar';

interface MobileMenuProps {
  user: any;
}

export default function MobileMenu({ user }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-white hover:text-gray-300 p-2"
      >
        <div className="flex flex-col gap-1">
          <span className="w-5 h-0.5 bg-white"></span>
          <span className="w-5 h-0.5 bg-white"></span>
          <span className="w-5 h-0.5 bg-white"></span>
        </div>
        <span className="text-sm font-medium">Menu</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-64 bg-black shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-white font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-300 text-2xl"
              >
                ×
              </button>
            </div>
            
            {/* Mobile Search */}
            <div className="mb-6">
              <SearchBar />
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-4">
              <Link 
                href="/subscription" 
                className="text-white hover:text-gray-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              {user ? (
                <Link 
                  href="/account" 
                  className="text-white hover:text-gray-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Account
                </Link>
              ) : (
                <Link 
                  href="/signin" 
                  className="text-white hover:text-gray-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}