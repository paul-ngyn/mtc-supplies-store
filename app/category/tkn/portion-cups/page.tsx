import Image from 'next/image';
import Link from 'next/link';

export default function PortionCupsPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'PC200',
      size: '2 oz',
      dimensions: '2 oz',
      description: '2 oz Portion Cups',
      caseQty: '2500 pcs',
      caseWeight: '13.45 lb',
      palletCount: '72',
      tiHi: '12 x 6'
    },
    { 
      id: 2, 
      itemNo: 'PC325',
      size: '3.25 oz',
      dimensions: '3.25 oz',
      description: '3.25 oz Portion Cups',
      caseQty: '2500 pcs',
      caseWeight: '17.75 lb',
      palletCount: '45',
      tiHi: '9 x 5'
    },
    { 
      id: 3, 
      itemNo: 'PC400',
      size: '4 oz',
      dimensions: '4 oz',
      description: '4 oz Portion Cups',
      caseQty: '2500 pcs',
      caseWeight: '18.50 lb',
      palletCount: '45',
      tiHi: '9 x 5'
    },
    { 
      id: 4, 
      itemNo: 'PC550',
      size: '5.5 oz',
      dimensions: '5.5 oz',
      description: '5.5 oz Portion Cups',
      caseQty: '2500 pcs',
      caseWeight: '23.50 lb',
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
          <span className="text-gray-700 font-medium">Portion Cups</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="Portion Cups - Premium TKN Food Storage"
                title="TKN Portion Cups - Durable and Food-Safe"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Portion Cups
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  High-quality portion cups designed for accurate serving sizes and food storage. Perfect for 
                  sauces, dressings, condiments, samples, and small portions. These durable cups are ideal for 
                  restaurants, food trucks, catering services, and takeout operations. Available in sizes from 
                  2 oz to 5.5 oz.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Clear plastic for product visibility</li>
                  <li>Durable and leak-resistant</li>
                  <li>Perfect for portion control</li>
                  <li>Food-safe materials</li>
                  <li>Multiple size options (2-5.5 oz)</li>
                  <li>Ideal for sauces and condiments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Details / Options Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes & Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                      <span className="text-gray-600">Size:</span>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Looking for Lids?</h3>
              <p className="text-gray-600 mb-4">
                Check out our compatible portion cup lids to complete your setup.
              </p>
              <Link 
                href="/category/tkn/portion-cup-lids" 
                className="inline-block bg-[#1c51a3] text-white px-6 py-3 rounded-md hover:bg-[#153d7f] transition-colors font-medium"
              >
                View Portion Cup Lids
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
    title: 'Portion Cups - TKN Products - Maple Trade Corp',
    description: 'Clear portion cups from 2oz to 5.5oz. Perfect for sauces, dressings, condiments, and portion control.',
  };
}
