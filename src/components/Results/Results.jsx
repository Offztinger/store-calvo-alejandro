import "./Results.css"
import Product from "./Product/Product"

export default function Results({ points, products, filter, filterButtons }) {
    let filterProducts = products.slice();
    console.log(products)
    /*Condicional para el filtro de lowest price */
    if (filterButtons[0].state1 === true) {
        filterProducts.sort(function(a, b){
            if(a.cost > b.cost){
                return 1;
            }else if (a.cost < b.cost) {
                return -1;
            }
            return 0;
        })
    }
    /*Condicional para el filtro de highest price */
    if (filterButtons[0].state2 === true) {
        filterProducts.sort(function(a, b){
            if(a.cost < b.cost){
                return 1;
            }else if (a.cost > b.cost) {
                return -1;
            }
            return 0;
        })
        
    }

    if(filterButtons[0].state2 === false && filterButtons[0].state1 === false){
        filterProducts = products
    }

    if (filter !== "Todos") {
        filterProducts = filterProducts.filter((element) => element.category === filter)
    }

    /*Solución bugs PC Accessories*/
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