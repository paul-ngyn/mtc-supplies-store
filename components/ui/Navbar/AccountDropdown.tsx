'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';

interface AccountDropdownProps {
  user: any;
}

export default function AccountDropdown({ user }: AccountDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay before closing
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Account Link */}
      <Link 
        href="/account"
        className="text-gray-700 hover:text-gray-900 whitespace-nowrap transition-colors"
      >
        Account
      </Link>

      {/* Dropdown Button */}
      <button 
        onClick={handleDropdownClick}
        className="ml-1 text-gray-700 hover:text-gray-900 transition-colors"
      >
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50 top-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* User Info */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900">
              {user?.user_metadata?.full_name || 'Welcome'}
            </p>
            <p className="text-sm text-gray-600 truncate">
              {user?.email}
            </p>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            <Link 
              href="/account"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Account Details
            </Link>

            <Link 
              href="/account/profile"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              Edit Profile
            </Link>

            <Link 
              href="/orders"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Orders & Returns
            </Link>

            <div className="border-t border-gray-100 mt-1 pt-1">
              <Link 
                href="/signin/signout"
                className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <svg className="w-4 h-4 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}