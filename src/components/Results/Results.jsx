import "./Results.css"
import Product from "./Product/Product"

export default function Results({ points, products, filter, filterButtons }) {
    let filterProducts = products
    console.log(products)
    if (filterButtons[0].state1 == true) {

    }

    if (filterButtons[0].state2 == true) {

    }

    if (filter != "Todos") {
        filterProducts = filterProducts.filter((element) => element.category === filter)
    }

    if (filter === "PC Accessories") {
        filterProducts = products.filter((element) => element.category === "PC Accessories" || element.category === "PC Accesories")
    }

    return (
        <div className="Results">
            <div className="resultsContainer">
                {filterProducts.map((element) => {
                    return (
                        <div className="item" key={element._id}>
                            <Product id={element._id} img={element.img.url} category={element.category} productName={element.name} price={element.cost} points={points} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}