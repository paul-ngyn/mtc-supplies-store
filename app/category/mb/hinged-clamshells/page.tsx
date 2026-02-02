import Image from 'next/image';
import Link from 'next/link';

// Hinged Clamshells subcategories
const hingedClamsellsSubcategories = [
  {
    id: 1,
    name: 'TFPP Hinged Clamshell White',
    slug: 'tfpp-white',
    description: 'Premium TFPP material hinged clamshells in white',
    image: '/MTC_MP_PP/MTC MB no bg pics/closed white.png'
  },
  {
    id: 2,
    name: 'PP Hinged Vented Clamshell Black',
    slug: 'pp-vented-black',
    description: 'Vented polypropylene hinged clamshells in black',
    image: '/MTC_MP_PP/MTC MB no bg pics/closed black no comp.png'
  }
];

export default function HingedClamsellsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/MB_W_background-remove.png"
              alt="MB Logo"
              width={200}
              height={100}
              className="h-24 w-auto"
              priority
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Hinged Clamshells
              </h1>
              <p className="text-lg text-gray-600">
                Versatile hinged clamshell containers for all your food packaging needs
              </p>
              <div className="mt-4">
                <Link 
                  href="/category/mb"
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
                  Back to MB Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hingedClamsellsSubcategories.map((subCategory) => (
            <Link
              key={subCategory.id}
              href={`/category/mb/hinged-clamshells/${subCategory.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="relative h-64 bg-gradient-to-br from-blue-50 to-blue-100">
                  <Image
                    src={subCategory.image}
                    alt={subCategory.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
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
    title: 'Hinged Clamshells - MB Products - Maple Trade Corp',
    description: 'Browse our selection of hinged clamshell containers including TFPP and PP vented options',
  };
}
