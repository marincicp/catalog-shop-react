const categories = [
  {
    name: "Books",
    id: 1,
  },
  {
    name: "Games",
    id: 2,
  },
  {
    name: "Books",
    id: 3,
  },
];

function Dropdown() {
  return (
    <select className="text-sm py-2 px-4 rounded-lg tracking-wider bg-white border-2 border-gray-200 text-gray-900 font-semibold hover:bg-gray-200 cursor-pointer focus:outline-0 focus:ring-1 focus:ring-gray-200">
      <option>All</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
