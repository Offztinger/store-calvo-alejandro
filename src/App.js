import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Results from "./components/Results/Results";
import useUser from "./hooks/useUser";
import useProducts from "./hooks/useProducts";
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
      <Navbar name={user.name} points={user.points} />
      <Header />
      <Filters
        filterButtons={filterButtons}
        setFilterButtons={setFilterButtons}
      />
      <Results points={user.points} products={products} />
    </div>
  );
}
