import React from "react";
import "./Footer.css";
import comprarSinM from "../Assets/comprarSinM.svg";
import venderSinP from "../Assets/venderSinP.svg";
import Contactos from "../Assets/Contactos.svg";
import logoOriginal1 from "../Assets/logoOriginal1.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <h3></h3>
          <img src={logoOriginal1} alt="" />
        </div>

        <div className="contenedores">
          <h2 className="titulo2">Compra sin moverte</h2>

          <a href="/home" className="link1">
            Tu perfil
          </a>
          <a href="/home" className="link1">
            Productos
          </a>
        </div>

        <div className="conocenos">
          <h2 className="titulo2">Conocenos</h2>

          <a href="/contacto" className="link1">
            Contacto
          </a>
          <a href="/contacto" className="link1">
            Sobre Nosotros
          </a>
          <a href="/contacto" className="link1">
            GitHub
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
