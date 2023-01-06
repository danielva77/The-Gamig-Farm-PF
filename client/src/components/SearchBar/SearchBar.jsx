import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from '../../redux/actions'
import { Link } from "react-router-dom"
import './SearchBar.css'
import lupa from "../Assets/icone-loupe-gris.png"

export default function SearchBar(){
  const dispatch = useDispatch(); //hoks
  const [name, setName] = useState(" "); //estado local

  function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  function handleSubmit(e){
    e.preventDefault();
    dispatch(searchByName(name));
    setName("");
  }; 

    return (
      <div className="Background">
      <div className="searchbar-div">
      
      <div className='Nombrelogo'>
        <Link to="/">
        <h1>The Gaming Farm</h1>
        </Link>
        </div>
        <input
          className="bar-btn"
          type="text"
          name="buscar" 
          placeholder="Search" color='white' 
          onChange={handleInputChange} 
          // value={input.buscar} 
          autoComplete="off" 
        ></input>
        
        </div>
      </div>
    );
}