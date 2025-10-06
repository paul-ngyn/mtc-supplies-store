import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { getProducts, getSubscription, getUser } from '@/utils/supabase/queries';
import PricingWhite from '@/components/ui/Pricing/PricingWhite';
import { Metadata } from 'next';
import FAQSection from '@/components/ui/FAQSection';

export const metadata: Metadata = {
  title: 'TKN Premium Subscription - Exclusive Access & Benefits',
  description: 'Unlock exclusive access to premium supplies, early releases, member-only discounts, and priority support with TKN Premium membership.',
  openGraph: {
    title: 'TKN Premium Subscription',
    description: 'Get exclusive access to premium supplies and member-only benefits.',
  },
};

export default async function SubscriptionPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  if (!user) {
    return redirect('/signin');
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            TKN Premium
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive access to premium supplies, early releases, and member-only content.
          </p>
        </div>

        {/* Current Subscription Status */}
        {subscription && (
          <div className="mt-12 bg-blue-50 rounded-lg border border-blue-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-blue-900">
                  Current Plan: {subscription.prices?.products?.name}
                </h2>
                <p className="text-blue-700 mt-2">
                  Status: <span className="capitalize text-green-600 font-medium">{subscription.status}</span>
                </p>
                {subscription.current_period_end && (
                  <p className="text-blue-600 mt-1">
                    {subscription.cancel_at_period_end 
                      ? 'Expires on' 
                      : 'Next billing date'
                    }: {new Date(subscription.current_period_end).toLocaleDateString()}
                  </p>
                )}
              </div>
              <div className="text-right">
                {subscription.prices && (
                  <div className="text-2xl font-bold text-blue-900">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: subscription.prices.currency!,
                      minimumFractionDigits: 0
                    }).format((subscription.prices.unit_amount || 0) / 100)}
                    <span className="text-sm text-blue-600">
                      /{subscription.prices.interval}
                    </span>
                  </div>
                )}
                {subscription.cancel_at_period_end && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 mt-2">
                    Cancelling
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-blue-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Priority Shipping</h3>
            <p className="mt-2 text-gray-600">
              Enjoy free standard shipping on all orders and expedited shipping options at discounted rates.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-blue-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Exclusive Discounts</h3>
            <p className="mt-2 text-gray-600">
              Save up to 20% on all products with member-only pricing.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-md bg-blue-600">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Premium Support</h3>
            <p className="mt-2 text-gray-600">
              Get priority customer support and exclusive member resources.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <PricingWhite user={user} products={products || []} subscription={subscription} />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
