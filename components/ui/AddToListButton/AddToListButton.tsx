'use client';

import { useState } from 'react';
import { useList } from '@/utils/listContext';

interface AddToListButtonProps {
  productName: string;
  brand: string;
  category: string;
  slug: string;
  brandSlug: string;
  image?: string;
  sizes?: string[];
  defaultSize?: string;
  showSizeSelector?: boolean;
}

export default function AddToListButton({
  productName,
  brand,
  category,
  slug,
  brandSlug,
  image,
  sizes = [],
  defaultSize,
  showSizeSelector = true,
}: AddToListButtonProps) {
  const { addToList } = useList();
  const [selectedSize, setSelectedSize] = useState(defaultSize || sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToList = () => {
    addToList({
      name: productName,
      brand,
      category,
      slug,
      brandSlug,
      image,
      size: selectedSize || undefined,
      quantity,
    });

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
    
    // Reset quantity
    setQuantity(1);
  };

  return (
    <div className="space-y-4">
      {/* Size Selector */}
      {showSizeSelector && sizes.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Size
          </label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1c51a3] focus:border-transparent text-black bg-white"
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
          className="w-24 px-3 py-2 text-center text-black bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1c51a3] focus:border-transparent"
        />
      </div>

      {/* Add to List Button */}
      <button
        onClick={handleAddToList}
        disabled={showSizeSelector && sizes.length > 0 && !selectedSize}
        className="w-full px-6 py-3 bg-[#1c51a3] text-white font-semibold rounded-md hover:bg-[#153d7f] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add to My List
      </button>

      {/* Success Message */}
      {showSuccess && (
        <div className="flex items-center gap-2 text-green-600 font-medium animate-fade-in">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added to your list!
        </div>
      )}
    </div>
  );
}
