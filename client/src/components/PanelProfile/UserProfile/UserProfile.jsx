import React, { useEffect, useState } from "react";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link} from "react-router-dom"
import { getUser, cleanDetail, shopUser } from "../../../redux/actions";
import Compras from "./Compras";
import "./userProfile.css"
import usuarioSinFoto from "../../Assets/usuarioSinFoto.png"
<<<<<<< HEAD
import { useAuth0 } from "@auth0/auth0-react";



=======
import { idUser } from "../../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
>>>>>>> 2070d133a20d362a40db624007c8cf07423ec67c

const UserProfile = () => {
    const google = useAuth0();
    let email= JSON.parse(localStorage.getItem("email"));
    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userID)
<<<<<<< HEAD
    const google3 = useAuth0();

    useEffect(() => {
        dispatch(getUser(id))
=======
    const shop = useSelector(state => state.shopuser)

    useEffect(() => {
        dispatch(getUser(id))
        dispatch(idUser(email))
        dispatch(shopUser(email))
>>>>>>> 2070d133a20d362a40db624007c8cf07423ec67c
        return () => dispatch(cleanDetail())
    },[dispatch, id])


    const fotoGoogleDefecto = google3.user.picture


console.log(fotoGoogleDefecto);


    return (
        <div>
            <NavBar/>
        <div className="padres">

        {/* <Link to={`/home`}><button className="atras">Atras</button></Link> */}
        <div className="bienvenida">

        <img src={user.avatar ? user.avatar : fotoGoogleDefecto}className="profileF"/>
        
        <Link to={`/editProfile/${id}`}><button className="editar">✏</button></Link>


        <div className="profile">
        <h1 className="tuPerfil">Tu perfil</h1> <br/>
        <h3><b>Nickname:</b> {user.name}</h3>
        <h3><b>Email:</b> {user.email}</h3>
        <h3><b>Direccion:</b> {user.adress}</h3>
        <h3><b>Fecha de nacimiento:</b> {user.dateOfBirth}</h3>
        <h3><b>Telefono:</b> {user.telephone}</h3>
        </div>

        </div>

        <div className="informacion">
        <h1 className="misCompras">Mis compras</h1>
        {/* <button className="btn btn-dark">Historial de Compras</button>
        <button className="btn btn-dark m-4">Comentarios </button> */}
        
        {shop ? (<Compras rows={shop}></Compras>) : (<h2>Espere mientras cargamos sus compras...</h2>)} 
        
        
        //Boton de espera en bootstrap ↑↑↑
        
        </div>
    </div>
    {/* <Footer/> */}
    </div>
    )
};

export default UserProfile;
