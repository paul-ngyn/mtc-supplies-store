'use client';

import { useList } from '@/utils/listContext';
import Image from 'next/image';
import Link from 'next/link';

export default function ListPage() {
  const { listItems, removeFromList, updateQuantity, clearList, totalItems } = useList();

  if (listItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Product List</h1>
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg
              className="w-24 h-24 mx-auto mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your list is empty</h2>
            <p className="text-gray-600 mb-6">
              Browse our products and add items to your list for easy reference
            </p>
            <Link
              href="/products"
              className="inline-block bg-[#1c51a3] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#153d7f] transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Product List ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </h1>
          <button
            onClick={clearList}
            className="text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {listItems.map((item) => (
              <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-6">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-24 h-24 relative bg-gray-100 rounded-lg overflow-hidden">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                      />
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2">
                          {item.brand}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                        {item.size && (
                          <p className="text-sm text-gray-700">
                            <span className="font-medium">Size:</span> {item.size}
                          </p>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-md border border-[#1c51a3] bg-[#1c51a3] text-white hover:bg-[#153d7f] transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                            </svg>
                          </button>
                          <span className="w-12 text-center font-semibold text-gray-900">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-md border border-[#1c51a3] bg-[#1c51a3] text-white hover:bg-[#153d7f] transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromList(item.id)}
                          className="text-red-600 hover:text-red-700 transition-colors"
                          title="Remove from list"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* View Product Link */}
                    <Link
                      href={`/category/${item.brandSlug}/${item.slug}`}
                      className="inline-flex items-center text-[#1c51a3] hover:text-[#153d7f] font-medium text-sm mt-3 transition-colors"
                    >
                      View Product Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to discuss pricing, bulk orders, and custom sizing options for the items in your list.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c51a3] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#153d7f] transition-colors"
          >
            Contact Us About This List
          </Link>
        </div>
      </div>
    </div>
  );
}
