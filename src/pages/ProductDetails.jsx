import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../config/config";
import toast from "react-hot-toast";
import { ProductDetailCard } from "../components";

function ProductDetails() {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { sku } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/products/${sku}`);
        const { data } = await res.json();

        if (!res.ok) {
          navigate("/");
          throw new Error("Product not found");
        }

        setProduct(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [sku]);

  return (
    <div className="flex gap-8 justify-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ProductDetailCard product={product} />
      )}
    </div>
  );
}

export default ProductDetails;
