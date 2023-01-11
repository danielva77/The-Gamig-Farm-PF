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
    <div className="search-bar-container">
      {/* <Link to="/"
       className='Nombrelogo'>


        <img src={LOGO} title="Logo Gaming"/>


        </Link> */}
      {/* </div>   */}
      <input
        className="search-bar-input"
        type="text"
        name="buscar"
        placeholder="Search ..."
        onChange={(e) => { handleInputChange(e) }}
        // value={input.buscar} 
        autoComplete="off"
      ></input>
      <img className="lupaa" src={lupa} alt="lupa" onClick={(e) => { handleSubmit(e) }} />
      {/* </div> */}
    </div>

  );
}