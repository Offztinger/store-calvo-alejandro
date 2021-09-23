import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById("root")
);
