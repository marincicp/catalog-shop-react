import { ProductForm } from "../components";
import { useEditProduct, useProducts } from "../hooks";

function ProductEdit() {
  const { categories } = useProducts();
  const { handleChange, state, handleSubmit, handleCategoryChange, isLoading } =
    useEditProduct();

  return (
    <div className=" flex justify-center   mt-4">
      <div className="w-5/6  bg-gray-100 p-4 rounded shadow-md flex justify-center items-center flex-col">
        <h3 className="font-bold text-2xl mb-6">Product Edit</h3>

        <ProductForm
          handleChange={handleChange}
          state={state}
          handleSubmit={handleSubmit}
          handleCategoryChange={handleCategoryChange}
          categories={categories}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default ProductEdit;
