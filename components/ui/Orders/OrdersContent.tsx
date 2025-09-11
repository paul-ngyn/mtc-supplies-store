interface OrdersContentProps {
  user: any;
}

export default function OrdersContent({ user }: OrdersContentProps) {
  // Mock orders data - replace with actual orders logic later
  const orders: any[] = [];

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        {/* No Orders Icon */}
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
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
            />
          </svg>
        </div>

        {/* No Orders Message */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          No Orders Yet
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Welcome {user.email}! You haven't placed any orders yet. Start shopping to see your orders here.
        </p>

        {/* Start Shopping Button */}
        <div className="flex justify-center">
          <a 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Start Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Orders will be listed here when implemented */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
        <p className="text-gray-600">Order history will appear here...</p>
      </div>
    </div>
  );
}