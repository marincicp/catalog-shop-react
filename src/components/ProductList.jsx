import { ProductCard } from ".";

function ProductList({ data, isLoading }) {
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-white w-full h-full grid grid-cols-4 gap-6 overflow-scroll">
      {data.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
