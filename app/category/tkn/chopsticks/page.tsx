import AddToListButton from '@/components/ui/AddToListButton';
import Image from 'next/image';
import Link from 'next/link';

export default function ChopsticksPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'CS1200',
      name: '9" Twin Bamboo Chopsticks',
      description: 'Twin bamboo chopsticks',
      productDimension: '9"',
      caseQty: '1200 CT',
      caseWeight: '24 lb',
      palletCount: '54',
      tiHi: '6 x 9'
    },
    { 
      id: 2, 
      itemNo: 'BC2000',
      name: '9" Separated Bamboo Chopsticks',
      description: 'Separated bamboo chopsticks',
      productDimension: '9"',
      caseQty: '200 Bags',
      caseWeight: '26 lb',
      palletCount: '54',
      tiHi: '8 x 5'
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
          <span className="text-gray-700 font-medium">Chopsticks</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/MTC_TKN_PP/BC2000-removebg.png"
                alt="Chopsticks - Premium Bamboo Utensils"
                title="TKN Chopsticks - Eco-Friendly Disposable Utensils"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Chopsticks
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium bamboo chopsticks for authentic Asian dining experiences. Available in both twin and 
                  separated styles, our chopsticks are made from sustainable bamboo, providing an eco-friendly 
                  alternative for restaurants, catering services, and food service operations. Durable, lightweight, 
                  and perfect for all types of Asian cuisine.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Made from sustainable bamboo</li>
                  <li>Available in twin and separated styles</li>
                  <li>9" length - standard size</li>
                  <li>Smooth finish for comfortable use</li>
                  <li>Ideal for restaurants and catering</li>
                  <li>Eco-friendly and biodegradable</li>
                  <li>Natural and chemical-free</li>
                </ul>
              </div>

              {/* Eco-Friendly Notice */}
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-green-900">Eco-Friendly</p>
                    <p className="text-sm text-green-800 mt-1">
                      Made from sustainable bamboo, our chopsticks are biodegradable and environmentally friendly.
                    </p>
                  </div>
                </div>
              </div>
              {/* Add to List Button */}
              <div className="mt-auto pt-6 border-t border-gray-200">
                <AddToListButton
                  productName="Chopsticks"
                  brand="TKN"
                  category="Chopsticks"
                  slug="chopsticks"
                  brandSlug="tkn"
                  image="/MTC_TKN_PP/BC2000-removebg.png"
                  sizes={sizeOptions.map(opt => `${opt.name} (${opt.itemNo})`)}
                  showSizeSelector={true}
                />
              </div>

            </div>
          </div>

          {/* Details / Options Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Options & Specifications</h2>
            
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
    title: 'Chopsticks - TKN Products - Maple Trade Corp',
    description: 'Premium bamboo chopsticks in twin and separated styles. Eco-friendly, sustainable, and perfect for restaurants and food service.',
  };
}
