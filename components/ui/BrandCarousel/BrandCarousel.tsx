'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Brand logos with category links
const brandLogos = [
  { id: 1, name: 'TKN', logo: '/TKN.png', slug: 'tkn', scale: 1.15 },
  { id: 2, name: 'HD', logo: '/HD_logo-removebg.png', slug: 'hd', scale: 1 },
  { id: 3, name: 'TD', logo: '/TD no background.png', slug: 'td', scale: 1 },
  { id: 4, name: 'Imperial', logo: '/imperial-removebg-.png', slug: 'imperial', scale: 1 },
  { id: 5, name: 'MB', logo: '/MB_W_background-remove.png', slug: 'mb', scale: 1.15 }
];

export default function BrandCarousel() {
  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Our Brands
        </h3>
        
        {/* Carousel container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex animate-scroll"
            style={{ 
              width: `${brandLogos.length * 2 * 20}%` // Double the logos for seamless loop
            }}
          >
            {/* First set of logos */}
            {brandLogos.map((brand) => (
              <div
                key={`first-${brand.id}`}
                className="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
                style={{ width: `${100 / brandLogos.length / 2}%` }}
              >
                <Link href={`/category/${brand.slug}`}>
                  <div className="bg-white rounded-lg p-4 md:p-4 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3),0_-5px_20px_-5px_rgba(0,0,0,0.15)] transition-shadow duration-300 w-28 h-20 md:w-40 md:h-28 flex items-center justify-center cursor-pointer group overflow-hidden">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={200}
                      height={140}
                      className="object-contain transition-all duration-300 max-h-full max-w-full"
                      style={{ transform: `scale(${brand.scale})` }}
                    />
                  </div>
                </Link>
              </div>
            ))}
            
            {/* Second set of logos for seamless loop */}
            {brandLogos.map((brand) => (
              <div
                key={`second-${brand.id}`}
                className="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
                style={{ width: `${100 / brandLogos.length / 2}%` }}
              >
                <Link href={`/category/${brand.slug}`}>
                  <div className="bg-white rounded-lg p-4 md:p-4 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3),0_-5px_20px_-5px_rgba(0,0,0,0.15)] transition-shadow duration-300 w-28 h-20 md:w-40 md:h-28 flex items-center justify-center cursor-pointer group overflow-hidden">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={200}
                      height={140}
                      className="object-contain transition-all duration-300 max-h-full max-w-full"
                      style={{ transform: `scale(${brand.scale})` }}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
