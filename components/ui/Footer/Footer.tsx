'use client';

import Link from 'next/link';
import Image from 'next/image';
import GitHub from '@/components/icons/GitHub';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate email signup (replace with actual implementation)
    setTimeout(() => {
      setMessage('Thanks for subscribing!');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  return (
    <footer className="w-full bg-[#1c51a3]">
      <div className="mx-auto max-w-[1920px] px-6">
        <div className="grid grid-cols-1 gap-6 py-8 text-white transition-colors duration-150 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-6">
          
          {/* MTC Logo */}
          <div className="col-span-1 lg:col-span-2 lg:pr-0">
            <Link
              href="/"
              className="flex items-center flex-initial hover:opacity-80 transition-opacity"
            >
              <Image 
                src="/mtc_logo.jpeg" 
                alt="MTC Logo" 
                width={320} 
                height={107}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Email Signup Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="font-bold text-white">Get Email Offers</h3>
              <p className="text-sm text-zinc-300">Stay updated with exclusive deals and new arrivals</p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-3">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? '...' : 'Yes'}
                  </button>
                </div>
                {message && (
                  <p className="text-sm text-green-300">{message}</p>
                )}
              </form>
            </div>
          </div>

          {/* Get Help Section */}
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="py-3 md:py-0 md:pb-4">
                <p className="font-bold text-white">
                  GET HELP
                </p>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/support"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Customer Support
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/faq"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  FAQ
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/contact"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Contact Us
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/returns"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Track My Order Section */}
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="py-3 md:py-0 md:pb-4">
                <p className="font-bold text-white">
                  TRACK MY ORDER
                </p>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/orders"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Order Status
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/shipping"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Shipping Info
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/delivery"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Delivery Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="py-3 md:py-0 md:pb-4">
                <p className="font-bold text-white">
                  ABOUT
                </p>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/brands"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Our Brands
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/aboutus"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section - Expanded to Fill Space */}
          <div className="col-span-1 lg:col-span-2">
            <ul className="flex flex-col flex-initial md:flex-1">
              <li className="py-3 md:py-0 md:pb-4">
                <p className="font-bold text-white">
                  LEGAL
                </p>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/privacy"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="py-3 md:py-0 md:pb-4">
                <Link
                  href="/terms"
                  className="text-white transition duration-150 ease-in-out hover:text-zinc-200"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center py-6 space-y-4">
          <div>
            <span className="text-zinc-300">
              &copy; {new Date().getFullYear()} Maple Trade Corp, Inc. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}