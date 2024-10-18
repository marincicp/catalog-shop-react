import { Button, FilterContainer, ProductList, SearchBar } from "../components";
import { useProducts, useQueryParams } from "../hooks";

function Catalog() {
  const { products, isLoading } = useProducts();
  const { handleInputChange, getQueryParam } = useQueryParams();

  const lastSearchQuery = getQueryParam("name") || "";

  return (
    <div className="bg-red-400 h-full grid grid-cols-[20%_1fr]">
      <FilterContainer />
      <div className="bg-white border-l-2 border-l-gray-100 flex gap-4 flex-col justify-start items-center p-8 overflow-hidden">
        <div className="w-full flex justify-center items-start ">
          <SearchBar
            lastSearchQuery={lastSearchQuery}
            placeholder="Search products..."
            onChange={handleInputChange}
          />

          <div className="mr-4">
            <Button to="/product-create" type="secondary">
              Create product
            </Button>
          </div>
        </div>
        <ProductList data={products} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Catalog;
