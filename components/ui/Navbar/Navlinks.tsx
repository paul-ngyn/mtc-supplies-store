'use client';

import Link from 'next/link';
import { SignOut } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { usePathname, useRouter } from 'next/navigation';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import s from './Navbar.module.css';

interface NavlinksProps {
  user?: any;
}

export default function Navlinks({ user }: NavlinksProps) {
  const router = getRedirectMethod() === 'client' ? useRouter() : null;

  return (
    <div className="bg-blue-200 border-t border-blue-300">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex justify-center gap-20 py-3">
          <Link href="/products/electronics" className="text-blue-800 hover:text-blue-900 font-medium transition-colors">
            Electronics
          </Link>
          <Link href="/products/office-supplies" className="text-blue-800 hover:text-blue-900 font-medium transition-colors">
            Office Supplies
          </Link>
          <Link href="/products/tools" className="text-blue-800 hover:text-blue-900 font-medium transition-colors">
            Tools
          </Link>
          <Link href="/products/furniture" className="text-blue-800 hover:text-blue-900 font-medium transition-colors">
            Furniture
          </Link>
          <Link href="/products/cleaning" className="text-blue-800 hover:text-blue-900 font-medium transition-colors">
            Cleaning
          </Link>
          <Link href="/products/safety" className="text-blue-800 hover:text-blue-900 font-medium transition-colors">
            Safety
          </Link>
        </nav>
      </div>
    </div>
  );
}