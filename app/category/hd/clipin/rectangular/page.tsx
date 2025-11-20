import Image from 'next/image';
import Link from 'next/link';

export default function ClipinRectangularPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'HDRE8',
      size: '8 oz',
      dimensions: '5.43" x 3.72" x 1.16"',
      description: '8 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '7.75 lb',
      palletCount: '126',
      tiHi: '21 x 6'
    },
    { 
      id: 2, 
      itemNo: 'HDRE12',
      size: '12 oz',
      dimensions: '5.5" x 4.5" x 1.8"',
      description: '12 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '9.75 lb',
      palletCount: '100',
      tiHi: '20 x 5'
    },
    { 
      id: 3, 
      itemNo: 'HDRE16',
      size: '16 oz',
      dimensions: '7.5" x 5" x 1.8"',
      description: '16 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '13.5 lb',
      palletCount: '75',
      tiHi: '15 x 5'
    },
    { 
      id: 4, 
      itemNo: 'HDRE24',
      size: '24 oz',
      dimensions: '7.5" x 5" x 2"',
      description: '24 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '13.75 lb',
      palletCount: '75',
      tiHi: '15 x 5'
    },
    { 
      id: 5, 
      itemNo: 'HDRE28',
      size: '28 oz',
      dimensions: '8.7" x 6" x 1.5"',
      description: '28 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '17.25 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 6, 
      itemNo: 'HDRE32',
      size: '32 oz',
      dimensions: '8.7" x 6" x 1.8"',
      description: '32 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '17.5 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 7, 
      itemNo: 'HDRE38',
      size: '38 oz',
      dimensions: '8.7" x 6" x 2"',
      description: '38 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '18.5 lb',
      palletCount: '50',
      tiHi: '10 x 5'
    },
    { 
      id: 8, 
      itemNo: 'HDRE48',
      size: '48 oz',
      dimensions: '8.5" x 8.5" x 1.77"',
      description: '48 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '28 lb',
      palletCount: '30',
      tiHi: '6 x 5'
    },
    { 
      id: 9, 
      itemNo: 'HDRE58',
      size: '58 oz',
      dimensions: '11.5" x 7.9" x 1.8"',
      description: '58 oz Plastic Rectangular Containers',
      caseQty: '150 SETS',
      caseWeight: '31.5 lb',
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
          <Link href="/category/hd" className="hover:text-gray-700 transition-colors">
            HD
          </Link>
          <span>/</span>
          <Link href="/category/hd/clipin" className="hover:text-gray-700 transition-colors">
            Clipin
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Rectangular Containers</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/Clipin_w_background-.png"
                alt="Clipin Rectangular Containers"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Clipin Rectangular Containers
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium Clipin rectangular plastic containers designed for superior food storage and presentation. 
                  These high-quality containers feature the innovative Clipin closure system for secure sealing. 
                  Perfect for restaurants, delis, catering services, and meal prep operations. Available in sizes 
                  ranging from 8 oz to 58 oz.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Premium Clipin closure system</li>
                  <li>Space-efficient rectangular design</li>
                  <li>Secure sealing for freshness</li>
                  <li>Food-safe plastic materials</li>
                  <li>Wide capacity range (8-58 oz)</li>
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
    title: 'Clipin Rectangular Containers - HD Products - Maple Trade Corp',
    description: 'Premium Clipin rectangular containers from 8oz to 58oz. Featuring innovative Clipin closure system for secure sealing.',
  };
}
