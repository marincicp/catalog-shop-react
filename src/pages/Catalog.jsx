import { Button, FilterContainer, ProductList, SearchBar } from "../components";
import { useAuthContext, useProducts, useQueryParams } from "../hooks";
function Catalog() {
  const { products, isLoading, error } = useProducts();
  const { handleInputChange, getQueryParam } = useQueryParams();
  const lastSearchQuery = getQueryParam("name") || "";

  const { user } = useAuthContext();

  return (
    <div className="grid  grid-cols-[40%_1fr] md:grid-cols-[30%_1fr]  lg:grid-cols-[30%_1fr] xl:grid-cols-[20%_1fr]  ">
      <FilterContainer />
      <div className="bg-white border-l-2 border-l-gray-100 flex gap-4 flex-col justify-start items-center p-8">
        <div className="w-full flex justify-center items-start ">
          <SearchBar
            lastSearchQuery={lastSearchQuery}
            placeholder="Search products..."
            onChange={handleInputChange}
          />

          <div className="mr-4">
            {user?.email && (
              <Button to="/product-create" type="secondary">
                Create product
              </Button>
            )}
          </div>
        </div>
        <ProductList error={error} data={products} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Catalog;
