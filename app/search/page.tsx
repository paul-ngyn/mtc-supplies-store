'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// Sample product data - Only includes products with actual category pages
const products = [
  // TKN - Bagasse Hinged Clamshells
  {
    id: 1,
    name: 'Bagasse Hinged Clamshells',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Hinged Clamshells',
    categorySlug: 'bagasse-hinged-clamshells',
    description: 'Eco-friendly bagasse hinged clamshells for hot and cold foods',
    image: '/demo.png',
    tags: ['clamshell', 'hinged', 'bagasse', 'eco-friendly', 'biodegradable', 'takeout', 'container', 'food packaging', 'sustainable', 'compostable', 'disposable']
  },
  
  // TKN - Bagasse Clamshells
  {
    id: 2,
    name: 'Bagasse Clamshells',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Clamshells',
    categorySlug: 'bagasse-clamshells',
    description: 'Sustainable bagasse clamshells for various food types',
    image: '/demo.png',
    tags: ['clamshell', 'bagasse', 'eco-friendly', 'biodegradable', 'takeout', 'container', 'food packaging', 'sustainable', 'compostable']
  },
  
  // MB - Hinged Clamshells
  {
    id: 3,
    name: 'MB Hinged Clamshells',
    brand: 'MB',
    brandSlug: 'mb',
    category: 'Hinged Clamshells',
    categorySlug: 'hinged-clamshells',
    description: 'Durable hinged clamshells perfect for takeout',
    image: '/demo.png',
    tags: ['clamshell', 'hinged', 'takeout', 'food container', 'disposable', 'food service', 'to-go', 'restaurant', 'plastic']
  },
  
  // TKN - Paper Bags
  {
    id: 4,
    name: 'Kraft Paper Bags',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Paper Bags',
    categorySlug: 'paper-bags',
    description: 'Recyclable kraft paper bags for retail and takeout',
    image: '/demo.png',
    tags: ['paper', 'bag', 'kraft', 'recyclable', 'eco-friendly', 'shopping', 'retail', 'grocery', 'takeout', 'brown bag', 'packaging']
  },
  
  // TKN - Bio Boxes
  {
    id: 5,
    name: 'Compostable Bio Boxes',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Bio Boxes',
    categorySlug: 'bio-boxes',
    description: 'Fully compostable food boxes',
    image: '/demo.png',
    tags: ['bio', 'box', 'compostable', 'eco-friendly', 'sustainable', 'biodegradable', 'food container', 'takeout', 'green', 'earth-friendly']
  },
  
  // TKN - Boat Trays
  {
    id: 6,
    name: 'Paper Boat Trays',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Boat Trays',
    categorySlug: 'boat-trays',
    description: 'Paper boat trays for fries, snacks, and appetizers',
    image: '/demo.png',
    tags: ['boat', 'tray', 'paper', 'fries', 'snacks', 'appetizers', 'serving', 'food service', 'french fries', 'basket', 'kraft']
  },
  
  // TKN - Chopsticks
  {
    id: 7,
    name: 'Disposable Chopsticks',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Chopsticks',
    categorySlug: 'chopsticks',
    description: 'Disposable wooden and bamboo chopsticks',
    image: '/demo.png',
    tags: ['chopsticks', 'wooden', 'bamboo', 'utensil', 'disposable', 'asian', 'sushi', 'chinese', 'japanese', 'utensils', 'silverware']
  },
  
  // TKN - Food Pails
  {
    id: 8,
    name: 'Chinese Food Pails',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Food Pails',
    categorySlug: 'food-pails',
    description: 'Traditional Chinese takeout food pails',
    image: '/demo.png',
    tags: ['food pail', 'chinese', 'takeout', 'container', 'noodles', 'rice', 'asian food', 'to-go', 'oyster pail', 'wire handle']
  },
  
  // TKN - Napkins & Paper Towels
  {
    id: 9,
    name: 'Paper Napkins & Towels',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Napkins & Paper Towels',
    categorySlug: 'napkins-papertowels',
    description: 'Napkins, paper towels, tissue, and toilet seat covers',
    image: '/demo.png',
    tags: ['napkin', 'paper towel', 'tissue', 'toilet seat cover', 'dispenser', 'commercial', 'restaurant', 'beverage napkin', 'dinner napkin', 'serviettes']
  },
  
  // TKN - Portion Cups
  {
    id: 10,
    name: 'Clear Portion Cups',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Portion Cups',
    categorySlug: 'portion-cups',
    description: 'Small clear portion cups for sauces, condiments, and samples',
    image: '/demo.png',
    tags: ['portion cup', 'sauce cup', 'condiment', 'clear', 'souffle cup', 'sample', 'dressing', 'dipping sauce', '1oz', '2oz', '4oz', 'small container']
  },
  
  // TKN - Portion Cup Lids
  {
    id: 11,
    name: 'Portion Cup Lids',
    brand: 'TKN',
    brandSlug: 'tkn',
    category: 'Lids',
    categorySlug: 'portion-cup-lids',
    description: 'Lids for portion cups and small containers',
    image: '/demo.png',
    tags: ['lid', 'portion cup lid', 'clear', 'sauce lid', 'souffle lid', 'container lid', 'flat lid', 'tight seal', 'leak-proof']
  },
  
  // Imperial - Sushi Trays
  {
    id: 12,
    name: 'Imperial Sushi Trays',
    brand: 'Imperial',
    brandSlug: 'imperial',
    category: 'Sushi Trays',
    categorySlug: 'sushi-tray',
    description: 'Premium sushi trays for professional presentation',
    image: '/demo.png',
    tags: ['sushi', 'tray', 'premium', 'japanese', 'food service', 'platter', 'sashimi', 'nigiri', 'roll', 'container', 'takeout']
  },
  
  // Imperial - Bento Boxes
  {
    id: 13,
    name: 'Imperial Bento Boxes',
    brand: 'Imperial',
    brandSlug: 'imperial',
    category: 'Bento Boxes',
    categorySlug: 'bento',
    description: 'Multi-compartment bento boxes for organized meals',
    image: '/demo.png',
    tags: ['bento', 'box', 'compartment', 'lunch', 'japanese', 'meal prep', 'divided', 'container', 'takeout', 'multi-compartment']
  },
  
  // Imperial - Poke Bowls
  {
    id: 14,
    name: 'Imperial Poke Bowls',
    brand: 'Imperial',
    brandSlug: 'imperial',
    category: 'Poke Bowls',
    categorySlug: 'pokebowl',
    description: 'Perfect bowls for poke, grain bowls, and salads',
    image: '/demo.png',
    tags: ['poke', 'bowl', 'container', 'fresh', 'salad', 'grain bowl', 'rice bowl', 'hawaiian', 'takeout', 'round container']
  },
  
  // HD - REROBOX
  {
    id: 15,
    name: 'HD REROBOX Containers',
    brand: 'HD',
    brandSlug: 'hd',
    category: 'REROBOX',
    categorySlug: 'rerobox',
    description: 'Innovative REROBOX food containers',
    image: '/demo.png',
    tags: ['rerobox', 'container', 'innovative', 'storage', 'food packaging', 'stackable', 'versatile', 'reusable']
  },
  
  // HD - Clipin
  {
    id: 16,
    name: 'HD Clipin Containers',
    brand: 'HD',
    brandSlug: 'hd',
    category: 'Clipin',
    categorySlug: 'clipin',
    description: 'Secure clip-in containers for safe food storage',
    image: '/demo.png',
    tags: ['clipin', 'container', 'clip', 'secure', 'storage', 'food packaging', 'lock', 'leak-proof', 'safe']
  },
  
  // HD - V-Series
  {
    id: 17,
    name: 'HD V-Series Containers',
    brand: 'HD',
    brandSlug: 'hd',
    category: 'V-Series',
    categorySlug: 'v-series',
    description: 'Premium V-Series food containers',
    image: '/demo.png',
    tags: ['v-series', 'container', 'premium', 'food packaging', 'storage', 'high-quality', 'durable']
  },
  
  // HD - Deli Containers
  {
    id: 18,
    name: 'HD Deli Containers',
    brand: 'HD',
    brandSlug: 'hd',
    category: 'Deli Containers',
    categorySlug: 'deli-containers',
    description: 'Round deli containers for food storage and takeout',
    image: '/demo.png',
    tags: ['deli', 'container', 'round', 'storage', 'food', 'microwavable', 'soup', 'salad', 'sides', 'plastic', 'clear']
  },
  
  // HD - Meat Trays
  {
    id: 19,
    name: 'HD Meat Trays',
    brand: 'HD',
    brandSlug: 'hd',
    category: 'Meat Trays',
    categorySlug: 'meat-trays',
    description: 'Foam and plastic trays for meat and produce',
    image: '/demo.png',
    tags: ['meat tray', 'foam', 'plastic', 'butcher', 'produce', 'grocery', 'supermarket', 'protein', 'packaging', 'fresh']
  },
  
  // HD - Soup Containers
  {
    id: 20,
    name: 'HD Soup Containers',
    brand: 'HD',
    brandSlug: 'hd',
    category: 'Soup Containers',
    categorySlug: 'soup-containers',
    description: 'Leak-proof soup containers for hot liquids',
    image: '/demo.png',
    tags: ['soup', 'container', 'hot food', 'leak-proof', 'liquid', 'broth', 'stew', 'noodles', 'takeout', 'microwavable']
  },
  
  // TD - Plastic Containers
  {
    id: 21,
    name: 'TD Plastic Containers',
    brand: 'TD',
    brandSlug: 'td',
    category: 'Plastic Containers',
    categorySlug: 'plastic-containers',
    description: 'Durable plastic food containers for storage',
    image: '/demo.png',
    tags: ['plastic', 'container', 'durable', 'storage', 'food packaging', 'clear', 'takeout', 'versatile', 'reusable']
  },
  
  // TD - Soup Containers
  {
    id: 22,
    name: 'TD Soup Containers',
    brand: 'TD',
    brandSlug: 'td',
    category: 'Soup Containers',
    categorySlug: 'soup-containers',
    description: 'Leak-proof soup containers with secure lids',
    image: '/demo.png',
    tags: ['soup', 'container', 'leak-proof', 'hot food', 'liquid', 'broth', 'stew', 'noodles', 'takeout', 'microwavable', 'secure']
  }
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [searchTerm, setSearchTerm] = useState(query);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('relevance');

  // Get unique brands
  const brands = ['all', ...Array.from(new Set(products.map(p => p.brand)))];

  // Search and filter logic
  useEffect(() => {
    let results = products;

    // Filter by search term
    if (searchTerm) {
      const lowerQuery = searchTerm.toLowerCase();
      results = results.filter(product => 
        product.name.toLowerCase().includes(lowerQuery) ||
        product.brand.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      results = results.filter(product => product.brand === selectedBrand);
    }

    // Sort results
    if (sortBy === 'name') {
      results = [...results].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'brand') {
      results = [...results].sort((a, b) => a.brand.localeCompare(b.brand));
    }

    setFilteredProducts(results);
  }, [searchTerm, selectedBrand, sortBy]);

  // Update search term when URL param changes
  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Input */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search products, brands, or categories..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c51a3] focus:border-transparent"
                />
                <svg 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-gray-600">
              <span className="font-semibold text-gray-900">{filteredProducts.length}</span> results
              {searchTerm && <span> for "{searchTerm}"</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>
              
              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Brand</h4>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="radio"
                        name="brand"
                        value={brand}
                        checked={selectedBrand === brand}
                        onChange={(e) => setSelectedBrand(e.target.value)}
                        className="w-4 h-4 text-[#1c51a3] focus:ring-[#1c51a3]"
                      />
                      <span className="ml-2 text-gray-700 capitalize">
                        {brand === 'all' ? 'All Brands' : brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1c51a3]"
                >
                  <option value="relevance">Relevance</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="brand">Brand</option>
                </select>
              </div>

              {/* Clear Filters */}
              {(selectedBrand !== 'all' || sortBy !== 'relevance') && (
                <button
                  onClick={() => {
                    setSelectedBrand('all');
                    setSortBy('relevance');
                  }}
                  className="w-full mt-4 px-4 py-2 text-sm text-[#1c51a3] border border-[#1c51a3] rounded-lg hover:bg-[#1c51a3] hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </aside>

          {/* Results Grid */}
          <main className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/category/${product.brandSlug}/${product.categorySlug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#1c51a3] h-full flex flex-col">
                      {/* Product Image */}
                      <div className="relative h-56 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Brand Badge */}
                        <span className="absolute top-3 right-3 text-xs font-bold text-white bg-[#1c51a3] px-3 py-1.5 rounded-full shadow-lg">
                          {product.brand}
                        </span>
                      </div>

                      {/* Product Info */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1c51a3] transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2 font-medium">
                          {product.category}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed flex-1">
                          {product.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <span className="text-[#1c51a3] font-semibold text-sm group-hover:underline">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              // No Results
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <svg 
                  className="w-20 h-20 text-gray-400 mx-auto mb-4"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products matching "{searchTerm}"
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedBrand('all');
                    setSortBy('relevance');
                  }}
                  className="bg-[#1c51a3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#153d7f] transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1c51a3] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading search...</p>
        </div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}
