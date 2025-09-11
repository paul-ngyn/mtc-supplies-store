import { createClient } from '@/utils/supabase/server';
import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import SearchBar from './Searchbar';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      
      {/* Desktop Only: Miniature Header */}
      <div className="hidden sm:block bg-[#1c51a3] text-white py-2">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="text-sm font-medium">
            <Link 
              href="/subscription" 
              className="hover:underline transition-all duration-200"
            >
              Join TKN Premium for FREE Shipping and Exclusive Discounts On All orders!
            </Link>
          </p>
        </div>
      </div>
      
      {/* Top Row */}
      <div className="max-w-7xl px-6 mx-auto">
        <div className="flex items-center justify-between py-6 gap-3">
          {/* Mobile: Menu Button (Left) / Desktop: Logo (Left) */}
          <div className="flex items-center">
            {/* Mobile Menu */}
            <div className="sm:hidden">
              <MobileMenu user={user} />
            </div>
            
            {/* Desktop Logo */}
            <div className="hidden sm:block">
              <Link 
                href="/" 
                className="flex items-center cursor-pointer text-gray-800 hover:text-gray-900 transition-colors"
              >
                <span className="font-bold text-xl">TKN Supplies</span>
              </Link>
            </div>
            
            {/* Mobile Logo (Centered) */}
            <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2">
              <Link 
                href="/" 
                className="flex items-center cursor-pointer text-gray-800 hover:text-gray-900 transition-colors"
              >
                <span className="font-bold text-xl">TKN Supplies</span>
              </Link>
            </div>
          </div>

          {/* Desktop: Search Bar (Center) */}
          <div className="hidden sm:flex flex-1 justify-center max-w-2xl mx-auto">
            <SearchBar />
          </div>

          {/* Desktop: Right Navigation */}
          <div className="hidden sm:flex items-center gap-4">
            {user ? (
              <Link 
                href="/account" 
                className="text-gray-700 hover:text-gray-900 whitespace-nowrap transition-colors"
              >
                Account
              </Link>
            ) : (
              <Link 
                href="/signin" 
                className="text-gray-700 hover:text-gray-900 whitespace-nowrap transition-colors"
              >
                Sign In/Register
              </Link>
            )}
            <Link 
              href="/subscription" 
              className="text-gray-700 hover:text-gray-900 whitespace-nowrap transition-colors"
            >
              Orders & Returns
            </Link>
            {/* Desktop Cart Button */}
            <Link 
              href="/cart" 
              className="flex items-center justify-center p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L19 18" 
                />
              </svg>
            </Link>
          </div>

          {/* Mobile: Cart Button (Right) */}
          <div className="sm:hidden flex items-center">
            <Link 
              href="/cart" 
              className="flex items-center justify-center p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L19 18" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile: Search Bar Row */}
      <div className="sm:hidden max-w-6xl px-6 mx-auto pb-3">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>
      </div>
      
      {/* Desktop Product Categories */}
      <div className="w-full hidden sm:block">
        <Navlinks />
      </div>
    </nav>
  );
}