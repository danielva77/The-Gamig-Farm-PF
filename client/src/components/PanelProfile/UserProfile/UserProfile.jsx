import React, { useEffect } from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link} from "react-router-dom"
import { getUser, cleanDetail } from "../../../actions";


const UserProfile = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.userID)

    useEffect(() => {
        dispatch(getUser(id))

        return () => dispatch(cleanDetail())
    },[dispatch, id])

//     const store = [{
//         id: '01',
//         date: '01-01-2023',
//         product: [ {title: 'pc'}],
//         total: '1000',
//         state: 'entregado',
//         pay: 'credito',
        
//     },
//     {
//         id: '22',
//         date: '09-01-2023',
//         product: [ {title: 'mouse'}],
//         total: '150',
//         state: 'pendiente',
//         pay: '',
        

//     }
// ];
const store = user.store;

const columns = [
    {
        field: 'id',
        headerName: 'Id',
    },
    {
        field: 'date',
        headerName: 'Fecha de compra',
    },
    {
        field: 'detail',
        headerName: 'Detalle',
    },
    {
        field: 'total',
        headerName: 'Total',
    },
    {
        field: 'pay',
        headerName: 'Medio de Pago',
    },
    {
        field: 'state',
        headerName: 'Estado de compra',
    },
]

const rows = store.map(s => {
    return {
        id: s.id,
        date: s.date,
        detail: s.detail,
        total: s.total,
        pay: s.pay,
        state: s.state,
    }
})

    return (
        <div>
            <h1>Hola {user.name}</h1>
          
            <h1>Tu perfil</h1>
            <img src={user.avatar} alt='img not found'/>
            <h3>Nombre: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <h3>Direccion: {user.adress}</h3>
            <h3>Fecha de nacimiento: {user.dateOfBirth}</h3>
            <h3>Telefono: {user.telephone}</h3>
            <br></br>
            <Link to={`$/editProfile/${id}`} ><button>Editar</button></Link>
            <br></br>
            <h1>Mis compras</h1>

            {/* <DataGrid
            rows={rows}
            columns={columns}
            /> */}
            <div 
            style={{ height: 375, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
        </div>
    )
};

export default UserProfile;