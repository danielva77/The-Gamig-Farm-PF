import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    let response = await axios.get('https://the-gamig-farm-pf-production-5fa7.up.railway.app/products')
    setProducts(response.data)
  }

  const [isDisabled, setIsDisabled] = useState(false)

  const handleDisable = (e) => {
    console.log(e.target.textContent)
    if (e.target.textContent === "Disable") {
      e.target.textContent = "Enable"
      setIsDisabled((prevState) => true)
    } else {
      e.target.textContent = "Disable"
      setIsDisabled((prevState) => false)
    }
  }

  useEffect(() => {
    if (!products[0]) fetchProducts()
  }, [])

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "title", headerName: "Title", width: 400
    },
    { field: "price", headerName: "Price", renderCell: (params) => '$' + params.row.price, },
    { field: "stock", headerName: "Stock", type: "number" },
    {
      field: "disable", headerName: "Available", renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color={isDisabled ? "success" : "error"}
            onClick={(e) => {
              handleDisable(e, cellValues)
            }}
          >
            {isDisabled ? "Enable" : "Disable"}
          </Button>
        )
      }
    }
  ]

  // const columns = [
  //   { field: "id", headerName: "ID" },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "age",
  //     headerName: "Age",
  //     type: "number",
  //     headerAlign: "left",
  //     align: "left",
  //   },
  //   {
  //     field: "phone",
  //     headerName: "Phone Number",
  //     flex: 1,
  //   },
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     flex: 1,
  //   },
  //   {
  //     field: "accessLevel",
  //     headerName: "Access Level",
  //     flex: 1,
  //     renderCell: ({ row: { access } }) => {
  //       return (
  //         <Box
  //           width="60%"
  //           m="0 auto"
  //           p="5px"
  //           display="flex"
  //           justifyContent="center"
  //           backgroundColor={
  //             access === "admin"
  //               ? colors.greenAccent[600]
  //               : access === "manager"
  //                 ? colors.greenAccent[700]
  //                 : colors.greenAccent[700]
  //           }
  //           borderRadius="4px"
  //         >
  //           {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
  //           {access === "manager" && <SecurityOutlinedIcon />}
  //           {access === "user" && <LockOpenOutlinedIcon />}
  //           <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
  //             {access}
  //           </Typography>
  //         </Box>
  //       );
  //     },
  //   },
  // ];

  return (
    <Box m="20px">
      <Header title="USERS" subtitle="Managing the Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
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
        }}
      >
        <DataGrid checkboxSelection rows={products} columns={columns} />
      </Box>
    </Box>
  );
};

export default Products;
