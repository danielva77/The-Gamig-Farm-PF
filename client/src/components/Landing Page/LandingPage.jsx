import React from 'react';
// import Footer from '../Footer/Footer';
import styles from "./LandingPage.module.css"
import Home from '../Home/Home';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container}>
          <h1>The Gaming Farm</h1>
          <h2>Bienvenido a tu lugar favorito de videojuegos</h2>
          <p>
            Tenemos una amplia selección de títulos para todas las plataformas. ¡Echa un vistazo a nuestros productos y encuentra tu próximo juego favorito!
          </p>
          <NavLink to="/Home"> 
          <button className="btn-primary">Ver</button>
          </NavLink>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;