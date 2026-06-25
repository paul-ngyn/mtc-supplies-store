import ProductSlider from '@/components/ui/ProductSlider';
import BrandCarousel from '@/components/ui/BrandCarousel';
import Link from 'next/link';
import Image from 'next/image';

// Featured product categories for the homepage
const featuredCategories = [
  {
    id: 1,
    name: 'Paper Bags',
    slug: 'paper-bags',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Eco-friendly paper bags for all your packaging needs',
    image: '/MTC_TKN_PP/kraft%20rope%20side%201.png'
  },
  {
    id: 2,
    name: 'REROBOX',
    slug: 'rerobox',
    brand: 'HD',
    brandSlug: 'hd',
    description: 'Premium REROBOX food containers for quality storage',
    image: '/MTC_TD_PP/MTC TD no bg pics/three variation hd no bg.png'
  },
  {
    id: 3,
    name: 'Bio Boxes',
    slug: 'bio-boxes',
    brand: 'TKN',
    brandSlug: 'tkn',
    description: 'Biodegradable food boxes for eco-friendly packaging',
    image: '/MTC_TKN_PP/kraft%20bio%20boxes.webp'
  },
  {
    id: 4,
    name: 'Hinged Clamshells',
    slug: 'hinged-clamshells',
    brand: 'MB',
    brandSlug: 'mb',
    description: 'Versatile hinged clamshell containers for takeout',
    image: '/MTC_MP_PP/MTC MB no bg pics/tri stack black side.png'
  }
];

const HERO_BORDER_IMAGE_SIZES = '20vw';
const CATEGORY_CARD_IMAGE_SIZES = '(max-width: 768px) 100vw, 33vw';
const PANEL_IMAGE_SIZES = '(max-width: 1024px) 100vw, 50vw';

export default function HomePage() {
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.brandSlug}/${category.slug}`}
                className="group cursor-pointer"
              >
                <div className="flex flex-col">
                  {/* Image above the card */}
                  <div className="relative h-64 rounded-t-2xl border border-gray-200 border-b-0 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      title={`${category.name} - Shop premium ${category.brand} products`}
                      width={300}
                      height={300}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Card with text */}
                  <div className="bg-white rounded-b-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center relative border border-gray-100 border-t-0">
                    <span className="absolute top-4 right-4 text-sm font-bold text-white bg-[#1c51a3] px-4 py-2 rounded-lg shadow-lg">
                      {category.brand}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1c51a3] transition-colors mt-8">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Products Button */}
          <div className="text-center mt-12">
            <Link href="/products">
              <button className="bg-[#1c51a3] hover:bg-[#153d7f] text-white px-5 py-3 rounded-lg text-md font-semibold transition-colors shadow-md hover:shadow-lg">
                View All Product Categories
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Imperial Products Section */}
      <section className="pt-32 pb-28 md:pt-44 md:pb-40 bg-white relative overflow-hidden">
        {/* Top Cherry Blossom Border - Repeating */}
        <div className="absolute -top-10 left-0 w-full h-24 md:h-32 flex">
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-bottom"
            />
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-bottom"
            />
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-bottom"
            />
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-bottom"
            />
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-bottom"
            />
          </div>
        </div>
        
        {/* Bottom Cherry Blossom Border - Repeating */}
        <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 flex">
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-top rotate-180"
            />
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-top rotate-180"
            />
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-top rotate-180"
            />
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-top rotate-180"
            />
          </div>
          <div className="relative flex-1 min-w-[200px]">
            <Image
              src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
              alt="Cherry Blossom Border"
              fill
              sizes={HERO_BORDER_IMAGE_SIZES}
              className="object-contain object-top rotate-180"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/imperial-removebg-.png"
                alt="Imperial Logo"
                width={350}
                height={200}
                className="h-40 w-auto"
              />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Imperial Premium Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our exclusive Imperial line of high-quality food packaging solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 max-w-6xl mx-auto">
            <Link href="/category/imperial/sushi-tray" className="group">
              <div className="relative">
                {/* Top Cherry Blossom Border */}
                <div className="absolute -top-6 left-0 w-full h-12 z-10">
                  <Image
                    src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
                    alt="Cherry Blossom"
                    fill
                    sizes={CATEGORY_CARD_IMAGE_SIZES}
                    className="object-contain object-bottom"
                  />
                </div>
                {/* Bottom Cherry Blossom Border */}
                <div className="absolute -bottom-6 left-0 w-full h-12 z-10">
                  <Image
                    src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
                    alt="Cherry Blossom"
                    fill
                    sizes={CATEGORY_CARD_IMAGE_SIZES}
                    className="object-contain object-top rotate-180"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 bg-white">
                    <Image
                      src="/MTC_IMP_PP/MTC IMPERIAL no bg/sushi open.png"
                      alt="Sushi Trays Empty"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="hidden md:block object-contain p-4 transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0"
                    />
                    <Image
                      src="/MTC_IMP_PP/MTC IMPERIAL no bg/full tray sushi.png"
                      alt="Sushi Trays Filled"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="object-contain p-4 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6 text-center bg-white">
                    <h3 className="font-semibold text-gray-900 text-lg">Sushi Trays</h3>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/category/imperial/bento" className="group">
              <div className="relative">
                {/* Top Cherry Blossom Border */}
                <div className="absolute -top-6 left-0 w-full h-12 z-10">
                  <Image
                    src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
                    alt="Cherry Blossom"
                    fill
                    sizes={CATEGORY_CARD_IMAGE_SIZES}
                    className="object-contain object-bottom"
                  />
                </div>
                {/* Bottom Cherry Blossom Border */}
                <div className="absolute -bottom-6 left-0 w-full h-12 z-10">
                  <Image
                    src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
                    alt="Cherry Blossom"
                    fill
                    sizes={CATEGORY_CARD_IMAGE_SIZES}
                    className="object-contain object-top rotate-180"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 bg-white">
                    <Image
                      src="/MTC_IMP_PP/MTC IMPERIAL no bg/1 comp bento open.png"
                      alt="Bento Boxes Empty"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="hidden md:block object-contain p-4 transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0 -translate-x-[3%]"
                    />
                    <Image
                      src="/MTC_IMP_PP/MTC IMPERIAL no bg/1compbentochicken (2).png"
                      alt="Bento Boxes Filled"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="object-contain p-4 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6 text-center bg-white">
                    <h3 className="font-semibold text-gray-900 text-lg">Bento Boxes</h3>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/category/imperial/pokebowl" className="group">
              <div className="relative">
                {/* Top Cherry Blossom Border */}
                <div className="absolute -top-6 left-0 w-full h-12 z-10">
                  <Image
                    src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
                    alt="Cherry Blossom"
                    fill
                    sizes={CATEGORY_CARD_IMAGE_SIZES}
                    className="object-contain object-bottom"
                  />
                </div>
                {/* Bottom Cherry Blossom Border */}
                <div className="absolute -bottom-6 left-0 w-full h-12 z-10">
                  <Image
                    src="/MTC_IMP_PP/MTC IMPERIAL no bg/cherry blossom texture.png"
                    alt="Cherry Blossom"
                    fill
                    sizes={CATEGORY_CARD_IMAGE_SIZES}
                    className="object-contain object-top rotate-180"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-64 bg-white">
                    <Image
                      src="/MTC_IMP_PP/MTC IMPERIAL no bg/poke open.png"
                      alt="Poke Bowls Empty"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="hidden md:block object-contain p-4 transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0 translate-x-[3%] -translate-y-[12%] scale-[1.2]"
                    />
                    <Image
                      src="/MTC_IMP_PP/MTC IMPERIAL no bg/poke_bowl_full-removebg-preview.png"
                      alt="Poke Bowls Filled"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="object-contain p-4 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-x-[5%] -translate-y-[10%]"
                    />
                  </div>
                  <div className="p-6 text-center bg-white">
                    <h3 className="font-semibold text-gray-900 text-lg">Poke Bowls</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/category/imperial">
              <button className="bg-[#1c51a3] hover:bg-[#153d7f] text-white px-5 py-4 rounded-lg text-md font-semibold transition-colors shadow-md hover:shadow-lg">
                Check Out All Our Imperial Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* TD Plastic Containers Panel */}
      <section className="py-20 md:py-32 -mt-10 md:-mt-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl border border-[#b9daf5] bg-[#d9efff] shadow-[0_12px_35px_rgba(28,81,163,0.12)]">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center px-8 py-12 md:px-14 md:py-16 lg:px-16 lg:py-20">
              <div className="lg:col-span-6 xl:col-span-5">
                <div className="mb-7">
                  <Image
                    src="/TD no background.png"
                    alt="TD Logo"
                    width={180}
                    height={90}
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <p className="inline-flex items-center rounded-full bg-white/85 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-[#1c51a3] uppercase border border-[#bfdcf6]">
                  US Patented, Recyclable, Affordable
                </p>
                <h2 className="mt-10 text-3xl md:text-4xl lg:text-[2.7rem] font-extrabold text-gray-900 leading-[1.08]">
                  TD Plastic Containers
                </h2>
                <p className="mt-7 text-lg md:text-xl font-bold text-gray-900">
                  Practical Packaging For Everyday Service
                </p>
                <p className="mt-8 text-base md:text-lg text-gray-700 max-w-xl leading-relaxed">
                  Reliable round, rectangular, and compartment plastic containers built for food prep, takeout, and delivery.
                </p>
                <div className="relative h-56 sm:h-72 mt-8 lg:hidden">
                  <Image
                    src="/MTC_TD_PP/MTC TD no bg pics/7 stack closed.png"
                    alt="TD Plastic Containers"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw"
                    className="object-contain p-2 sm:p-4"
                  />
                </div>
                <Link
                  href="/category/td/plastic-containers"
                  className="inline-block mt-12 bg-[#2d69d1] hover:bg-[#1c51a3] text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors shadow-md"
                >
                  View Options
                </Link>
              </div>

              <div className="hidden lg:block lg:col-span-6 xl:col-span-7">
                <div className="relative h-[20rem] md:h-[28rem] lg:h-[34rem]">
                  <Image
                    src="/MTC_TD_PP/MTC TD no bg pics/7 stack closed.png"
                    alt="TD Plastic Containers"
                    fill
                    sizes={PANEL_IMAGE_SIZES}
                    className="object-contain p-2 md:p-4 lg:p-6 scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-20 pt-8 pb-3 md:pt-16 md:pb-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Image
                  src="/HD_logo-removebg.png"
                  alt="HD Logo"
                  width={320}
                  height={160}
                  className="h-28 w-auto"
                />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                HD High Quality Containers
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our HD lineup across REROBOX, Clip-In, and V-Series, featuring our most durable, versatile containers yet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <Link href="/category/hd/clipin" className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#c8def5]">
                  <div className="relative h-64 bg-white">
                    <Image
                      src="/MTC_TD_PP/MTC TD no bg pics/1 comp open.png"
                      alt="TD 1 Comp Open"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="hidden md:block object-contain p-4 scale-[1.2] -translate-x-[2%] -translate-y-[4%] transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0"
                    />
                    <Image
                      src="/MTC_HD_PP/MTC HD no bg pics/HD_1_COMP-removebg-preview.png"
                      alt="HD 1 Comp"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="object-contain p-4 scale-[0.75] transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6 text-center bg-white">
                    <h3 className="font-semibold text-gray-900 text-lg">1 Comp</h3>
                  </div>
                </div>
              </Link>

              <Link href="/category/hd/clipin" className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#c8def5]">
                  <div className="relative h-64 bg-white">
                    <Image
                      src="/MTC_TD_PP/MTC TD no bg pics/bowl open.png"
                      alt="TD Bowl Open"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="hidden md:block object-contain p-4 scale-[1.20] -translate-x-[2%] -translate-y-[7%] transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0"
                    />
                    <Image
                      src="/MTC_HD_PP/MTC HD no bg pics/HD_BOWL-removebg-preview.png"
                      alt="HD Bowl"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="object-contain p-4 scale-[0.75] transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6 text-center bg-white">
                    <h3 className="font-semibold text-gray-900 text-lg">Bowl</h3>
                  </div>
                </div>
              </Link>

              <Link href="/category/hd/clipin" className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#c8def5]">
                  <div className="relative h-64 bg-white">
                    <Image
                      src="/MTC_TD_PP/MTC TD no bg pics/tri comp open.png"
                      alt="TD Tri Comp Open"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="hidden md:block object-contain p-4 transition-opacity duration-300 md:opacity-100 md:group-hover:opacity-0"
                    />
                    <Image
                      src="/MTC_HD_PP/MTC HD no bg pics/HD_TRI_COMP_FOOD-removebg-preview.png"
                      alt="HD Tri Comp"
                      fill
                      sizes={CATEGORY_CARD_IMAGE_SIZES}
                      className="object-contain p-4 scale-[0.84] transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    />
                  </div>
                  <div className="p-6 text-center bg-white">
                    <h3 className="font-semibold text-gray-900 text-lg">Tri Comp</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-center mt-12">
              <Link href="/category/hd">
                <button className="bg-[#1c51a3] hover:bg-[#153d7f] text-white px-8 py-3 rounded-lg text-base font-semibold transition-colors shadow-md hover:shadow-lg">
                  View All HD Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:pt-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Maple Trade Corp?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#1c51a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-8 h-8 text-[#1c51a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-10 h-10 text-[#1c51a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="text-3xl font-bold text-[#1c51a3] mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-[#1c51a3] mb-2">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-[#1c51a3] mb-2">1M+</div>
              <div className="text-gray-600">Products Delivered</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-[#1c51a3] mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="pt-8 pb-24 md:pt-10 md:pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-gray-200 p-10 md:p-14 text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              At MTC, we carry a variety of high-quality plastic containers! From our premium US patented HD™ and TD™ plastic containers to our durable TFPP clamshell boxes, our products are designed to provide the security and convenience essential to the food industry. Whether you're looking for reusable heavy-duty containers, take-out food boxes, small microwavable portion sizes, or large party trays, we've got you covered.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Image
                    src="/biodegradablelogo.png"
                    alt="Biodegradable"
                    width={34}
                    height={34}
                    className="w-8 h-8 object-contain"
                    style={{
                      filter:
                        'invert(24%) sepia(70%) saturate(1400%) hue-rotate(191deg) brightness(91%) contrast(92%)'
                    }}
                  />
                </div>
                <span className="text-base font-semibold text-[#1c51a3]">Biodegradable</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Image
                    src="/recyclelogo%20%281%29.png"
                    alt="Recyclable"
                    width={34}
                    height={34}
                    className="w-8 h-8 object-contain"
                    style={{
                      filter:
                        'invert(24%) sepia(70%) saturate(1400%) hue-rotate(191deg) brightness(91%) contrast(92%)'
                    }}
                  />
                </div>
                <span className="text-base font-semibold text-[#1c51a3]">Recyclable</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-[#1c51a3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l7 3v6c0 4.2-3 7.7-7 9-4-1.3-7-4.8-7-9V6l7-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 12.5l1.8 1.8 3.2-3.2" />
                  </svg>
                </div>
                <span className="text-base font-semibold text-[#1c51a3]">US Patented</span>
              </div>
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
            <Link href="/products" className="bg-[#1c51a3] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#153d7f] transition-colors">
              View All Products
            </Link>
            <Link href="/contact" className="border-2 border-[#1c51a3] text-[#1c51a3] px-8 py-3 rounded-lg font-semibold hover:bg-[#1c51a3] hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}