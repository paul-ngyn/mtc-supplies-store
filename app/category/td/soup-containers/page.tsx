import Image from 'next/image';
import Link from 'next/link';

export default function TDSoupContainersPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'C8',
      size: '8oz',
      dimensions: '4.5" x 1.5"',
      description: '8oz. Microwave Deli Soup Containers',
      caseQty: '240 SETS',
      caseWeight: '12.5 lb',
      palletCount: '56',
      tiHi: '8 x 7'
    },
    { 
      id: 2, 
      itemNo: 'C12',
      size: '12oz',
      dimensions: '4.5" x 2.13"',
      description: '12oz. Microwave Deli Soup Containers',
      caseQty: '240 SETS',
      caseWeight: '14 lb',
      palletCount: '48',
      tiHi: '8 x 6'
    },
    { 
      id: 3, 
      itemNo: 'C16',
      size: '16oz',
      dimensions: '4.5" x 3"',
      description: '16oz. Microwave Deli Soup Containers',
      caseQty: '240 SETS',
      caseWeight: '15.5 lb',
      palletCount: '48',
      tiHi: '8 x 6'
    },
    { 
      id: 4, 
      itemNo: 'C24',
      size: '24oz',
      dimensions: '4.5" x 4.25"',
      description: '24oz. Microwave Deli Soup Containers',
      caseQty: '240 SETS',
      caseWeight: '18.7 lb',
      palletCount: '40',
      tiHi: '8 x 5'
    },
    { 
      id: 5, 
      itemNo: 'C32',
      size: '32oz',
      dimensions: '4.5" x 5.5"',
      description: '32oz. Microwave Deli Soup Containers',
      caseQty: '240 SETS',
      caseWeight: '23 lb',
      palletCount: '32',
      tiHi: '8 x 4'
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
          <span className="text-gray-700 font-medium">Soup Containers</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/demo.png"
                alt="TD Microwave Deli Soup Containers"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Microwave Deli Soup Containers
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium microwave-safe deli soup containers perfect for hot soups, stews, and liquid foods. 
                  These versatile containers are ideal for delis, restaurants, takeout services, and food delivery. 
                  Microwave-safe design allows customers to reheat their meals conveniently. Available in multiple 
                  capacities to suit various portion sizes.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Microwave-safe construction</li>
                  <li>Multiple capacity options</li>
                  <li>Perfect for soups and hot liquids</li>
                  <li>Food-safe materials</li>
                  <li>Ideal for deli and takeout</li>
                  <li>Leak-resistant design</li>
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
    title: 'Microwave Deli Soup Containers - TD Products - Maple Trade Corp',
    description: 'Premium microwave-safe soup containers in 8oz to 32oz sizes. Perfect for delis, takeout, and food delivery.',
  };
}
