function SearchBar({ placeholder }) {
  const query = "PC";

  return (
    <div className="w-2/4">
      <input
        placeholder={placeholder}
        className="bg-gray-100 w-full py-4 px-6 rounded-lg focus:outline-0 focus:ring-2 focus:ring-gray-300 tracking-wider"
      />

      <p className="mt-6 px-4 text-gray-400 tracking-wide">
        Search result for
        <span className="font-bold text-gray-500"> &quot;{query}&quot;</span>
      </p>
    </div>
  );
}

export default SearchBar;
