import { useNavigate, useParams } from "react-router-dom";
import { ProductDetailCard, Spinner } from "../components";
import { useQuery } from "@tanstack/react-query";
import { findProduct } from "../services/productService";

function ProductDetails() {
  const navigate = useNavigate();
  const { sku } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ["productDetail", sku],
    queryFn: () => findProduct(sku),
    onError: () => navigate("/"),
  });

  return (
    <div className="flex gap-8 justify-center">
      {isLoading ? (
        <Spinner className="mt-6" />
      ) : (
        <ProductDetailCard product={product} />
      )}
    </div>
  );
}

export default ProductDetails;
