'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToListButton from '@/components/ui/AddToListButton';

export default function PokeBowlPage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const productImages = [
    {
      src: '/MTC_IMP_PP/MTC IMPERIAL no bg/poke_bowl_full-removebg-preview.png',
      alt: 'Poke Bowl - Full'
    },
    {
      src: '/MTC_IMP_PP/MTC IMPERIAL no bg/poke open.png',
      alt: 'Poke Bowl - Open'
    },
    {
      src: '/MTC_IMP_PP/MTC IMPERIAL no bg/poke half.png',
      alt: 'Poke Bowl - Half Filled'
    },
    {
      src: '/MTC_IMP_PP/MTC IMPERIAL no bg/poke closed.png',
      alt: 'Poke Bowl - Closed'
    },
    {
      src: '/MTC_IMP_PP/MTC IMPERIAL no bg/poke stack.png',
      alt: 'Poke Bowl - Stack'
    }
  ];

  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'JT550',
      size: '18 oz',
      dimensions: '6" x 3"',
      description: '18 oz Poke Bowl w/ Clear Lid',
      caseQty: '300 SETS',
      caseWeight: '17 lb',
      palletCount: '24',
      tiHi: '4 x 6'
    },
    { 
      id: 2, 
      itemNo: 'JT700',
      size: '24 oz',
      dimensions: '6.5" x 2.6"',
      description: '24 oz Poke Bowl w/ Clear Lid',
      caseQty: '300 SETS',
      caseWeight: '21 lb',
      palletCount: '28',
      tiHi: '7 x 4'
    },
    { 
      id: 3, 
      itemNo: 'JT1000',
      size: '32 oz',
      dimensions: '7.25" x 2.5"',
      description: '32 oz Poke Bowl w/ Clear Lid',
      caseQty: '100 SETS',
      caseWeight: '9 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/category/imperial" className="hover:text-gray-700 transition-colors">
            Imperial
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Poke Bowl</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Slider */}
            <div className="relative">
              {/* Main Image Display */}
              <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={productImages[currentImage].src}
                  alt={productImages[currentImage].alt}
                  fill
                  className={`object-contain p-8 ${
                    (currentImage === 0 || currentImage === 1) ? 'translate-x-[5%] -translate-y-[5%]' : ''
                  }`}
                  priority
                />
                
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Next Button */}
                <button
                  onClick={() => setCurrentImage((prev) => (prev + 1) % productImages.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Image Indicator Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {productImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImage === index ? 'bg-blue-600 w-6' : 'bg-gray-400'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-2 mt-4">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImage === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Poke Bowl with Clear Lid
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium poke bowls with crystal clear lids, perfect for showcasing your poke, rice bowls, 
                  salads, and other fresh ingredients. The clear lid design allows customers to see the 
                  vibrant colors and fresh ingredients inside. Ideal for poke restaurants, fast-casual 
                  dining, meal prep, and takeout services.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Crystal clear lid for product visibility</li>
                  <li>Perfect for poke and rice bowls</li>
                  <li>Secure, leak-resistant design</li>
                  <li>Food-safe materials</li>
                  <li>Multiple capacity options</li>
                  <li>Ideal for takeout and delivery</li>
                </ul>
              </div>

              {/* Add to List Button */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <AddToListButton
                  productName="Poke Bowl with Clear Lid"
                  brand="Imperial"
                  category="Poke Bowls"
                  slug="pokebowl"
                  brandSlug="imperial"
                  image="/MTC_IMP_PP/MTC IMPERIAL no bg/poke_bowl_full-removebg-preview.png"
                  sizes={sizeOptions.map(opt => `${opt.size} (${opt.itemNo})`)}
                  showSizeSelector={true}
                />
              </div>
            </div>
          </div>

          {/* Details / Options Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes & Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sizeOptions.map((option) => (
                <div
                  key={option.id}
                  className="border border-gray-400 rounded-lg p-3 bg-white"
                >
                  <div className="mb-2 pb-2 border-b border-gray-100">
                    <h3 className="text-md font-bold text-gray-900 mb-0.5">
                      {option.size}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600">
                      {option.itemNo}
                    </p>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Dimensions:</span>
                      <span className="font-medium text-gray-900 text-right">{option.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Case Qty:</span>
                      <span className="font-medium text-gray-900">{option.caseQty}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Case Wt:</span>
                      <span className="font-medium text-gray-900">{option.caseWeight}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pallet:</span>
                      <span className="font-medium text-gray-900">{option.palletCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">TI/HI:</span>
                      <span className="font-medium text-gray-900">{option.tiHi}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Want to place an order or have any product questions?</h3>
              <p className="text-gray-600 mb-4">
                Contact us for bulk orders or custom sizing options. We're here to help with your specific needs.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-[#1c51a3] text-white px-6 py-3 rounded-md hover:bg-[#153d7f] transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
