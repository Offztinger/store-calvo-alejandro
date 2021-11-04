import React, { useContext } from "react";
import token from "../constants/token";
import { ProductsContext } from "../context/ProductsContext";
import usePagination from "./usePagination";

export default function useProducts() {
  
  const { products, setProducts } = useContext(ProductsContext);
  let header = { headers: { Authorization: `Bearer ${token}` } };
  const { 
    setData, 
    currentData, 
    data,
    filterButtons,
    setFilterButtons,
    filter,
    setFilter,
    totalElements,
    changeData,
    currentPage,
    maxPage,
    next,
    prev
  } = usePagination(16);

  React.useEffect(() => {
    async function fetchProducts() {
      try {
        let request = await fetch(
          "https://coding-challenge-api.aerolab.co/products",
          header
        );
        let res = await request.json();
        setProducts(res);
        setData(res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts()
  }, [])

  return { 
    products, 
    currentData, 
    data,
    filterButtons,
    setFilterButtons,
    filter,
    setFilter,
    currentData,
    totalElements,
    changeData,
    currentPage,
    maxPage,
    prev,
    next
  };
}
