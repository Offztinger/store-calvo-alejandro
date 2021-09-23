import "./Results.css"
import Product from "./Product/Product"

export default function Results({ points, products }) {
    return (
        <div className="Results">
            <div className="resultsContainer">
                {products.map((element) => {
                    return (
                        <div className="item" key={element._id}>
                            <Product img={element.img.url} category={element.category} productName={element.name} price={element.cost} points={points} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}