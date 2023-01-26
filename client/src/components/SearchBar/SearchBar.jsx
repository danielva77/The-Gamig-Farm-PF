import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName, setNameFilter } from '../../redux/actions'
import { Link } from "react-router-dom"
import './SearchBar.css'
import lupa from "../Assets/lupa.png"
import LOGO from "../Assets/LOGO.png"

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


    <>

<nav className="navbar bg-body-tertiary divSearch">
  <div className="container-fluid">
    <form class="d-flex" role="search">
  <input type="search" className="form-control me-2" placeholder="Buscar" aria-label="Search"  onChange={(e) => { handleInputChange(e) }}/>
      <button class="btn btn-outline-success botonBuscar" type="submit" onClick={(e) => { handleSubmit(e) }}>Search</button>
    </form>
  </div>
</nav>
    </>

  );
}
