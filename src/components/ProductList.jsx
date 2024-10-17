import { ProductCard } from ".";

const data = [
  {
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2qbw84OPZYVWwdIPKpMfRQTUkY-7DFbKhg&s",
    name: "name product sfsd",
    price: "price",
  },
  {
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2qbw84OPZYVWwdIPKpMfRQTUkY-7DFbKhg&s",
    name: "name product sfsd",
    price: "price",
  },
  {
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2qbw84OPZYVWwdIPKpMfRQTUkY-7DFbKhg&s",
    name: "name",
    price: "price",
  },
  {
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2qbw84OPZYVWwdIPKpMfRQTUkY-7DFbKhg&s",
    name: "name",
    price: "price",
  },
  {
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2qbw84OPZYVWwdIPKpMfRQTUkY-7DFbKhg&s",
    name: "name",
    price: "price",
  },
  {
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS2qbw84OPZYVWwdIPKpMfRQTUkY-7DFbKhg&s",
    name: "name",
    price: "price",
  },
];

function ProductList() {
  return (
    <div className="bg-white w-full h-full grid grid-cols-4 gap-6 overflow-scroll">
      {data.map((item) => (
        <ProductCard key={item.name} item={item} />
      ))}
    </div>
  );
}

export default ProductList;
