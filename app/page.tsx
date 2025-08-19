import { createClient } from '@/utils/supabase/server';
import { getProducts, getUser } from '@/utils/supabase/queries';

export default async function HomePage() {
  const supabase = createClient();
  const [user, products] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
  ]);

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8">
        Welcome to MTC Supplies Store
      </h1>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {products && products.length > 0 ? (
          products.map((product: any) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
            >
              <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <span className="text-blue-600 font-bold text-xl mb-2">
                ${product.price}
              </span>
              {/* Add to cart or details button here */}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </section>
    </main>
  );
}