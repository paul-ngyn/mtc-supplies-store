import Link from 'next/link';
import Image from 'next/image';

const tdCategories = [
  {
    name: 'Plastic Containers',
    slug: 'plastic-containers',
    description: 'Budget-friendly plastic containers for everyday use',
    subcategories: [
      { name: 'Round Containers', slug: 'round' },
      { name: 'Rectangular Containers', slug: 'rectangular' },
      { name: 'Compartment Containers', slug: 'compartments' }
    ]
  },
  {
    name: 'Soup Containers',
    slug: 'soup-containers',
    description: 'Value-priced containers for soups and liquids',
  }
];

export default function TDPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/TD no background.png"
                alt="TD Logo"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              TD Products
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed for value-conscious businesses, TD offers budget-friendly containers at unbeatable prices. 
              From versatile storage solutions to microwave-safe options, this line delivers dependable packaging 
              for everyday use. Get professional-quality products without breaking the bank!
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tdCategories.map((category) => (
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
                            href={`/category/td/${category.slug}/${sub.slug}`}
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
                    href={`/category/td/${category.slug}`}
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
    title: 'TD Products - Maple Trade Corp',
    description: 'Explore TD budget-friendly plastic containers and packaging solutions for value-conscious businesses.',
  };
}
