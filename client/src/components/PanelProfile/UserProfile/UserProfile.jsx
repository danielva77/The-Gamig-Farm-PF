import React, { useEffect } from "react";
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link} from "react-router-dom"
import { getUser, cleanDetail } from "../../../redux/actions";
import Compras from "./Compras";


const UserProfile = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userID)

    useEffect(() => {
        dispatch(getUser(id))

        return () => dispatch(cleanDetail())
    },[dispatch, id])

    return (
        <div>
            {console.log(user.store)}
            <h1>Hola {user.name}</h1>
            {/* <button className="loginSpan" onClick={() => loginWithRedirect()}>INICIAR SESION</button> */}
            <h1>Tu perfil</h1>
            <img src={user.avatar} alt='img not found'/>
            <h3>Nombre: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Direccion: {user.adress}</h3>
            <h3>Fecha de nacimiento: {user.dateOfBirth}</h3>
            <h3>Telefono: {user.telephone}</h3>
            <br></br>
            <Link to={`/editProfile/${id}`} ><button>Editar</button></Link>
            <br></br>
            <h1>Mis compras</h1>
            {user.store ? (<Compras rows={user.store}></Compras>) : (<h2>Espere mientras cargamos sus compras...</h2>)}
        
        </div>
    )
};

export default UserProfile;