import Image from 'next/image';
import Link from 'next/link';

// Food Pails subcategories
const foodPailsSubcategories = [
  {
    id: 1,
    name: 'Kraft Food Pails',
    slug: 'kraft',
    description: 'Natural kraft brown food pail boxes for Asian takeout',
    image: '/TKN.png'
  },
  {
    id: 2,
    name: 'White Food Pails',
    slug: 'white',
    description: 'Clean white food pail boxes for premium presentation',
    image: '/TKN.png'
  }
];

export default function FoodPailsPage() {
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
                Food Pails
              </h1>
              <p className="text-lg text-gray-600">
                Traditional food pail boxes perfect for Asian takeout and noodle dishes
              </p>
              <div className="mt-4">
                <Link 
                  href="/category/tkn"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodPailsSubcategories.map((subCategory) => (
            <Link
              key={subCategory.id}
              href={`/category/tkn/food-pails/${subCategory.slug}`}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {subCategory.name}
                  </h3>
                  <p className="text-gray-600">
                    {subCategory.description}
                  </p>
                  <div className="mt-4 inline-flex items-center text-blue-600 font-medium">
                    View Products
                    <svg 
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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
    title: 'Food Pails - TKN Products - Maple Trade Corp',
    description: 'Food pail boxes in kraft and white. Perfect for Asian takeout, noodles, and rice dishes.',
  };
}
