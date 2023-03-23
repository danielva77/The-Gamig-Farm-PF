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
        {/* <div>
          
          <img src={logoOriginal1} alt="" className="imagenLogito" />
        </div> */}

        <div className="contenedores">
          <h2 className="titulo2 compraS">Sobre ti</h2>

          <a href="/home" className="link1"  target="_blank">
            Perfil
          </a>
          <a href="/home" className="link1"  target="_blank">
            Productos
          </a>
        </div>

        <div className="conocenos">
          <h2 className="titulo2 conocenosS">Conocenos</h2>

          <a href="/contacto" className="link1" target="_blank">
            Contacto
          </a>
          <a href="/about" className="link1"  target="_blank">
            Sobre Nosotros
          </a>
          <a href="https://github.com/danielva77/The-Gamig-Farm-PF" className="link1"  target="_blank">
            GitHub
          </a>
          <br />
          <h6 className="footerFinal">Copyright © 2023 The Gaming Farm Inc.</h6>
        </div>

        
            

            
        {/* <div> */}
        {/* </div> */}
      </footer>
    );
  }
}

export default Footer;
