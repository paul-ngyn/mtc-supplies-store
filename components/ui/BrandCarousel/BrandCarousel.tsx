'use client';

import { useEffect, useState, useRef } from 'react';
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwipeActive, setIsSwipeActive] = useState(false);
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  const minSwipeDistance = 25.5; // Reduced by 15% from 30 to make swipes easier to trigger

  // Continuous sliding animation with deceleration
  useEffect(() => {
    if (!isSwipeActive || velocity === 0) return;

    const animate = () => {
      setPosition(prev => {
        const newPosition = prev + velocity;
        // Reset position for infinite loop
        const containerWidth = typeof window !== 'undefined' ? window.innerWidth * (brandLogos.length / 2) : 1000;
        if (newPosition > containerWidth) {
          return newPosition - containerWidth;
        } else if (newPosition < -containerWidth) {
          return newPosition + containerWidth;
        }
        return newPosition;
      });
      
      setVelocity(prev => {
        const newVelocity = prev * 0.96; // Smoother deceleration
        // Smoother stop with a lower threshold
        if (Math.abs(newVelocity) < 0.05) {
          setIsSwipeActive(false);
          return 0;
        }
        return newVelocity;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isSwipeActive, velocity]);

  // Handle touch events
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwipeActive(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      // Calculate initial velocity based on swipe distance (negative for right swipe)
      const initialVelocity = -distance / 5;
      setVelocity(initialVelocity);
      setIsSwipeActive(true);
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Brands
        </h3>
        
        {/* Carousel container */}
        <div 
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            ref={carouselRef}
            className={`flex ${!isSwipeActive ? 'animate-scroll' : ''}`}
            style={{ 
              width: `${brandLogos.length * 4 * 20}%`,
              transform: `translateX(${position}px)`,
              transition: isSwipeActive ? 'none' : undefined
            }}
          >
            {/* Create 4 sets of logos for seamless infinite loop */}
            {[...Array(4)].map((_, setIndex) => (
              brandLogos.map((brand) => (
                <div
                  key={`set-${setIndex}-${brand.id}`}
                  className="flex-shrink-0 flex items-center justify-center px-6 md:px-8"
                  style={{ width: `${100 / brandLogos.length / 4}%` }}
                >
                  <Link href={`/category/${brand.slug}`}>
                    <div className="bg-white rounded-lg p-4 md:p-4 transition-shadow duration-300 w-28 h-20 md:w-40 md:h-28 flex items-center justify-center cursor-pointer group overflow-hidden">
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
              ))
            ))}
          </div>
        </div>

        {/* View All Brands Button */}
        <div className="flex justify-center mt-16">
          <Link 
            href="/brands"
            className="px-6 py-3 bg-[#1c51a3] text-white font-semibold rounded-lg hover:bg-[#153d7f] transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            View All Our Brands
          </Link>
        </div>
      </div>
    </div>
  );
}
