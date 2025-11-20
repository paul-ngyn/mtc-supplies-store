import Link from 'next/link';
import Image from 'next/image';

const imperialCategories = [
  {
    name: 'Sushi Trays',
    slug: 'sushi-tray',
    description: 'Premium sushi packaging with elegant black and gold designs',
    subcategories: [
      { name: 'Rectangular Sushi Trays', slug: 'rectangular-sushi-tray' },
      { name: 'Round Party Trays', slug: 'round-party-tray' }
    ]
  },
  {
    name: 'Bento Boxes',
    slug: 'bento',
    description: 'Traditional Asian-style compartmented containers',
    subcategories: [
      { name: 'Single Compartment', slug: 'single-compartment' },
      { name: '5 Compartment', slug: '5-compartment' }
    ]
  },
  {
    name: 'Poke Bowls',
    slug: 'pokebowl',
    description: 'Stylish containers perfect for poke and rice bowls',
    subcategories: []
  }
];

export default function ImperialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/imperial-removebg-.png"
                alt="Imperial Logo"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Imperial Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Imperial brings authentic Asian food packaging with premium sushi trays, bento boxes, and poke bowls. 
              Featuring elegant black and gold designs, Imperial products offer traditional presentation perfect for 
              restaurants and food service establishments.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imperialCategories.map((category) => (
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
                
                {category.subcategories.length > 0 ? (
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Products:
                    </h3>
                    <ul className="space-y-2">
                      {category.subcategories.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/category/imperial/${category.slug}/${sub.slug}`}
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
                    href={`/category/imperial/${category.slug}`}
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
    title: 'Imperial Products - Maple Trade Corp',
    description: 'Explore Imperial premium Asian food packaging including sushi trays, bento boxes, and poke bowls with elegant black and gold designs.',
  };
}
