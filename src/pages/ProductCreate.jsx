import { ProductForm } from "../components";
import { useCreateProduct, useProducts } from "../hooks";

function ProductCreate() {
  const { categories } = useProducts();

  const { handleChange, state, handleSubmit, handleCategoryChange, isLoading } =
    useCreateProduct();
  return (
    <div className=" flex justify-center   mt-4">
      <div className="w-5/6  bg-gray-100 p-4 rounded shadow-md flex justify-center items-center flex-col">
        <h3 className="font-bold text-2xl mb-6">Create New Product</h3>
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

export default ProductCreate;
