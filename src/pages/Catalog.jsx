import { FilterContainer, ProductList, SearchBar } from "../components";

function Catalog() {
  return (
    <div className="bg-red-400 h-full grid grid-cols-[20%_1fr]">
      <FilterContainer />
      <div className="bg-white border-l-2 border-l-gray-100 flex gap-4 flex-col justify-start items-center p-8 overflow-hidden">
        <div className="w-full flex items-center justify-center">
          <SearchBar placeholder="Search products..." />
          <div className="ml-8">Create product</div>
        </div>
        <ProductList />
      </div>
    </div>
  );
}

export default Catalog;
