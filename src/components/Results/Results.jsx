import "./Results.css"
import Product from "./Product/Product"
import useProducts from "./useProducts";
import { useEffect } from "react";

export default function Results() {
    const { fetchProducts, products } = useProducts();
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    return (
        <div className="Results">
            <div className="resultsContainer">
                {products.map((element) => {
                    return (<Product key={element._id} img={element.img.url} category={element.category} productName={element.name} />);
                })}
            </div>
        </div>
    );
}