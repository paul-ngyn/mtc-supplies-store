import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import SearchBar from './Searchbar';
import ListButton from './ListButton';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      
      {/* Desktop Only: Miniature Header */}
      <div className="hidden sm:block bg-blue-200 text-blue-800 py-2">
        <div className="max-w-6xl px-6 mx-auto text-center">
          <Link href="/category/tkn" className="hover:underline">
            <p className="text-sm font-medium">
              New Kraft Paper Products Ready For Order or Customization!
            </p>
          </Link>
        </div>
      </div>
      
      {/* Top Row */}
      <div className="max-w-7xl px-4 sm:px-20 mx-auto">
        <div className="flex items-start sm:items-center justify-between py-4 gap-3">
          {/* Mobile: Menu Button (Left) / Desktop: Logo (Left) */}
          <div className="flex items-start sm:items-center">
            {/* Mobile Menu */}
            <div className="sm:hidden pt-1">
              <MobileMenu />
            </div>
            
            {/* Desktop Logo */}
            <div className="hidden sm:block">
              <Link 
                href="/" 
                className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/mtc_logo-removebg.png" 
                  alt="MTC Logo" 
                  width={280} 
                  height={100}
                  className="h-20 w-auto rounded-lg"
                  priority
                />
              </Link>
            </div>
            
            {/* Mobile Logo (Centered) */}
            <div className="sm:hidden absolute left-1/2 transform -translate-x-1/2">
              <Link 
                href="/" 
                className="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/mtc_logo.jpeg" 
                  alt="MTC Logo" 
                  width={200} 
                  height={100}
                  className="h-16 w-auto rounded-lg"
                  priority
                />
              </Link>
            </div>
          </div>

          {/* Desktop: Search Bar (Center) */}
          <div className="hidden sm:flex flex-1 justify-center max-w-2xl mx-auto">
            <SearchBar />
          </div>

          {/* Desktop: Contact and List Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-[#1c51a3] hover:text-[#153d7f] transition-colors duration-200 py-2 px-1"
            >
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                stroke="currentColor"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.01 21 3 13.99 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              <span className="font-medium text-sm">Contact Us</span>
            </Link>
            <ListButton />
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