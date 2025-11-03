'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navlinks() {
  const [showTKNDropdown, setShowTKNDropdown] = useState(false);
  const [showHDDropdown, setShowHDDropdown] = useState(false);
  const [showTDDropdown, setShowTDDropdown] = useState(false);
  const [showImperialDropdown, setShowImperialDropdown] = useState(false);
  const [showMBDropdown, setShowMBDropdown] = useState(false);

  return (
    <div className="bg-[#1c51a3] border-t border-[#163d7a]">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-center items-start gap-16 py-.75 flex-wrap">
          {/* TKN with Dropdown */}
          <div 
            className="relative flex items-start"
            onMouseEnter={() => setShowTKNDropdown(true)}
            onMouseLeave={() => setShowTKNDropdown(false)}
          >
            <Link 
              href="/category/tkn" 
              className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]"
            >
              TKN
            </Link>
            
            {showTKNDropdown && (
              <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md min-w-[280px] z-50">
                <div className="py-2">
                  <Link 
                    href="/category/tkn/paper-bags"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Paper Bags
                  </Link>
                  <Link 
                    href="/category/tkn/bio-boxes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Bio Boxes
                  </Link>
                  <Link 
                    href="/category/tkn/food-pails"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Food Pails
                  </Link>
                  <Link 
                    href="/category/tkn/boat-trays"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Boat Trays
                  </Link>
                  <Link 
                    href="/category/tkn/portion-cups"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Portion Cups
                  </Link>
                  <Link 
                    href="/category/tkn/portion-cup-lids"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Portion Cup Lids
                  </Link>
                  <Link 
                    href="/category/tkn/bagasse-hinged-clamshells"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Bagasse Hinged Clamshells
                  </Link>
                  <Link 
                    href="/category/tkn/chopsticks"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Chopsticks
                  </Link>
                  <Link 
                    href="/category/tkn/napkins-papertowels"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Napkins & Papertowels
                  </Link>
                  <Link 
                    href="/category/tkn"
                    className="block px-4 py-3 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors border-t mt-2 text-center"
                  >
                    Browse All
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* HD with Dropdown */}
          <div 
            className="relative flex items-start"
            onMouseEnter={() => setShowHDDropdown(true)}
            onMouseLeave={() => setShowHDDropdown(false)}
          >
            <Link 
              href="/category/hd" 
              className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]"
            >
              HD
            </Link>
            
            {showHDDropdown && (
              <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md min-w-[280px] z-50">
                <div className="py-2">
                  <Link 
                    href="/category/hd/rerobox"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    REROBOX
                  </Link>
                  <Link 
                    href="/category/hd/clipin"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Clipin
                  </Link>
                  <Link 
                    href="/category/hd/v-series"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    V Series
                  </Link>
                  <Link 
                    href="/category/hd/meat-trays"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Meat Trays
                  </Link>
                  <Link 
                    href="/category/hd/deli-containers"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Deli Containers
                  </Link>
                  <Link 
                    href="/category/hd"
                    className="block px-4 py-3 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors border-t mt-2 text-center"
                  >
                    Browse All
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* TD with Dropdown */}
          <div 
            className="relative flex items-start"
            onMouseEnter={() => setShowTDDropdown(true)}
            onMouseLeave={() => setShowTDDropdown(false)}
          >
            <Link 
              href="/category/td" 
              className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]"
            >
              TD
            </Link>
            
            {showTDDropdown && (
              <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md min-w-[280px] z-50">
                <div className="py-2">
                  <Link 
                    href="/category/td/plastic-containers"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Plastic Containers
                  </Link>
                  <Link 
                    href="/category/td/soup-containers"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Soup Containers
                  </Link>
                  <Link 
                    href="/category/td"
                    className="block px-4 py-3 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors border-t mt-2 text-center"
                  >
                    Browse All
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Imperial with Dropdown */}
          <div 
            className="relative flex items-start"
            onMouseEnter={() => setShowImperialDropdown(true)}
            onMouseLeave={() => setShowImperialDropdown(false)}
          >
            <Link 
              href="/category/imperial" 
              className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]"
            >
              Imperial
            </Link>
            
            {showImperialDropdown && (
              <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md min-w-[280px] z-50">
                <div className="py-2">
                  <Link 
                    href="/category/imperial/sushi-tray"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 border-b hover:bg-gray-50 transition-colors"
                  >
                    Sushi Tray
                  </Link>
                  <Link 
                    href="/category/imperial/sushi-tray/rectangular-sushi-tray"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors pl-6"
                  >
                    Rectangular
                  </Link>
                  <Link 
                    href="/category/imperial/sushi-tray/round-party-tray"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors pl-6"
                  >
                    Round Party 
                  </Link>
                  <Link 
                    href="/category/imperial/bento"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 border-b hover:bg-gray-50 transition-colors mt-2"
                  >
                    Bento
                  </Link>
                  <Link 
                    href="/category/imperial/bento/single-compartment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors pl-6"
                  >
                    Single Compartment
                  </Link>
                  <Link 
                    href="/category/imperial/bento/5-compartment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors pl-6"
                  >
                    5 Compartment
                  </Link>
                  <Link 
                    href="/category/imperial/pokebowl"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Pokebowl
                  </Link>
                  <Link 
                    href="/category/imperial"
                    className="block px-4 py-3 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors border-t mt-2 text-center"
                  >
                    Browse All
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          {/* MB with Dropdown */}
          <div 
            className="relative flex items-start"
            onMouseEnter={() => setShowMBDropdown(true)}
            onMouseLeave={() => setShowMBDropdown(false)}
          >
            <Link 
              href="/category/mb" 
              className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]"
            >
              MB
            </Link>
            
            {/* Dropdown Menu */}
            {showMBDropdown && (
              <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-md min-w-[280px] z-50">
                <div className="py-2">
                  <Link 
                    href="/category/mb/hinged-clamshells"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 border-b hover:bg-gray-50 transition-colors"
                  >
                    Hinged Clam shells
                  </Link>
                  <Link 
                    href="/category/mb/hinged-clamshells/tfpp-white"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors pl-6"
                  >
                    TFPP Hinged Clamshell White
                  </Link>
                  <Link 
                    href="/category/mb/hinged-clamshells/pp-vented-black"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors pl-6"
                  >
                    PP Hinged Vented Clamshell Black
                  </Link>
                  <Link 
                    href="/category/mb"
                    className="block px-4 py-3 text-sm font-semibold text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors border-t mt-2 text-center"
                  >
                    Browse All
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/products" className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]">
            All Products
          </Link>
        </nav>
      </div>
    </div>
  );
}