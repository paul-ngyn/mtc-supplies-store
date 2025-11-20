import Link from 'next/link';
import Image from 'next/image';

const hdCategories = [
  {
    name: 'Clipin Containers',
    slug: 'clipin',
    description: 'Premium containers with secure clip-in lids',
    subcategories: [
      { name: 'Round Clipin', slug: 'round' },
      { name: 'Rectangular Clipin', slug: 'rectangular' },
      { name: 'Compartment Clipin', slug: 'compartment' }
    ]
  },
  {
    name: 'Deli Containers',
    slug: 'deli-containers',
    description: 'Versatile clear containers for deli and food storage',
  },
  {
    name: 'Meat Trays',
    slug: 'meat-trays',
    description: 'Heavy-duty trays designed for meat and protein products',
  },
  {
    name: 'REROBOX Containers',
    slug: 'rerobox',
    description: 'High-quality reusable and recyclable containers',
    subcategories: [
      { name: 'Round Rerobox', slug: 'round' },
      { name: 'Rectangular Rerobox', slug: 'rectangular' },
      { name: 'Compartment Rerobox', slug: 'compartment' }
    ]
  },
  {
    name: 'Soup Containers',
    slug: 'soup-containers',
    description: 'Leak-resistant containers perfect for soups and liquids',
  },
  {
    name: 'V-Series Containers',
    slug: 'v-series',
    description: 'Versatile microwave-safe containers',
    subcategories: [
      { name: 'Round V-Series', slug: 'round' },
      { name: 'Rectangular V-Series', slug: 'rectangular' },
      { name: 'Rectangular Vented V-Series', slug: 'rectangular-vented' }
    ]
  }
];

export default function HDPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/HD_logo-removebg.png"
                alt="HD Logo"
                width={250}
                height={125}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              HD Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built for demanding food service operations, HD delivers top quality plastic containers engineered for 
              superior performance. From the durable REROBOX and Clipin containers to versatile deli containers and 
              meat trays, this line meets the highest standards of quality.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hdCategories.map((category) => (
            <div
              key={category.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                {category.subcategories && category.subcategories.length > 0 ? (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Products:
                    </h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/category/hd/${category.slug}/${sub.slug}`}
                            className="text-[#1c51a3] hover:text-[#153d7f] hover:underline transition-colors"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={`/category/hd/${category.slug}`}
                    className="inline-flex items-center text-[#1c51a3] font-semibold hover:text-[#153d7f] transition-colors mt-4"
                  >
                    View Products
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Banner */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Want to place an order or have any product questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Contact us for bulk orders or custom sizing options. We're here to help with your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1c51a3] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#153d7f] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'HD Products - Maple Trade Corp',
    description: 'Explore HD premium plastic containers including REROBOX, Clipin, deli containers, and meat trays for food service operations.',
  };
}
