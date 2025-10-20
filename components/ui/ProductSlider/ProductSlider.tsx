'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  description: string;
}

// Sample products for the slider - replace with real data later
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Premium PP Containers",
    image: "/demo.png", // Using existing demo image for now
    category: "Plastic Containers",
    description: "High-quality polypropylene containers perfect for food storage and takeout."
  },
  {
    id: 2,
    name: "Soup & Portion Cups",
    image: "/demo.png",
    category: "Cups",
    description: "Durable soup cups ideal for hot liquids and portion control."
  },
  {
    id: 3,
    name: "Sushi & Bento Boxes",
    image: "/demo.png",
    category: "Specialty",
    description: "Elegant containers designed specifically for sushi and bento presentations."
  },
  {
    id: 4,
    name: "Meat Trays",
    image: "/demo.png",
    category: "Trays",
    description: "Professional-grade trays for meat packaging and display."
  },
  {
    id: 5,
    name: "Hinged Clamshells",
    image: "/demo.png",
    category: "Containers",
    description: "Versatile hinged containers for various food packaging needs."
  }
];

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sampleProducts.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sampleProducts.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sampleProducts.length) % sampleProducts.length);
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
          {sampleProducts.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0 relative">
              <div className="flex flex-col md:flex-row h-full items-center justify-between px-4 md:px-12 py-6 md:py-0">
                {/* Left side - Product info */}
                <div className="flex-1 md:pr-8 text-center md:text-left">
                  <div className="inline-block px-3 py-1 bg-blue-500 text-white text-xs md:text-sm rounded-full mb-2 md:mb-4">
                    {product.category}
                  </div>
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                    {product.name}
                  </h2>
                  <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed hidden md:block">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center md:justify-start">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-colors">
                      View Products
                    </button>
                    <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Right side - Product image */}
                <div className="flex-1 flex justify-center mt-4 md:mt-0 order-first md:order-last">
                  <div className="relative w-32 h-32 md:w-80 md:h-80">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {sampleProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-blue-600 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
