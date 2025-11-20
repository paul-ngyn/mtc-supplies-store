import Image from 'next/image';
import Link from 'next/link';

export default function BoatTraysPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'BT-1025K',
      name: '¼ lb - Small',
      weight: '¼ lb',
      description: 'Grease Resistant',
      productDimension: '3.62" x 4.61"',
      bottomDimension: '1.85" x 2.87"',
      caseQty: '1000',
      caseWeight: '1.1 lb',
      palletCount: '108',
      tiHi: '18 x 6'
    },
    { 
      id: 2, 
      itemNo: 'BT-2050K',
      name: '½ lb - Small',
      weight: '½ lb',
      description: 'Grease Resistant',
      productDimension: '4.1" x 5.43"',
      bottomDimension: '1.97" x 3.35"',
      caseQty: '1000',
      caseWeight: '1.4 lb',
      palletCount: '90',
      tiHi: '15 x 6'
    },
    { 
      id: 3, 
      itemNo: 'BT-3100K',
      name: '1 lb - Medium',
      weight: '1 lb',
      description: 'Grease Resistant',
      productDimension: '4.72" x 6.3"',
      bottomDimension: '2.4" x 3.94"',
      caseQty: '1000',
      caseWeight: '1.6 lb',
      palletCount: '66',
      tiHi: '11 x 6'
    },
    { 
      id: 4, 
      itemNo: 'BT-4200K',
      name: '2 lb - Medium',
      weight: '2 lb',
      description: 'Grease Resistant',
      productDimension: '4.92" x 6.73"',
      bottomDimension: '2.64" x 4.33"',
      caseQty: '1000',
      caseWeight: '1.6 lb',
      palletCount: '66',
      tiHi: '11 x 6'
    },
    { 
      id: 5, 
      itemNo: 'BT-5250K',
      name: '2.5 lb - Large',
      weight: '2.5 lb',
      description: 'Grease Resistant',
      productDimension: '5.91" x 7.64"',
      bottomDimension: '3.15" x 4.76"',
      caseQty: '500',
      caseWeight: '1.9 lb',
      palletCount: '75',
      tiHi: '15 x 5'
    },
    { 
      id: 6, 
      itemNo: 'BT-6300K',
      name: '3 lb - Large',
      weight: '3 lb',
      description: 'Grease Resistant',
      productDimension: '5.91" x 8.35"',
      bottomDimension: '3.35" x 5.39"',
      caseQty: '500',
      caseWeight: '2 lb',
      palletCount: '75',
      tiHi: '15 x 5'
    },
    { 
      id: 7, 
      itemNo: 'BT-7500K',
      name: '5 lb - Extra Large',
      weight: '5 lb',
      description: 'Grease Resistant',
      productDimension: '6.5" x 9.45"',
      bottomDimension: '4.17" x 6.69"',
      caseQty: '500',
      caseWeight: '2.2 lb',
      palletCount: '55',
      tiHi: '11 x 5'
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
          <span className="text-gray-700 font-medium">Boat Trays</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="Natural Kraft Boat Trays"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Natural Kraft Boat Trays
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium natural kraft boat trays with grease-resistant coating, perfect for serving food at 
                  concessions, food trucks, festivals, and takeout operations. These eco-friendly disposable 
                  trays are made from sustainable kraft paper and feature superior grease resistance to keep 
                  your food fresh and your service area clean.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Natural kraft paper construction</li>
                  <li>Grease-resistant coating</li>
                  <li>Eco-friendly and biodegradable</li>
                  <li>Available in 7 sizes (Â¼ lb to 5 lb capacity)</li>
                  <li>Perfect for hot dogs, fries, nachos, and more</li>
                  <li>Ideal for food service and catering</li>
                  <li>Strong and leak-resistant</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Details / Options Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Sizes & Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sizeOptions.map((option) => (
                <div
                  key={option.id}
                  className="border border-gray-400 rounded-lg p-4 bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="mb-3 pb-3 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {option.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#1c51a3]">
                      {option.itemNo}
                    </p>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-600">Product Size:</span>
                      <span className="font-medium text-gray-900 text-right">{option.productDimension}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-600">Bottom Size:</span>
                      <span className="font-medium text-gray-900 text-right">{option.bottomDimension}</span>
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
    title: 'Natural Kraft Boat Trays - Grease Resistant - TKN Products - Maple Trade Corp',
    description: 'Premium natural kraft boat trays with grease-resistant coating. Available in 7 sizes from Â¼ lb to 5 lb capacity. Perfect for food service, concessions, and takeout.',
  };
}
