import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CartContext,
  useShoppingCart,
} from "../../context/CartContext/CartContext";
import { postShop, idUser } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Confirmation() {
  const google = useAuth0();
  let email = JSON.parse(localStorage.getItem("email"));

  const history = useHistory();

  let { cart, clearAllCart } = useShoppingCart();
  const dispatch = useDispatch();
  let usuario = useSelector((state) => state.idUsuarioActual);
  let status = "";
  useEffect(() => {
    if (google.isAuthenticated) {
      dispatch(idUser(email));
    } //This is a correct???
  }, [dispatch]);

  let idusuario = usuario.id;

  const valores = window.location.search;
  // console.log(valores);
  const urlParams = new URLSearchParams(valores);
  //Accedemos a los valores
  status = urlParams.get("status");
  let collection_id = urlParams.get("collection_id");
  let payment_id = urlParams.get("payment_id");

  let input = {
    email: email,
    idproduct: "",
    collection: collection_id,
    payment: payment_id,
    title: "",
    img: "",
    price: 0,
    quantity: 0,
  };
  let addShop = async () => {
    cart.map((el) => {
      input.idproduct = el.id;
      input.title = el.name;
      input.img = el.img;
      input.price = el.price;
      input.quantity = el.quantity;

      dispatch(postShop(input));
      console.log("input confirmation", input);
    });
  };

  if (status == "approved") {
    setTimeout(() => {
      addShop();
    }, 3000);
  }

  // envia el correo de la compra hecha ! 🛍
  // axios.post("http://localhost:3001/MensajeCompra", cart)

  //hago el descuento de stock
  let discount = async () => {
    cart.map((el) => {
      let total = el.stock - el.quantity;

      return axios.put(`http://localhost:3001/products/${el.id}`, {
        stock: total,
      });
    });
  };

  setTimeout(() => {
    discount();
  }, 3000);

  setTimeout(() => {
    clearAllCart();
  }, 4500);

  setTimeout(async () => {
    history.push("/home");
  }, 5000);

  //Enviar correo al finalizar la compra
  // .then()

  // useEffect((e) => {
  //   axios.post("http://localhost:3001/MensajeCompra", cart);
  // }, []);

  return (
    <div>
      <NavBar />
      <h1>Te tenemos buenas noticias !!!</h1>
      <h2>Tu compra fue realizada con éxito</h2>
      <p>
        Te enviaremos por mail el detalle de tu compra! esperamos lo disfrutes
      </p>

      {/* <img src="" alt="" width={150}/> */}
      <img
        src="https://i.giphy.com/media/kUTME7ABmhYg5J3psM/giphy.webp"
        alt="alt"
      />
      <h5>Seras redirigido a la pagina principal en unos segundos ...</h5>
      <Footer />
    </div>
  );
}
