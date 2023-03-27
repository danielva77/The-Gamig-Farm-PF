import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";

import Footer from "../Footer/Footer";

import { useDispatch } from "react-redux";

import Control from "../Assets/74ace6e2-4502-4866-a67d-77f47afde849.jpg-output.png";
import Logoooo from "../Assets/logoOriginal1.svg";

const LandingPage = () => {
  const dispatch = useDispatch();
  // const google2 = useAuth0();

  // useEffect(() => {
  //   if(google2.isAuthenticated){dispatch(idUser(google2.user.email))} //This is a correct???
  // }, []);
  return (
    <>
      {/* <NavBar /> */}
      <div className="info-landing">
        <div className="container" >
          
          <img className="logoooo" src={Logoooo} />

          <h1 className="tituloLanding">Bienvenid@s a TheGamingFarm! </h1>

          {/* <img  className="fuego" src={Fuego}  /> */}
          <NavLink to="/products" onClick=
            {("/home")}>
            <button class="cssbuttons-io">
              <span className="letrasss">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>{" "}
                Catálogo
              </span>
            </button>
            <p className="bienvenido">
              " Aquí podrás encontrar un cátalogo completo de las consolas más
              icónicas de las últimas décadas e informarte de las novedades
              relacionadas al Mundo Gamer! "
            </p>
            
          </NavLink>
          <img className="ps5" src={Control} />

          {/* <div className="img-control-container"></div> */}

          {/* LOGIN 👦🏻 */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
