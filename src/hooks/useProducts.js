import React, { useContext } from "react";
import token from "../constants/token";
//Import del contexto para uso de variables globales del aplicativo
import { ProductsContext } from "../context/ProductsContext";
//Llamado del hook usePagination para separar items en caso tal de tener más de 16 productos
import usePagination from "./usePagination";

export default function useProducts() {
  //Destructuring del contexto para uso de sus variables locales
  const { products, setProducts } = useContext(ProductsContext);
  //Desarrollo del header para autorización en la API
  let header = { headers: { Authorization: `Bearer ${token}` } };
  //Destructuring de usePagination
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
    prev,
  } = usePagination(16);
  //Uso de useEffect() para hacer el respectivo async await del fetch y el retorno de los productos en la API
  //Al usar una APIFake puedes eliminar el fetch y asumir que solo se está instanciando un setData con la información de un JSON.
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
    fetchProducts();
  }, []);
  //Retorno de variables para el uso exterior del hook
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
    next,
  };
}
