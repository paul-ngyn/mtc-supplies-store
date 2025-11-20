import Image from 'next/image';
import Link from 'next/link';

// Napkins & Papertowels subcategories
const napkinsPapertowelsSubcategories = [
  {
    id: 1,
    name: 'Napkins',
    slug: 'napkins',
    description: 'High-quality dinner and tallfold napkins for food service',
    image: '/TKN.png'
  },
  {
    id: 2,
    name: 'Paper Towels',
    slug: 'paper-towels',
    description: 'Absorbent paper towels in roll and multifold formats',
    image: '/TKN.png'
  },
  {
    id: 3,
    name: 'Tissue',
    slug: 'tissue',
    description: 'Soft and durable tissue products',
    image: '/TKN.png'
  },
  {
    id: 4,
    name: 'Toilet Seat Covers',
    slug: 'toilet-seat-covers',
    description: 'Sanitary toilet seat covers for restroom hygiene',
    image: '/TKN.png'
  }
];

export default function NapkinsPapertowelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/TKN.png"
              alt="TKN Logo"
              width={200}
              height={100}
              className="h-24 w-auto"
              priority
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Napkins & Papertowels
              </h1>
              <p className="text-lg text-gray-600">
                Complete paper products for food service and facility needs
              </p>
              <div className="mt-4">
                <Link 
                  href="/brands"
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
                  Back to TKN Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {napkinsPapertowelsSubcategories.map((subCategory) => (
            <Link
              key={subCategory.id}
              href={`/category/tkn/napkins-papertowels/${subCategory.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100">
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
    title: 'Napkins & Papertowels - TKN Products - Maple Trade Corp',
    description: 'Browse our selection of napkins, paper towels, tissue, and toilet seat covers for food service and facility needs',
  };
}
