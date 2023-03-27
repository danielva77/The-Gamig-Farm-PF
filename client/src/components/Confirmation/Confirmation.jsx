import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartContext, useShoppingCart } from "../../context/CartContext/CartContext";
import { getDetail, postShop, idUser } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./confirmation.css"

export default function Confirmation(){
  const google = useAuth0();
  let email= JSON.parse(localStorage.getItem("email"));

  const history = useHistory()

  let { cart, clearAllCart } = useShoppingCart();
  const dispatch = useDispatch();
  // let usuario = useSelector((state) => state.idUsuarioActual)
  let status = "";
  // useEffect(() => {
  //   if(google.isAuthenticated){dispatch(idUser(email))} //This is a correct???
  // }, [dispatch]);

const valores = window.location.search;
// console.log(valores);
const urlParams = new URLSearchParams(valores);
//Accedemos a los valores
status = urlParams.get('status');
let collection_id = urlParams.get('collection_id');
let payment_id = urlParams.get('payment_id');

let input ={
  email : email,
  idproduct: "",
  collection: collection_id,
  payment: payment_id,
  title : "",
  img: "",
  price: 0,
  quantity: 0,
}
let cantidad =0;

let addShop = () =>{  
  cart.forEach(el =>{
    input.idproduct = el.id;
    input.title = el.name;
    input.img = el.img;
    input.price = el.price;
    input.quantity = el.quantity;

    if(cantidad<cart.length){
    dispatch(postShop(input))
    cantidad = cantidad +1;
    console.log("input confirmation",input)}

  })}
  
  // envia el correo de la compra hecha ! 🛍
  // axios.post("http://localhost:3001/MensajeCompra", cart) 


  console.warn("LO QUE LLEGA DEL MENSAJE POR req.body → ", cart);

  // Hago el descuento de stock
  let discount = async () => {
    cart.map((el) => {
      let total = el.stock - el.quantity;

    return axios.put(`/products/${el.id}`, {stock: total})
    
  })
}
if(status == "approved"){
  setTimeout(() => {
    addShop();
    discount()
  }, 1000);
}

// setTimeout(() => {
//   discount();
// }, 3000);

// setTimeout(() => {
//   clearAllCart();
// }, 4500);

setTimeout(async() => {
  clearAllCart();
  history.push("/home")
}, 5000);


const mensajeCorreo = { cart, email}
 
useEffect((e) => {
  axios.post("/MensajeCompra", mensajeCorreo);
}, []);


  return (
    <div>
      <NavBar/> <br />
      <div className="confirmation">
      <h1 className="titleC">🌟 Te tenemos buenas noticias 🌟</h1> <br />
      <h2>Tu compra fue realizada con éxito ✅</h2>


      <img
        src="https://usagif.com/wp-content/uploads/loading-97.gif"
        alt="alt"
        className="imagenCargando"
        />
        <h2>Te enviaremos por mail el detalle de tu compra! </h2>
      <Footer/>
      
      </div>
    </div>
  );
}