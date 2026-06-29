import AddToListButton from '@/components/ui/AddToListButton';
import Image from 'next/image';
import Link from 'next/link';

export default function FoodPailsWhitePage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'NB8W',
      size: '8 oz',
      dimensions: 'T2.95" x 2.4", B2.25" x 1.65", H2.55"',
      description: 'Food Pail Box White 8 oz',
      caseQty: '360 PCS',
      caseWeight: '9.25 lb',
      palletCount: '72',
      tiHi: '12 x 6'
    },
    { 
      id: 2, 
      itemNo: 'NB16W',
      size: '16 oz',
      dimensions: 'T3.8" x 3.15", B2.7" x 2", H3.35"',
      description: 'Food Pail Box White 16 oz',
      caseQty: '360 PCS',
      caseWeight: '14.08 lb',
      palletCount: '42',
      tiHi: '6 x 7'
    },
    { 
      id: 3, 
      itemNo: 'NB26W',
      size: '26 oz',
      dimensions: 'T4.2" x 3.75", B3" x 2.6", H4.1"',
      description: 'Food Pail Box White 26 oz',
      caseQty: '360 PCS',
      caseWeight: '19.58 lb',
      palletCount: '30',
      tiHi: '6 x 5'
    },
    { 
      id: 4, 
      itemNo: 'NB32W',
      size: '32 oz',
      dimensions: 'T4.7" x 4.2", B3.4" x 2.6", H4.3"',
      description: 'Food Pail Box White 32 oz',
      caseQty: '360 PCS',
      caseWeight: '22.66 lb',
      palletCount: '24',
      tiHi: '6 x 4'
    },
    { 
      id: 5, 
      itemNo: 'NB64W',
      size: '64 oz',
      dimensions: 'T5.5" x 4.75", B4.5" x 3.75", H5"',
      description: 'Food Pail Box White 64 oz',
      caseQty: '360 PCS',
      caseWeight: '39.68 lb',
      palletCount: '12',
      tiHi: '3 x 4'
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
          <Link href="/category/tkn/food-pails" className="hover:text-gray-700 transition-colors">
            Food Pails
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">White</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="White Food Pails - Heavy-Duty Storage Containers"
                title="TKN White Food Pails - Bulk Food Storage Solution"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                White Food Pails
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Eco-friendly white food pail boxes designed for Asian takeout, noodles, rice dishes, and more. 
                  These traditional-style pails feature a clean white finish for a premium presentation and are 
                  perfect for restaurants, food trucks, and takeout operations. Made from sustainable materials, 
                  they offer excellent leak resistance and durability. Available in sizes from 8 oz to 64 oz.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Clean white color for premium look</li>
                  <li>Eco-friendly and sustainable</li>
                  <li>Leak-resistant construction</li>
                  <li>Perfect for Asian takeout</li>
                  <li>Wide capacity range (8-64 oz)</li>
                  <li>Classic food pail design</li>
                </ul>
              </div>
              {/* Add to List Button */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <AddToListButton
                  productName="White Food Pails"
                  brand="TKN"
                  category="White Food Pails"
                  slug="food-pails/white"
                  brandSlug="tkn"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
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
                    <div className="mb-1">
                      <span className="text-gray-600 block mb-0.5">Dimensions:</span>
                      <span className="font-medium text-gray-900 text-xs leading-tight block">{option.dimensions}</span>
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
    title: 'White Food Pails - TKN Products - Maple Trade Corp',
    description: 'Eco-friendly white food pail boxes from 8oz to 64oz. Perfect for Asian takeout with premium presentation.',
  };
}
