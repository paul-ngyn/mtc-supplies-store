'use client';

import { useEffect, useState } from 'react';

// Sample brand logos - replace with real brand logos later
const brandLogos = [
  { id: 1, name: 'McDonald\'s', logo: '/demo.png' },
  { id: 2, name: 'KFC', logo: '/demo.png' },
  { id: 3, name: 'Subway', logo: '/demo.png' },
  { id: 4, name: 'Starbucks', logo: '/demo.png' },
  { id: 5, name: 'Burger King', logo: '/demo.png' },
  { id: 6, name: 'Pizza Hut', logo: '/demo.png' },
  { id: 7, name: 'Domino\'s', logo: '/demo.png' },
  { id: 8, name: 'Taco Bell', logo: '/demo.png' },
  { id: 9, name: 'Chipotle', logo: '/demo.png' },
  { id: 10, name: 'Wendy\'s', logo: '/demo.png' }
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
                className="flex-shrink-0 flex items-center justify-center px-8"
                style={{ width: `${100 / brandLogos.length / 2}%` }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-32 h-20 flex items-center justify-center border border-gray-100">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            
            {/* Second set of logos for seamless loop */}
            {brandLogos.map((brand) => (
              <div
                key={`second-${brand.id}`}
                className="flex-shrink-0 flex items-center justify-center px-8"
                style={{ width: `${100 / brandLogos.length / 2}%` }}
              >
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 w-32 h-20 flex items-center justify-center border border-gray-100">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
