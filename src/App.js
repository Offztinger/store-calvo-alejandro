import "./App.css";
//Imports de BrowserRouter para navegación en la página
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Imports de hooks para desarrollo de la API Real
import useUser from "./hooks/useUser";
import useProducts from "./hooks/useProducts";
//Imports de componentes de la aplicación
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Results from "./components/Results/Results";
import Coins from "./components/Coins/Coins";
import History from "./components/History/History";

export default function App() {
//Destructuring de Hook useUser, es decir, funciones o variables relevantes del aplicativo.
  const { user } = useUser();
//Destructuring de Hook useProducts es decir, funciones o variables relevantes del aplicativo.
  const { 
    filterButtons,
    setFilterButtons,
    filter,
    setFilter,
    currentData,
    totalElements,
    changeData,
    currentPage,
    maxPage,
    next,
    prev
  } = useProducts();
//HTML de la página
  return (
    <div className="App">
      <Router>
         {/*Llamado del navbar filters y sus props*/}
        <Navbar name={user.name} points={user.points} />
        <Header />
        <Switch>
          <Route path="/store-calvo-alejandro/user">
            <History />
          </Route>
          <Route path="/store-calvo-alejandro/coins">
            <Coins />
          </Route>
          <Route path="/store-calvo-alejandro/">
            {/*Llamado del componente filters y sus props*/}
            <Filters
              filterButtons={filterButtons}
              setFilterButtons={setFilterButtons}
              filter={filter}
              setFilter={setFilter}
              totalElements={totalElements}
              currentElements={currentData.length}
              changeData={changeData}
              currentPage={currentPage}
            />
             {/*Llamado del componente Results y sus props*/}
            <Results
              points={user.points}
              currentPage={currentPage}
              products={currentData}
              maxPage={maxPage}
              next={next}
              prev={prev}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
