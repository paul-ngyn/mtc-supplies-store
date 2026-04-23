'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import AddToListButton from '@/components/ui/AddToListButton';

// Product images from MB no bg pics - black variants
const productImages = [
  {
    id: 4,
    src: '/MTC_MP_PP/MTC MB no bg pics/closed black no comp.png',
    alt: 'PP Hinged Clamshell Black - Closed No Compartment'
  },
  {
    id: 3,
    src: '/MTC_MP_PP/MTC MB no bg pics/closed black comp.png',
    alt: 'PP Hinged Clamshell Black - Closed with Compartment'
  },
  {
    id: 5,
    src: '/MTC_MP_PP/MTC MB no bg pics/open black comp.png',
    alt: 'PP Hinged Clamshell Black - Open with Compartment'
  },
  {
    id: 6,
    src: '/MTC_MP_PP/MTC MB no bg pics/open black no comp.png',
    alt: 'PP Hinged Clamshell Black - Open No Compartment'
  },
  {
    id: 7,
    src: '/MTC_MP_PP/MTC MB no bg pics/tri stack black.png',
    alt: 'PP Hinged Clamshell Black - Triple Stack'
  },
  {
    id: 8,
    src: '/MTC_MP_PP/MTC MB no bg pics/tri stack black side.png',
    alt: 'PP Hinged Clamshell Black - Triple Stack Side View'
  },
  {
    id: 9,
    src: '/MTC_MP_PP/MTC MB no bg pics/clamshellboxblack.png',
    alt: 'PP Hinged Clamshell Black - Clamshell Box',
    imageStyle: 'brightness-110'
  }
];

// Product Slider Component
function ProductImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="relative w-full">
      {/* Main Image Display */}
      <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
        <Image
          src={productImages[currentSlide].src}
          alt={productImages[currentSlide].alt}
          fill
          className={`object-contain p-8 ${productImages[currentSlide].imageStyle || ''}`}
          priority
        />
        
        {/* Previous Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Next Button */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % productImages.length)}
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
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-400'
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
            onClick={() => setCurrentSlide(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              currentSlide === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-contain p-2 ${image.imageStyle || ''}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PPHingedVentedClamshellBlackPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'PPH61',
      size: '6"',
      dimensions: '6" x 6" x 3"',
      description: '6" PP Hinged Clamshell Black Vented',
      caseQty: '240 ct.',
      caseDimension: '6" x 6" x 3"',
      caseWeight: '17.4 lb',
      palletCount: '49',
      tiHi: '7 x 7'
    },
    { 
      id: 2, 
      itemNo: 'PPH81',
      size: '8"',
      dimensions: '8" x 8" x 3"',
      description: '8" PP Hinged Clamshell Black Vented',
      caseQty: '120 ct.',
      caseDimension: '8" x 8" x 3"',
      caseWeight: '14.9 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 3, 
      itemNo: 'PPH83',
      size: '8" (Alt)',
      dimensions: '8" x 8" x 3"',
      description: '8" PP Hinged Clamshell Black Vented',
      caseQty: '120 ct.',
      caseDimension: '8" x 8" x 3"',
      caseWeight: '14.9 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 4, 
      itemNo: 'PPH91',
      size: '9"',
      dimensions: '9" x 9" x 3"',
      description: '9" PP Hinged Clamshell Black Vented',
      caseQty: '120 ct.',
      caseDimension: '9" x 9" x 3"',
      caseWeight: '17.0 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 5, 
      itemNo: 'PPH93',
      size: '9" (Alt)',
      dimensions: '9" x 9" x 3"',
      description: '9" PP Hinged Clamshell Black Vented',
      caseQty: '120 ct.',
      caseDimension: '9" x 9" x 3"',
      caseWeight: '17.0 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 6, 
      itemNo: 'PPH96',
      size: '9" x 6"',
      dimensions: '9" x 6" x 3"',
      description: '9" x 6" PP Hinged Clamshell Black Vented',
      caseQty: '160 ct.',
      caseDimension: '9" x 6" x 3"',
      caseWeight: '14.6 lb',
      palletCount: '40',
      tiHi: '8 x 5'
    },
    { 
      id: 7, 
      itemNo: 'PPH962',
      size: '9" x 6" 2-Comp',
      dimensions: '9" x 6" x 3"',
      description: '9" x 6" 2-Comp PP Hinged Clamshell Black Vented',
      caseQty: '160 ct.',
      caseDimension: '9" x 6" x 3"',
      caseWeight: '14.6 lb',
      palletCount: '49',
      tiHi: '7 x 7'
    },
    { 
      id: 8, 
      itemNo: 'PPH101',
      size: '10"',
      dimensions: '10" x 10" x 3"',
      description: '10" PP Hinged Clamshell Black Vented',
      caseQty: '100 ct.',
      caseDimension: '10" x 10" x 3"',
      caseWeight: '18.5 lb',
      palletCount: '40',
      tiHi: '8 x 5'
    },
    { 
      id: 9, 
      itemNo: 'PPH1094',
      size: '10.5" x 9" 4-Comp',
      dimensions: '10.5" x 9" x 3"',
      description: '10.5" x 9" 4-Comp PP Hinged Vented',
      caseQty: '100 ct.',
      caseDimension: '10.5" x 9" x 3"',
      caseWeight: '18.3 lb',
      palletCount: '45',
      tiHi: '9 x 5'
    },
    { 
      id: 10, 
      itemNo: 'PPH1095',
      size: '10.5" x 9" 5-Comp',
      dimensions: '10.5" x 9" x 3"',
      description: '10.5" x 9" 5-Comp PP Hinged Vented',
      caseQty: '100 ct.',
      caseDimension: '10.5" x 9" x 3"',
      caseWeight: '18.5 lb',
      palletCount: '45',
      tiHi: '9 x 5'
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
          <Link href="/category/mb" className="hover:text-gray-700 transition-colors">
            MB
          </Link>
          <span>/</span>
          <Link href="/category/mb/hinged-clamshells" className="hover:text-gray-700 transition-colors">
            Hinged Clamshells
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">PP Hinged Vented Clamshell Black</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Slider */}
            <div>
              <ProductImageSlider />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                PP Hinged Vented Clamshell Black
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium polypropylene (PP) hinged clamshell containers in black with ventilation features. 
                  Ideal for hot foods and applications requiring steam release. The vented design prevents 
                  condensation buildup while maintaining food quality and presentation.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Microwave safe polypropylene material</li>
                  <li>Vented design for steam release</li>
                  <li>Black color for premium appearance</li>
                  <li>Secure hinged closure</li>
                  <li>Prevents condensation buildup</li>
                  <li>Stackable for efficient storage</li>
                </ul>
              </div>

              {/* Add to List Button */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <AddToListButton
                  productName="PP Hinged Vented Clamshell Black"
                  brand="MB"
                  category="Hinged Clamshells"
                  slug="hinged-clamshells/pp-vented-black"
                  brandSlug="mb"
                  image="/MTC_MP_PP/MTC MB no bg pics/closed black no comp.png"
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
                      <span className="text-gray-600">Pallet Count:</span>
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
