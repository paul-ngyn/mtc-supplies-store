import Image from 'next/image';
import Link from 'next/link';

export default function ReroboxRoundPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'RO8',
      size: '8 oz',
      dimensions: '4.96" x 1.16"',
      description: '8 oz Plastic Round Containers',
      caseQty: '120 SETS',
      caseWeight: '5.5 lb',
      palletCount: '100',
      tiHi: '20 x 5'
    },
    { 
      id: 2, 
      itemNo: 'RO16',
      size: '16 oz',
      dimensions: '6.3" x 2.1"',
      description: '16 oz Plastic Round Containers',
      caseQty: '120 SETS',
      caseWeight: '8.33 lb',
      palletCount: '70',
      tiHi: '14 x 5'
    },
    { 
      id: 3, 
      itemNo: 'RO24',
      size: '24 oz',
      dimensions: '7.5" x 2.1"',
      description: '24 oz Plastic Round Containers',
      caseQty: '120 SETS',
      caseWeight: '11 lb',
      palletCount: '60',
      tiHi: '10 x 6'
    },
    { 
      id: 4, 
      itemNo: 'RO25',
      size: '25 oz',
      dimensions: '6.3" x 3"',
      description: '25 oz Plastic Round Containers',
      caseQty: '120 SETS',
      caseWeight: '9.59 lb',
      palletCount: '70',
      tiHi: '14 x 5'
    },
    { 
      id: 5, 
      itemNo: 'RO32',
      size: '32 oz',
      dimensions: '7.5" x 2.5"',
      description: '32 oz Plastic Round Containers',
      caseQty: '120 SETS',
      caseWeight: '11.51 lb',
      palletCount: '60',
      tiHi: '10 x 6'
    },
    { 
      id: 6, 
      itemNo: 'RO37',
      size: '37 oz',
      dimensions: '8.7" x 2.3"',
      description: '37 oz Plastic Round Containers',
      caseQty: '120 SETS',
      caseWeight: '15.41 lb',
      palletCount: '40',
      tiHi: '10 x 4'
    },
    { 
      id: 7, 
      itemNo: 'RO40',
      size: '40 oz',
      dimensions: '7.5" x 3.4"',
      description: '40 oz Plastic Round Containers',
      caseQty: '120 SETS',
      caseWeight: '13.36 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 8, 
      itemNo: 'RO45',
      size: '45 oz',
      dimensions: '7.5" x 3.15"',
      description: '45 oz Plastic Round Containers',
      caseQty: '120 SETS',
      caseWeight: '15 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 9, 
      itemNo: 'RO48',
      size: '48 oz',
      dimensions: '9.5" x 2.3"',
      description: '48 oz Plastic Round Containers',
      caseQty: '100 SETS',
      caseWeight: '15.96 lb',
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
          <Link href="/category/hd" className="hover:text-gray-700 transition-colors">
            HD
          </Link>
          <span>/</span>
          <Link href="/category/hd/rerobox" className="hover:text-gray-700 transition-colors">
            REROBOX
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Round Containers</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/Rero_w_background-remove.png"
                alt="REROBOX Round Containers"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                REROBOX Round Containers
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium REROBOX round plastic containers designed for superior food storage and presentation. 
                  These high-quality containers are perfect for delis, restaurants, meal prep services, and 
                  takeout operations. Available in a wide range of capacities from 8 oz to 48 oz to meet all 
                  your portion size needs.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Premium REROBOX quality construction</li>
                  <li>Wide range of capacity options</li>
                  <li>Perfect for food storage and takeout</li>
                  <li>Food-safe plastic materials</li>
                  <li>Crystal clear for product visibility</li>
                  <li>Stackable and space-efficient</li>
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
    title: 'REROBOX Round Containers - HD Products - Maple Trade Corp',
    description: 'Premium REROBOX round plastic containers from 8oz to 48oz. Perfect for food storage, takeout, and meal prep.',
  };
}
