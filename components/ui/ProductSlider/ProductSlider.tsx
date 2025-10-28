'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Brand {
  id: number;
  name: string;
  logo: string;
  slug: string;
  description: string;
  scale?: number;
}

// Brand logos for the slider
const brands: Brand[] = [
  {
    id: 1,
    name: "TKN",
    logo: "/TKN.png",
    slug: "tkn",
    description: "Premium TKN brand products for all your needs",
    scale: 1.15
  },
  {
    id: 2,
    name: "HD",
    logo: "/HD_logo-removebg.png",
    slug: "hd",
    description: "High-quality HD brand products",
    scale: 1
  },
  {
    id: 3,
    name: "TD",
    logo: "/TD no background.png",
    slug: "td",
    description: "Reliable TD brand products",
    scale: 1
  },
  {
    id: 4,
    name: "Imperial",
    logo: "/imperial-removebg-.png",
    slug: "imperial",
    description: "Premium Imperial brand products",
    scale: 1
  },
  {
    id: 5,
    name: "MB",
    logo: "/MB_W_background-remove.png",
    slug: "mb",
    description: "Quality MB brand products",
    scale: 1.15
  }
];

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brands.length);
    }, 2800); // Reduced from 4000ms to 2800ms (30% faster)

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brands.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brands.length) % brands.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main slider container */}
      <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-blue-50 to-blue-100">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {brands.map((brand) => (
            <div key={brand.id} className="w-full flex-shrink-0 relative">
              <div className="flex flex-col h-full items-center justify-center px-4 md:px-12 py-6">
                {/* Brand Logo */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 mb-4 md:mb-6 flex items-center justify-center overflow-hidden">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    width={256}
                    height={256}
                    className="object-contain drop-shadow-lg max-h-full w-auto"
                    style={{ transform: `scale(${brand.scale || 1})` }}
                    priority={currentSlide === brand.id - 1}
                  />
                </div>
                
                {/* Brand Name */}
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                  {brand.name}
                </h2>
                
                {/* Description */}
                <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6 text-center max-w-2xl">
                  {brand.description}
                </p>
                
                {/* View Products Button */}
                <Link href={`/category/${brand.slug}`}>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                    View {brand.name} Products
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {brands.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-blue-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
