import Button from "./Button";
import ProductPlaceholder from "../../public/productImgPlacehodler.jpg";

function ProductCard({ item }) {
  return (
    <div className=" w-full rounded-xl p-6 flex flex-col justify-between  items-center gap-4 border-2 border-gray-200 hover:shadow-md transition-all duration-200 ">
      <div className="w-40 h-40 overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-full"
          src={item?.image_url}
          onError={(e) => {
            console.log(e);
            e.target.onerror = null;
            e.target.src = ProductPlaceholder;
          }}
          alt="product image"
        />
      </div>

      <div className="self-start px-2 w-full ">
        <p className="font-bold tracking-wide mb-4 text-lg">{item.name}</p>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-300 tracking-wide">Price</span>
            <span className="font-bold text-base">$ {item.price}</span>
          </div>
          <div>
            <Button to={`/product/${item.SKU}`} type="primary">
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
