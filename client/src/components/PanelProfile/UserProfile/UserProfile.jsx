import React, { useEffect } from "react";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link} from "react-router-dom"
import { getUser, cleanDetail } from "../../../redux/actions";
import Compras from "./Compras";
import "./userProfile.css"
import usuarioSinFoto from "../../Assets/usuarioSinFoto.png"

const UserProfile = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userID)


    useEffect(() => {
        dispatch(getUser(id))

        return () => dispatch(cleanDetail())
    },[dispatch, id])

    console.warn(id) //⭐ Este id llega bien al componente 'my profile' 


    return (
        <div className="padres">

        <Link to={`/Home/`+ user.id}><button className="atras">Atras</button></Link>
        <div className="bienvenida">

        <img src={user.avatar ? user.avatar : "https://img2.freepng.es/20190213/sbb/kisspng-computer-icons-portable-network-graphics-login-cli-jennie-bp-khi-c-yu-kaiexo-cng-ngy-c-5c649ebb391d63.823550061550098107234.jpg"}className="profileF"/>
        
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
        <button className="btn btn-dark">Historial de Compras</button>
        <button className="btn btn-dark m-4">Comentarios </button>
        
        {user.store ? (<Compras rows={user.store}></Compras>) : (<h2>Espere mientras cargamos sus compras...</h2>)} 
        
        
        //Boton de espera en bootstrap ↑↑↑
        
        </div>
    </div>
    )
};

export default UserProfile;
