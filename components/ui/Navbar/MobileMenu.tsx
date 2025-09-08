'use client';

import { useState } from 'react';
import Link from 'next/link';

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
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 p-2"
      >
        <div className="flex flex-col gap-1">
          <span className="w-5 h-0.5 bg-gray-700"></span>
          <span className="w-5 h-0.5 bg-gray-700"></span>
          <span className="w-5 h-0.5 bg-gray-700"></span>
        </div>
        <span className="text-sm font-medium">Menu</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-900 font-bold text-lg">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 text-2xl"
              >
                ×
              </button>
            </div>
            
            {/* Main Navigation Links */}
            <div className="flex flex-col gap-4 mb-6">
              {/* Add Home Link */}
              <Link 
                href="/" 
                className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/subscription" 
                className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              {user ? (
                <Link 
                  href="/account" 
                  className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Account
                </Link>
              ) : (
                <Link 
                  href="/signin" 
                  className="text-gray-700 hover:text-gray-900 py-2 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Product Categories */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-gray-600 font-semibold text-sm mb-3">PRODUCT CATEGORIES</h3>
              <div className="flex flex-col gap-3">
                <Link 
                  href="/products/electronics" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Electronics
                </Link>
                <Link 
                  href="/products/office-supplies" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Office Supplies
                </Link>
                <Link 
                  href="/products/tools" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Tools
                </Link>
                <Link 
                  href="/products/furniture" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Furniture
                </Link>
                <Link 
                  href="/products/cleaning" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cleaning
                </Link>
                <Link 
                  href="/products/safety" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Safety
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}