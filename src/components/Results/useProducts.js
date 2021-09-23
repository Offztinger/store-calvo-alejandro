import { useContext } from "react";
import token from "../../constants/token";
import { ProductsContext } from "../../context/ProductsContext";

export default function useProducts() {
  const { products, setProducts } = useContext(ProductsContext);
  let header = { headers: { Authorization: `Bearer ${token}` } };
  async function fetchProducts() {
    try {
      let request = await fetch(
        "https://coding-challenge-api.aerolab.co/products",
        header
      );
      let res = await request.json();
      setProducts(res);
    } catch (error) {
      console.error(error);
    }
  }
  return { fetchProducts, products };
}
