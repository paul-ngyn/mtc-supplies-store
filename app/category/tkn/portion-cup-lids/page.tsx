import Image from 'next/image';
import Link from 'next/link';

export default function PortionCupLidsPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'PL20',
      size: '2 oz',
      dimensions: '2 oz',
      description: '2 oz Portion Cup Lids',
      compatibility: 'Fits TKN 2 oz cups',
      caseQty: '2500 pcs',
      caseWeight: '10.00 lb',
      palletCount: '72',
      tiHi: '12 x 6'
    },
    { 
      id: 2, 
      itemNo: 'PL40',
      size: '3.25 - 5.5 oz',
      dimensions: '3.25 - 5.5 oz',
      description: '3.25 - 5.5 oz Portion Cup Lids',
      compatibility: 'Fits TKN 3.25, 4, and 5.5 oz cups',
      caseQty: '2500 pcs',
      caseWeight: '12.75 lb',
      palletCount: '45',
      tiHi: '9 x 5'
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
          <Link href="/category/tkn" className="hover:text-gray-700 transition-colors">
            TKN
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Portion Cup Lids</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="Portion Cup Lids"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Portion Cup Lids
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Compatible lids designed to fit our portion cups perfectly. These secure lids prevent spills 
                  and keep contents fresh during transport and storage. Ideal for sauces, dressings, condiments, 
                  and samples. Perfect for restaurants, food trucks, catering services, and takeout operations.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Secure fit for leak prevention</li>
                  <li>Clear plastic for visibility</li>
                  <li>Compatible with multiple cup sizes</li>
                  <li>Food-safe materials</li>
                  <li>Easy snap-on design</li>
                  <li>Perfect for takeout and delivery</li>
                </ul>
              </div>

              {/* Compatibility Notice */}
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-green-900">Universal Compatibility</p>
                    <p className="text-sm text-green-800 mt-1">
                      PL40 lids fit TKN 3.25 oz, 4 oz, and 5.5 oz Cups - one lid for multiple sizes!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details / Options Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes & Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sizeOptions.map((option) => (
                <div
                  key={option.id}
                  className="border border-gray-400 rounded-lg p-4 bg-white"
                >
                  <div className="mb-3 pb-3 border-b border-gray-100">
                    <h3 className="text-md font-bold text-gray-900 mb-0.5">
                      {option.size}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mb-2">
                      {option.itemNo}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                        {option.compatibility}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Size Range:</span>
                      <span className="font-medium text-gray-900">{option.dimensions}</span>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Portion Cups?</h3>
              <p className="text-gray-600 mb-4">
                Check out our full range of portion cups that work perfectly with these lids.
              </p>
              <Link 
                href="/category/tkn/portion-cups" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                View Portion Cups
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
    title: 'Portion Cup Lids - TKN Products - Maple Trade Corp',
    description: 'Clear portion cup lids for 2oz to 5.5oz cups. Secure fit for leak prevention and freshness.',
  };
}
