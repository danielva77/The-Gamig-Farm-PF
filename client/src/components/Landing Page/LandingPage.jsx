import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { idUser } from "../../redux/actions";
import Fuego from "../Assets/fuego.png"
import { useState } from "react";
import Control from "../Assets/74ace6e2-4502-4866-a67d-77f47afde849.jpg-output.png"

const LandingPage = () => {
  const dispatch = useDispatch();
  const google = useAuth0();
  
    useEffect(() => {
   localStorage.setItem("email", JSON.stringify(google.user.email));
  }, [google.user.email]);
  
  let email= JSON.parse(localStorage.getItem("email"));

  useEffect(() => {
     if(google.isAuthenticated){dispatch(idUser(google.user.email))} //This is a correct???
   }, []);
  return (
    <>
      {/* <NavBar /> */}
      <div className="info-landing">
        <div className="container">
         
          <h1 className="tituloLanding">
            Enciende tu Experiencia de Juego con Nuestros Productos
          </h1>

           {/* <img  className="fuego" src={Fuego}  /> */}

          <p className="bienvenido">
           "Bienvenidos a TheGamingFarm! Aquí podrás encontrar un cátalogo
            completo de las consolas más icónicas de las últimas décadas e 
            informarte de las novedades relacionadas al Mundo Gamer”
          </p>
          <NavLink to="/home">
            <button class="cssbuttons-io">

              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  
                </svg>{" "}
                Productos
              </span>
      
            </button>
            <img className="ps5" src={Control}/>

          </NavLink>

          {/* <div className="img-control-container"></div> */}

          {/* LOGIN 👦🏻 */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
