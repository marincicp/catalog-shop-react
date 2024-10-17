function SearchBar({ placeholder, onChange, lastSearchQuery = "" }) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="w-2/4 m-auto">
      <input
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-gray-100 w-full py-4 px-6 rounded-lg focus:outline-0 focus:ring-2 focus:ring-gray-300 tracking-wider"
      />

      <div className="mt-6">
        {lastSearchQuery && <ShowLastQuery query={lastSearchQuery} />}
      </div>
    </div>
  );
}

function ShowLastQuery({ query }) {
  return (
    <p className="px-4 text-gray-400 tracking-wide">
      Search result for
      <span className="font-bold text-gray-500"> &quot;{query}&quot;</span>
    </p>
  );
}

export default SearchBar;
