import React, { useEffect, useState } from "react";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUser, cleanDetail, shopUser } from "../../../redux/actions";
import Compras from "./Compras";
import "./userProfile.css";
import usuarioSinFoto from "../../Assets/usuarioSinFoto.png";
import { idUser } from "../../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Editar from "../../Assets/editar.png";

const UserProfile = () => {
  const google3 = useAuth0();
  let email = JSON.parse(localStorage.getItem("email"));
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userID);
  const shop = useSelector((state) => state.shopuser);

  useEffect(() => {
    dispatch(getUser(id));
    dispatch(idUser(email));
    dispatch(shopUser(email));
    return () => dispatch(cleanDetail());
  }, [dispatch, id]);

  const fotoGoogleDefecto = google3.user.picture;

  return (
    <div>
      <div className="padres">
        {/* <Link to={`/home`}><button className="atras">Atras</button></Link> */}
        <div className="bienvenida">
          <Link to={`/editProfile/${id}`}>
            <button className="editar">
              {" "}
              <img src={Editar} alt="image" />{" "}
            </button>
          </Link>
          <img
            src={user.avatar ? user.avatar : fotoGoogleDefecto}
            className="profileF"
          />

          <div className="profilecont">
            <div className="profile">
              <h1 className="tuPerfil">Tu perfil</h1> <br />
              <h3 className="datos">
                <b>Nickname:</b> {user.name}
              </h3>
              <h3 className="datos">
                <b>Email:</b> {user.email}
              </h3>
              <h3 className="datos">
                <b>Direccion:</b> {user.adress}
              </h3>
              <h3 className="datos">
                <b>Fecha de nacimiento:</b> {user.dateOfBirth}
              </h3>
              <h3 className="datos">
                <b>Telefono:</b> {user.telephone}
              </h3>
            </div>
          </div>
        </div>

        <div className="informacion">
          <h1 className="misCompras">Mis compras</h1>
          {shop ? (
            <Compras rows={shop}></Compras>
          ) : (
            <h2>Espere mientras cargamos sus compras...</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
