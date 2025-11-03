import Image from 'next/image';
import Link from 'next/link';

export default function SingleCompartmentBentoPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'JT8505',
      size: '5.47" x 4.41"',
      dimensions: '5.47" x 4.41" x 1.3"',
      description: 'Bento Box Black 5.47" x 4.41"',
      caseQty: '600 SETS',
      caseWeight: '22 lb',
      palletCount: '30',
      tiHi: '6 x 5'
    },
    { 
      id: 2, 
      itemNo: 'JT8507',
      size: '6.57" x 5.00"',
      dimensions: '6.57" x 5" x 1.3"',
      description: 'Bento Box Black 6.57" x 5.00"',
      caseQty: '550 SETS',
      caseWeight: '22 lb',
      palletCount: '20',
      tiHi: '4 x 5'
    },
    { 
      id: 3, 
      itemNo: 'JT8510',
      size: '7.00" x 5.04"',
      dimensions: '7" x 5.04" x 1.3"',
      description: 'Bento Box Black 7.00" x 5.04"',
      caseQty: '500 SETS',
      caseWeight: '22.5 lb',
      palletCount: '20',
      tiHi: '4 x 5'
    },
    { 
      id: 4, 
      itemNo: 'JT8515',
      size: '8.11" x 5.28"',
      dimensions: '8.11" x 5.28" x 1.3"',
      description: 'Bento Box Black 8.11" x 5.28"',
      caseQty: '450 SETS',
      caseWeight: '23 lb',
      palletCount: '30',
      tiHi: '6 x 5'
    },
    { 
      id: 5, 
      itemNo: 'JT8520',
      size: '8.50" x 5.83"',
      dimensions: '8.5" x 5.83" x 1.3"',
      description: 'Bento Box Black 8.50" x 5.83"',
      caseQty: '400 SETS',
      caseWeight: '23.5 lb',
      palletCount: '30',
      tiHi: '6 x 5'
    },
    { 
      id: 6, 
      itemNo: 'JT8525',
      size: '9.09" x 6.30"',
      dimensions: '9.09" x 6.3" x 1.3"',
      description: 'Bento Box Black 9.09" x 6.30"',
      caseQty: '300 SETS',
      caseWeight: '22 lb',
      palletCount: '24',
      tiHi: '6 x 4'
    },
    { 
      id: 7, 
      itemNo: 'JT8530',
      size: '10.25" x 8"',
      dimensions: '10.25" x 8" x 1.3"',
      description: 'Bento Box Black 10.25" x 8"',
      caseQty: '200 SETS',
      caseWeight: '21 lb',
      palletCount: '25',
      tiHi: '5 x 5'
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
          <Link href="/category/imperial/bento" className="hover:text-gray-700 transition-colors">
            Bento
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Single Compartment</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/demo.png"
                alt="Single Compartment Bento Box Black"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Single Compartment Bento Box Black
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium single compartment bento boxes in sleek black design. Perfect for restaurants, 
                  takeout services, and meal delivery. These versatile containers are ideal for main 
                  dishes, entrees, and single-item meals. The elegant black color provides a sophisticated 
                  presentation for your food offerings.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Elegant black design</li>
                  <li>Single compartment for versatility</li>
                  <li>Perfect for takeout and delivery</li>
                  <li>Food-safe materials</li>
                  <li>Multiple size options</li>
                  <li>Stackable for efficient storage</li>
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
                    <p className="text-xs font-semibold text-blue-600">
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
    title: 'Single Compartment Bento Box Black - Imperial Products - Maple Trade Corp',
    description: 'Premium single compartment black bento boxes in 7 sizes. Perfect for takeout, delivery, and food service.',
  };
}
