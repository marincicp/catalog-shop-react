import { ProductCard, Spinner } from ".";

function ProductList({ data = [], isLoading, error }) {
  if (isLoading) return <Spinner className="mt-6" />;

  if (error) return <div>No data to show</div>;
  return (
    <div className="bg-white w-full h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
      {data?.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
