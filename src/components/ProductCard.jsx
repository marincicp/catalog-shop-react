import Button from "./Button";

function ProductCard({ item }) {
  return (
    <div className=" w-full rounded-xl p-6 flex flex-col  items-center gap-4 border-2 border-gray-200 hover:shadow-md transition-all duration-200 ">
      <div className="w-40 h-40 overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-full "
          src="data:image/jpeg;base64,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"
          alt="product image"
        />
      </div>

      <div className="self-start px-2 w-full">
        <p className="font-bold tracking-wide mb-4 text-lg">{item.name}</p>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-300 tracking-wide">Price</span>
            <span className="font-bold text-base">$ 23</span>
          </div>
          <div>
            <Button type="primary">View</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
