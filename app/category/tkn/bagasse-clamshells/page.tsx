import Image from 'next/image';
import Link from 'next/link';

export default function BagasseClamshellsPage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'BH61',
      name: '6" - 1 Comp',
      size: '6"',
      compartments: '1-Comp',
      description: 'PFAS Free',
      productDimension: '6" x 6" x 3"',
      caseQty: '240 PCS',
      caseWeight: '12.2 lb',
      palletCount: '72',
      tiHi: '8 x 9'
    },
    { 
      id: 2, 
      itemNo: 'BH81',
      name: '8" - 1 Comp',
      size: '8"',
      compartments: '1-Comp',
      description: 'PFAS Free',
      productDimension: '8" x 8" x 3"',
      caseQty: '120 PCS',
      caseWeight: '12 lb',
      palletCount: '70',
      tiHi: '10 x 7'
    },
    { 
      id: 3, 
      itemNo: 'BH83',
      name: '8" - 3 Comp',
      size: '8"',
      compartments: '3-Comp',
      description: 'PFAS Free',
      productDimension: '8" x 8" x 3"',
      caseQty: '120 PCS',
      caseWeight: '12 lb',
      palletCount: '70',
      tiHi: '10 x 7'
    },
    { 
      id: 4, 
      itemNo: 'BH91',
      name: '9" - 1 Comp',
      size: '9"',
      compartments: '1-Comp',
      description: 'PFAS Free',
      productDimension: '9" x 9" x 3"',
      caseQty: '120 PCS',
      caseWeight: '12.9 lb',
      palletCount: '70',
      tiHi: '10 x 7'
    },
    { 
      id: 5, 
      itemNo: 'BH93',
      name: '9" - 3 Comp',
      size: '9"',
      compartments: '3-Comp',
      description: 'PFAS Free',
      productDimension: '9" x 9" x 3"',
      caseQty: '120 PCS',
      caseWeight: '12.9 lb',
      palletCount: '70',
      tiHi: '10 x 7'
    },
    { 
      id: 6, 
      itemNo: 'BH96',
      name: '9" x 6" - 1 Comp',
      size: '9" x 6"',
      compartments: '1-Comp',
      description: 'PFAS Free',
      productDimension: '9" x 6" x 3"',
      caseQty: '160 PCS',
      caseWeight: '13.2 lb',
      palletCount: '70',
      tiHi: '7 x 10'
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
          <span className="text-gray-700 font-medium">Bagasse Hinged Clamshells</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="Bagasse Hinged Clamshells"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Bagasse Hinged Clamshells
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Eco-friendly bagasse hinged clamshells made from sustainable sugarcane fiber. These PFAS-free containers 
                  are perfect for takeout, food service, and environmentally conscious businesses. Featuring secure hinged 
                  lids and available in both single and 3-compartment designs, they offer excellent durability while 
                  maintaining a low environmental impact. Compostable and biodegradable for guilt-free food packaging.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Made from sustainable bagasse (sugarcane fiber)</li>
                  <li>PFAS Free - Safe for food contact</li>
                  <li>Compostable and biodegradable</li>
                  <li>Secure hinged lid design</li>
                  <li>Available in 1-comp and 3-comp options</li>
                  <li>Microwave and freezer safe</li>
                  <li>Grease and cut resistant</li>
                </ul>
              </div>

              {/* PFAS Free Notice */}
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-green-900">PFAS Free</p>
                    <p className="text-sm text-green-800 mt-1">
                      All bagasse clamshells are PFAS-free, ensuring safe and healthy food packaging without harmful chemicals.
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
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                        PFAS Free
                      </span>
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full font-medium">
                        {option.compartments}
                      </span>
                    </div>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need a Custom Size or Bulk Order?</h3>
              <p className="text-gray-600 mb-4">
                Contact us for bulk pricing, custom sizing options, or any questions about our bagasse clamshells. 
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
    title: 'Bagasse Hinged Clamshells - PFAS Free - TKN Products - Maple Trade Corp',
    description: 'Eco-friendly bagasse hinged clamshells made from sustainable sugarcane fiber. PFAS-free, compostable, and available in 1-comp and 3-comp options from 6" to 9".',
  };
}
