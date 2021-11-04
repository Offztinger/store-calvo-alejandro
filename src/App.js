import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useUser from "./hooks/useUser";
import useProducts from "./hooks/useProducts";
import usePagination from "./hooks/usePagination";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Results from "./components/Results/Results";
import Coins from "./components/Coins/Coins";
import History from "./components/History/History";

export default function App() {

  const { fetchUser, user } = useUser();

  const { 
    fetchProducts, 
    currentData: products, 
    data, 
    filterButtons,
    setFilterButtons,
    filter,
    setFilter
  } = useProducts();

  useEffect(() => {
    fetchProducts();
    fetchUser();
  }, []);

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
              totalElements={products()[1]}
              currentElements={products()[0].length}
            />
            <Results
              points={user.points}
              products={products()[0]}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
