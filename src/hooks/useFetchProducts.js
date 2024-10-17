import { useEffect, useRef, useState } from "react";
import { BASE_URL } from "../config/config";
import useQueryParams from "./UseQueryParams";

export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortControllerRef = useRef(null);
  const { searchParams } = useQueryParams();

  useEffect(() => {
    setIsLoading(true);
    async function getData() {
      setError(null);
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      try {
        const res = await fetch(`${BASE_URL}/products?${searchParams}`, {
          signal: abortControllerRef.current?.signal,
        });

        if (!res.ok) throw new Error(res?.statusText);
        const { data } = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
        setError(err, "errrrr");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchParams]);

  return { isLoading, error, products };
}
