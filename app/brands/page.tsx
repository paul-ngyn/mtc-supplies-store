import Image from 'next/image';
import Link from 'next/link';

// Brand information with logos and descriptions
const brands = [
  {
    id: 1,
    name: 'TKN',
    logo: '/TKN.png',
    slug: 'tkn',
    description: 'TKN specializes in eco-friendly packaging solutions including bio boxes, food pails, paper bags, and sustainable disposable products. Committed to environmental responsibility without compromising quality, TKN offers a complete range of biodegradable and compostable food service products perfect for modern, eco-conscious businesses.',
  },
  {
    id: 2,
    name: 'HD',
    logo: '/HD_logo-removebg.png',
    slug: 'hd',
    description: 'HD delivers premium plastic food containers and packaging solutions. From the innovative REROBOX and Clipin systems to versatile V-Series vented containers, HD provides durable, reliable products for food service operations. Their comprehensive product line includes meat trays, deli containers, and specialized packaging designed for optimal food preservation and presentation.',
  },
  {
    id: 3,
    name: 'TD',
    logo: '/TD no background.png',
    slug: 'td',
    description: 'TD offers a versatile range of plastic containers designed for both food service and storage applications. Featuring round, rectangular, and compartment containers, plus microwave-safe soup containers, TD products combine functionality with durability. Perfect for restaurants, delis, meal prep services, and takeout operations requiring reliable, space-efficient packaging solutions.',
  },
  {
    id: 4,
    name: 'Imperial',
    logo: '/imperial-removebg-.png',
    slug: 'imperial',
    description: 'Imperial brings authentic Asian food packaging with their premium sushi trays, bento boxes, and poke bowls. Featuring elegant black and gold designs, Imperial products are perfect for restaurants and food service establishments seeking traditional Japanese-style presentation. Their range includes rectangular and round sushi trays, multi-compartment bento boxes, and versatile poke bowl containers.',
  },
  {
    id: 5,
    name: 'MB',
    logo: '/MB_W_background-remove.png',
    slug: 'mb',
    description: 'MB manufactures high-quality hinged clamshell containers for versatile food packaging needs. Available in TFPP white and PP vented black options, MB clamshells offer secure closure, excellent visibility, and reliable protection for fresh foods. Ideal for grocery stores, delis, bakeries, and food service operations requiring professional, food-safe packaging solutions.',
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
                      className="object-contain max-h-32 w-auto hover:scale-105 transition-transform duration-300"
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
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            Our team is here to help you find the perfect packaging solutions for your business needs.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
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
