import Image from 'next/image';
import Link from 'next/link';

export default function PokeBowlPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'JT550',
      size: '18 oz',
      dimensions: '6" x 3"',
      description: '18 oz Poke Bowl w/ Clear Lid',
      caseQty: '300 SETS',
      caseWeight: '17 lb',
      palletCount: '24',
      tiHi: '4 x 6'
    },
    { 
      id: 2, 
      itemNo: 'JT700',
      size: '24 oz',
      dimensions: '6.5" x 2.6"',
      description: '24 oz Poke Bowl w/ Clear Lid',
      caseQty: '300 SETS',
      caseWeight: '21 lb',
      palletCount: '28',
      tiHi: '7 x 4'
    },
    { 
      id: 3, 
      itemNo: 'JT1000',
      size: '32 oz',
      dimensions: '7.25" x 2.5"',
      description: '32 oz Poke Bowl w/ Clear Lid',
      caseQty: '100 SETS',
      caseWeight: '9 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/category/imperial" className="hover:text-gray-700 transition-colors">
            Imperial
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Poke Bowl</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/demo.png"
                alt="Poke Bowl with Clear Lid"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Poke Bowl with Clear Lid
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium poke bowls with crystal clear lids, perfect for showcasing your poke, rice bowls, 
                  salads, and other fresh ingredients. The clear lid design allows customers to see the 
                  vibrant colors and fresh ingredients inside. Ideal for poke restaurants, fast-casual 
                  dining, meal prep, and takeout services.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Crystal clear lid for product visibility</li>
                  <li>Perfect for poke and rice bowls</li>
                  <li>Secure, leak-resistant design</li>
                  <li>Food-safe materials</li>
                  <li>Multiple capacity options</li>
                  <li>Ideal for takeout and delivery</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Details / Options Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes & Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sizeOptions.map((option) => (
                <div
                  key={option.id}
                  className="border border-gray-400 rounded-lg p-3 bg-white"
                >
                  <div className="mb-2 pb-2 border-b border-gray-100">
                    <h3 className="text-md font-bold text-gray-900 mb-0.5">
                      {option.size}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600">
                      {option.itemNo}
                    </p>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Dimensions:</span>
                      <span className="font-medium text-gray-900 text-right">{option.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Case Qty:</span>
                      <span className="font-medium text-gray-900">{option.caseQty}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Case Wt:</span>
                      <span className="font-medium text-gray-900">{option.caseWeight}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pallet:</span>
                      <span className="font-medium text-gray-900">{option.palletCount}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">TI/HI:</span>
                      <span className="font-medium text-gray-900">{option.tiHi}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need a Custom Size?</h3>
              <p className="text-gray-600 mb-4">
                Contact us for bulk orders or custom sizing options. We're here to help with your specific needs.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'Poke Bowl with Clear Lid - Imperial Products - Maple Trade Corp',
    description: 'Premium poke bowls with clear lids in 18oz, 24oz, and 32oz sizes. Perfect for poke restaurants, rice bowls, and takeout.',
  };
}
