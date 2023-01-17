import App from "../src/App"
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import "bootstrap/dist/css/bootstrap.min.css"
import { Auth0Provider } from "@auth0/auth0-react"
import { CartProvider } from "./context/CartContext/CartContext"
import { BrowserRouter } from "react-router-dom"

// axios.defaults.baseURL = `http://localhost:3001`
axios.defaults.baseURL = `https://the-gamig-farm-pf-production-5fa7.up.railway.app/`

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
