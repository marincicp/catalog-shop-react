// import { useEffect, useRef, useState } from "react";
// import { BASE_URL } from "../config/config";
// import useQueryParams from "./UseQueryParams";
// import { useLocation } from "react-router-dom";

// export default function useFetchProducts() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const abortControllerRef = useRef(null);
//   const { searchParams } = useQueryParams();
//   const location = useLocation();

//   async function fetchProducts() {
//     setError(null);
//     abortControllerRef.current?.abort();
//     abortControllerRef.current = new AbortController();
//     try {
//       setIsLoading(true);
//       const res = await fetch(`${BASE_URL}/products?${searchParams}`, {
//         signal: abortControllerRef.current?.signal,
//       });

//       if (!res.ok) {
//         setProducts([]);
//         throw new Error(res?.statusText);
//       }
//       const { data } = await res.json();
//       setProducts(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchProducts();
//   }, [searchParams, location]);

//   return { isLoading, error, products, fetchProducts };
// }
