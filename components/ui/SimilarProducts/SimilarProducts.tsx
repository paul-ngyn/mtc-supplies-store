import Link from 'next/link';
import Image from 'next/image';

interface SimilarProduct {
  name: string;
  brand: string;
  brandSlug: string;
  categorySlug: string;
  description: string;
  image: string;
  tags: string[];
}

interface SimilarProductsProps {
  currentBrand: string;
  currentCategory: string;
  products: SimilarProduct[];
  maxProducts?: number;
}

export default function SimilarProducts({ 
  currentBrand, 
  currentCategory, 
  products,
  maxProducts = 4 
}: SimilarProductsProps) {
  // Filter out the current product and limit results
  const suggestedProducts = products.slice(0, maxProducts);

  if (suggestedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Similar Products You May Like
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {suggestedProducts.map((product, index) => (
          <Link
            key={index}
            href={`/category/${product.brandSlug}/${product.categorySlug}`}
            className="group bg-white rounded-lg border border-gray-200 hover:border-[#1c51a3] transition-all duration-200 hover:shadow-lg overflow-hidden"
          >
            {/* Product Image */}
            <div className="relative w-full h-48 bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              {/* Brand Badge */}
              <div className="absolute top-2 right-2 bg-[#1c51a3] text-white text-xs font-semibold px-2 py-1 rounded">
                {product.brand}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#1c51a3] transition-colors line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {product.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {product.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Details Button */}
              <span className="text-sm text-[#1c51a3] font-medium group-hover:underline">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
