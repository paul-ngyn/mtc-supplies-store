import Image from 'next/image';
import Link from 'next/link';

export default function ToiletSeatCoversPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'TS250',
      name: 'White Toilet Seat Cover Paper',
      productDimension: 'Standard Size',
      pack: '250 Sheets',
      casePack: '20 Packs',
      caseWeight: '25.13 lb',
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
          <Link href="/brands" className="hover:text-gray-700 transition-colors">
            TKN
          </Link>
          <span>/</span>
          <Link href="/category/tkn/napkins-papertowels" className="hover:text-gray-700 transition-colors">
            Napkins & Papertowels
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">Toilet Seat Covers</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="Toilet Seat Covers"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Toilet Seat Covers
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Sanitary white toilet seat covers designed for public restrooms and commercial facilities. 
                  Our seat covers provide a hygienic barrier, ensuring cleanliness and peace of mind for users. 
                  Perfect for restaurants, offices, hospitality venues, and any high-traffic restroom facilities.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Sanitary protection for public restrooms</li>
                  <li>Standard size fits most toilets</li>
                  <li>250 sheets per pack</li>
                  <li>Biodegradable and flushable</li>
                  <li>Ideal for commercial facilities</li>
                  <li>Bulk packaging for efficiency</li>
                  <li>Promotes hygiene and cleanliness</li>
                </ul>
              </div>

              {/* Hygiene Notice */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Hygienic Solution</p>
                    <p className="text-sm text-blue-800 mt-1">
                      Essential for maintaining restroom hygiene and user comfort in high-traffic facilities.
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
                  className="border border-gray-400 rounded-lg p-4 bg-white hover:shadow-lg transition-shadow"
                >
                  <div className="mb-3 pb-3 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {option.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#1c51a3] mb-2">
                      {option.itemNo}
                    </p>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-600">Size:</span>
                      <span className="font-medium text-gray-900 text-right">{option.productDimension}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Pack:</span>
                      <span className="font-medium text-gray-900">{option.pack}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Case Pack:</span>
                      <span className="font-medium text-gray-900">{option.casePack}</span>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need a Custom Size or Bulk Order?</h3>
              <p className="text-gray-600 mb-4">
                Contact us for bulk pricing, custom sizing options, or any questions about our toilet seat covers. 
                We're here to help with your specific needs.
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
    title: 'Toilet Seat Covers - TKN Products - Maple Trade Corp',
    description: 'Sanitary toilet seat covers for public restrooms and commercial facilities. Biodegradable and flushable.',
  };
}
