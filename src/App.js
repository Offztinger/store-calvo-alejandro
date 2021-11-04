import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useUser from "./hooks/useUser";
import useProducts from "./hooks/useProducts";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Results from "./components/Results/Results";
import Coins from "./components/Coins/Coins";
import History from "./components/History/History";

export default function App() {

  const { user } = useUser();

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

  return (
    <div className="App">
      <Router>
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
