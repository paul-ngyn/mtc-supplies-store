import { notFound } from 'next/navigation';
import Image from 'next/image';
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
