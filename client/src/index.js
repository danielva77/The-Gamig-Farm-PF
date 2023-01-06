import React from "react"
import ReactDOM from "react-dom"
import axios from "axios"
// import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import store from "./redux/store"
import dotenv from "dotenv"
dotenv.config()
axios.defaults.baseURL = `http://localhost:3001`
 import App from "../src/App"
// import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,

document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
