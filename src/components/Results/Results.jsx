import "./Results.css"
import Product from "./Product/Product"
//Componente para poner los resultados, acompañado de su componente Product que pinta cada componente de cada articulo
export default function Results({ points, products, currentPage, maxPage, next, prev }) {

    return (
        <div className="Results">
            <div className="resultsContainer">
                <div className="arrowContainer">
                    <i onClick={prev} className={(currentPage > 1) ? "fas fa-chevron-left" : "fas fa-chevron-left unabled"} style={{ margin: '0 1rem' }} />
                    <div>
                        {currentPage}
                    </div>
                    <i onClick={next} className={(currentPage < maxPage) ? "fas fa-chevron-right" : "fas fa-chevron-right unabled"} style={{ margin: '0 1rem' }} />
                </div>
                {products.map((element) => {
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