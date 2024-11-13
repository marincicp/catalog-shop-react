import { ProductForm, Spinner } from "../components";
import { useEditProduct, useProducts } from "../hooks";

function ProductEdit() {
  const { categories } = useProducts();
  const {
    handleSubmit,
    handleCategoryChange,
    handleProductType,
    productType,
    isLoading,
    productData,
  } = useEditProduct();

  return (
    <div className=" flex justify-center   mt-4">
      <div className="w-5/6  bg-gray-100 p-4 rounded shadow-md flex justify-center items-center flex-col">
        <h3 className="font-bold text-2xl mb-6">Product Edit</h3>
        {isLoading ? (
          <Spinner className="mt-4" />
        ) : (
          <ProductForm
            handleSubmit={handleSubmit}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
            isLoading={isLoading}
            productData={productData}
            productType={productType}
            handleProductType={handleProductType}
          />
        )}
      </div>
    </div>
  );
}

export default ProductEdit;
