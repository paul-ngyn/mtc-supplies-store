import Link from 'next/link';
import MeatTrayImageSlider from './MeatTrayImageSlider';

export default function MeatTraysPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'T-0806',
      size: '8 x 6',
      dimensions: '8.4" x 5.9" x 1.2"',
      description: '8 x 6 Polypropylene Meat Tray',
      comparable: 'Comparable with 2P',
      caseQty: '300 PCS',
      caseWeight: '15.7 lb',
      palletCount: '60',
      tiHi: '10 x 6'
    },
    { 
      id: 2, 
      itemNo: 'T-0907',
      size: '9 x 7',
      dimensions: '8.7" x 6.6" x 1.2"',
      description: '9 x 7 Polypropylene Meat Tray',
      comparable: 'Comparable with 3P',
      caseQty: '300 PCS',
      caseWeight: '17.9 lb',
      palletCount: '60',
      tiHi: '10 x 6'
    },
    { 
      id: 3, 
      itemNo: 'T-1008',
      size: '10 x 8',
      dimensions: '10.5" x 8.3" x 1.2"',
      description: '10 x 8 Polypropylene Meat Tray',
      comparable: 'Comparable with 8P',
      caseQty: '300 PCS',
      caseWeight: '26.7 lb',
      palletCount: '36',
      tiHi: '6 x 6'
    },
    { 
      id: 4, 
      itemNo: 'T-1106',
      size: '11 x 6',
      dimensions: '10.8" x 5.6" x 1.2"',
      description: '11 x 6 Polypropylene Meat Tray',
      comparable: 'Comparable with 10P',
      caseQty: '300 PCS',
      caseWeight: '18.9 lb',
      palletCount: '45',
      tiHi: '9 x 5'
    },
    { 
      id: 5, 
      itemNo: 'T-1310',
      size: '13 x 10',
      dimensions: '12.6" x 9.9" x 0.9"',
      description: '13 x 10 Polypropylene Meat Tray',
      comparable: 'Comparable with 9L',
      caseQty: '300 PCS',
      caseWeight: '34.7 lb',
      palletCount: '24',
      tiHi: '4 x 6'
    },
    { 
      id: 6, 
      itemNo: 'T-1508',
      size: '15 x 8',
      dimensions: '15" x 7.8" x 1.3"',
      description: '15 x 8 Polypropylene Meat Tray',
      comparable: 'Comparable with 25P',
      caseQty: '300 PCS',
      caseWeight: '33.4 lb',
      palletCount: '30',
      tiHi: '5 x 6'
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
          <span className="text-gray-700 font-medium">Meat Trays</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Slider */}
            <MeatTrayImageSlider />

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Polypropylene Meat Trays
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium polypropylene meat trays designed for superior food presentation and storage in grocery 
                  stores, butcher shops, and food service operations. These high-quality trays are durable, 
                  food-safe, and perfect for displaying fresh meats, poultry, and seafood. Available in multiple 
                  sizes to accommodate various portion needs.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Premium polypropylene material</li>
                  <li>Food-safe and durable construction</li>
                  <li>Multiple size options available</li>
                  <li>Compatible with industry standards</li>
                  <li>Ideal for meat, poultry, and seafood</li>
                  <li>Professional presentation</li>
                </ul>
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
                  className="border border-gray-400 rounded-lg p-3 bg-white"
                >
                  <div className="mb-2 pb-2 border-b border-gray-100">
                    <h3 className="text-md font-bold text-gray-900 mb-0.5">
                      {option.size}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600">
                      {option.itemNo}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {option.comparable}
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
    title: 'Polypropylene Meat Trays - HD Products - Maple Trade Corp',
    description: 'Premium polypropylene meat trays in sizes from 8x6 to 15x8. Perfect for grocery stores, butcher shops, and food service.',
  };
}
