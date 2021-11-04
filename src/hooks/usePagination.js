import { useEffect, useState } from "react";
/**
 * 
 * @param {*} data Información a mostrar.
 * @param {*} itemsPerPage Cuantos items max. serán mostrados por pagina.
 * @returns Variables para respectivo uso del custom hook de la paginación
 */
function usePagination(itemsPerPage) {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [filter, setFilter] = useState("Todos");
  const [filterButtons, setFilterButtons] = useState([
    {
      state1: false,
      state2: false,
    },
  ]);

  const [currentData, setCurrentData] = useState([]);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    if(data.length){
      setMaxPage(Math.ceil(data.length / itemsPerPage));
      changeData();
    }
  }, [data])

  useEffect(() => {
    changeData()
  }, [filterButtons, filter, currentPage])

  function changeData() {
    let filterProducts = data.slice();
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    //verificación de filtros
    if (filter !== "Todos") {
      filterProducts = filterProducts.filter((element) => element.category === filter)
    }

    /*Solución bugs PC Accessories*/
    if (filter === "PC Accessories") {
      filterProducts = data.filter((element) => element.category === "PC Accessories" || element.category === "PC Accesories")
    }

    //verificación de orden
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

    setTotalElements(filterProducts.length);
    setCurrentData(filterProducts.slice(begin, end))
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  }

  return { 
    next, 
    prev, 
    jump, 
    currentData,
    currentPage, 
    maxPage, 
    setData, 
    data,
    filterButtons,
    setFilterButtons,
    filter,
    setFilter,
    totalElements,
    changeData
  };
}

export default usePagination;

