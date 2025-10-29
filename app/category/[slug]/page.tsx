import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ProductGrid from '@/components/ui/ProductGrid';

// Define valid category slugs
const VALID_CATEGORIES = ['tkn', 'hd', 'td', 'imperial', 'mb'] as const;
type CategorySlug = typeof VALID_CATEGORIES[number];

// Category metadata
const categoryData: Record<CategorySlug, {
  name: string;
  description: string;
  logo?: string;
  logoSize?: {
    width: number;
    height: number;
    className: string;
  };
}> = {
  tkn: {
    name: 'TKN',
    description: 'Premium TKN brand products',
    logo: '/TKN.png',
    logoSize: {
      width: 180,
      height: 100,
      className: 'h-28 w-auto'
    }
  },
  hd: {
    name: 'HD',
    description: 'High-quality HD brand products',
    logo: '/HD_logo-removebg.png',
    logoSize: {
      width: 200,
      height: 100,
      className: 'h-20 w-auto'
    }
  },
  td: {
    name: 'TD',
    description: 'Reliable TD brand products',
    logo: '/TD no background.png',
    logoSize: {
      width: 200,
      height: 100,
      className: 'h-20 w-auto'
    }
  },
  imperial: {
    name: 'Imperial',
    description: 'Premium Imperial brand products',
    logo: '/imperial-removebg-.png',
    logoSize: {
      width: 200,
      height: 100,
      className: 'h-24 w-auto'
    }
  },
  mb: {
    name: 'MB',
    description: 'Quality MB brand products',
    logo: '/MB_W_background-remove.png',
    logoSize: {
      width: 200,
      height: 100,
      className: 'h-24 w-auto'
    }
  }
};

// TKN Product Categories
const tknCategories = [
  {
    id: 1,
    name: 'Paper Bags',
    slug: 'paper-bags',
    description: 'Eco-friendly paper bags for all your needs',
    image: '/demo.png'
  },
  {
    id: 2,
    name: 'Bio Boxes',
    slug: 'bio-boxes',
    description: 'Biodegradable food boxes',
    image: '/demo.png'
  },
  {
    id: 3,
    name: 'Food Pails',
    slug: 'food-pails',
    description: 'Convenient food pail containers',
    image: '/demo.png'
  },
  {
    id: 4,
    name: 'Boat Trays',
    slug: 'boat-trays',
    description: 'Versatile boat-shaped serving trays',
    image: '/demo.png'
  },
  {
    id: 5,
    name: 'Portion Cups',
    slug: 'portion-cups',
    description: 'Perfect portioning solutions',
    image: '/demo.png'
  },
  {
    id: 6,
    name: 'Portion Cup Lids',
    slug: 'portion-cup-lids',
    description: 'Compatible lids for portion cups',
    image: '/demo.png'
  },
  {
    id: 7,
    name: 'Bagasse Hinged Clamshells',
    slug: 'bagasse-hinged-clamshells',
    description: 'Sustainable hinged clamshell containers',
    image: '/demo.png'
  },
  {
    id: 8,
    name: 'Chopsticks',
    slug: 'chopsticks',
    description: 'Quality chopsticks for dining',
    image: '/demo.png'
  },
  {
    id: 9,
    name: 'Napkins & Papertowels',
    slug: 'napkins-papertowels',
    description: 'Essential napkins and paper towels',
    image: '/demo.png'
  }
];

// HD Product Categories
const hdCategories = [
  {
    id: 1,
    name: 'REROBOX',
    slug: 'rerobox',
    description: 'Premium REROBOX food containers',
    image: '/demo.png'
  },
  {
    id: 2,
    name: 'Clipin',
    slug: 'clipin',
    description: 'Innovative Clipin container solutions',
    image: '/demo.png'
  },
  {
    id: 3,
    name: 'V Series',
    slug: 'v-series',
    description: 'Versatile V Series containers',
    image: '/demo.png'
  },
  {
    id: 4,
    name: 'Meat Trays',
    slug: 'meat-trays',
    description: 'Professional meat packaging trays',
    image: '/demo.png'
  },
  {
    id: 5,
    name: 'Deli Containers',
    slug: 'deli-containers',
    description: 'Quality deli storage containers',
    image: '/demo.png'
  }
];

// TD Product Categories
const tdCategories = [
  {
    id: 1,
    name: 'Plastic Containers',
    slug: 'plastic-containers',
    description: 'Durable plastic food containers',
    image: '/demo.png'
  },
  {
    id: 2,
    name: 'Soup Containers',
    slug: 'soup-containers',
    description: 'Leak-proof soup containers',
    image: '/demo.png'
  }
];

// Imperial Product Categories
const imperialCategories = [
  {
    id: 1,
    name: 'Sushi Tray',
    slug: 'sushi-tray',
    description: 'Premium sushi presentation trays',
    image: '/demo.png'
  },
  {
    id: 2,
    name: 'Bento',
    slug: 'bento',
    description: 'Traditional bento box containers',
    image: '/demo.png'
  },
  {
    id: 3,
    name: 'Pokebowl',
    slug: 'pokebowl',
    description: 'Specialized poke bowl containers',
    image: '/demo.png'
  }
];

// MB Product Categories
const mbCategories = [
  {
    id: 1,
    name: 'Hinged Clamshells',
    slug: 'hinged-clamshells',
    description: 'Versatile hinged clamshell containers',
    image: '/demo.png'
  }
];

// Mock product data - replace with actual data fetching
const getMockProducts = (category: string) => {
  return [
    {
      id: 1,
      name: `${category.toUpperCase()} Product 1`,
      description: 'High-quality product with excellent features',
      image: '/demo.png',
      price: 29.99,
      category: category
    },
    {
      id: 2,
      name: `${category.toUpperCase()} Product 2`,
      description: 'Durable and reliable for everyday use',
      image: '/demo.png',
      price: 39.99,
      category: category
    },
    {
      id: 3,
      name: `${category.toUpperCase()} Product 3`,
      description: 'Premium quality at an affordable price',
      image: '/demo.png',
      price: 49.99,
      category: category
    },
    {
      id: 4,
      name: `${category.toUpperCase()} Product 4`,
      description: 'Best seller with 5-star reviews',
      image: '/demo.png',
      price: 34.99,
      category: category
    },
    {
      id: 5,
      name: `${category.toUpperCase()} Product 5`,
      description: 'Perfect for professional and home use',
      image: '/demo.png',
      price: 44.99,
      category: category
    },
    {
      id: 6,
      name: `${category.toUpperCase()} Product 6`,
      description: 'Innovative design with modern features',
      image: '/demo.png',
      price: 54.99,
      category: category
    }
  ];
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase() as CategorySlug;

  // Validate category
  if (!VALID_CATEGORIES.includes(slug)) {
    notFound();
  }

  const category = categoryData[slug];
  const products = getMockProducts(slug);

  // Check if this is TKN category to show subcategories
  if (slug === 'tkn') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Category Header with Logo */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              {category.logo && (
                <Image
                  src={category.logo}
                  alt={`${category.name} Logo`}
                  width={category.logoSize?.width || 200}
                  height={category.logoSize?.height || 100}
                  className={category.logoSize?.className || 'h-20 w-auto'}
                  priority
                />
              )}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {category.name} Product Categories
                </h1>
                <p className="text-lg text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tknCategories.map((subCategory) => (
              <Link
                key={subCategory.id}
                href={`/category/tkn/${subCategory.slug}`}
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

  // Check if this is HD category to show subcategories
  if (slug === 'hd') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Category Header with Logo */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              {category.logo && (
                <Image
                  src={category.logo}
                  alt={`${category.name} Logo`}
                  width={category.logoSize?.width || 200}
                  height={category.logoSize?.height || 100}
                  className={category.logoSize?.className || 'h-20 w-auto'}
                  priority
                />
              )}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {category.name} Product Categories
                </h1>
                <p className="text-lg text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hdCategories.map((subCategory) => (
              <Link
                key={subCategory.id}
                href={`/category/hd/${subCategory.slug}`}
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

  // Check if this is TD category to show subcategories
  if (slug === 'td') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Category Header with Logo */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              {category.logo && (
                <Image
                  src={category.logo}
                  alt={`${category.name} Logo`}
                  width={category.logoSize?.width || 200}
                  height={category.logoSize?.height || 100}
                  className={category.logoSize?.className || 'h-20 w-auto'}
                  priority
                />
              )}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {category.name} Product Categories
                </h1>
                <p className="text-lg text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tdCategories.map((subCategory) => (
              <Link
                key={subCategory.id}
                href={`/category/td/${subCategory.slug}`}
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

  // Check if this is Imperial category to show subcategories
  if (slug === 'imperial') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Category Header with Logo */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              {category.logo && (
                <Image
                  src={category.logo}
                  alt={`${category.name} Logo`}
                  width={category.logoSize?.width || 200}
                  height={category.logoSize?.height || 100}
                  className={category.logoSize?.className || 'h-20 w-auto'}
                  priority
                />
              )}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {category.name} Product Categories
                </h1>
                <p className="text-lg text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imperialCategories.map((subCategory) => (
              <Link
                key={subCategory.id}
                href={`/category/imperial/${subCategory.slug}`}
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

  // Check if this is MB category to show subcategories
  if (slug === 'mb') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Category Header with Logo */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              {category.logo && (
                <Image
                  src={category.logo}
                  alt={`${category.name} Logo`}
                  width={category.logoSize?.width || 200}
                  height={category.logoSize?.height || 100}
                  className={category.logoSize?.className || 'h-20 w-auto'}
                  priority
                />
              )}
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {category.name} Product Categories
                </h1>
                <p className="text-lg text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories Grid */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mbCategories.map((subCategory) => (
              <Link
                key={subCategory.id}
                href={`/category/mb/${subCategory.slug}`}
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Header with Logo */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            {category.logo && (
              <Image
                src={category.logo}
                alt={`${category.name} Logo`}
                width={category.logoSize?.width || 200}
                height={category.logoSize?.height || 100}
                className={category.logoSize?.className || 'h-20 w-auto'}
                priority
              />
            )}
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {category.name} Products
              </h1>
              <p className="text-lg text-gray-600">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}

// Generate static params for all categories
export async function generateStaticParams() {
  return VALID_CATEGORIES.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase() as CategorySlug;
  
  if (!VALID_CATEGORIES.includes(slug)) {
    return {
      title: 'Category Not Found',
    };
  }

  const category = categoryData[slug];

  return {
    title: `${category.name} Products - Maple Trade Corp`,
    description: category.description,
  };
}
