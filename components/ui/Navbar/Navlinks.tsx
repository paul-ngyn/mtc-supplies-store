'use client';

import Link from 'next/link';

export default function Navlinks() {

  return (
    <div className="bg-[#1c51a3] border-t border-[#163d7a]">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-center gap-16 py-.75 flex-wrap">
          <Link href="/category/tkn" className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]">
            TKN
          </Link>
          <Link href="/category/hd" className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]">
            HD
          </Link>
          <Link href="/category/td" className="text-base text-white hover:text-gray-200  transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]">
            TD
          </Link>
          <Link href="/category/imperial" className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]">
            Imperial
          </Link>
          <Link href="/category/mb" className="text-base text-white hover:text-gray-200  transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]">
            MB
          </Link>
          <Link href="/products" className="text-base text-white hover:text-gray-200 transition-colors whitespace-nowrap px-3 py-2 rounded-md hover:bg-[#1a4a94]">
            All Products
          </Link>
        </nav>
      </div>
    </div>
  );
}