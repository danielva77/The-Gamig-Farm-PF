import App from "../src/App";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
// import "./index.css"
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import dotenv from "dotenv";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./context/CartContext/CartContext";

dotenv.config();
axios.defaults.baseURL = `http://localhost:3001`;

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
