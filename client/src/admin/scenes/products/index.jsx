import { Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "../global/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProd } from "../../../redux/actions";

const Products = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.items)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleDisable = (e, cellValues) => {
    console.log(e.target.textContent)
    if (e.target.textContent === "Desactivar") {
      e.target.textContent = "Activar"
      // --> poner acá la action para activar producto
    } else {
      e.target.textContent = "Desactivar"
      // --> poner acá la action para desactivar producto

      // en la variable cellValues.row accedo a todas las propiedades del producto
      // console.log('-------------------', cellValues.row)
    }
  }

  useEffect(() => {
    if (!products.length[0]) dispatch(getAllProd())
  }, [])

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title", headerName: "Title", width: 400
    },
    { field: "price", headerName: "Price", renderCell: (params) => '$' + params.row.price, },
    { field: "stock", headerName: "Stock", type: "number" },
    {
      field: "state", headerName: "State", renderCell: (cellValues) => {
        return cellValues.row.state === 'INACTIVO'
          ?
          <Button
            variant="contained"
            color="error"
            onClick={handleDisable}>
            Activar
          </Button>
          :
          <Button
            variant="contained"
            color="success"
            onClick={handleDisable}>
            Desactivar
          </Button>
      }
    }
  ]

  return (
    <Box display="flex">
      <Sidebar />
      <Box m="20px"
        width="80%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}>
        <Header title="PRODUCTS" subtitle="Managing the Products" />
        <Box
          m="40px 0 0 0"
          height="75vh"
        >
          < DataGrid
            rows={products}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        </Box>
      </Box>
    </Box >

  );
};

export default Products;
