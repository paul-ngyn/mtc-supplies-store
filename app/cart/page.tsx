import EmptyCart from '@/components/ui/Cart/EmptyCart';
import CartContent from '@/components/ui/Cart/CartContent';

export default async function CartPage() {
  // Mock cart items - replace with actual cart logic later
  const cartItems: any[] = [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cart</h1>
        
        {cartItems.length === 0 ? (
          <EmptyCart user={null} />
        ) : (
          <CartContent cartItems={cartItems} user={null} />
        )}
      </div>
    </div>
  );
}