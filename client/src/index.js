import App from "../src/App"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom"

import axios from "axios"
// import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { store } from "./redux/store"
// import dotenv from "dotenv"

import { Auth0Provider } from "@auth0/auth0-react"
import { CartProvider } from "./context/CartContext/CartContext"
import { BrowserRouter } from "react-router-dom"

// dotenv.config()
axios.defaults.baseURL = "http://localhost:3001"
// axios.defaults.baseURL = process.env.REACT_APP_API_DEPLOY

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain="thegamingfarm.us.auth0.com"
        clientId="cPlOrIF4eQIxbk8cPW4NVxXCsOgHLrBn"
        redirectUri={window.location.origin}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        <CartProvider>
          <App />
        </CartProvider>
      </Auth0Provider>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
