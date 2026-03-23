import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About MTC
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maple Trade Corp - Your trusted partner in eco-friendly food packaging solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              MTC was founded in <span className="font-semibold text-[#1c51a3]">2006</span> in the heart of <span className="font-semibold">San Francisco</span>, 
              expanding our operations and facilities to <span className="font-semibold">Hayward, California</span> in <span className="font-semibold text-[#1c51a3]">2016</span>.
            </p>
            <p>
              Our goal is to provide the <span className="font-semibold">highest quality, eco-friendly, biodegradable, and compostable products</span> seen 
              in the world today.
            </p>
            <p>
              With <span className="font-semibold text-[#1c51a3]">15+ years of experience</span> in the distribution business, we take pride in our 
              products and service and are honored to provide solutions for food service professionals across America.
            </p>
          </div>
        </div>

        {/* Product Focus Section */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            MTC supplies a wide range of dependable food packaging built for real-world food service operations. Our lineup includes premium US patented HD™ and TD™ containers, durable TFPP clamshells, reusable heavy-duty options, convenient take-out boxes, microwavable small portions, and larger party-size trays. Every product is selected to deliver the protection, practicality, and day-to-day convenience businesses rely on.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">
              We provide the highest quality products to meet the demanding needs of food service professionals.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
            <p className="text-gray-600">
              Committed to eco-friendly, biodegradable, and compostable solutions for a better tomorrow.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Experience</h3>
            <p className="text-gray-600">
              Over 15+ years of expertise serving food service professionals across America.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#1c51a3] rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover our comprehensive range of eco-friendly food service solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/brands"
              className="inline-block bg-white text-[#1c51a3] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Our Brands
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1c51a3] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata() {
  return {
    title: 'About Us - Maple Trade Corp',
    description: 'Founded in 2006, MTC provides the highest quality eco-friendly, biodegradable, and compostable food service products with over 15+ years of experience.',
  };
}
