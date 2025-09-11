interface CartContentProps {
  cartItems: any[];
  user: any;
}

export default function CartContent({ cartItems, user }: CartContentProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      {/* Cart items will go here when implemented */}
      <p className="text-gray-600">Cart content coming soon...</p>
    </div>
  );
}