'use client';

import Link from 'next/link';

export default function Navlinks() {

  return (
    <div className="bg-blue-200 border-t border-blue-300">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex justify-center gap-12 py-2 flex-wrap">
          <Link href="/products/all" className="text-sm text-blue-800 hover:text-blue-900 font-medium transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-blue-100">
            All Products
          </Link>
          <Link href="/products/plastic-containers" className="text-sm text-blue-800 hover:text-blue-900 font-medium transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-blue-100">
            PP Plastic Containers
          </Link>
          <Link href="/products/soup-cups" className="text-sm text-blue-800 hover:text-blue-900 font-medium transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-blue-100">
            Soup & Portion Cups
          </Link>
          <Link href="/products/sushi-bento" className="text-sm text-blue-800 hover:text-blue-900 font-medium transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-blue-100">
            Sushi & Bento Boxes
          </Link>
          <Link href="/products/meat-trays" className="text-sm text-blue-800 hover:text-blue-900 font-medium transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-blue-100">
            Meat Trays
          </Link>
          <Link href="/products/clamshells" className="text-sm text-blue-800 hover:text-blue-900 font-medium transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-blue-100">
            Hinged Clamshells
          </Link>
          <Link href="/products/clamshells" className="text-sm text-blue-800 hover:text-blue-900 font-medium transition-colors whitespace-nowrap px-2 py-1 rounded-md hover:bg-blue-100">
            Paper & Bamboo Products
          </Link>
        </nav>
      </div>
    </div>
  );
}