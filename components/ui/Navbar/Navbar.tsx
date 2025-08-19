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
      
      {/* Top Row - Logo, Search, Desktop Nav */}
      <div className="max-w-6xl px-6 mx-auto flex items-center justify-between py-3 gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="ml-2 font-bold text-xl text-white">TKN Supplies</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-4">
          <SearchBar />
          <Link href="/subscription" className="text-white hover:text-gray-300 whitespace-nowrap">
            Pricing
          </Link>
          {user ? (
            <Link href="/account" className="text-white hover:text-gray-300 whitespace-nowrap">
              Account
            </Link>
          ) : (
            <Link href="/signin" className="text-white hover:text-gray-300 whitespace-nowrap">
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <MobileMenu user={user} />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="sm:hidden px-6 pb-3">
        <SearchBar />
      </div>
      
      {/* Desktop Product Categories */}
      <div className="w-full hidden sm:block">
        <Navlinks />
      </div>
    </nav>
  );
}