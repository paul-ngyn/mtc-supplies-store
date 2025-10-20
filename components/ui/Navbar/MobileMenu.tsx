'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
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
              <div className="text-gray-700 py-2 border-b border-gray-200">
                <span className="font-medium">Contact:</span> (555) 123-4567
              </div>
            </div>

            {/* Product Categories */}
            <div className="border-t border-gray-200 pt-4">
              <h3 className="text-gray-600 font-semibold text-sm mb-3">PRODUCT CATEGORIES</h3>
              <div className="flex flex-col gap-3">
                <Link 
                  href="/products/all" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  All Products
                </Link>
                <Link 
                  href="/products/plastic-containers" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  PP Plastic Containers
                </Link>
                <Link 
                  href="/products/soup-cups" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Soup & Portion Cups
                </Link>
                <Link 
                  href="/products/sushi-bento" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Sushi & Bento Boxes
                </Link>
                <Link 
                  href="/products/meat-trays" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Meat Trays
                </Link>
                <Link 
                  href="/products/clamshells" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Hinged Clamshells
                </Link>
                <Link 
                  href="/products/paper-bamboo" 
                  className="text-gray-600 hover:text-gray-900 py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Paper & Bamboo Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}