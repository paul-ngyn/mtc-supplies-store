import Link from 'next/link';
import Image from 'next/image';
import BrandCarousel from '@/components/ui/BrandCarousel';

const hdCategories = [
  {
    name: 'REROBOX Containers',
    slug: 'rerobox',
    description: 'High-quality reusable containers in round, rectangular, and compartment configurations',
    image: '/MTC_TD_PP/MTC TD no bg pics/three variation hd no bg.png'
  },
  {
    name: 'Clipin Containers',
    slug: 'clipin',
    description: 'Premium containers with secure clip-in lids in round, rectangular, and compartment styles',
    image: '/MTC_TD_PP/MTC TD no bg pics/three variation hd no bg.png'
  },
  {
    name: 'V-Series Containers',
    slug: 'v-series',
    description: 'Versatile microwave-safe containers with vented lids in round and rectangular styles',
    image: '/MTC_TD_PP/MTC TD no bg pics/three variation hd no bg.png'
  },
  {
    name: 'Meat Trays',
    slug: 'meat-trays',
    description: 'Heavy-duty Polypropylene trays designed for meat packaging, available in multiple sizes and colors',
    image: '/MTC_HD_PP/MTC HD no bg pics/blacktraylong.png'
  },
  {
    name: 'Deli Soup Containers',
    slug: 'deli-containers',
    description: 'Versatile clear containers for deli, soups, and food storage',
    image: '/MTC_TD_PP/MTC TD no bg pics/Fruit_cup_XL-removebg-preview.png'
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
            <div key={category.slug} className="flex flex-col rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {category.image && (
                <div className="relative h-80 bg-gray-50 p-6 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain scale-110"
                    />
                  </div>
                </div>
              )}

              <div className="bg-white">
                <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <Link
                  href={`/category/hd/${category.slug}`}
                  className="inline-flex items-center text-[#1c51a3] font-semibold hover:text-[#153d7f] transition-colors mt-4"
                >
                  View Containers
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                </div>
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

      {/* Brand Carousel Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <BrandCarousel />
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'HD Products - Maple Trade Corp',
    description: 'Explore HD premium plastic containers including REROBOX, Clipin, deli containers, and meat trays for food service operations.',
  };
}
