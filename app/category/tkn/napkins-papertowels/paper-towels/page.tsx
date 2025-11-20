import Image from 'next/image';
import Link from 'next/link';

export default function PaperTowelsPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'RT8600',
      name: 'Brown 8 x 600 Roll Paper Towel',
      type: 'Roll',
      productDimension: '8" x 600 FT',
      pack: '600 FT',
      casePack: '6 Rolls',
      caseWeight: '18.57 lb',
      palletCount: '45',
      tiHi: '5 x 9'
    },
    { 
      id: 2, 
      itemNo: 'PT99',
      name: 'Brown 9 x 9 Multifold Paper Towel',
      type: 'Multifold',
      productDimension: '9" x 9"',
      pack: '250 sheets',
      casePack: '16 Packs',
      caseWeight: '17.79 lb',
      palletCount: '56',
      tiHi: '7 x 8'
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
          <span className="text-gray-700 font-medium">Paper Towels</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="Paper Towels"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Paper Towels
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium brown paper towels designed for commercial and food service use. Available in both 
                  roll and multifold formats, our paper towels provide excellent absorbency and strength for 
                  all cleaning and drying needs. Perfect for kitchens, restrooms, and general facility maintenance.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>High-quality brown paper towels</li>
                  <li>Available in roll and multifold formats</li>
                  <li>Superior absorbency and strength</li>
                  <li>Ideal for commercial use</li>
                  <li>Cost-effective bulk packaging</li>
                  <li>Perfect for kitchens and restrooms</li>
                  <li>Reliable performance</li>
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
                      <span className="text-gray-600">Dimensions:</span>
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
    title: 'Paper Towels - TKN Products - Maple Trade Corp',
    description: 'Premium brown paper towels in roll and multifold formats. Superior absorbency for commercial and food service use.',
  };
}
