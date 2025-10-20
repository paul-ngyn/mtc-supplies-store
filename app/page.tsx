import { createClient } from '@/utils/supabase/server';
import { getProducts, getUser } from '@/utils/supabase/queries';
import ProductSlider from '@/components/ui/ProductSlider';
import BrandCarousel from '@/components/ui/BrandCarousel';

export default async function HomePage() {
  const supabase = createClient();
  const [user, products] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
  ]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Product Slider */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Product Slider */}
          <ProductSlider />
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* PP Containers */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="aspect-square bg-blue-50 flex items-center justify-center p-6">
                  <img
                    src="/demo.png"
                    alt="Small PP Container"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">Small PP Container</h3>
                  <p className="text-sm text-gray-600">Durable containers for food storage</p>
                </div>
              </div>
            </div>

            {/* Large PP Containers */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="aspect-square bg-blue-50 flex items-center justify-center p-6">
                  <img
                    src="/demo.png"
                    alt="Large PP Container"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">Large PP Container</h3>
                  <p className="text-sm text-gray-600">Heavy-duty containers for bulk storage</p>
                </div>
              </div>
            </div>

            {/* Soup Cups */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="aspect-square bg-blue-50 flex items-center justify-center p-6">
                  <img
                    src="/demo.png"
                    alt="Soup Cup"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">Soup Cup</h3>
                  <p className="text-sm text-gray-600">Perfect for hot liquids and soups</p>
                </div>
              </div>
            </div>

            {/* Sushi Boxes */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="aspect-square bg-blue-50 flex items-center justify-center p-6">
                  <img
                    src="/demo.png"
                    alt="Sushi Box"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">Sushi Box</h3>
                  <p className="text-sm text-gray-600">Elegant packaging for sushi</p>
                </div>
              </div>
            </div>

            {/* Meat Trays */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="aspect-square bg-blue-50 flex items-center justify-center p-6">
                  <img
                    src="/demo.png"
                    alt="Meat Tray"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">Meat Tray</h3>
                  <p className="text-sm text-gray-600">Professional meat packaging</p>
                </div>
              </div>
            </div>

            {/* Clamshells */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="aspect-square bg-blue-50 flex items-center justify-center p-6">
                  <img
                    src="/demo.png"
                    alt="Hinged Clamshell"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">Hinged Clamshell</h3>
                  <p className="text-sm text-gray-600">Versatile takeout containers</p>
                </div>
              </div>
            </div>
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TKN Supplies?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                All our products meet the highest industry standards for food safety and durability.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround times to keep your business running smoothly.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Get the best value for your money with our competitive wholesale prices.
              </p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Products Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Carousel */}
      <BrandCarousel />

      {/* Call to Action */}
      <section className="py-16 bg-blue-200">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Browse our extensive catalog and find the perfect packaging solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Products
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Products Section (if any exist) */}
      {products && products.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Featured Products
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product: any) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}