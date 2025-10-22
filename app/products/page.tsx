import Image from 'next/image';
import ProductGrid from '@/components/ui/ProductGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products - Maple Trade Corp',
  description: 'Browse all products from our premium brands',
};

// Mock product data - replace with actual data fetching
const getAllProducts = () => {
  const brands = ['TKN', 'HD', 'TD', 'Imperial', 'MB'];
  const products = [];
  
  for (let i = 1; i <= 24; i++) {
    const brand = brands[(i - 1) % brands.length];
    products.push({
      id: i,
      name: `${brand} Product ${i}`,
      description: 'Premium quality product with excellent features and durability',
      image: '/demo.png',
      price: 29.99 + (i * 5),
      category: brand.toLowerCase()
    });
  }
  
  return products;
};

export default function AllProductsPage() {
  const products = getAllProducts();

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
                All Products
              </h1>
              <p className="text-lg text-gray-600">
                Browse our complete collection of premium products
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
