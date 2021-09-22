import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";

export default function App() {

  const [filterButtons, setFilterButtons] = useState([false,false,false]);
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Filters buttons={setFiltersButtons} />
    </div>
  );
}
