import Image from 'next/image';
import Link from 'next/link';

// Brand information with logos and descriptions
const brands = [
  {
    id: 1,
    name: 'TKN',
    logo: '/TKN.png',
    slug: 'tkn',
    description: 'Committed to sustainability, TKN specializes in premium kraft paper packaging products. From kraft paper bags and boat trays to bio boxes and food pails, this line provides environmentally responsible options for modern food service. Choose TKN for quality paper products that align with your green initiatives.',
  },
  {
    id: 2,
    name: 'HD',
    logo: '/HD_logo-removebg.png',
    slug: 'hd',
    description: 'Built for demanding food service operations, HD delivers top quality plastic containers engineered for superior performance. From the durable REROBOX and Clipin containers to versatile deli containers and meat trays, this line meets the highest standards of quality.',
  },
  {
    id: 3,
    name: 'TD',
    logo: '/TD no background.png',
    slug: 'td',
    description: 'Designed for value-conscious businesses, TD offers budget-friendly containers at unbeatable prices. From versatile storage solutions to microwave-safe options, this line delivers dependable packaging for everyday use. Get professional-quality products without breaking the bank!',
  },
  {
    id: 4,
    name: 'Imperial',
    logo: '/imperial-removebg-.png',
    slug: 'imperial',
    description: 'Imperial brings authentic Asian food packaging with premium sushi trays, bento boxes, and poke bowls. Featuring elegant black and gold designs, Imperial products offer traditional presentation perfect for restaurants and food service establishments.',
  },
  {
    id: 5,
    name: 'MB',
    logo: '/MB_W_background-remove.png',
    slug: 'mb',
    description: 'Engineered for versatility, MB manufactures professional-grade food packaging solutions for modern operations. Offering secure closure systems and excellent visibility, this line provides dependable containers for fresh food presentation.',
  },
];

export default function OurBrandsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Brands
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive portfolio of trusted brands, each offering specialized packaging solutions 
              designed to meet the diverse needs of modern food service operations.
            </p>
          </div>
        </div>
      </div>

      {/* Brands Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
                {/* Brand Logo - Left Side */}
                <div className="md:col-span-2 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6">
                  <Link href={`/category/${brand.slug}`} className="block w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={200}
                      height={150}
                      className={`object-contain max-h-32 w-auto hover:scale-105 transition-transform duration-300 ${brand.name === 'MB' ? 'scale-150' : ''} ${brand.name === 'HD' ? 'scale-125' : ''}`}
                    />
                  </Link>
                </div>

                {/* Brand Description - Right Side */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <Link href={`/category/${brand.slug}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {brand.name}
                    </h2>
                  </Link>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {brand.description}
                  </p>
                  <Link 
                    href={`/category/${brand.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Explore {brand.name} Products
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

      {/* Call to Action Section */}
      <div className="bg-blue-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            Our team is here to help you find the perfect packaging solutions for your business needs.
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

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Our Brands - Maple Trade Corp',
    description: 'Explore our portfolio of trusted packaging brands: TKN, HD, TD, Imperial, and MB. Quality food service packaging solutions for every need.',
  };
}
