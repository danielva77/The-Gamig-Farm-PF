import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "../Cart/Cart";
import "./NavBar.css";
import Favoritos from "../Favorites/Favorites";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Logout/Logout";
import Profile from "../Profile/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import logoOriginal from "../Assets/logoOriginal1.svg";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import Carrito from "../Assets/cart.png";

function NavBar() {
  // AUTENTICACION
  const { isAuthenticated } = useAuth0();
  let email = JSON.parse(localStorage.getItem("email"));
  let emailadmin = "thegamingfarm01@gmail.com";

  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Link to="/">
  
          <img
            src={logoOriginal}
            title="Logo Gaming"
            className="logoOriginal1"
          />

        </Link>
      </div>

      <div className="menu-navbar">
        {/* <a className="link" href="/home">
          Inicio
        </a> */}
        <a className="link producto" href="/home">
          Productos
        </a>
        <a className="link contacto" href="/contacto">
          Contacto
        </a>
        <a className="link sobreNosotro" href="/about">
          Sobre Nosotros
        </a>
        {email == emailadmin ? (
          <a className="link admins" href="/admin">
            Administrador
          </a>
        ) : null}
      </div>

      <SearchBar />

      <Favoritos/>

      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}

<div className="cart-btn" style={{ display: "block", alignItems: "center" }}>
  <Button variant="" class="btn btn float-right" onClick={openCart}>
    {""}
    <img src={Carrito} alt="imagen" className="" class="" />
    <div className="quantity-circle">{cartQuantity}</div>
  </Button>
</div>

    </div>
  );
}

export default NavBar;
