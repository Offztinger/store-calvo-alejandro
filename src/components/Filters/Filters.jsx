import "./Filters.css"

export default function Filters({ filtersButtons, setFiltersButtons }) {
    const clickRecent = () => {
        setFiltersButtons(!filtersButtons[0])
    }
    const clickLowest = () => {

    }
    const clickHighest = () => {

    }
    /**
     * Retrona el código HTML correspondiente al componente filtros, que gestiona lo que muestra en el componente Resultados.
     */
    return (
        <div className="Filters">
            <div className="filtersContainer">
                <p className="textFilters1">X of X products</p>
                <div className="line1"></div>
                <p className="textFilters2">Sort by: </p>
                <form>
                    <button onClick={clickRecent} className="recent">Most recent</button>
                    <button className="lowest">Lowest price</button>
                    <button className="highest">Highest price</button>
                </form>
            </div>
            <div className="line2"></div>
        </div>
    );
}