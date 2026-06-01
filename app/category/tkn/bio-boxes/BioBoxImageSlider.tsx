'use client';

import { useState } from 'react';
import Image from 'next/image';

const productImages = [
  {
    src: '/MTC_TKN_PP/brown-kraft-paper-box-removebg.png',
    alt: 'Brown Kraft Bio Box',
  },
  {
    src: '/MTC_TKN_PP/brown-kraft-paper-box2-removebg.png',
    alt: 'Brown Kraft Bio Box - view 2',
  },
  {
    src: '/MTC_TKN_PP/kraft%20bio%20boxes.webp',
    alt: 'Kraft Bio Boxes - assorted sizes',
  },
  {
    src: '/MTC_TKN_PP/white-kraft-paper-box-removebg.png',
    alt: 'White Kraft Bio Box',
  },
  {
    src: '/MTC_TKN_PP/white-kraft-paper-box2-removebg.png',
    alt: 'White Kraft Bio Box - view 2',
  },
];

export default function BioBoxImageSlider() {
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
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {productImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              idx === currentImageIndex ? 'bg-gray-700 scale-125' : 'bg-gray-300 hover:bg-gray-500'
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {productImages.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
              idx === currentImageIndex ? 'border-gray-700' : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <Image src={img.src} alt={img.alt} fill className="object-contain p-1" />
          </button>
        ))}
      </div>
    </div>
  );
}
