import { ProductCard } from ".";

function ProductList({ data, isLoading }) {
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data?.length === 0 || !data ? (
        <div className=" w-full">
          <p className="text-center mt-10 font-semibold">
            No products found. Please try a different search.
          </p>
        </div>
      ) : (
        <div className="bg-white w-full h-full grid grid-cols-4 gap-6 overflow-scroll">
          {data.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductList;
