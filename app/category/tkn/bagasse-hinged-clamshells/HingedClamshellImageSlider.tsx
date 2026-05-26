'use client';

import { useState } from 'react';
import Image from 'next/image';

const productImages = [
  {
    src: '/MTC_TKN_PP/webstaurant%20open%20placeholder%20hinged.png',
    alt: 'Bagasse Hinged Clamshell - open view',
    label: 'Open',
  },
  {
    src: '/MTC_TKN_PP/webstuanrant%20closed%20placeholder%20hinged.png',
    alt: 'Bagasse Hinged Clamshell - closed view',
    label: 'Closed',
  },
];

export default function HingedClamshellImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="relative">
      <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
        <Image
          src={productImages[currentImageIndex].src}
          alt={productImages[currentImageIndex].alt}
          fill
          className="object-contain p-8"
          priority
        />

        <div className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
          {productImages[currentImageIndex].label}
        </div>

        <button
          onClick={() => setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % productImages.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Next image"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {productImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentImageIndex === index ? 'bg-blue-600 w-6' : 'bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-4 flex-wrap">
        {productImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              currentImageIndex === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
            }`}
            aria-label={`Preview ${image.label}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain p-2"
            />
            <span className="absolute bottom-0 left-0 right-0 text-center text-[10px] font-semibold bg-white/80 py-0.5">
              {image.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
