import { Box } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName, setNameFilter } from '../../redux/actions'
import './SearchBar.css'

export default function SearchBar() {
  const dispatch = useDispatch(); //hoks
  const [name, setName] = useState(" "); //estado local

  function handleInputChange(e) {
    e.preventDefault();
    dispatch(setNameFilter(e.target.value))
  };


  // ESTA FUNCION VA O NO?
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchByName(name));
    setName("");
  };

  return (
    <form role="search">

      <Box display="d-flex" columnGap="3px">
        <input
          type="search"
          className="form-control"
          placeholder="Buscar"
          aria-label="Search"
          onChange={(e) => { handleInputChange(e) }}
        />
        <button
          className="btn botonBuscar"
          type="submit"
          onClick={(e) => { handleSubmit(e) }}
        >
          <GridSearchIcon fontSize="large" onClick={(e) => { handleSubmit(e) }} />
        </button>
      </Box>
    </form>
  );
}
