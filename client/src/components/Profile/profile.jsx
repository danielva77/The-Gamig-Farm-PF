import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogoutButton } from "../Logout/Logout";
import { UserProfile } from "../Profile/Usuario/PanelProfile/UserProfile/UserProfile";

export const Profile = () => {
  const [show, setShow] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <button className="btn btn float-left" onClick={() => setShow(true)}>
          <h1 className="nameP" alt={user.name}></h1>
          <img src={user.picture} alt={user.name} className="imagenP" />{" "}
        </button>

        <Offcanvas
          show={show}
          placement="end"
          onHide={() => setShow(false)}
          style={{
            height: "34vh",
            width: "35vh",
            margin: "73px 0px",
            bg: "#0000"
          
          }}
        >
          <h3 className="header">
            <img className="picture" src={user.picture}></img> {user.name}
          </h3>
          <div className="btns">
            <Link to="/perfil">
              <button onClick={UserProfile} className="Perfil-btn"> Perfil </button>
            </Link>
            <Link to="/compras">
              <button className="compras-btn"> Tus compras </button>
            </Link>
            <Link to="/contacto">
              <button className="Contacto-btn"> Contacto </button>
            </Link>
            <Link to="/favortios">
              <button className="Favortios-btn"> Favortios </button>
            </Link>
          <LogoutButton className="salir" />
          </div>
        </Offcanvas >
      </div>
    )
  );
};
