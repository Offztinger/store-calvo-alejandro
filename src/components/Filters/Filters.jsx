import "./Filters.css"

export default function Filters({ filterButtons, setFilterButtons }) {
    const clickRecent = () => {
        setFilterButtons([{
            state1: !filterButtons[0].state1,
            state2: filterButtons[0].state2,
            state3: filterButtons[0].state3
        }])
    }
    const clickLowest = () => {
        setFilterButtons([{
            state1: filterButtons[0].state1,
            state2: !filterButtons[0].state2,
            state3: filterButtons[0].state3
        }])
    }
    const clickHighest = () => {
        setFilterButtons([{
            state1: filterButtons[0].state1,
            state2: filterButtons[0].state2,
            state3: !filterButtons[0].state3
        }])
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
                <button onClick={clickRecent} className={`recent ${filterButtons[0].state1 ? "active" : ""}`} >Most recent</button>
                <button onClick={clickLowest} className={`lowest ${filterButtons[0].state2 ? "active" : ""}`} >Lowest price</button>
                <button onClick={clickHighest} className={`highest ${filterButtons[0].state3 ? "active" : ""}`} >Highest price</button>
            </div>
            <div className="line2"></div>
        </div>
    );
}