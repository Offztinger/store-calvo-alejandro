import "./App.css";
import { useEffect, useState } from "react";
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
  const [filterButtons, setFilterButtons] = useState([
    {
      state1: false,
      state2: false,
      state3: false,
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
          <Route path="/user">
            <History />
          </Route>
          <Route path="/coins">
            <Coins />
          </Route>
          <Route path="/" exact>
            <Filters
              filterButtons={filterButtons}
              setFilterButtons={setFilterButtons}
            />
            <Results points={user.points} products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
