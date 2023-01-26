import { Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Sidebar from "../global/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { disabledProducts, getAllProd } from "../../../redux/actions";

const Products = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.items)

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const handleDisable = () => {
  //   disabledProducts(cellValues.row.id)
  //   // window.location.reload
  // }


  // $(function(){
  //    $("#btnCambiar").click(function () {
  //       /*
  //          Aquí cambia el elemento, lo dejo comentado para que no falle el snippet
  //          quita las barras // en tu contexto y debería funcionar
  //       */
  //       //$('#data-table-default tr.solucionada').toggle();
  //       $(this).text(function(i, text){
  //           return text === "MOSTRAR" ? "OCULTAR" : "MOSTRAR";
  //       })
  //    });
  // })

  useEffect(() => {
    dispatch(getAllProd())
  }, [products])

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title", headerName: "Title", width: 400
    },
    { field: "price", headerName: "Price", width: 50, renderCell: (params) => '$' + params.row.price, },
    { field: "stock", headerName: "Stock", width: 50, type: "number" },
    {
      field: "state", headerName: "State", renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color={cellValues.row.isActive ? "success" : "error"}
            onClick={() => dispatch(disabledProducts(cellValues.row.id))}>
            {cellValues.row.isActive ? "Activado" : "Desactivado"}
          </Button>
        )
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
