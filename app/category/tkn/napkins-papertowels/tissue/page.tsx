import AddToListButton from '@/components/ui/AddToListButton';
import Image from 'next/image';
import Link from 'next/link';

export default function TissuePage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'TP43-2',
      name: '4 x 3 2 PLY White Tissue',
      ply: '2 PLY',
      productDimension: '4" x 3"',
      pack: '500 Sheets',
      casePack: '80 Rolls',
      caseWeight: '21.25 lb',
      palletCount: '20',
      tiHi: '4 x 5'
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
          <span className="text-gray-700 font-medium">Tissue</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="Tissue - Soft & Strong Paper Products"
                title="TKN Tissue - Premium Quality Bathroom & Facial Tissue"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Tissue
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium 2-ply white tissue designed for commercial and residential use. Our tissue products 
                  offer excellent softness and strength, providing comfort and reliability for restroom facilities, 
                  offices, and hospitality settings. Bulk packaging ensures you're always well-stocked.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Premium 2-ply white tissue</li>
                  <li>Soft and durable</li>
                  <li>500 sheets per roll</li>
                  <li>Ideal for commercial use</li>
                  <li>Bulk packaging for convenience</li>
                  <li>Cost-effective solution</li>
                  <li>Reliable quality</li>
                </ul>
              </div>
              {/* Add to List Button */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <AddToListButton
                  productName="Tissue"
                  brand="TKN"
                  category="Tissue"
                  slug="napkins-papertowels/tissue"
                  brandSlug="tkn"
                  image="/TKN.png"
                  sizes={sizeOptions.map(opt => `${opt.name} (${opt.itemNo})`)}
                  showSizeSelector={true}
                />
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
    title: 'Tissue - TKN Products - Maple Trade Corp',
    description: 'Premium 2-ply white tissue products for commercial and residential use. Soft, durable, and cost-effective.',
  };
}
