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
  
  // envia el correo de la compra hecha ! 🛍
  axios.post("http://localhost:3001/MensajeCompra", cart) 

  //hago el descuento de stock
let discount = async () =>{  
  cart.map(el => {

    let total = el.stock - el.quantity;
    console.log("esto es totla", total)
    return axios.put(`http://localhost:3001/products/${el.id}`, {stock: total})
    
  })

  console.log(cart);
}

setTimeout(() => {
  clearAllCart();
}, 3000);

setTimeout(async() => {
  history.push("/home")
}, 4000);


//Enviar correo al finalizar la compra
// .then()

  return(
    <div>
      <h1>Te tenemos buenas noticias !!!</h1>
      <h2>Tu compra fue realizada con éxito</h2>
      <p>Te enviaremos por mail el detalle de tu compra! esperamos lo disfrutes</p>
      {discount()}

      {/* <img src="" alt="" width={150}/> */}
      <img src="https://i.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.webp" alt="alt"/>
      <h5>Seras redirigido a la pagina principal en unos segundos ...</h5>
    </div>
  )
}