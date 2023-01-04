import React from 'react';
import Footer from '../Footer/Footer';

const LandingPage = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="container">
          <h1>Bienvenido a tu lugar favorito de videojuegos</h1>
          <p>
            Aqui encontraras todo lo relacionado con el mundo gaming. ¡Echa un vistazo a nuestros productos y encuentra tu próximo juego favorito!
          </p>
          <button className="btn btn-primary">Ver productos</button>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
