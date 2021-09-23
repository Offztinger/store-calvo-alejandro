import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Results from "./components/Results/Results";

export default function App() {
  const [filterButtons, setFilterButtons] = useState([
    {
      state1: false,
      state2: false,
      state3: false,
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Filters
        filterButtons={filterButtons}
        setFilterButtons={setFilterButtons}
      />
      <Results />
    </div>
  );
}
