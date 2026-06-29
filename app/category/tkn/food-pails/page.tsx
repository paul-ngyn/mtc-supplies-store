import AddToListButton from '@/components/ui/AddToListButton';
import Link from 'next/link';
import FoodPailImageSlider from './FoodPailImageSlider';

export default function FoodPailsPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'NB8K/W',
      size: '8 oz',
      dimensions: 'T2.95" x 2.4", B2.25" x 1.65", H2.55"',
      description: 'Food Pail Box 8 oz',
      caseQty: '360 PCS',
      caseWeight: '9.25 lb',
      palletCount: '72',
      tiHi: '12 x 6',
      colorOptions: 'Kraft (K) or White (W)'
    },
    { 
      id: 2, 
      itemNo: 'NB16K/W',
      size: '16 oz',
      dimensions: 'T3.8" x 3.15", B2.7" x 2", H3.35"',
      description: 'Food Pail Box 16 oz',
      caseQty: '360 PCS',
      caseWeight: '14.08 lb',
      palletCount: '42',
      tiHi: '6 x 7',
      colorOptions: 'Kraft (K) or White (W)'
    },
    { 
      id: 3, 
      itemNo: 'NB26K/W',
      size: '26 oz',
      dimensions: 'T4.2" x 3.75", B3" x 2.6", H4.1"',
      description: 'Food Pail Box 26 oz',
      caseQty: '360 PCS',
      caseWeight: '19.58 lb',
      palletCount: '30',
      tiHi: '6 x 5',
      colorOptions: 'Kraft (K) or White (W)'
    },
    { 
      id: 4, 
      itemNo: 'NB32K/W',
      size: '32 oz',
      dimensions: 'T4.7" x 4.2", B3.4" x 2.6", H4.3"',
      description: 'Food Pail Box 32 oz',
      caseQty: '360 PCS',
      caseWeight: '22.66 lb',
      palletCount: '24',
      tiHi: '6 x 4',
      colorOptions: 'Kraft (K) or White (W)'
    },
    { 
      id: 5, 
      itemNo: 'NB64K/W',
      size: '64 oz',
      dimensions: 'T5.5" x 4.75", B4.5" x 3.75", H5"',
      description: 'Food Pail Box 64 oz',
      caseQty: '360 PCS',
      caseWeight: '39.68 lb',
      palletCount: '12',
      tiHi: '3 x 4',
      colorOptions: 'Kraft (K) or White (W)'
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
          <span className="text-gray-700 font-medium">Food Pails</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image Slider */}
            <FoodPailImageSlider />

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Food Pails
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Traditional food pail boxes perfect for Asian takeout, noodle dishes, rice, and more. Available in 
                  natural kraft brown or clean white options, these iconic containers offer leak-resistant design and 
                  convenient wire handles for easy carrying. Made from durable paperboard, they're ideal for restaurants, 
                  food trucks, and catering services. Choose from multiple sizes ranging from 8 oz to 64 oz.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Available in Kraft or White</li>
                  <li>Leak-resistant design</li>
                  <li>Wire handle for easy carrying</li>
                  <li>Multiple size options available</li>
                  <li>Perfect for Asian takeout and noodles</li>
                  <li>Grease and moisture resistant</li>
                </ul>
              </div>

              {/* Color Options Notice */}
              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-blue-900">Color Options Available</p>
                    <p className="text-sm text-blue-800 mt-1">
                      All food pails available in <strong>Kraft (K)</strong> or <strong>White (W)</strong>. 
                      Specify preference when ordering.
                    </p>
                  </div>
                </div>
              </div>
              {/* Add to List Button */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <AddToListButton
                  productName="Food Pails"
                  brand="TKN"
                  category="Food Pails"
                  slug="food-pails"
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
                  className="border border-gray-400 rounded-lg p-4 bg-white"
                >
                  <div className="mb-3 pb-3 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {option.size}
                    </h3>
                    <p className="text-sm font-semibold text-[#1c51a3] mb-2">
                      {option.itemNo}
                    </p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
                        Kraft
                      </span>
                      <span className="text-gray-400">or</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full font-medium">
                        White
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-600">Dimensions:</span>
                      <span className="font-medium text-gray-900 text-right text-xs">{option.dimensions}</span>
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
    title: 'Food Pails - Kraft & White Options - TKN Products - Maple Trade Corp',
    description: 'Traditional food pail boxes available in kraft or white. Perfect for Asian takeout, noodles, and rice dishes from 8oz to 64oz.',
  };
}
