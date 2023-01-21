import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "../Cart/Cart";
import "./NavBar.css";
import Favoritos from "../Favorites/Favorites";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Logout/Logout";
import { Profile } from "../Profile/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import LOGO from "../Assets/LOGO.png"
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import Carrito from "../Assets/cart.png";


function NavBar() {


  // AUTENTICACION
  const { isAuthenticated } = useAuth0();

  const { openCart, cartQuantity } = useShoppingCart()

  return (
    <div className="navbar-container">

      <div className="logo-container">
        <Link to="/" className='Nombrelogo'>
          <img src={LOGO} title="Logo Gaming" />
        </Link>
      </div>

      <div className="menu-navbar">
        <a className="link" href="/home">Inicio</a>
        <a className="link" href="/form">Formulario</a>
        <a className="link" href="/home">Productos</a>
        <a className="link" href="/contacto">Contacto</a>
        <a className="link" href="/about">Sobre Nosotros</a>
      </div>

      <SearchBar />
      {/* <Cart className="cart" /> */}
      <Favoritos />

      {isAuthenticated ? (
        <>

          <Profile />
          <LogoutButton />
          
        </>
      ) : (
        <LoginButton />
      )}

      <div className="cart-btn"><Button variant="" class="btn btn float-right" onClick={openCart}>
        {""}
        <img src={Carrito} alt="imagen" class="img-fluid" />
        <div className="quantity-circle">{cartQuantity}</div>
      </Button>
      </div>

    </div>
  );
}

export default NavBar;
