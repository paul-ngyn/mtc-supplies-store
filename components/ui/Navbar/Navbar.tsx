import s from './Navbar.module.css';
import Navlinks from './Navlinks';
import SearchBar from './Searchbar';
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
                  src="/mtc_logo-removebg.png " 
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

          {/* Desktop: Contact Button */}
          <div className="hidden sm:flex items-center">
            <Link 
              href="/contact"
              className="px-5 py-2.5 bg-[#1c51a3] text-white font-medium rounded-lg hover:bg-[#153d7f] transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Contact Us
            </Link>
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