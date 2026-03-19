import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import OrdersContent from '@/components/ui/Orders/OrdersContent';

export default async function OrdersPage() {
  const supabase = await createClient();
  
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Redirect to sign-in if not authenticated
  if (!user) {
    redirect('/signin?redirect_to=/orders');
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Orders & Returns</h1>
          <p className="text-gray-600 mt-2">
            View your order history and manage returns
          </p>
        </div>
        
        <OrdersContent user={user} />
      </div>
    </div>
  );
}