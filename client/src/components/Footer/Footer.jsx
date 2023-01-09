import React from 'react';
import './Footer.css';
import comprarSinM from "../Assets/comprarSinM.svg"
import venderSinP from "../Assets/venderSinP.svg"
import Contactos from "../Assets/Contactos.svg"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">

        <div>
          <img src={comprarSinM} title="compra sin problema" className="fotoComprar" />
          <h2 className="titulo2">Compra sin moverte</h2>
          <p className="parrafo1">Encuentra lo que necesitas, y coordina el pago y la entrega con el vendedor. Es fácil y rápido. ¡Todos podemos hacerlo!</p>
          <a href="/home" className="link1">Compra nuestros productos</a>
        </div>
        {/*  */}
        <div className='conocenos'>
          <img src={Contactos} title="Contactos" className="fotoContacto" />
          <h2 className="titulo2">Conocenos</h2>
          <p className="parrafo1">¡Dale un vistazo a los perfiles de Linkedin y GitHub!</p>
          <a href="/contacto" className="link1">Ver perfiles</a>
        </div>
        {/*  */}
        <div>
          <img src={venderSinP} title="Vende sin Problemas" className="fotoVender" />
          <h2 className="titulo2">Vende gratis</h2>
          <p className="parrafo1">Miles de personas quieren lo que ofreces. Publica y verás qué pronto llegan las compras. ¡Tú no pagas nada!</p>
          <a href="/form" className="link1">Como vender con Nosotros</a>
        </div>
      </footer>
    );
  }
}

export default Footer;




