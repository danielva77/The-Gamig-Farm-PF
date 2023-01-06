import React from 'react';
// import Footer from '../Footer/Footer';
import "./LandingPage.css"
import Home from '../Home/Home';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <div className="container">
          <h1>The Gaming Farm</h1>
          <h2>Bienvenido a tu lugar favorito de videojuegos</h2>
          <p>
            Tenemos una amplia selección de títulos para todas las plataformas. ¡Echa un vistazo a nuestros productos y encuentra tu próximo juego favorito!
          </p>
          <NavLink to="/Home"> 
          <button className="cssbuttons-io3">
  <span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"></path></svg> Start</span>
</button>
          </NavLink>
        </div>
      
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;