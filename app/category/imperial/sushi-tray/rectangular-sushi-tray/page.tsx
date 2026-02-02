'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RectangularSushiTrayPage() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const productImages = [
    {
      src: '/MTC_IMP_PP/full tray sushi.png',
      alt: 'Rectangular Sushi Tray - Full Display'
    },
    {
      src: '/MTC_IMP_PP/MTC IMPERIAL no bg/sushi open.png',
      alt: 'Rectangular Sushi Tray - Open'
    },
    {
      src: '/MTC_IMP_PP/MTC IMPERIAL no bg/sushi closed.png',
      alt: 'Rectangular Sushi Tray - Closed'
    }
  ];

  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'JT01',
      size: 'Single Roll',
      dimensions: '8.74" x 3.62" x 0.87"',
      description: 'Sushi Trays Single Roll Black and Gold',
      caseQty: '600 SETS',
      caseWeight: '28.75 lb',
      palletCount: '28',
      tiHi: '4 x 7'
    },
    { 
      id: 2, 
      itemNo: 'JT03',
      size: '6.42" x 4.89"',
      dimensions: '6.42" x 4.89" x 0.87"',
      description: 'Sushi Trays Black and Gold',
      caseQty: '600 SETS',
      caseWeight: '26 lb',
      palletCount: '36',
      tiHi: '6 x 6'
    },
    { 
      id: 3, 
      itemNo: 'JT05',
      size: '7.28" x 5.04"',
      dimensions: '7.28" x 5.04" x 0.87"',
      description: 'Sushi Trays Black and Gold',
      caseQty: '400 SETS',
      caseWeight: '22.5 lb',
      palletCount: '35',
      tiHi: '5 x 7'
    },
    { 
      id: 4, 
      itemNo: 'JT07',
      size: '8.46" x 5.63"',
      dimensions: '8.46" x 5.63" x 0.87"',
      description: 'Sushi Trays Black and Gold',
      caseQty: '400 SETS',
      caseWeight: '28 lb',
      palletCount: '28',
      tiHi: '4 x 7'
    },
    { 
      id: 5, 
      itemNo: 'JT09',
      size: '9.25" x 5.63"',
      dimensions: '9.25" x 5.63" x 0.87"',
      description: 'Sushi Trays Black and Gold',
      caseQty: '300 SETS',
      caseWeight: '25.5 lb',
      palletCount: '24',
      tiHi: '6 x 4'
    },
    { 
      id: 6, 
      itemNo: 'JT11',
      size: '10.22" x 7.2"',
      dimensions: '10.22" x 7.2" x 0.87"',
      description: 'Sushi Trays Black and Gold',
      caseQty: '200 SETS',
      caseWeight: '23.5 lb',
      palletCount: '30',
      tiHi: '6 x 5'
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
          <Link href="/category/imperial/sushi-tray" className="hover:text-gray-700 transition-colors">
            Sushi Tray
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Rectangular Sushi Tray</span>
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
                  className="object-contain p-8"
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
                Rectangular Sushi Tray Black and Gold
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium rectangular sushi trays featuring an elegant black and gold design. 
                  Perfect for sushi presentation, takeout, and catering services. These trays 
                  provide a sophisticated backdrop that enhances the visual appeal of your sushi 
                  and Japanese cuisine offerings.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Premium black and gold design</li>
                  <li>Perfect for sushi and Japanese cuisine</li>
                  <li>Food-safe materials</li>
                  <li>Multiple sizes for different portions</li>
                  <li>Ideal for takeout and catering</li>
                  <li>Professional presentation</li>
                </ul>
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
