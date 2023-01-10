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

function NavBar() {


  // AUTENTICACION
  const { isAuthenticated } = useAuth0();

  return (
    <div className="Componente">

      

        <a className="link" href="/home">Inicio</a>
        <a className="link" href="/form">Formulario</a>
        <a className="link" href="/products">Productos</a>
        <a className="link" href="/contacto">Contacto</a>
        <a className="link" href="/about">Sobre Nosotros</a>
     
    


      <Cart />
      <Favoritos />
      <SearchBar />

      {isAuthenticated ? (
        <>

          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}

    </div>
  );
}

export default NavBar;
