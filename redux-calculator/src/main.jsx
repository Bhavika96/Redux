import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import CalculatorReducer from "./Components/Calculator/reducer";
import "./index.css";
import store from "./redux/store";
import Calculator from "./Components/Calculator";
import ProductList from "./Components/ProductList";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <App /> */}
    {/* <Calculator /> */}
    <ProductList />
  </Provider>
);
