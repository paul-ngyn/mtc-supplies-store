export default function SearchBar() {
  return (
    <div className="flex justify-center w-full">
      <form className="w-full max-w-xl relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border-2 border-gray-300 rounded-md px-4 py-2 pr-12 text-gray-900 bg-white focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </button>
      </form>
    </div>
  );
}