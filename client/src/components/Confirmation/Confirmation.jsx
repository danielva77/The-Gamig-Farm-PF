import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useLocation} from "react-router-dom";
import { useNavigate, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartContext, useShoppingCart } from "../../context/CartContext/CartContext";
import { getDetail } from "../../redux/actions";

export default function Confirmation(){
  const history = useHistory()
  let { cart, clearAllCart } = useShoppingCart();

  //hago el descuento de stock
let discount = () =>{
  
  cart.map(el => {

    let total = el.stock - el.quantity;
    console.log("esto es totla", total)
    return axios.put(`http://localhost:3001/products/${el.id}`, {stock: total})
  })
}

setTimeout(() => {
  console.log("antes de limpiar el carrito", cart)
  clearAllCart();
  console.log("despues de limpiar el carrito", cart)

}, 3000);

setTimeout(() => {
  console.log("before push", history)
  history.push("/home");
  console.log("after push", history)

}, 5000);

  return(
    <div>
      <h1>Te tenemos buenas noticias !!!</h1>
      <h2>Tu compra fue realizada con éxito</h2>
      <p>Te enviaremos por mail el detalle de tu compra! esperamos lo disfrutes</p>
      {discount()}

      
      <img src="https://i.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.webp" alt="alt"/>
      <h5>Seras redirigido a la pagina principal en unos segundos ...</h5>
    </div>
  )
}