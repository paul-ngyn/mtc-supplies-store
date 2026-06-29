import AddToListButton from '@/components/ui/AddToListButton';
import Link from 'next/link';
import RoundPartyTrayImageSlider from './RoundPartyTrayImageSlider';

export default function RoundPartyTrayPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'JT63',
      size: '13"',
      dimensions: '13" diameter',
      description: '13" Sushi Party Tray Round',
      caseQty: '60 SETS',
      caseWeight: '15.5 lb',
      palletCount: '35',
      tiHi: '7 x 5'
    },
    { 
      id: 2, 
      itemNo: 'JT64',
      size: '14"',
      dimensions: '14" diameter',
      description: '14" Sushi Party Tray Round',
      caseQty: '60 SETS',
      caseWeight: '18.5 lb',
      palletCount: '30',
      tiHi: '6 x 5'
    },
    { 
      id: 3, 
      itemNo: 'JT65',
      size: '15"',
      dimensions: '15" diameter',
      description: '15" Sushi Party Tray Round',
      caseQty: '60 SETS',
      caseWeight: '21 lb',
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
          <Link href="/category/imperial" className="hover:text-gray-700 transition-colors">
            Imperial
          </Link>
          <span>/</span>
          <Link href="/category/imperial/sushi-tray" className="hover:text-gray-700 transition-colors">
            Sushi Tray
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Round Party Tray</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Slider */}
            <RoundPartyTrayImageSlider />

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Round Sushi Party Tray
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium round sushi party trays perfect for gatherings, events, and celebrations. 
                  These elegant circular trays provide an impressive presentation for sushi platters, 
                  making them ideal for parties, catering services, and special occasions. Available 
                  in multiple sizes to accommodate various serving needs.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Premium round design for elegant presentation</li>
                  <li>Perfect for parties and events</li>
                  <li>Food-safe materials</li>
                  <li>Multiple diameter options</li>
                  <li>Ideal for sushi platters and catering</li>
                  <li>Professional appearance</li>
                </ul>
              </div>
              {/* Add to List Button */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <AddToListButton
                  productName="Round Sushi Party Tray"
                  brand="Imperial"
                  category="Round Sushi Party Tray"
                  slug="sushi-tray/round-party-tray"
                  brandSlug="imperial"
                  image="/TKN.png"
                  sizes={sizeOptions.map(opt => `${opt.size} (${opt.itemNo})`)}
                  showSizeSelector={true}
                />
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
    title: 'Round Sushi Party Tray - Imperial Products - Maple Trade Corp',
    description: 'Premium round sushi party trays in 13", 14", and 15" sizes. Perfect for gatherings, events, and catering services.',
  };
}
