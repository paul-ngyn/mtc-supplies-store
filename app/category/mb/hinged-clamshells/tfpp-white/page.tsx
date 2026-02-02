import Image from 'next/image';
import Link from 'next/link';

export default function TFPPHingedClamshellWhitePage() {
  // Product sizes/options - Real data from product catalog
  const sizeOptions = [
    { 
      id: 1, 
      itemNo: 'MMB61',
      size: '6"',
      dimensions: '6"',
      description: '6" TFPP Hinged Clamshell White',
      caseQty: '400 ct.',
      caseDimension: '12.5" x 12.8" x 28.25"',
      caseWeight: '27 lb',
      palletCount: '30',
      tiHi: '6 x 5'
    },
    { 
      id: 2, 
      itemNo: 'MMB81',
      size: '8"',
      dimensions: '8"',
      description: '8" TFPP Hinged Clamshell White',
      caseQty: '180 ct.',
      caseDimension: '16.75" x 8.75" x 26"',
      caseWeight: '24.8 lb',
      palletCount: '36',
      tiHi: '12 x 3'
    },
    { 
      id: 3, 
      itemNo: 'MMB83',
      size: '8" (Alt)',
      dimensions: '8"',
      description: '8" TFPP Hinged Clamshell White',
      caseQty: '180 ct.',
      caseDimension: '16.75" x 8.75" x 26"',
      caseWeight: '24.8 lb',
      palletCount: '36',
      tiHi: '12 x 3'
    },
    { 
      id: 4, 
      itemNo: 'MMB91',
      size: '9"',
      dimensions: '9"',
      description: '9" TFPP Hinged Clamshell White',
      caseQty: '120 ct.',
      caseDimension: '18.5" x 9.5" x 18.25"',
      caseWeight: '18.8 lb',
      palletCount: '40',
      tiHi: '10 x 4'
    },
    { 
      id: 5, 
      itemNo: 'MMB93',
      size: '9" (Alt)',
      dimensions: '9"',
      description: '9" TFPP Hinged Clamshell White',
      caseQty: '120 ct.',
      caseDimension: '18.5" x 9.5" x 18.25"',
      caseWeight: '20 lb',
      palletCount: '40',
      tiHi: '10 x 4'
    },
    { 
      id: 6, 
      itemNo: 'MMB96',
      size: '9" x 6"',
      dimensions: '9" x 6"',
      description: '9" x 6" TFPP Hinged Clamshell White',
      caseQty: '250 ct.',
      caseDimension: '17.5" x 12.5" x 18.5"',
      caseWeight: '26 lb',
      palletCount: '28',
      tiHi: '7 x 4'
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
          <Link href="/category/mb" className="hover:text-gray-700 transition-colors">
            MB
          </Link>
          <span>/</span>
          <Link href="/category/mb/hinged-clamshells" className="hover:text-gray-700 transition-colors">
            Hinged Clamshells
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium">TFPP Hinged Clamshell White</span>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/TKN.png"
                alt="TFPP Hinged Clamshell White"
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                TFPP Hinged Clamshell White
              </h1>
              
              <div className="mb-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Premium TFPP (Thermoformed Polypropylene) hinged clamshell containers in white. 
                  Perfect for food service, takeout, and food packaging applications. These containers 
                  feature a secure hinged design that keeps food fresh and prevents spills.
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Features:</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Microwave safe TFPP material</li>
                  <li>Secure hinged closure</li>
                  <li>Crystal clear for product visibility</li>
                  <li>Stackable design for easy storage</li>
                  <li>Leak-resistant seal</li>
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
                    <h3 className="text-base font-bold text-gray-900 mb-0.5">
                      {option.size}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600">
                      {option.itemNo}
                    </p>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Dimensions:</span>
                      <span className="font-xs font-semibold text-gray-900 text-right">{option.caseDimension}</span>
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
                      <span className="text-gray-600">Pallet Count:</span>
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
