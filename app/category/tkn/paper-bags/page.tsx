import Link from 'next/link';
import KraftRopeImageSlider from './KraftRopeImageSlider';

export default function PaperBagsPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'PB100712T/F',
      name: 'Bistro',
      size: '10" x 6.75" x 12"',
      dimensions: '10" x 6.75" x 12"',
      description: 'Bistro, 100% Recycled Paper Bag',
      caseQty: '250 PCS',
      caseWeight: '29 lb',
      palletCount: '40',
      tiHi: '10 x 4',
      handleOptions: 'Twisted (T) or Flat (F)'
    },
    { 
      id: 2, 
      itemNo: 'PB130713T/F',
      name: 'Jr. Mart',
      size: '13" x 7" x 13"',
      dimensions: '13" x 7" x 13"',
      description: 'Jr. Mart, 100% Recycled Paper Bag',
      caseQty: '250 PCS',
      caseWeight: '34 lb',
      palletCount: '24',
      tiHi: '6 x 4',
      handleOptions: 'Twisted (T) or Flat (F)'
    },
    { 
      id: 3, 
      itemNo: 'PB120916T/F',
      name: 'Regal',
      size: '12" x 9" x 15.75"',
      dimensions: '12" x 9" x 15.75"',
      description: 'Regal, 100% Recycled Paper Bag',
      caseQty: '250 PCS',
      caseWeight: '42 lb',
      palletCount: '24',
      tiHi: '6 x 4',
      handleOptions: 'Twisted (T) or Flat (F)'
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
          <span className="text-gray-700 font-medium">Paper Bags</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Slider */}
            <KraftRopeImageSlider />

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                100% Recycled Paper Bags
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium 100% recycled paper bags designed for retail, grocery stores, and food service operations. 
                  These eco-friendly bags feature a choice of twisted or flat handles for versatility and comfort. 
                  Available in three popular sizes: Bistro, Jr. Mart, and Regal. Perfect for businesses committed 
                  to sustainability without compromising quality.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>100% recycled paper material</li>
                  <li>Choice of twisted or flat handles</li>
                  <li>Eco-friendly and sustainable</li>
                  <li>Strong and durable construction</li>
                  <li>Multiple sizes for various needs</li>
                  <li>Perfect for retail and food service</li>
                </ul>
              </div>

              {/* Handle Options Notice */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Handle Options Available</p>
                    <p className="text-sm text-blue-800 mt-1">
                      All bags available with <strong>Twisted (T)</strong> or <strong>Flat (F)</strong> handles. 
                      Specify preference when ordering.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details / Options Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes & Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sizeOptions.map((option) => (
                <div
                  key={option.id}
                  className="border border-gray-400 rounded-lg p-4 bg-white"
                >
                  <div className="mb-3 pb-3 border-b border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {option.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 mb-2">
                      {option.itemNo}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                        Twisted Handle
                      </span>
                      <span className="text-gray-400">or</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                        Flat Handle
                      </span>
                    </div>
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

            {/* Custom Paper Bags Banner */}
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg">
              <div className="px-6 py-4 text-center">
                <p className="text-lg text-gray-800">
                  Looking for custom paper bag solutions? Make sure to check out{' '}
                  <a
                    href="https://tknpaperbags.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#1c51a3] hover:text-[#153d7f] hover:underline transition-colors"
                  >
                    tknpaperbags.com
                  </a>
                  !
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Want to place an order or have any product questions?</h3>
              <p className="text-gray-600 mb-4">
                Contact us for bulk orders or custom sizing options. We're here to help with your specific needs.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-[#1c51a3] text-white px-6 py-3 rounded-md hover:bg-[#153d7f] transition-colors font-medium"
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
    title: '100% Recycled Paper Bags - TKN Products - Maple Trade Corp',
    description: '100% recycled paper bags with twisted or flat handle options. Eco-friendly bags for retail and food service.',
  };
}
