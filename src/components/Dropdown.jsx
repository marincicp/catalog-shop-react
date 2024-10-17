function Dropdown({
  onChange,
  data,
  defaultOption = "All",
  defaultValue = "",
}) {
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <select
      className="text-sm py-2 px-4 rounded-lg tracking-wider bg-white border-2 border-gray-200 text-gray-900 font-semibold hover:bg-gray-200 cursor-pointer focus:outline-0 focus:ring-1 focus:ring-gray-200 w-full"
      onChange={handleChange}
    >
      <option value={defaultValue}>{defaultOption}</option>
      {data.map((item) => (
        <option key={item.id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
