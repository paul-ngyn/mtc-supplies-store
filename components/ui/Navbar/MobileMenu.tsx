'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideInDown 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-700 hover:text-gray-900 p-2"
      >
        <div className="flex flex-col gap-1">
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}>
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6 overflow-y-auto rounded-l-2xl">
            
            {/* Main Navigation Links */}
            <div className="flex flex-col gap-2 mb-6">
              {/* Home Link */}
              <div className="border-b border-gray-200 pb-3 animate-slide-in" style={{ animationDelay: '0ms' }}>
                <Link 
                  href="/" 
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  <svg 
                    className="w-6 h-6 text-gray-900" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2.5} 
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                    />
                  </svg>
                  <div className="w-6 h-0.5 bg-[#1c51a3] mt-2"></div>
                </Link>
              </div>
            </div>

            {/* Brands */}
            <div className="mb-6 animate-slide-in" style={{ animationDelay: '50ms' }}>
              <div className="mb-3">
                <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider">BRANDS</h3>
                <div className="w-12 h-0.5 bg-[#1c51a3] mt-1"></div>
              </div>
              <div className="flex flex-col gap-3">
                <Link 
                  href="/category/tkn" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-xl font-semibold animate-slide-in"
                  style={{ animationDelay: '100ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  TKN
                </Link>
                <Link 
                  href="/category/hd" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-xl font-semibold animate-slide-in"
                  style={{ animationDelay: '150ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  HD
                </Link>
                <Link 
                  href="/category/td" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-xl font-semibold animate-slide-in"
                  style={{ animationDelay: '200ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  TD
                </Link>
                <Link 
                  href="/category/imperial" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-xl font-semibold animate-slide-in"
                  style={{ animationDelay: '250ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  IMPERIAL
                </Link>
                <Link 
                  href="/category/mb" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-xl font-semibold animate-slide-in"
                  style={{ animationDelay: '300ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  MB
                </Link>
                <Link 
                  href="/products" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-xl font-semibold animate-slide-in pb-1"
                  style={{ animationDelay: '350ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  All Products
                </Link>
              </div>
            </div>

            {/* More Section */}
            <div className="pt-1 animate-slide-in" style={{ animationDelay: '400ms' }}>
              <div className="mb-2.5">
                <h3 className="text-gray-900 font-bold text-xs uppercase tracking-wider">MORE</h3>
                <div className="w-8 h-0.5 bg-[#1c51a3] mt-1"></div>
              </div>
              <div className="flex flex-col gap-2.5">
                <Link 
                  href="/brands" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-sm font-medium animate-slide-in"
                  style={{ animationDelay: '450ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  Our Brands
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-sm font-medium animate-slide-in"
                  style={{ animationDelay: '500ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-800 hover:text-[#1c51a3] py-2 text-sm font-medium animate-slide-in"
                  style={{ animationDelay: '550ms' }}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-4 mt-5 border-t border-gray-200 animate-slide-in" style={{ animationDelay: '600ms' }}>
              <a 
                href="tel:5107833888" 
                className="text-gray-800 hover:text-[#1c51a3] py-2 text-xs block animate-slide-in"
                style={{ animationDelay: '650ms' }}
              >
                <span className="font-semibold text-gray-900">Phone:</span> (510) 783-3888
              </a>
              <a 
                href="mailto:info@mapletradecorp.com" 
                className="text-gray-800 hover:text-[#1c51a3] py-2 text-xs block animate-slide-in"
                style={{ animationDelay: '700ms' }}
              >
                <span className="font-semibold text-gray-900">Email:</span> info@mapletradecorp.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}