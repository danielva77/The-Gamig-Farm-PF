import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import $ from "jquery"
import Popper from "popper.js"

import SearchBar from "../SearchBar/SearchBar";
import Cart from "../Cart/Cart";
import "./NavBar.css";
import Favoritos from "../Favorites/Favorites";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Logout/Logout";
import Profile from "../Profile/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import logoOriginal1 from "../Assets/logoOriginal1.svg";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/CartContext/CartContext";
import Carrito from "../Assets/cart.png";
import { Box } from "@mui/material";



function NavBar() {
  // AUTENTICACION
  const { isAuthenticated } = useAuth0();
  let email = JSON.parse(localStorage.getItem("email"));
  let emailadmin = "thegamingfarm01@gmail.com"

  const { openCart, cartQuantity } = useShoppingCart();

  const [isExpanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <nav
      className="navbar navbar-expand-lg mx-auto"
      style={{ height: "10%", padding: "0", margin: "0", backgroundColor: "#0f0e17", alignItems: "center", columnGap: "20px" }}
    >

      <Box ml="20px">
        <Link className="navbar-brand" to="/">
          <img src={logoOriginal1} width="70px" height="70px" alt="Brand" />
        </Link>
      </Box>

      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        style={{ margin: "10px", padding: "0" }}
      >
        <span className="navbar-toggler-icon" style={{ filter: "invert(100%)" }}></span>
      </button>

      <Box className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} justifyContent="space-between">
        <Box>
          <ul className="navbar-nav mr-auto" >


            <li className="nav-item">
              <Link className="nav-link" to="/home">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre Nosotros</Link>
            </li>

            {/* {email == emailadmin ?
  <li className="nav-item">
    <Link className="nav-link" to="/admin">Administrador</Link>
  </li> : null} */}
          </ul>
        </Box>

        <Box className="nav-item">
          <SearchBar />
        </Box>

        <Box display="d-flex" justifyContent="center" alignItems="center" columnGap="10px">
          <Box>
            <Favoritos />
          </Box>

          <Box >
            <Button variant="" class="btn btn float-right" onClick={openCart}>
              {""}
              <img src={Carrito} alt="imagen" className="img-fluid" />
              <div className="quantity-circle">{cartQuantity ? cartQuantity : ""}</div>
            </Button>
          </Box>

          {isAuthenticated ? (
            <Box mr="20px" ml="15px">
              <Profile />
              <LogoutButton />
            </Box>
          ) : (
            <Box mr="20px" ml="15px">
              <LoginButton />
            </Box>
          )}


        </Box>
      </Box>
    </nav >
  );
}

export default NavBar;
