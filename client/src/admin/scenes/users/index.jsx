import { Box, Button, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useEffect } from "react";
import Sidebar from "../global/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { disableUser, getAllUsers } from "../../../redux/actions";
import BtnDisableUser from "./BtnDisableUser";
import { Navbar } from "react-bootstrap";
import NavBar from "../../../components/NavBar/NavBar";

const Users = () => {
    <NavBar/>
    const dispatch = useDispatch()

    const users = useSelector(state => state.users)

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])


    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name", headerName: "Name", width: 210
        },
        { field: "email", headerName: "Email" },
        { field: "telephone", headerName: "Telephone", type: "number" },
        { field: "isAdmin", headerName: "isAdmin", type: "boolean" },
        {
            field: "state", headerName: "State", width: 300, renderCell: (cellValues) => {
                return (
                    <BtnDisableUser
                        cellValues={cellValues}
                    />
                )
            }
        }
    ]

    return (
        <Box display="flex">
            <Sidebar />
            {console.log('usuarios: ', users)}
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
                <Header title="USERS" subtitle="Managing the Users" />
                <Box
                    m="40px 0 0 0"
                    height="75vh"
                >
                    < DataGrid
                        rows={users}
                        columns={columns}
                        components={{ Toolbar: GridToolbar }}
                    />
                </Box>
            </Box>
        </Box >

    );
};

export default Users;
