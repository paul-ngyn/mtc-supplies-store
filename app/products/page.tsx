import Image from 'next/image';
import Link from 'next/link';
import ProductGrid from '@/components/ui/ProductGrid';
import BrandCarousel from '@/components/ui/BrandCarousel';
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
    image: '/MTC_TKN_PP/kraft%20rope%20side%201.png'
  },
  {
    id: 2,
    name: 'Bio Boxes',
    slug: 'bio-boxes',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Biodegradable food boxes',
    image: '/MTC_TKN_PP/kraft%20bio%20boxes.webp'
  },
  {
    id: 3,
    name: 'Food Pails',
    slug: 'food-pails',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Convenient food pail containers',
    image: '/MTC_TKN_PP/MTC_FOOD_PAIL_KRAFT_BG-removebg.png'
  },
  {
    id: 4,
    name: 'Boat Trays',
    slug: 'boat-trays',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Versatile boat-shaped serving trays',
    image: '/MTC_TKN_PP/boat_trayss_bg-removebg-preview.png'
  },
  {
    id: 5,
    name: 'Portion Cups',
    slug: 'portion-cups',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Perfect portioning solutions',
    image: '/MTC_TKN_PP/Portion_Cup-removebg.png',
    imageStyle: 'scale-125'
  },
  {
    id: 6,
    name: 'Portion Cup Lids',
    slug: 'portion-cup-lids',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Compatible lids for portion cups',
    image: '/MTC_TKN_PP/Portion_Cup_Lid-removebg-preview.png',
    imageStyle: 'scale-125'
  },
  {
    id: 7,
    name: 'Bagasse Hinged Clamshells',
    slug: 'bagasse-hinged-clamshells',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Sustainable hinged clamshell containers',
    image: '/MTC_TKN_PP/webstaurant%20open%20placeholder%20hinged.png'
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
    image: '/MTC_TD_PP/MTC TD no bg pics/three variation hd no bg.png',
    imageStyle: 'scale-150'
  },
  {
    id: 11,
    name: 'Clipin',
    slug: 'clipin',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Innovative Clipin container solutions',
    image: '/MTC_HD_PP/MTC HD no bg pics/clipinrectanglebox.png',
    imageStyle: 'scale-110'
  },
  {
    id: 12,
    name: 'V Series',
    slug: 'v-series',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Versatile V Series containers',
    image: '/MTC_HD_PP/MTC HD no bg pics/whitetraylong.png',
    imageStyle: 'scale-110'
  },
  {
    id: 13,
    name: 'Meat Trays',
    slug: 'meat-trays',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Heavy-duty Polypropylene trays designed for meat packaging',
    image: '/MTC_HD_PP/MTC HD no bg pics/blacktraylong.png',
    imageStyle: 'scale-110'
  },
  {
    id: 14,
    name: 'Deli Containers',
    slug: 'deli-containers',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Quality deli storage containers',
    image: '/MTC_TD_PP/MTC TD no bg pics/deli%20xl.png',
    imageStyle: 'scale-110'
  },
  {
    id: 15,
    name: 'Soup Containers',
    slug: 'soup-containers',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Leak-resistant containers perfect for soups and liquids',
    image: '/MTC_TD_PP/MTC TD no bg pics/bowl%20closed.png',
    imageStyle: 'scale-110'
  },
  // TD Categories
  {
    id: 16,
    name: 'Plastic Containers',
    slug: 'plastic-containers',
    brand: 'TD',
    brandSlug: 'td',
    description: 'Durable plastic food containers',
    image: '/MTC_TD_PP/MTC TD no bg pics/7%20stack%20closed.png',
    imageStyle: 'scale-110'
  },
  {
    id: 17,
    name: 'Soup Containers',
    slug: 'soup-containers',
    brand: 'TD',
    brandSlug: 'td',
    description: 'Leak-proof soup containers',
    image: '/MTC_TD_PP/MTC TD no bg pics/Fruit_cup_XL-removebg-preview.png',
    imageStyle: 'scale-150'
  },
  // Imperial Categories
  {
    id: 18,
    name: 'Sushi Tray',
    slug: 'sushi-tray',
    brand: 'Imperial',
    brandSlug: 'imperial',
    description: 'Premium sushi presentation trays',
    image: '/MTC_IMP_PP/MTC IMPERIAL no bg/full tray sushi.png',
    imageStyle: 'scale-150'
  },
  {
    id: 19,
    name: 'Bento',
    slug: 'bento',
    brand: 'Imperial',
    brandSlug: 'imperial',
    description: 'Traditional bento box containers',
    image: '/MTC_IMP_PP/MTC IMPERIAL no bg/full_bent_5-removebg-preview.png',
    imageStyle: 'scale-150'
  },
  {
    id: 20,
    name: 'Pokebowl',
    slug: 'pokebowl',
    brand: 'Imperial',
    brandSlug: 'imperial',
    description: 'Specialized poke bowl containers',
    image: '/MTC_IMP_PP/MTC IMPERIAL no bg/poke_bowl_full-removebg-preview.png',
    imageStyle: 'object-center translate-x-[3%] -translate-y-[12%] scale-125'
  },
  // MB Categories
  {
    id: 21,
    name: 'Hinged Clamshells',
    slug: 'hinged-clamshells',
    brand: 'MB',
    brandSlug: 'mb',
    description: 'Versatile hinged clamshell containers',
    image: '/MTC_MP_PP/MTC MB no bg pics/closed black no comp.png',
    imageStyle: 'scale-150'
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
                  {category.image && (
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className={`object-contain p-4 group-hover:scale-105 transition-transform duration-300 ${(category as any).imageStyle || ''}`}
                    />
                  )}
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

      {/* Brand Carousel Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <BrandCarousel />
        </div>
      </section>
    </div>
  );
}
