import "./Filters.css"
//Manejo de filtros del aplicativo
export default function Filters({ filterButtons, setFilterButtons, filter, setFilter, currentElements, totalElements, changeData, currentPage }) {
    //Cambio de filtro, esto lo puedes quitar ya que solo vendes audifonos y no parlantes
    const onChangeFilter = (event) => {
        console.log(event.target.value)
        setFilter(event.target.value)
    }
    //Filtrado de LowestPrice
    const clickLowest = () => {
        if (filterButtons[0].state2 === true) {
            setFilterButtons([{
                state1: !filterButtons[0].state1,
                state2: !filterButtons[0].state2,
            }])
        } else {
            setFilterButtons([{
                state1: !filterButtons[0].state1,
                state2: filterButtons[0].state2,
            }])
        }
    }
    //Filtrado de HighestPrice
    const clickHighest = () => {
        if (filterButtons[0].state1 === true) {
            setFilterButtons([{
                state1: !filterButtons[0].state1,
                state2: !filterButtons[0].state2,
            }])
        } else {
            setFilterButtons([{
                state1: filterButtons[0].state1,
                state2: !filterButtons[0].state2,
            }])
        }
        changeData()
    }
    /**
     * Retorna el código HTML correspondiente al componente filtros, que gestiona lo que muestra en el componente Resultados.
     */
    return (
        <div className="Filters">
            <div className="filtersContainer">
                <p className="textFilters1">{(currentPage > 1) ? (((currentPage - 1) * 16) + currentElements) : currentElements} of {totalElements} products</p>
                <div className="line1"></div>
                <p className="textFilters2">Sort by: </p>
                <select value={filter} onChange={onChangeFilter} name="" id="" className="select">
                    <option value="Todos">Todos</option>
                    <option value="Phones">Phones</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Audio">Audio</option>
                    <option value="Tablets & E-readers">Tablets & E-readers</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Cameras">Cameras</option>
                    <option value="PC Accessories">PC Accessories</option>
                    <option value="Monitors & TV">Monitors & TV</option>
                    <option value="Smart Home">Smart Home</option>
                    <option value="Drones">Drones</option>
                </select>
                <button onClick={clickLowest} className={`lowest ${filterButtons[0].state1 ? "active" : ""}`} >Lowest price</button>
                <button onClick={clickHighest} className={`highest ${filterButtons[0].state2 ? "active" : ""}`} >Highest price</button>
            </div>
            <div className="line2"></div>
        </div>
    );
}