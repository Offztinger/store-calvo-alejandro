import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//Imports de los Contextos del Aplicativo, es decir, variables globales que se pueden invocar con useContext() de React
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  //Si ves que se está haciendo uso de UserProvider y de ProductsProvider, es para envolver los componentes y poder llamarlos globalmente
  <UserProvider>
    <ProductsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductsProvider>
  </UserProvider>,
  document.getElementById("root")
);
