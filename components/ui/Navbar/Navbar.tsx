import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import SearchBar from './Searchbar';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      
      {/* Desktop Only: Miniature Header */}
      <div className="hidden sm:block bg-[#1c51a3] text-white py-2">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <p className="text-sm font-medium">
            New Kraft Paper Products Ready For Order or Customization
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
              <MobileMenu />
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

          {/* Desktop: Contact Info */}
          <div className="hidden sm:flex items-center">
            <div className="text-gray-700 text-sm">
              <span className="font-medium">Contact:</span> (555) 123-4567
            </div>
          </div>

          {/* Mobile: Empty space for balance */}
          <div className="sm:hidden w-6"></div>
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