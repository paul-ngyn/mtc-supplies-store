import Image from 'next/image';
import Link from 'next/link';

export default function TDRoundContainersPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'F6016',
      size: '6" Diameter',
      dimensions: '5.125" x 1.5"',
      description: '6" Diameter Plastic Round Containers',
      caseQty: '150 SETS',
      caseWeight: '8.8 lb',
      palletCount: '70',
      tiHi: '14 x 5'
    },
    { 
      id: 2, 
      itemNo: 'F7024',
      size: '7" Low',
      dimensions: '7" x 1.5"',
      description: '7" Diameter Low Plastic Round Containers',
      caseQty: '150 SETS',
      caseWeight: '15 lb',
      palletCount: '60',
      tiHi: '10 x 6'
    },
    { 
      id: 3, 
      itemNo: 'F7032',
      size: '7" Medium',
      dimensions: '7" x 2"',
      description: '7" Diameter Medium Plastic Round Containers',
      caseQty: '150 SETS',
      caseWeight: '12.75 lb',
      palletCount: '60',
      tiHi: '10 x 6'
    },
    { 
      id: 4, 
      itemNo: 'F7038',
      size: '7" High',
      dimensions: '7" x 2.75"',
      description: '7" Diameter High Plastic Round Containers',
      caseQty: '150 SETS',
      caseWeight: '16.5 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 5, 
      itemNo: 'F9048',
      size: '9" Medium',
      dimensions: '9" x 1.75"',
      description: '9" Diameter Medium Plastic Round Containers',
      caseQty: '150 SETS',
      caseWeight: '25 lb',
      palletCount: '30',
      tiHi: '6 x 5'
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
          <Link href="/category/td" className="hover:text-gray-700 transition-colors">
            TD
          </Link>
          <span>/</span>
          <Link href="/category/td/plastic-containers" className="hover:text-gray-700 transition-colors">
            Plastic Containers
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
                src="/demo.png"
                alt="TD Plastic Round Containers"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Plastic Round Containers
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium plastic round containers perfect for food storage, deli items, and takeout. 
                  These versatile containers are ideal for restaurants, delis, and food service operations. 
                  Available in multiple diameters and heights to accommodate various portion sizes and 
                  food types.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Durable plastic construction</li>
                  <li>Multiple sizes and heights available</li>
                  <li>Perfect for deli and takeout</li>
                  <li>Food-safe materials</li>
                  <li>Stackable design for storage</li>
                  <li>Clear containers for visibility</li>
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
    title: 'Plastic Round Containers - TD Products - Maple Trade Corp',
    description: 'Premium plastic round containers in multiple sizes. Perfect for deli, takeout, and food storage.',
  };
}
