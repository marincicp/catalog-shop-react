import { ProductForm } from "../components";
import { useCreateProduct, useProducts } from "../hooks";

function ProductCreate() {
  const { categories } = useProducts();

  const {
    handleSubmit,
    handleCategoryChange,
    isLoading,
    handleProductType,
    productType,
  } = useCreateProduct();

  return (
    <div className=" flex justify-center   mt-4">
      <div className="w-5/6  bg-gray-100 p-4 rounded shadow-md flex justify-center items-center flex-col">
        <h3 className="font-bold text-2xl mb-6">Create New Product</h3>
        <ProductForm
          handleSubmit={handleSubmit}
          handleCategoryChange={handleCategoryChange}
          categories={categories}
          isLoading={isLoading}
          handleProductType={handleProductType}
          productType={productType}
        />
      </div>
    </div>
  );
}

export default ProductCreate;
