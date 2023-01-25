import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";
import axios from "axios";
import { getUser, cleanDetail, idUser } from "../../redux/actions";
import { Offcanvas } from "react-bootstrap";
import { LogoutButton } from "../Logout/Logout";
import UserProfile from "../PanelProfile/UserProfile/UserProfile";

const Profile = () => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const google = useAuth0();
  const userId = useSelector((state) => state.userID);
  let idUsusuario = useSelector((state) => state.idUsuarioActual);

  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(google.user.email));
  }, [google.user.email]);

  let email = JSON.parse(localStorage.getItem("email"));
  const correo = { email };

  useEffect(() => {
    if (google.isAuthenticated) {
      dispatch(idUser(email));
    }
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    const datosUser = {
      name: google.user.name,
      email: google.user.email,
      adress: "",
      dateOfBirth: "",
      telephone: "",
      avatar: google.user.picture,
    };

    axios.post("http://localhost:3001/createuser", datosUser);
  }

  //

  //   const userNew = []
  //   let b = 0
  // console.log("BBBB", b)

  //   if(!userNew.includes(email) && b == 0){
  //     userNew.push(email)
  //     console.warn("userNew → ", userNew)
  //     axios.post("http://localhost:3001/nuevoUsuario", correo);

  //     b = 1
  //     console.log("BBBB  2222222", b)
  //   }

  //   console.log("userNew → ", userNew)

  return (
    isAuthenticated && (
      <div>
        <h1 className="nameP" alt={google.user.given_name}></h1>
        <button className="btn btn float-left" onClick={() => setShow(true)}>
          <img
            src={google.user.picture}
            alt={google.user.name}
            className="imagenP"
          />{" "}
        </button>

        <Offcanvas
          show={show}
          placement="end"
          onHide={() => setShow(false)}
          style={{
            height: "34vh",
            width: "35vh",
            margin: "73px 0px",
            bg: "#0000",
          }}
        >
          <h3 className="header">
            <img className="picture" src={user.picture}></img> {user.name}
          </h3>
          <div className="btns">
            <Link to={`/myProfile/${idUsusuario.id}`}>
              <button onClick={UserProfile} className="Perfil-btn">
                Mi informacion
              </button>
            </Link>

            <LogoutButton className="salir" />
          </div>
        </Offcanvas>
      </div>
    )
  );
};

export default Profile;
