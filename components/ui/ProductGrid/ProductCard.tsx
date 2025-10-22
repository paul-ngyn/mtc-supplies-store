import Image from 'next/image';
import Link from 'next/link';
import { Product } from './ProductGrid';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden group cursor-pointer h-full flex flex-col border border-gray-200">
        {/* Product Image */}
        <div className="relative w-full h-64 bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Product Name/Label */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
