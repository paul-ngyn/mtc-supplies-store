export default function SearchBar() {
  return (
    <div className="flex justify-center w-full">
      <form className="w-full max-w-xl flex">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  );
}