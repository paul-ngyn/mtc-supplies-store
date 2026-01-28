import Image from 'next/image';
import Link from 'next/link';

// REROBOX subcategories
const reroboxSubcategories = [
  {
    id: 1,
    name: 'Rectangular',
    slug: 'rectangular',
    description: 'Rectangular REROBOX containers for versatile food storage',
    image: '/TKN.png'
  },
  {
    id: 2,
    name: 'Round',
    slug: 'round',
    description: 'Round REROBOX containers for optimal portioning',
    image: '/TKN.png'
  },
  {
    id: 3,
    name: 'Compartment',
    slug: 'compartment',
    description: 'Multi-compartment REROBOX containers for organized meals',
    image: '/TKN.png'
  }
];

export default function ReroboxPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/Rero_w_background-remove.png"
              alt="REROBOX Logo"
              width={200}
              height={100}
              className="h-24 w-auto"
              priority
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                REROBOX
              </h1>
              <p className="text-lg text-gray-600">
                Premium REROBOX food containers for all your packaging needs
              </p>
              <div className="mt-4">
                <Link 
                  href="/category/hd"
                  className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  <svg 
                    className="w-4 h-4 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to HD Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reroboxSubcategories.map((subCategory) => (
            <Link
              key={subCategory.id}
              href={`/category/hd/rerobox/${subCategory.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                  <Image
                    src={subCategory.image}
                    alt={subCategory.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {subCategory.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {subCategory.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'REROBOX - HD Products - Maple Trade Corp',
    description: 'Browse our selection of REROBOX containers including rectangular, round, and compartment options',
  };
}
