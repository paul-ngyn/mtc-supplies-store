'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Brand {
  id: number;
  name: string;
  logo: string;
  slug: string;
  description: string;
  scale?: number;
  fullBanner?: string; // Full-width banner image that replaces the entire slide
  buttonPosition?: string; // Custom button positioning classes for full banner
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
    description: "For all your sushi and bento needs",
    scale: 1,
    fullBanner: "/MTC_IMP_PP/MTC IMPERIAL no bg/ImpProductCarouselLast.png"
  },
  {
    id: 5,
    name: "MB",
    logo: "/MB_W_background-remove.png",
    slug: "mb",
    description: "Quality MB brand products",
    scale: 1.15,
    fullBanner: "/MTC_MP_PP/MB BANNER FINALE.png",
    buttonPosition: "bottom-[3%] md:bottom-[12%] right-[35%] md:right-[76.5%]"
  }
];

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 md:px-4">
      {/* Main slider container */}
      <div 
        ref={sliderRef}
        className="relative h-[200px] sm:h-[280px] md:h-[490px] lg:h-[540px] overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-blue-50 to-blue-100 touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {brands.map((brand) => (
            <div key={brand.id} className="w-full flex-shrink-0 relative">
              {brand.fullBanner ? (
                /* Full Banner Layout */
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={brand.fullBanner}
                    alt={`${brand.name} Banner`}
                    fill
                    className="object-cover scale-105"
                    priority={currentSlide === brand.id - 1}
                  />
                  {/* Shop All Button Overlay */}
                  <div className={`absolute ${brand.buttonPosition || 'bottom-[8%] md:bottom-10 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0'}`}>
                    <Link href={`/category/${brand.slug}`}>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 md:px-7 py-1.5 md:py-3 rounded-md md:rounded-lg text-[10px] md:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                        Shop All
                      </button>
                    </Link>
                  </div>
                </div>
              ) : (
                /* Default Layout */
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
              )}
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
