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
  const [filter, setFilter] = useState("Todos");
  const [filterButtons, setFilterButtons] = useState([
    {
      state1: false,
      state2: false,
    },
  ]);
  const { fetchUser, user } = useUser();
  const { fetchProducts, products } = useProducts();
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
            />
            <Results
              points={user.points}
              products={products}
              filter={filter}
              filterButtons={filterButtons}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
