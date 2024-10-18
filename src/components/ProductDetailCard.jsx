import ProductPlaceholder from "../../public/productImgPlacehodler.jpg";
import { useProducts } from "../hooks";
import Button from "./Button";

function ProductDetailCard({ product }) {
  const { handleDelete, loading } = useProducts();

  return (
    <div className=" w-3/6 rounded-xl p-6 flex flex-col justify-between  items-center gap-4 border-2 border-gray-200 hover:shadow-md transition-all duration-200 bg-gray-100 mt-4 ">
      <div className="w-40 h-40 overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-full"
          src={product?.image_url}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = ProductPlaceholder;
          }}
          alt="product image"
        />
      </div>

      <div className=" px-2 w-full justify-center items-center ">
        <p className="font-bold tracking-wide mb-4 text-2xl text-center">
          {product?.name}
        </p>
        <div className="flex justify-evenly mb-8">
          <ProductCardRow label="Price" value={product?.price} />
          <ProductCardRow label="Category" value={product?.category_name} />
        </div>
        <div className="flex justify-evenly">
          <ProductCardRow label="Type" value={product?.type} />
          {product?.type === "virtual" ? (
            <>
              <ProductCardRow label="Coupon" value={product?.coupon_codes} />
              <ProductCardRow label="Expires At" value={product?.expires_at} />
            </>
          ) : (
            <>
              <ProductCardRow
                label="Color"
                value={`$  ${product?.shipping_prices}`}
              />
              <ProductCardRow label="Color" value={product?.color} />
            </>
          )}
        </div>
        <div className="flex justify-evenly mt-6">
          {product?.description && (
            <ProductCardRow label="Description" value={product?.description} />
          )}
        </div>
        <div className="flex justify-evenly mt-6">
          <Button
            onClick={() => handleDelete(product?.SKU)}
            disabled={loading}
            type="red"
          >
            Delete
          </Button>
          <Button to={`/product-edit/${product?.SKU}`} type="secondary">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;

function ProductCardRow({ label, value = "/" }) {
  return (
    <div className="flex flex-1 justify-center items-center gap-2 flex-col">
      <span className="text-lg font-bold ">{label}:</span>
      <span className="text-xl font bold text-center">{value}</span>
    </div>
  );
}