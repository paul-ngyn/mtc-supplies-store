import Image from 'next/image';
import Link from 'next/link';
import ProductGrid from '@/components/ui/ProductGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products - Maple Trade Corp',
  description: 'Browse all products from our premium brands',
};

// All product categories from all brands
const allProductCategories = [
  // TKN Categories
  {
    id: 1,
    name: 'Paper Bags',
    slug: 'paper-bags',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Eco-friendly paper bags for all your needs',
    image: '/TKN.png'
  },
  {
    id: 2,
    name: 'Bio Boxes',
    slug: 'bio-boxes',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Biodegradable food boxes',
    image: '/TKN.png'
  },
  {
    id: 3,
    name: 'Food Pails',
    slug: 'food-pails',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Convenient food pail containers',
    image: '/TKN.png'
  },
  {
    id: 4,
    name: 'Boat Trays',
    slug: 'boat-trays',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Versatile boat-shaped serving trays',
    image: '/TKN.png'
  },
  {
    id: 5,
    name: 'Portion Cups',
    slug: 'portion-cups',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Perfect portioning solutions',
    image: '/TKN.png'
  },
  {
    id: 6,
    name: 'Portion Cup Lids',
    slug: 'portion-cup-lids',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Compatible lids for portion cups',
    image: '/TKN.png'
  },
  {
    id: 7,
    name: 'Bagasse Hinged Clamshells',
    slug: 'bagasse-hinged-clamshells',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Sustainable hinged clamshell containers',
    image: '/TKN.png'
  },
  {
    id: 8,
    name: 'Chopsticks',
    slug: 'chopsticks',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Quality chopsticks for dining',
    image: '/TKN.png'
  },
  {
    id: 9,
    name: 'Napkins & Papertowels',
    slug: 'napkins-papertowels',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Essential napkins and paper towels',
    image: '/TKN.png'
  },
  // HD Categories
  {
    id: 10,
    name: 'REROBOX',
    slug: 'rerobox',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Premium REROBOX food containers',
    image: '/TKN.png'
  },
  {
    id: 11,
    name: 'Clipin',
    slug: 'clipin',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Innovative Clipin container solutions',
    image: '/TKN.png'
  },
  {
    id: 12,
    name: 'V Series',
    slug: 'v-series',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Versatile V Series containers',
    image: '/TKN.png'
  },
  {
    id: 13,
    name: 'Meat Trays',
    slug: 'meat-trays',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Professional meat packaging trays',
    image: '/TKN.png'
  },
  {
    id: 14,
    name: 'Deli Containers',
    slug: 'deli-containers',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Quality deli storage containers',
    image: '/TKN.png'
  },
  // TD Categories
  {
    id: 15,
    name: 'Plastic Containers',
    slug: 'plastic-containers',
    brand: 'TD',
    brandSlug: 'td',
    description: 'Durable plastic food containers',
    image: '/TKN.png'
  },
  {
    id: 16,
    name: 'Soup Containers',
    slug: 'soup-containers',
    brand: 'TD',
    brandSlug: 'td',
    description: 'Leak-proof soup containers',
    image: '/TKN.png'
  },
  // Imperial Categories
  {
    id: 17,
    name: 'Sushi Tray',
    slug: 'sushi-tray',
    brand: 'Imperial',
    brandSlug: 'imperial',
    description: 'Premium sushi presentation trays',
    image: '/TKN.png'
  },
  {
    id: 18,
    name: 'Bento',
    slug: 'bento',
    brand: 'Imperial',
    brandSlug: 'imperial',
    description: 'Traditional bento box containers',
    image: '/TKN.png'
  },
  {
    id: 19,
    name: 'Pokebowl',
    slug: 'pokebowl',
    brand: 'Imperial',
    brandSlug: 'imperial',
    description: 'Specialized poke bowl containers',
    image: '/TKN.png'
  },
  // MB Categories
  {
    id: 20,
    name: 'Hinged Clamshells',
    slug: 'hinged-clamshells',
    brand: 'MB',
    brandSlug: 'mb',
    description: 'Versatile hinged clamshell containers',
    image: '/TKN.png'
  }
];

export default function AllProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header with Logo */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/mtc_logo-removebg.png"
              alt="MTC Logo"
              width={200}
              height={100}
              className="h-20 w-auto"
              priority
            />
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                All Product Categories
              </h1>
              <p className="text-lg text-gray-600">
                Browse our complete collection of product categories from all brands
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProductCategories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.brandSlug}/${category.slug}`}
              className="group"
            >
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {category.brand}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
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
