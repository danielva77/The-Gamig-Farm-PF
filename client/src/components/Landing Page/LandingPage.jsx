import React from "react";
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';
import "./LandingPage.css";
import Home from "../Home/Home";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="contenedor">
      <div className="container">
        <h1 className="tituloLanding">Maximiza tu Experiencia de Juego con Nuestros Productos.</h1>

        <p className="bienvenido">
        ¡Bienvenido a la mejor tienda de juegos del mundo! Aquí en nuestra tienda hemos trabajado incansablemente para ofrecerle los mejores productos del campo de los juegos. Tenemos todos los accesorios, consolas y juegos que necesitas para que tu experiencia de juego sea excelente.”
        </p>
        <NavLink to="/home">
          <button className="botonProductos">
            <span className="products">Productos</span>
          </button>
        </NavLink>

        {/* LOGIN 👦🏻 */}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
