import Image from 'next/image';
import Link from 'next/link';

// V Series subcategories
const vSeriesSubcategories = [
  {
    id: 1,
    name: 'Rectangular',
    slug: 'rectangular',
    description: 'Rectangular V Series containers for efficient food storage',
    image: '/MTC_TD_PP/MTC TD no bg pics/1 comp close.png',
    imageClassName: 'scale-[1.4] group-hover:scale-[1.48] -translate-y-[10%]'
  },
  {
    id: 2,
    name: 'Round',
    slug: 'round',
    description: 'Round V Series containers for versatile portioning',
    image: '/MTC_TD_PP/MTC TD no bg pics/bowl closed.png',
    imageClassName: 'scale-[1.4] group-hover:scale-[1.48]'
  }
];

export default function VSeriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/HD_logo-removebg.png"
              alt="HD Logo"
              width={200}
              height={100}
              className="h-20 w-auto"
              priority
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                V Series
              </h1>
              <p className="text-lg text-gray-600">
                Versatile V Series containers for all your food packaging needs
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
          {vSeriesSubcategories.map((subCategory) => (
            <Link
              key={subCategory.id}
              href={`/category/hd/v-series/${subCategory.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                  <Image
                    src={subCategory.image}
                    alt={subCategory.name}
                    fill
                    className={`object-contain p-1 transition-transform duration-300 ${subCategory.imageClassName}`}
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
    title: 'V Series - HD Products - Maple Trade Corp',
    description: 'Browse our selection of V Series containers including rectangular and round options',
  };
}
