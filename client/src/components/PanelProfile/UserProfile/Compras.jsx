import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import "./userProfile.css"


const Compras = ({ rows }) => {

    const columns = [
        {
            field: 'title',
            headerName: 'Producto',
        },
        {
            field: 'quantity',
            headerName: 'Cantidad',
        },
        {
            field: 'price',
            headerName: 'Precio c/u',
        },
        {
            field: 'payment',
            headerName: 'Operacion MP',
        },
        {
            field: 'createdAt',
            headerName: 'Fecha de compra',
        }
    ]
    return (
        <div>
             <div 
            className="tablaMaterial" > 
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
        </div>
    )
}

export default Compras;