import React from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Compras = ({ rows }) => {

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
    return (
        <div>
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
}

export default Compras;