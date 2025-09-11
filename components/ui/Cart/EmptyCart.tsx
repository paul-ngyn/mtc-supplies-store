import Link from 'next/link';

interface EmptyCartProps {
  user: any;
}

export default function EmptyCart({ user }: EmptyCartProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 text-center">
      {/* Empty Cart Icon */}
      <div className="flex justify-center mb-6">
        <svg 
          className="w-24 h-24 text-gray-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5L19 18" 
          />
        </svg>
      </div>

      {/* Empty Cart Message */}
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
        Your Shopping Cart is Empty
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Please add products to your cart to continue shopping with us.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {/* Continue Shopping Button */}
        <Link 
          href="/"
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          Continue Shopping
        </Link>

        {/* Login Button - Only show if user is not logged in */}
        {!user && (
          <Link 
            href="/signin"
            className="w-full sm:w-auto border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition-colors"
          >
            Log In
          </Link>
        )}
      </div>

      {/* Additional Message for Logged-in Users */}
      {user && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            Welcome back, {user.email}! Start browsing our products to add items to your cart.
          </p>
        </div>
      )}
    </div>
  );
}